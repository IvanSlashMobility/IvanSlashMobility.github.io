import React from 'react';

import './MainModal.scss';
import Modal from 'react-modal';
import { IoClose } from 'react-icons/io5';
import iconProteinaAlternativa from './../../assets/icons/proteinaAlternativas.svg'
import RenderVoiceQuota from './../../components/renderVoiceQuota/RenderVoiceQuota'
import MainButton from '../button/MainButton'
import { TfiClose } from "react-icons/tfi";



export default function MainModal(props) {


  return (
    <Modal
      closeTimeoutMS={500}
      ariaHideApp={false}
      isOpen={props.isOpen}
      className='mainModal-container'>
      <div className='mainModal-closeButton' onClick={props.onClose}>
        <TfiClose size={25} style={{ position: 'absolute', cursor: 'pointer', right: 20, top: 20 }} />
      </div>
      <>
        <div className=' mainModal-section-header' >
          <img src={iconProteinaAlternativa} alt="" />
          <div className='mainModal-section-header-title' >
            <h1>
              Proteínas alternativas
            </h1>
            <span>
              1/4/23 - 1/5/23
            </span>
          </div>
        </div>

        <div style={{ width: '990px', display: 'flex', }}>
          <div className='rowContainer'>

            <div className='mainModal-section-left'>
              <div style={{ marginBottom: '40px' }}>
                <span>
                  Un macroescenario que se enfoca en la promoción de prácticas que equilibren la protección medioambiental, el desarrollo económico y el bienestar social. En este macroescenario, se podrán encontrar soluciones que promuevan la descarbonización, la valorización de subproductos, la reducción del desperdicio alimentario, envases más sostenible, iniciativas ecológicas o el vertical farming, entre otras.
                </span>
              </div>

              <div className='mainModal-section-left-bottom'>

                <h1>
                  Noticias relevantes
                </h1>

                <div className='mainModal-section-left-card'>
                  <div>
                    <span>
                      12/11/23
                    </span>
                    <p>
                      Título noticia actualizada que puede interesar y se van actualizando. Lorem ipsum dolor sit amet elit.
                    </p>
                  </div>


                </div>

              </div>
            </div>
            <div className='mainModal-section-right'>
              <>
                <div>
                  <h1>Cuota de voz</h1>
                  <div>
                    <RenderVoiceQuota voiceQuota={4} />
                  </div>
                </div>
                <div>
                  <h1>Posición en ranking</h1>
                  <div>
                    <span> 1/9</span>

                  </div>
                </div>
                <div>
                  <h1>Fase actual</h1>
                  <div>
                    <span>
                      Desafios
                    </span>
                  </div>
                  <button >
                    Profundizar más
                  </button>

                </div>
              </>

            </div>
          </div>

        </div>
      </>
      {/* <div className='mainModal-header rowContainer rowContainer-alignCenter rowContainer-justifyCenter'>
        <img src={require('../../assets/img/map-foodtech-logo.png')} />
      </div>
      <div className='mainModal-content'>
        {props.children}
      </div> */}
    </Modal>
  )
}