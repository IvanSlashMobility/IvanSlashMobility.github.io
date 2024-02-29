import React, { useState } from "react";

import './Home.scss';
import MainSelect from "../../components/select/MainSelect";
import MainButton from "../../components/button/MainButton";
import { TERTIARY_BUTTON } from '../../config/constants';
import BubbleChart from "../../components/bubbleChart/BubbleChart";
import { HiChip } from 'react-icons/hi';
import { IoIosNutrition, IoMdRibbon } from 'react-icons/io';
import { TbRefresh } from 'react-icons/tb';
import { BiGitRepoForked, BiCheckShield } from 'react-icons/bi';
import { BsCheck } from 'react-icons/bs';
import { RiPlantFill, RiFolderUserLine, RiHeartLine } from 'react-icons/ri';
import MainModal from '../../components/modal/MainModal';
import { Trans, useTranslation } from "react-i18next";
import { exportAsImage } from "../../utils/chartDownloader";
import Skeleton from 'react-loading-skeleton';
import DataService from "../../services/dataService";
import MainDatepicker from "../../components/datepicker/MainDatepicker";
import { getDateString } from "../../utils/formatters";
import { CgChevronDoubleRight } from "react-icons/cg";
import { TbCalendarCheck } from "react-icons/tb";
import Card from "../../components/card/Card";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import checkCircle from './../../assets/icons/checkCircle.svg'
import InterpretMap from "../../components/interpretMap/InterpretMap";
import SelectDropDown from './../../components/selectDropableNative/SelectDropDown'



const Home = () => {
  const { t } = useTranslation();
  const { getAllMacroscenarios, getChartData, getAllStartups } = DataService();

  const { width, height } = useWindowDimensions()
  const videoRef = React.useRef(null);


  const [isLoading, setIsLoading] = React.useState(true);
  const [showMapInterpret, setShowMapInterpret] = React.useState(false)
  const fromDate = new Date();
  fromDate.setMonth(fromDate.getMonth() - 7);
  const [dates, setDates] = React.useState({
    fromDate: fromDate,
    untilDate: new Date()
  });
  const [macros, setMacros] = React.useState([]);

  const [startups, setStartups] = useState()




  const [dataset, setDataset] = React.useState([]);
  const [modalData, setModalData] = React.useState({
    visible: false,
  });



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

  React.useEffect(() => {

    console.log('se mete aqui el tema  ??????')
    if (dates.fromDate && dates.untilDate) getFilteredChartData();
  }, [dates, macros]);

  const getBubbleIcon = (id) => {
    switch (id) {
      case 4: return <IoIosNutrition color="var(--medium-dark-gray)" size={'70%'} />;
      case 5: return <RiPlantFill color="var(--medium-dark-gray)" size={'58%'} />;
      case 6: return <IoMdRibbon color="var(--medium-dark-gray)" size={'70%'} />;
      case 7: return <BiGitRepoForked color="var(--medium-dark-gray)" size={'65%'} />;
      case 8: return <RiHeartLine color="var(--medium-dark-gray)" size={'63%'} />;
      case 9: return <RiFolderUserLine color="var(--medium-dark-gray)" size={'58%'} />;
      case 10: return <BiCheckShield color="var(--medium-dark-gray)" size={'60%'} />;
      case 11: return (
        <div className="container container-justifyCenter container-alignCenter">
          <TbRefresh color="var(--medium-dark-gray)" size={'84%'} />
          <BsCheck color="var(--medium-dark-gray)" size={'25%'} style={{ position: 'absolute', top: '38%', left: '37%', }} />
        </div>
      );
      case 12: return <HiChip color="var(--medium-dark-gray)" size={'60%'} />;
      default: return;
    }
  }

  const getData = async () => {
    const p1 = getAllMacroscenarios().then((res) => {
      let data = [{
        label: t('CHART.ALL_MACROS'),
        value: -1,
        isChecked: true
      }, {
        label: t('CHART.ALL_ESCENARIOS'),
        value: -2,
        isChecked: false
      }];
      res.macroscenarios.forEach(macro => {
        data.push({
          label: macro.name,
          value: macro.id,
          isChecked: false,
          scenarios: macro.escenariosList.escenarioDetails.map(scenario => ({
            label: scenario.name,
            value: scenario.id,
            parentMacro: macro.id,
            isChecked: false
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
        icon: getBubbleIcon(data.id),
        label: data.name,
        dataset: Object.values(data.halo)
      })))
    }).catch((err) => {
      //TODO: control error
    })

    const p3 = getAllStartups().then((res) => setStartups(res.startupsDTO)).catch((err) => {
      //TODO: control error
    })


    Promise.all([p1, p2, p3]).finally(() => {
      setIsLoading(false);
    })
  }


  React.useEffect(() => {
    getData();
  }, []);

  const getFilteredChartData = () => {
    setIsLoading(true);
    let filters = {
      fromDate: dates.fromDate.toISOString().split('T')[0],
      untilDate: dates.untilDate.toISOString().split('T')[0],
      macroscenario: macros.filter((macr) => macr.isChecked && macr.value !== -1).map((macr) => macr.value),
      scenarios: macros.find(m => m.isChecked && m.value !== -1)?.scenarios?.filter(sc => sc.isChecked)?.map(sc => sc.value),
      moment: moments.find(m => m.isChecked && m.value !== -1)?.value,
      quota: quotas.find(q => q.isChecked && q.value !== -1)?.value,
    }




    getChartData(filters).then((res) => {


      setDataset(res.units.map(data => ({
        ...data,
        x: data.phaseMedia,
        y: data.voiceQuota * 100,
        icon: getBubbleIcon(data.id),
        label: data.name,
        dataset: Object.values(data.halo),
      })))
    }).catch((err) => {
      //TODO: control error
    }).finally(() => {
      setIsLoading(false);
    })
  }

  const onBubblePress = (data) => {
    setModalData({ visible: true, data });
  }

  const getScenariosOptions = () => {
    let opts = [];
    const selectedMacro = macros.find(macro => macro.isChecked);
    if (selectedMacro) {
      if (selectedMacro.value === -1) {
        macros.forEach(macro => {
          if (macro.scenarios) opts = opts.concat(macro.scenarios);
        });
      } else {
        return selectedMacro.scenarios;
      }
    }
    return opts;
  }

  // console.log(macros, 'esto es lo que hay en macrossss')

  const onToggleMacro = (selectedMacro) => {

    // console.log(selectedMacro, 'esto se le apsaaaaaa cuando se seleacciona algo ???????')
    // console.log(macros, ' esto son los macros dfssfasdas')

    // console.log(macros, 'los macroooooos')

    macros.forEach(macro => {
      if (macro.value === selectedMacro.value) {
        macro.isChecked = true
        // if (macro.isChecked == true) {

        //   // macro.scenarios.forEach((esc) => ({ ...esc, isChecked: true }))



        //   // macro.scenarios = selectedMacro.scenarios


        // }

        macro.scenarios = selectedMacro.scenarios

      }
      else macro.isChecked = false;



      // if (macro.scenarios) macro.scenarios.forEach(scenario => {
      //   scenario.isChecked = false;
      // });
    });

    // //aqui poner la logica de escenarios 

    // const macrosMpa = selectedMacro.scenarios.map((esce) => esce.parentMacro).find((ma))





    // let scenario = macro.scenarios.find(sc => sc.value === selectedScenario.value);
    // scenario.isChecked = !scenario.isChecked;

    // console.log(macro, scenario)
    setMacros([...macros]);
  }

  const onToggleScenario = (selectedScenario) => {

    let macro = macros.find(mcr => mcr.value === selectedScenario.parentMacro);

    let scenario = macro.scenarios.find(sc => sc.value === selectedScenario.value);
    scenario.isChecked = !scenario.isChecked;
    setMacros([...macros]);
  }

  const onToggleMoment = (selectedMoment) => {
    moments.forEach(moment => {
      if (moment.value === selectedMoment.value) moment.isChecked = true;
      else moment.isChecked = false;
    });
    setMoments([...moments]);
  }

  const onToggleQuota = (selectedQuota) => {
    quotas.forEach(quota => {
      if (quota.value === selectedQuota.value) quota.isChecked = true;
      else quota.isChecked = false;
    });
    setQuotas([...quotas]);
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

  const getMomentText = (moment) => {
    if (!moment) return;
    const phase = moments.find(m => m.value === Math.round(moment));
    return (
      <p>
        {t('CHART.PHASE')}: <span style={{ color: phase.color, fontWeight: 'bold' }}>{phase.label}</span>
      </p>
    )
  }

  const getTotalAnalyzedInfo = () => {
    let total = 0;
    dataset.forEach(data => {
      total += data.numberOfNotices;
    })
    return total;
  }

  return (
    <div className="container home-content">
      <div className="rowContainer rowContainer-alignCenter rowContainer-justifyCenter home-newReport">
        <CgChevronDoubleRight style={{ position: 'absolute', left: -20, top: -70 }} size={200} color='var(--primary-light)' />
        <CgChevronDoubleRight style={{ position: 'absolute', left: 75, top: -70 }} size={200} color='var(--primary-light)' />
        <div className="home-newReport-text">{t('HOME.NEW_2023_ANUAL_REPORT')}</div>
      </div>

      <div className="container container-alignCenter home-intro">
        <h1>{t('HOME.INTRO_TITLE')}</h1>
        <h3>{t('HOME.INTRO_SUBTITLE')}</h3>
        <p>{t('HOME.INTRO_TEXT')}</p>
        <div className="rowContainer" style={{ gap: 25, marginTop: 20 }}>
          <div className="home-intro-card">
            <h2>{t('HOME.FILTER_TITLE')}</h2>
            <span>{t('HOME.FILTER_TEXT')}</span>
            <img src={require('../../assets/img/filter_mock.png')} />
          </div>
          <div className="home-intro-card">
            <h2>{t('HOME.ENTER_TITLE')}</h2>
            <span>{t('HOME.ENTER_TEXT')}</span>
            <img src={require('../../assets/img/enter_mock.png')} />
          </div>
          <div className="home-intro-card">
            <h2>{t('HOME.COMPARE_TITLE')}</h2>
            <span>{t('HOME.COMPARE_TEXT')}</span>
            <img src={require('../../assets/img/compare_mock.png')} />
          </div>
        </div>
      </div>

      <div className="rowContainer rowContainer-alignCenter home-filters home-filters-shadow">
        <div


          style={{ position: 'relative' }} className="rowContainer rowContainer-alignCenter home-filters flex-1 width-100">
          <MainDatepicker
            className="home-filters-select"
            placeholder={t('CHART.DATE_RANGE')}
            startDate={dates.fromDate}
            endDate={dates.untilDate}
            maxDate={new Date()}
            onChange={(fromDate, untilDate) => setDates((prevState) => ({ ...prevState, fromDate, untilDate }))} />
          {/* <MainSelect
            className="home-filters-select"
            disabled={isLoading}
            placeholder={t('CHART.MACROSCENARIOS')}
            options={macros}
            onChange={onToggleMacro} /> */}
          <div style={{ position: 'absolute', top: 10, left: 200, zIndex: 100 }}>
            < SelectDropDown
              disabled={isLoading}
              options={macros}
              setMacros={setMacros}
            />

          </div>
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
        <MainButton
          className="home-filters-button"
          disabled={isLoading}
          type={TERTIARY_BUTTON}
          onClick={onResetFilters}>
          {t('FILTERS.ERASE')}
        </MainButton>
      </div>
      <div className="container home-section">
        <div className="rowContainer rowContainer-alignCenter" style={{ gap: 8, display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className="iconButton" style={{ backgroundColor: '#1E1E1E', borderRadius: '100%', marginRight: 5 }}>
              <TbCalendarCheck size={22} color="var(--primary-light)" />
            </div>
            <div style={{ fontWeight: 'bold' }}>{getDateString(dates.fromDate, false)}</div>
            <div style={{ fontWeight: 'bold' }}>-</div>
            <div style={{ fontWeight: 'bold' }}>{getDateString(dates.untilDate, false)}</div>
          </div>
          <div>

            <MainButton type={'primary'} onClick={() => setShowMapInterpret(true)}>
              <span style={{ color: 'black', fontSize: '14px' }}>
                Como interpretar el mapa
              </span>
            </MainButton>
          </div>

        </div>
        <h1 className="home-section-title">
          {macros.find(macro => macro.isChecked && macro.value !== -1) ?
            macros.find(macro => macro.isChecked && macro.value !== -1).label.toUpperCase() :
            t('HOME.MACROS').toUpperCase()
          }
        </h1>
        {isLoading ?
          <Skeleton width={250} /> :
          <div style={{ color: 'var(--text-tertiary)' }}>
            {t('HOME.TOTAL_ANALYZED_INFO')}: {getTotalAnalyzedInfo()}
          </div>
        }
      </div>
      <div className="container container-alignCenter">
        <div className="width-100 home-chart" id="bubbleChart">
          {isLoading ?
            <Skeleton height={500} /> :
            <>
              {dataset.length > 0 ?
                <BubbleChart
                  dataset={dataset.sort((a, b) => a.x - b.x)}
                  onBubblePress={onBubblePress} /> :
                <div className="rowContainer rowContainer-justifyCenter">
                  {t('CHART.NO_RESULTS')}
                </div>
              }
            </>
          }
          {!isLoading && dataset?.length > 0 &&
            <div

              className="rowContainer"

            >
              {width > 768 && <div className="flex-1" />}
              <MainButton
                type={TERTIARY_BUTTON}
                className={width > 768 && `home-rightMargin`}
                onClick={() => exportAsImage(document.getElementById('bubbleChart'))}>
                {t('BUTTONS.DOWNLOAD_MAP')}
              </MainButton>
            </div>
          }
        </div>
      </div>
      <div className="home-other-grafic  rowContainer ">
        <div className="container-other-grafic ">
          <h1>¿Te interesa ver el mismo en otro período de tiempo</h1>
          <span>Selecciona el rango de fechas con el que quieres compararlo?</span>

          <div className="selector-dates container container-alignStart ">
            <span>
              <MainDatepicker
                className="home-filters-select"
                placeholder={'Seleccionar periodo de tiempo'}
                startDate={dates.fromDate}
                endDate={dates.untilDate}
                maxDate={new Date()}
                onChange={(fromDate, untilDate) => setDates((prevState) => ({ ...prevState, fromDate, untilDate }))} />
            </span>

          </div>

          <button className="selector-dates-button">
            Quiero verlo
          </button>
        </div>





      </div>

      <div className="rowContainer home-split">
        <div className="home-split-gradient">
          <img src={require('../../assets/img/sample_bubble_1.png')} width={200} style={{ position: 'absolute', right: -60, top: 100 }} />
          <img src={require('../../assets/img/sample_bubble_4.png')} width={110} style={{ position: 'absolute', right: '26%', top: 120 }} />
          <img src={require('../../assets/img/sample_bubble_3.png')} width={70} style={{ position: 'absolute', right: '45%', bottom: 80 }} />
          <img src={require('../../assets/img/sample_bubble_2.png')} width={110} style={{ position: 'absolute', right: '60%', bottom: 150 }} />
          <img src={require('../../assets/img/sample_bubble_5.png')} width={70} style={{ position: 'absolute', right: '82%', top: 100 }} />
        </div>
        <div className="container container-justifyCenter container-alignStart home-split-content">
          <h1>{t('HOME.ANALYSIS_TITLE')}</h1>
          <p style={{ color: 'var(--text-tertiary)', marginBottom: 25, marginTop: 0 }}>{t('HOME.ANALYSIS_TEXT')}</p>
          <MainButton type={TERTIARY_BUTTON} className="width-auto">
            {t('HOME.SEE_ANALYSIS')}
          </MainButton>
        </div>
      </div>

      <div className="home-alerts container container-justifyCenter container-alignStart">
        <h1 style={{ margin: 0 }}>{t('HOME.ALERTS_TITLE')}</h1>
        <p style={{ marginBottom: 20, marginTop: 15 }}>{t('HOME.ALERTS_TEXT')}</p>
        <MainButton type={TERTIARY_BUTTON} className="width-auto">
          {t('HOME.GET_ALERTS')}
        </MainButton>

      </div>

      <div className="home-featured">
        <div className="featured-header" >
          <h1> {t('HOME.FEATURED_TITLE')}</h1>
          {width > 768 && <MainButton type={TERTIARY_BUTTON} className="width-auto">
            {t('BUTTONS.SEE_MORE')}
          </MainButton>}
        </div>
        <div className="featured-cards">
          <Card type={'featured'} />
          <Card type={'featured'} />
          <Card type={'featured'} />
          <Card type={'featured'} />
          <Card type={'featured'} />
          <Card type={'featured'} />
          <Card type={'featured'} />
          <Card type={'featured'} />

        </div>
      </div>

      <div className="home-startups">
        <div className="startups-header" >
          <div className="startups-header-info">
            <h1> {t('HOME.STARTUPS_TITLE')}</h1>
            {width > 768 && <MainButton type={TERTIARY_BUTTON} className="width-auto">
              {t('HOME.SEE_MORE')}
            </MainButton>}
          </div>
          <span>Conoce las startups protagonistas de la actualidad</span>
        </div>
        <div className="startup-cards">

          {startups && startups.map((startup) =>

            <Card key={startup.id} type={'startup'} startupInfo={startup}  />
          )}
          {/* <Card type={'startup'} voiceQuota={1} />
          <Card type={'startup'} voiceQuota={4} />
          <Card type={'startup'} voiceQuota={1} />
          <Card type={'startup'} voiceQuota={4} />
          <Card type={'startup'} voiceQuota={1} />
          <Card type={'startup'} voiceQuota={4} />
          <Card type={'startup'} voiceQuota={1} />
          <Card type={'startup'} voiceQuota={4} /> */}

        </div>
      </div>

      <div className="home-reports container container-justifyCenter container-alignStart">
        <h1 style={{ margin: 0 }}>{t('HOME.REPORTS_TITLE')}</h1>
        <p style={{ marginBottom: 20, marginTop: 15 }}>{t('HOME.REPORTS_TEXT')}</p>
        <MainButton type={TERTIARY_BUTTON} className="width-auto">
          {t('HOME.GO_TO_REPORTS')}
        </MainButton>
      </div>

      <div className="home-video">
        <div className="home-video-see">

          <iframe width="580" height="300" src="https://www.youtube.com/embed/0x1VJo9xMVk?modestbranding=1" allowFullScreen></iframe>

        </div>
        <div className="home-video-info">
          <div className="home-video-info-content">
            <h1>
              La información que necesitas, personalizada para ti.
            </h1>
            <div className="home-video-info-content-grid" >
              <span> <img src={checkCircle} alt="" /> Información filtrada</span>
              <span> <img src={checkCircle} alt="" />Suscribete a los informes </span>
              <span> <img src={checkCircle} alt="" />Genera tus alertas </span>
              <span> <img src={checkCircle} alt="" />Material clasificado</span>
            </div>
            <MainButton type={TERTIARY_BUTTON} className="width-auto">
              Saber mas

            </MainButton>
          </div>
        </div>
      </div>

      <MainModal
        isOpen={modalData.visible}
        onClose={() => setModalData({ visible: false, data: null })} />


      {showMapInterpret &&

        <InterpretMap showMapInterpret={setShowMapInterpret} />




      }


    </div >
  );
};

export default Home; 