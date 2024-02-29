import React, { useEffect, useState } from 'react';
import './selectDropDown.scss';
import { MdOutlineArrowDropDown } from "react-icons/md";
import { motion } from 'framer-motion';
import { FiCheck } from "react-icons/fi";



const SelectDropDown = (props) => {



    const [macros, setMacros] = useState(props.options)
    const [dropDown, setDropDown] = useState(false)

    useEffect(() => {
        setMacros(props.options)
    }, [props.options])


    console.log(macros ,' cambia el estsdo oque ????')

    const onToggleMacros = (macroValue) => {


        console.log(macroValue)


        if (macros) {

            if (macroValue == -1) {
                const updatedMacros = macros.map((macro) => {


                    if (macro.value === -2) {
                        return { ...macro, isChecked: false };
                    } else {
                        return { ...macro, isChecked: !macro.isChecked };
                    }

                })

                setMacros(updatedMacros)

                return; 

            } else if (macroValue == -2) {


                const updatedMacros = macros.map((macro) => {

                
                    if (macro.value === -1) {
                        return { ...macro, isChecked: false };
                    } else {

                        const updatedEscenarios = macro.scenarios &&  macro.scenarios.map((scena) => {
                            return { ...scena, isChecked: !scena.isChecked };
                        });

                        return { ...macro, isChecked: false, scenarios: updatedEscenarios };
                    }

                })

                setMacros(updatedMacros)

                return; 


            }


            const updatedMacros = macros.map((macro) => {

                if (macroValue === macro.value) {

                    if (macro.isChecked == false) {
                        if (macro.scenarios) {
                            const updatedEscenarios = macro.scenarios.map((scena) => {
                                return { ...scena, isChecked: true };
                            });
                            return { ...macro, isChecked: true, scenarios: updatedEscenarios };

                        } else {
                            return { ...macro, isChecked: true };

                        }

                    } else {

                        if (macro.scenarios) {
                            const updatedEscenarios = macro.scenarios.map((scena) => {
                                return { ...scena, isChecked: false };
                            });
                            return { ...macro, isChecked: false, scenarios: updatedEscenarios };
                        } else {
                            return { ...macro, isChecked: false };

                        }

                    }
                } 
                return macro;
            });
            setMacros(updatedMacros)
        }
    }

    const onToggleEscenarios = (escenario, macroValue) => {


   
        if (macros) {
            const updatedMacros = macros.map((mac) => {
                if (macroValue === mac.value) {
                    const updatedScenarios = mac.scenarios && mac.scenarios.map((scena) => {
                        if (escenario.value === scena.value) {
                            return { ...scena, isChecked: !scena.isChecked };
                        }
                        return scena;
                    });

                    const allScenariosUnchecked = updatedScenarios && updatedScenarios.every((scena) => !scena.isChecked);

                    const isChecked = allScenariosUnchecked ? false : true;

                    return { ...mac, isChecked, scenarios: updatedScenarios };
                }
                return mac;
            });
            setMacros(updatedMacros);
        }
    };






    return (
        <div className='select-dropdown'>
            <div className='select-dropdown-header' onClick={() => setDropDown(!dropDown)}>
                <p>Macroesenarios y Escenarios</p>
                <motion.div
                    animate={{ transform: dropDown ? 'rotateX(180deg)' : 'rotateX(0deg)' }}
                    transition={{ duration: 0.5 }}
                >
                    <MdOutlineArrowDropDown size={27} />
                </motion.div>
            </div>

            <motion.div
                className='select-dropdown-container'
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: dropDown ? 500 : 0, opacity: dropDown ? 1 : 0 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
                <div style={{ display: 'flex', width: '100%', gap: '10px', borderBottom: '5px solid #93D600', paddingBottom: '30px' }}>


                    {macros.map((macro) => (
                        <>
                            {macro.value === -1 &&
                                <>
                                    <div
                                        key={macro.value}

                                        onClick={() => onToggleMacros(macro.value)}
                                        style={{ height: '20px', minWidth: '20px', backgroundColor: `${macro.isChecked ? '#93D600' : ''}`, border: '1px solid black', cursor: 'pointer' }}>
                                        {macro.isChecked && <FiCheck color="var(--black)" size={20} />}

                                    </div>
                                    {macro.label}
                                </>
                            }
                            {macro.value === -2 && <>
                                <div
                                    onClick={() => onToggleMacros(macro.value)}
                                    style={{ height: '20px', minWidth: '20px', backgroundColor: `${macro.isChecked ? '#93D600' : ''}`, border: '1px solid black', cursor: 'pointer' }}>
                                    {macro.isChecked && <FiCheck color="var(--black)" size={20} />}

                                </div>
                                {macro.label}
                            </>
                            }
                        </>
                    ))}
                </div>
                <div className='select-dropdown-container-grid'>

                    {macros
                        .filter(macro => macro.value !== -1 && macro.value !== -2)
                        .sort((a, b) => (b.scenarios.length > a.scenarios.length) ? 1 : ((a.scenarios.length > b.scenarios.length) ? -1 : 0))
                        .map((macro) => (
                            <div className='select-dropdown-container-grid-options' key={macro.value}>

                                {<div className='select-dropdown-container-options-macro' onClick={() => onToggleMacros(macro.value)}>
                                    <div style={{ height: '20px', minWidth: '20px', backgroundColor: `${macro.isChecked ? '#93D600' : ''}`, border: '1px solid black', cursor: 'pointer' }}>
                                        {macro.isChecked && <FiCheck color="var(--black)" size={20} />}
                                    </div>
                                    {macro.label}
                                </div>}
                                <div className='select-dropdown-container-grid-options-childs'>
                                    {macro.scenarios && macro.scenarios.map((escenarios) => (
                                        <div key={escenarios.value} onClick={() => onToggleEscenarios(escenarios, macro.value)} style={{ display: 'flex', gap: '10px', marginBottom: '10px', paddingLeft: '24px' }}>
                                            <div style={{ height: '20px', minWidth: '20px', backgroundColor: `${escenarios.isChecked ? '#93D600' : ''}`, border: '1px solid black', cursor: 'pointer' }}>
                                                {escenarios.isChecked && <FiCheck color="var(--black)" size={20} />}
                                            </div>
                                            {escenarios.label}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                </div>
            </motion.div>
        </div>
    );

}
export default SelectDropDown;
