import React from "react";
import './Reports.scss';
import { useTranslation } from "react-i18next";
import Pdf1 from '../../assets/docs/jan-aug-2023-es.pdf';
import Pdf2 from '../../assets/docs/jan-aug-2023-en.pdf';
import Pdf3 from '../../assets/docs/anual-2022-es.pdf';
import Pdf4 from '../../assets/docs/anual-2022-en.pdf';

import Card from "../../components/card/Card";

const Reports = () => {

  const { t } = useTranslation();

  // TODO: download docs from assets on image click

  return (
    <section className="reports">

      <div className="reports-header">
        <div className="reports-banner">
          <h1>Destacamos</h1>
        </div>
        <div className="reports-underbanner">
          <h1>Información curada</h1>
          <span>En este apartado puedes descargar los informes anuales del Mapa de escenarios de oportunidad foodtech, elaborados por el equipo de Vanguardia de CNTA tras un proceso de observación y curado de información realizado diariamente durante todo el año.</span>
        </div>
      </div>

      <div className="reports-actual">
        <h1>Lo más actual</h1>

        <div style={{ display: 'flex', marginLeft: '120px', overflowY: 'auto', padding: '8px' }}>


          <Card type={'reports'} />
          <Card type={'reports'} />
          <Card type={'reports'} />

        </div>
      </div>

      <div className="reports-header-middle">
        <div>
          <h1>Análisis Cuatrimestral</h1>
          <p>En este apartado puedes descargar los informes anuales del Mapa de escenarios de oportunidad foodtech, elaborados por el equipo de Vanguardia de CNTA tras un proceso de observación y curado de información realizado diariamente durante todo el año.</p>
        </div>

      </div>



      <div className="reports-all-reports">


        <h1 className="flex-1">Todos los escenarios</h1>

        <Card type={'reports'} />
        <Card type={'reports'} />
        <Card type={'reports'} />
        <Card type={'reports'} />
        <Card type={'reports'} />
        <Card type={'reports'} />
        <Card type={'reports'} />
        <Card type={'reports'} />
        <Card type={'reports'} />
        <Card type={'reports'} />
        <Card type={'reports'} />
        <Card type={'reports'} />
      </div>

      <div className="reports-downloads-reports">

        <div className="reports-downloads-reports-grid">
          <div className=" reports-downloads-reports-grid-card">
            <div className=" reports-downloads-reports-grid-card-left">


            </div>
            <div className=" reports-downloads-reports-grid-card-right">

              <div>

                <h1>Enero/agosto 2023</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde incidunt nesciunt laborum nihil? Aliquid fugiat, accusantium, laborum labore nostrum minima, soluta tenetur dignissimos provident culpa sed cum. Vitae, unde quas.</p>
                <div className="reports-downloads-reports-grid-card-right-foot">

                <p>Descarga</p>

                <divs  className='butons'>
                    <a href={Pdf1} download='Enero/agosto español 2023'>
                      Español
                    </a>
                    <a href={Pdf2} download='Enero/agosto ingles 2023'>
                      English
                    </a>
                  </divs>
                </div>
              </div>


            </div>


          </div>
          <div className=" reports-downloads-reports-grid-card">

            <div className=" reports-downloads-reports-grid-card-left">


            </div>
            <div className=" reports-downloads-reports-grid-card-right">

              <div>

                <h1>Enero/agosto 2022</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde incidunt nesciunt laborum nihil? Aliquid fugiat, accusantium, laborum labore nostrum minima, soluta tenetur dignissimos provident culpa sed cum. Vitae, unde quas.</p>
                <div className="reports-downloads-reports-grid-card-right-foot">

                  <p>Descarga</p>

                  <divs className='butons'>

                    <a href={Pdf3} download='Enero/agosto español 2022'>
                      Español
                    </a>
                    <a href={Pdf3} download='Enero/agosto ingles 2022'>
                      English
                    </a>
                  </divs>
                </div>
              </div>


            </div>

          </div>
          <div className=" reports-downloads-reports-grid-card">

            <div className=" reports-downloads-reports-grid-card-left">


            </div>
            <div className=" reports-downloads-reports-grid-card-right">
              <div>

                <h1>Enero/agosto</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde incidunt nesciunt laborum nihil? Aliquid fugiat, accusantium, laborum labore nostrum minima, soluta tenetur dignissimos provident culpa sed cum. Vitae, unde quas.</p>
                <div className="reports-downloads-reports-grid-card-right-foot">

                  <p>Descarga</p>

                  <divs className='butons'>

                    <a>
                      Español
                    </a>
                    <a>
                      English
                    </a>
                  </divs>
                </div>
              </div>


            </div>

          </div>
          <div className=" reports-downloads-reports-grid-card">

            <div className=" reports-downloads-reports-grid-card-left">


            </div>
            <div className=" reports-downloads-reports-grid-card-right">

              <div>

                <h1>Enero/agosto</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde incidunt nesciunt laborum nihil? Aliquid fugiat, accusantium, laborum labore nostrum minima, soluta tenetur dignissimos provident culpa sed cum. Vitae, unde quas.</p>
                <div className="reports-downloads-reports-grid-card-right-foot">

                  <p>Descarga</p>

                  <divs className='butons'>

                    <a>
                      Español
                    </a>
                    <a>
                      English
                    </a>
                  </divs>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* <div className="reports-text">
        {t('REPORTS.DESCR')}
      </div>
      <div className="reports-downloads rowContainer rowContainer-alignCenter width-100">
        <div className="container container-alignCenter">
          <h2 className="reports-downloads-title">{t('REPORTS.JAN_AUG_2023')}</h2>
          <div className="reports-downloads-content width-100 rowContainer rowContainer-alignCenter rowContainer-justifyCenter">
            <div className="reports-downloads-item">
              <a href={Pdf1} target="_blank">
                <img
                src={require('../../assets/img/doc-jan-aug-es.jpeg')} 
                className="reports-downloads-item-image"/>
              </a>
              <div className="reports-downloads-item-name">Castellano</div>
            </div>
            <div className="reports-downloads-item">
              <a href={Pdf2} target="_blank">
                <img 
                src={require('../../assets/img/doc-jan-aug-en.jpeg')} 
                className="reports-downloads-item-image"/>
              </a>
              <div className="reports-downloads-item-name">English</div>
            </div>
          </div>
        </div>
        <div className="container container-alignCenter">
          <h2 className="reports-downloads-title">{t('REPORTS.ANUAL_2022')}</h2>
          <div className="reports-downloads-content width-100 rowContainer rowContainer-alignCenter rowContainer-justifyCenter">
            <div className="reports-downloads-item">
              <a href={Pdf3} target="_blank">
                <img 
                src={require('../../assets/img/anual-2022-es.jpeg')} 
                className="reports-downloads-item-image"/>
              </a>
              <div className="reports-downloads-item-name">Castellano</div>
            </div>
            <div className="reports-downloads-item">
              <a href={Pdf4} target="_blank">
                <img 
                src={require('../../assets/img/anual-2022-en.jpeg')} 
                className="reports-downloads-item-image"/>
              </a>
              <div className="reports-downloads-item-name">English</div>
            </div>
          </div>
        </div>
      </div> */}
    </section >
  );
};

export default Reports; 