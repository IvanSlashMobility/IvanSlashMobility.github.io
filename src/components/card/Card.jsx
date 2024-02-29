import React from 'react'
import './Card.scss'
import IconCardRow from './../../assets/icons/iconCardRow.svg'
import IconCardRowWhite from './../../assets/icons/iconCardRowWhite.svg'

import RenderVoiceQuota from '../renderVoiceQuota/RenderVoiceQuota'


const Card = (props) => {

    const startupInfos = props?.startupInfo


    const onTogglelinkCards = (cardType, data) => {



        if (cardType == 'startup')
            window.open(data.url, '_blank');



    }


    return (
        <div className={`card-featured ${props.type ? props.type : ''}`}>
            <div className="card-featured-container">
                <div className="card-featured-info">
                    <div className={`card-featured-head ${props.type ? props.type : ''}`} >
                        {props.type == 'featured' ?
                            <span>12/11/23</span>
                            :
                            props.type == 'startup' ?

                                <div className='card-voice-quote-head'>
                                    <div className='card-voice-quote'>
                                        <RenderVoiceQuota voiceQuota={startupInfos?.voiceQuota} />
                                    </div>
                                </div> :
                                <span style={{ fontSize: '0.8rem' }}>12321312312321</span>

                        }


                        {props.type == 'featured' && 
                        <>
                            <span>{startupInfos?.escenario.macroescenario.name}</span>
                            <span>{startupInfos?.escenario.nombre}</span> 
                        
                        </>
                   }

                        { props.type == 'startup' ?
                            <>
                                <span>{startupInfos?.escenario.macroescenario.name}</span>
                                <span>{startupInfos?.escenario.nombre}</span>

                            </> :

                            <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Informe</span>}

                    </div>
                    <div className="card-featured-middle">
                        {props.type == 'featured' ? <span>Título noticia actualizada que pues intersar</span> :
                            props.type == 'startup' ?
                                <span>
                                    {startupInfos.name}

                                </span>
                                :
                                <span >imagen ???</span>

                        }

                    </div>
                </div>

                <div className={`card-featured-foot ${props.type ? props.type : ''} `}>
                    <div className="card-featured-foot-content" onClick={() => onTogglelinkCards(props.type, startupInfos)}>
                        {props.type == 'featured' ?
                            <span>Ver articulo</span>
                            :
                            props.type == 'startup' ?

                                <span>Visitar</span>
                                :
                                <span style={{ color: ' white' }}>Leer analisis</span>}

                        {props.type == 'startup' || props.type == 'featured' ?

                            <img src={IconCardRow} alt="icon see more" />

                            : <img src={IconCardRowWhite} alt="icon see more" />
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card