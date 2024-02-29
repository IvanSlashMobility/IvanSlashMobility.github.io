import React from 'react'
import './interpretMap.scss'
import groupIconInterpret from './../../assets/icons/groupIconMapInterpret.svg'
import interpretMaps from './../../assets/img/intreptMap.svg'
import { TfiClose } from "react-icons/tfi";


const InterpretMap = (props) => {

    console.log(props, 444444444444)

    const changeStateshowMapInterpret = () => {

        props.showMapInterpret(false)

    }
    return (
        <div className='interpret-map'>
            <TfiClose
                onClick={changeStateshowMapInterpret}
                size={25} style={{ position: 'absolute', cursor: 'pointer', right: 20, top: 20 }}

            />
            <div className='interpret-map-container'>
                <div className='interpret-map-container-header'>
                    <div>
                        <h1>¿Cómo leer este mapa?</h1>
                        <span>
                            El Mapa de Escenarios de Oportunidad es una gráfica intuitiva y visual que te ayudará a identificar de una forma sencilla y rápida la posición de cada escenario en base a tres variables:
                        </span>
                    </div>

                </div>
                <div className='interpret-map-container-middle'>

                    <div className='interpret-map-container-middle-left'>
                        <h1>Cuota de  voz</h1>
                        <p>
                            Porcentaje de informaciones referenciando a determinado escenario, respecto al total de informaciones analizadas.
                        </p>
                        <h1>Momento de innovación</h1>
                        <p>
                            Valoración de la fase de desarrollo de cada escenario en su aproximación al mercado. Mide según lo que se dice en cada información si se encuentra en momento de arranque, expectación, desafíos, introducción, crecimiento o mass market.
                        </p>

                    </div>
                    <div className='interpret-map-container-middle-center' >
                        

                        <img src={interpretMaps} alt="" />
                    </div>
                 
                    <div className='interpret-map-container-middle-right'>
                        <img src={groupIconInterpret} alt="" />
                        <h1>El tamaño de la burbuja</h1>
                        <p>Número de informaciones publicadas para cada escenario en el periodo de tiempo analizado. Representa cuánto se habla de cada escenario en cada momento.</p>

                    </div>
                </div>
                <div className='interpret-map-container-foot'>
                    <div>
                        <div style={{ backgroundColor: '#E6FF00' }}>
                            <h1>
                                Arranque
                            </h1>
                        </div>
                        <p>En esta fase, las informaciones publicadas por los medios de comunicación hablan fundamentalmente de investigaciones y descubrimientos realizados.</p>
                    </div>
                    <div>
                        <div style={{ backgroundColor: '#83BA00' }}>
                            <h1>
                                Expectación
                            </h1>
                        </div>
                        <p>En la etapa de expectación, también conocida como Hype, las informaciones publicadas se refieren, fundamentalmente, al potencial de los desarrollos a realizar, se descubren algunos prototipos y pruebas de concepto y, sobre todo, se mencionan las expectativas sobre el impacto que tendrán en el futuro.</p>
                    </div>
                    <div>
                        <div style={{ backgroundColor: '#55B03B' }}>
                            <h1>
                                Desafios
                            </h1>
                        </div>
                        <p>En esta fase comienza a haber un poco de impaciencia porque las expectativas creadas en la fase anterior no acaban de cristalizarse. Se explican los desafíos pendientes, las barreras a superar para llegar a mercado y los planes a acometer para superarlas.</p>
                    </div>
                    <div>
                        <div style={{ backgroundColor: '#0D8135' }}>
                            <h1>
                                Introducción
                            </h1>
                        </div>
                        <p>En este momento ya hablamos de que la tecnología, las innovaciones y las soluciones llegan a mercado. Se empieza a comercializar, vemos lanzamientos y pruebas de mercado, se comienza a tener datos de adopción a través de las primeras compras realizadas por innovadores, etc.</p>
                    </div>
                    <div>
                        <div style={{ backgroundColor: '#9A908C' }}>
                            <h1>
                                Crecimiento
                            </h1>
                        </div>
                        <p>Esta etapa es la más esperada. Existe oferta en el mercado y adopción por parte de clientes y consumidores, en su mayoría early adopters. La oferta es más abundante e incluso las grandes marcas realizan lanzamientos. Cada vez es más conocido y no es extraño encontrar noticias al respecto en medios no especializados del sector.</p>
                    </div>
                    <div>
                        <div style={{ backgroundColor: '#1E1E1E' }}>
                            <h1>
                                Mass Market
                            </h1>
                        </div>
                        <p>En nuestra escala, esta fase se inicia cuando ya la mayoría temprana de consumidores conoce la solución y puede acceder a ella. Ya el producto comienza a entrar en una fase madura.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InterpretMap