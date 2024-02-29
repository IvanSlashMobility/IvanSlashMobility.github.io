import React from "react";
import './featured.scss';
import { useTranslation } from "react-i18next";
import { FaLongArrowAltRight, FaLongArrowAltUp } from "react-icons/fa";
import Expandable from "../../components/expandable/Expandable";
import iconDescubre from './../../assets/img/iconDescubre.svg'
import iconAlGrano from './../../assets/img/iconAlGrano.svg'
import iconAhorraTiempo from './../../assets/img/iconAhorraTiempo.svg'
import FiltersAndDatePiker from "../../components/filtersanddatepiker/FiltersAndDatePiker";
import Card from '../../components/card/Card'
import MainButton from "../../components/button/MainButton";
import { TERTIARY_BUTTON } from '../../config/constants';
import { motion } from "framer-motion";


const Featured = () => {

  const { t } = useTranslation();



  //TODO: innovation moments descriptions component

  return (

    <section className="featured-section">
      <div className="featured-header">
        <div className="featured-banner">
          <h1>Destacamos</h1>
        </div>
        <div className="featured-underbanner">
          <motion.div className="featured-underbanner-animated1"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={iconDescubre} alt="" />
            <h1>Descubre</h1>
            <span>Los hitos clave que marcan el devenir del sector de la tecnología alimentaria</span>
          </motion.div>
          <motion.div className="featured-underbanner-animated2"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src={iconAlGrano} alt="" />
            <h1>Al grano</h1>
            <span>De forma clara y concisa conocerás las informaciones más destacadas sobre FoodTech</span>
          </motion.div>
          <motion.div className="featured-underbanner-animated3"
            initial={{ opacity: 0, y: 0}}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img src={iconAhorraTiempo} alt="" />
            <h1>Ahorra tiempo</h1>
            <span>En pocos minutos tendrás conocimiento de los hechos más relevantes del FoodTech</span>
          </motion.div>
        </div>
      </div>
      < FiltersAndDatePiker />
      <div className="featured-every">
        <div className='featured-every-container'>
          <h1>Todos los escenarios </h1>
          <div className='featured-every-grid' >
            <Card type={'featured'} />
            <Card type={'featured'} />
            <Card type={'featured'} />
            <Card type={'featured'} />
            <Card type={'featured'} />
            <Card type={'featured'} />
            <Card type={'featured'} />
            <Card type={'featured'} />
          </div>
          <div className="rowContainer" style={{ display: 'flex', justifyContent: 'center' }}>
            <div>
              <MainButton
                type={TERTIARY_BUTTON}
              >
                {t('BUTTONS.SEE_MORE')}
              </MainButton>
            </div>
          </div>
        </div>

      </div>





      {/* <div className="mapInstructions-title">
        <h1>{t('MAP_INSTRUCTIONS.TITLE')}</h1>
        <div>{t('MAP_INSTRUCTIONS.DESCR')}</div>
      </div>
      <div className="mapInstructions-content rowContainer rowContainer-justifyCenter width-100">
        <div className="container mapInstructions-content-left">
          <h2>{t('CHART.VOICE_SHARE')}</h2>
          <div>{t('MAP_INSTRUCTIONS.VOICE_SHARE')}</div>
        </div>
        <div className="mapInstructions-content-arrow">
          <FaLongArrowAltRight color="var(--primary)" size={40}/>
        </div>
        <img src={require('../../assets/img/mapInstructions.png')} className="flex-1 width-100" style={{maxWidth: 850}}/>
        <div className="container">
          <img src={require('../../assets/img/bubble.png')} width={200}/>
          <h2>{t('MAP_INSTRUCTIONS.BUBBLE_SIZE')}</h2>
          <div>{t('MAP_INSTRUCTIONS.BUBBLE_SIZE_DESCR')}</div>
        </div>
      </div>
      <div className="container mapInstructions-content-bottom">
        <div className="mapInstructions-content-arrow">
          <FaLongArrowAltUp color="var(--primary)" size={40}/>
        </div>
        <h2>{t('MAP_INSTRUCTIONS.INNOVATION_MOMENT')}</h2>
        <div>{t('MAP_INSTRUCTIONS.INNOVATION_MOMENT_DESCR')}</div>
      </div>
      <div className="rowContainer mapInstructions-steps">
          <Expandable 
          className="flex-1"
          title={t('CHART.START').toUpperCase()}
          text={t('MAP_INSTRUCTIONS.START')}
          buttonColor="#E6FF03"/>
          <Expandable 
          className="flex-1"
          title={t('CHART.EXPECTATION').toUpperCase()}
          text={t('MAP_INSTRUCTIONS.EXPECTATION')}
          buttonColor="#99FF32"/>
          <Expandable 
          className="flex-1"
          title={t('CHART.CHALLENGES').toUpperCase()}
          text={t('MAP_INSTRUCTIONS.CHALLENGES')}
          buttonColor="#52B03B"/>
          <Expandable 
          className="flex-1"
          title={t('CHART.INTRODUCTION').toUpperCase()}
          text={t('MAP_INSTRUCTIONS.INTRODUCTION')}
          buttonColor="#0D8135"/>
          <Expandable 
          className="flex-1"
          title={t('CHART.GROWTH').toUpperCase()}
          text={t('MAP_INSTRUCTIONS.GROWTH')}
          buttonColor="#A9A9A9"/>
          <Expandable 
          className="flex-1"
          clearButton={true}
          title={t('CHART.MASS_MARKET').toUpperCase()}
          text={t('MAP_INSTRUCTIONS.MASS_MARKET')}
          buttonColor="#2a2a2a"/>
        </div> */}




    </ section >
  );
};

export default Featured; 