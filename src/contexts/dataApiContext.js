import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { HiChip } from 'react-icons/hi';
import { IoIosNutrition, IoMdRibbon } from 'react-icons/io';
import { TbRefresh } from 'react-icons/tb';
import { BiGitRepoForked, BiCheckShield } from 'react-icons/bi';
import { BsCheck } from 'react-icons/bs';
import { RiPlantFill, RiFolderUserLine, RiHeartLine } from 'react-icons/ri';

import DataService from '../services/dataService';
const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const { getAllMacroscenarios, getChartData, getAllStartups } = DataService();
    const { t } = useTranslation();





    const [macros, setMacros] = useState([]);
    const [dataset, setDataset] = useState([]);
    const [startups, setStartups] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const fromDate = new Date();
    fromDate.setMonth(fromDate.getMonth() - 7);
    const [dates, setDates] = React.useState({
        fromDate: fromDate,
        untilDate: new Date()
    });

    console.log(dates , ' se ponen las fechas ')


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



    console.log(startups , 'hay algsddaddao aqui ??')

    useEffect(() => {

        const getData = async () => {
            try {
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
            });

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
            });

                const p3 = getAllStartups().then((res) => setStartups(res.startupsDTO));

                await Promise.all([ p1,p2,p3]);
            } catch (error) {
                // Manejar errores
                console.error('Error al obtener datos:', error);
            } finally {
                setIsLoading(false);
            }
        };

        getData();
    }, []);

    const value = { macros, dataset, startups, isLoading, setDates, dates };

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
