import React from 'react'
import { Trans, useTranslation } from "react-i18next";
import MainDatepicker from '../datepicker/MainDatepicker';
import MainSelect from '../select/MainSelect';
import MainButton from '../button/MainButton';
import { TERTIARY_BUTTON } from '../../config/constants';
import DataService from '../../services/dataService';






const FiltersAndDatePiker = () => {

  const { t } = useTranslation();

  const { getAllMacroscenarios, getChartData } = DataService();
  const fromDate = new Date();
  const [dataset, setDataset] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [macros, setMacros] = React.useState([]);

  const [moments, setMoments] = React.useState([
    { label: t('CHART.ALL'), value: -1, isChecked: true },
    { label: t('CHART.START'), value: 1, color: 'rgba(230,255,3,1)' },
    { label: t('CHART.EXPECTATION'), value: 2, color: 'rgba(153,255,50,1)' },
    { label: t('CHART.CHALLENGES'), value: 3, color: 'rgba(82,176,59,1)' },
    { label: t('CHART.INTRODUCTION'), value: 4, color: 'rgba(13,129,53,1)' },
    { label: t('CHART.GROWTH'), value: 5, color: 'rgba(169,169,169,1)' },
    { label: t('CHART.MASS_MARKET'), value: 6, color: 'rgba(42,42,42,1)' },
  ]);

  const [quotas, setQuotas] = React.useState([
    { label: t('CHART.ALL'), value: -1, isChecked: true },
    { label: '+10%', value: 10 },
    { label: '+20%', value: 20 },
    { label: '+30%', value: 30 },
    { label: '+40%', value: 40 },
    { label: '+50%', value: 50 },
  ]);

  const [dates, setDates] = React.useState({
    fromDate: fromDate,
    untilDate: new Date()
  });


  const getData = async () => {
    const p1 = getAllMacroscenarios().then((res) => {
      let data = [{
        label: t('CHART.ALL'),
        value: -1,
        isChecked: true
      }];
      res.macroscenarios.forEach(macro => {
        data.push({
          label: macro.name,
          value: macro.id,
          scenarios: macro.escenariosList.escenarioDetails.map(scenario => ({
            label: scenario.name,
            value: scenario.id,
            parentMacro: macro.id
          }))
        });
      });
      setMacros(data);
    }).catch((err) => {
      //TODO: control error
    })

    const p2 = getChartData({
      fromDate: dates.fromDate.toISOString().split('T')[0],
      untilDate: dates.untilDate.toISOString().split('T')[0]
    }).then((res) => {
      setDataset(res.units.map(data => ({
        ...data,
        x: data.phaseMedia,
        y: data.voiceQuota * 100,
        // icon: getBubbleIcon(data.id),
        label: data.name,
        dataset: Object.values(data.halo)
      })))
    }).catch((err) => {
      //TODO: control error
    })

    Promise.all([p1, p2]).finally(() => {
      setIsLoading(false);
    })
  }

  React.useEffect(() => {
    getData();
  }, []);

  const onToggleMacro = (selectedMacro) => {

    macros.forEach(macro => {
      if (macro.value === selectedMacro.value) macro.isChecked = true;
      else macro.isChecked = false;
      if (macro.scenarios) macro.scenarios.forEach(scenario => {
        scenario.isChecked = false;
      });
    });
    setMacros([...macros]);
  }

  const onResetFilters = () => {
    macros.forEach(macro => {
      if (macro.value === -1) macro.isChecked = true;
      else macro.isChecked = false;
      if (macro.scenarios) {
        macro.scenarios.forEach(scenario => {
          scenario.isChecked = false;
        })
      }
    })
    moments.forEach(moment => {
      if (moment.value === -1) moment.isChecked = true;
      else moment.isChecked = false;
    })
    quotas.forEach(quota => {
      if (quota.value === -1) quota.isChecked = true;
      else quota.isChecked = false;
    })
    setMacros([...macros]);
    setMoments([...moments]);
    setQuotas([...quotas]);
  }



  console.log(macros, 'macros asdascxczxcxzczxdas')


  return (

    <div className="rowContainer rowContainer-alignCenter home-filters home-filters-shadow">
      <div className="rowContainer rowContainer-alignCenter home-filters flex-1 width-100">
        <MainDatepicker
          className="home-filters-select"
          placeholder={t('CHART.DATE_RANGE')}
          startDate={dates.fromDate}
          endDate={dates.untilDate}
          maxDate={new Date()}
          onChange={(fromDate, untilDate) => setDates((prevState) => ({ ...prevState, fromDate, untilDate }))} />
        <MainSelect
          className="home-filters-select"
          disabled={isLoading}
          placeholder={t('CHART.MACROSCENARIOS')}
          options={macros}
          onChange={onToggleMacro} />
        {/* <MainSelect
          className="home-filters-select"
          disabledText={t('CHART.DISABLED_SCENARIO_SELECTOR')}
          disabled={isLoading || !macros.find(m => m.value !== -1 && m.isChecked)}
          placeholder={t('CHART.SCENARIOS')}
          options={getScenariosOptions()}
          onChange={onToggleScenario} /> */}
      </div>
      {/*
          <MainSelect 
          disabled={isLoading}
          placeholder={t('CHART.MOMENTS')}
          options={moments}
          onChange={onToggleMoment}/>
          <MainSelect 
          disabled={isLoading}
          placeholder={t('CHART.QUOTA')}
          options={quotas}
          onChange={onToggleQuota}/>
          <MainButton 
          className="home-filters-button"
          disabled={isLoading}
          type={TERTIARY_BUTTON} 
          onClick={getFilteredChartData}>
            {t('FILTERS.FILTER')}
          </MainButton>
        */}
      {/* <MainButton
        className="home-filters-button"
        disabled={isLoading}
        type={TERTIARY_BUTTON}
        onClick={onResetFilters}>
        {t('FILTERS.ERASE')}
      </MainButton> */}
    </div>
  )
}

export default FiltersAndDatePiker