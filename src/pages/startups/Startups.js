import React from "react";
import './startups.scss';

import MainButton from '../../components/button/MainButton';
import { SECONDARY_BUTTON } from '../../config/constants';
import { Trans, useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import FiltersAndDatePiker from "../../components/filtersanddatepiker/FiltersAndDatePiker";
import Card from "../../components/card/Card";
import { TERTIARY_BUTTON } from '../../config/constants';
import iconColaboracion from './../../assets/icons/iconColaboracion.svg'
import iconOportunidades from './../../assets/icons/iconOportunidades.svg'
import iconScouting from './../../assets/icons/iconScounting.svg'
import { motion } from "framer-motion";
import { useData } from "../../contexts/dataApiContext";



const Startups = () => {

  const { t } = useTranslation();
  const navigate = useNavigate();

  const { startups } = useData();

  const [visibleStartups, setVisibleStartups] = React.useState(8);


  console.log(startups)

  const handleSeeMore = () => {
    setVisibleStartups(prevVisibleStartups => prevVisibleStartups + 8);

    if (visibleStartups >= startups.length) {
      setVisibleStartups( 8);

    }
  };

  return (

    <section className="startups-section">


      <div className="startups-header">
        <div className="startups-banner">
          <h1>Startups</h1>
        </div>
        <div className="startups-underbanner">
          <motion.div className="featured-underbanner-animated1"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >              <img src={iconColaboracion} alt="" />
            <h1>Scouting</h1>
            <span>Descubre las startups FoodTech más activas de cada escenario</span>

          </motion.div>
          <motion.div className="featured-underbanner-animated2"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >              <img src={iconOportunidades} alt="" />
            <h1>Colaboracíon</h1>
            <span>Encuentra aliados para impulsar la innovación en tu compañía.</span>

          </motion.div>
          <motion.div className="featured-underbanner-animated3"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >              <img src={iconScouting} alt="" />
            <h1>Oportunidades</h1>
            <span>Mapea la intensidad competitiva de cada escenario.</span>
          </motion.div>
        </div>
      </div>

      < FiltersAndDatePiker />


      <div className="featured-every">

        <div className='featured-every-container'>
          <h1>Todos los escenarios </h1>
          <div className='featured-every-grid' >
            {startups.slice(0, visibleStartups).map((startup, index) => (
              <Card key={index} type={'startup'} startupInfo={startup} />
            ))}

          </div>
          <div className="rowContainer" style={{ display: 'flex', justifyContent: 'center' }}>
            <div>
              <MainButton
                onClick={handleSeeMore}
                type={TERTIARY_BUTTON}
              >
                {visibleStartups > startups.length ?


                  'Ver menos'

                  :

                  t('BUTTONS.SEE_MORE')


                }


              </MainButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Startups; 