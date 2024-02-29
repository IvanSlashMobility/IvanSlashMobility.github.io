import { Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { NavBar } from './components/navbar/Navbar';

import Home from "./pages/home/Home";
import Reports from "./pages/reports/Reports";
import Startups from "./pages/startups/Startups";
import MapInstructions from "./pages/Featured/Featured";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import MainButton from "./components/button/MainButton";
import { TERTIARY_BUTTON } from "./config/constants";


const Router = () => {


  const { t } = useTranslation();

  return (
    <div className='routerContainer'>
      <NavBar />
      <div className="container routerContainer-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/startups' element={<Startups />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/destacamos' element={<MapInstructions />} />
          <Route path='*' element={<Navigate to="/" replace />} />
        </Routes>

        <div className="rowContainer rowContainer-alignCenter router-footerCnta">
          <div className="rowContainer rowContainer-justifyCenter router-footerCnta-content flex-1"
            style={{ backgroundColor: 'var(--primary-opacity)', fontWeight: 'bold' }}>
            <img src={require('./assets/img/cnta-extendedLogo.png')} width={160} height={85} />
            <div>
              {t('HOME.CONTACT')}
              <h2 style={{ color: 'var(--primary)', marginTop: 5, marginBottom: 20 }}>+34 948 670 159</h2>
              {t('HOME.CONTACT_FORM')}
              <MainButton
                type={TERTIARY_BUTTON}
                style={{ width: 'auto', marginTop: 12 }}
                className="router-footerCnta-contact-formButton"
                onClick={() => window.location.href = 'https://www.cnta.es/contacto/'}>
                {t('HOME.FORM')}
              </MainButton>
            </div>
          </div>
          <div className="container container-alignCenter router-footerCnta-content flex-1">
            <h3 style={{ marginLeft: -125, marginTop: 0 }}>{t('HOME.FINANCED_BY')}</h3>
            <img src={require('./assets/img/gob-logo.png')} width={250} />
          </div>
        </div>

        <div className="rowContainer rowContainer-alignCenter router-footer">
          <div className="flex-1 router-footer-copyright">
            © COPYRIGHT 2022 | CNTA<br />
            OFICINA CENTRAL ESPAÑA.<br />
            CRTA-NA134-KM 53.<br />
            SAN ADRIAN. 31570. NAVARRA
          </div>
          <div className="flex-1 rowContainer rowContainer-alignCenter rowContainer-justifyCenter router-footer-privacy">
            <div className="router-footer-privacy-item"
              onClick={() => window.location.href = 'https://www.cnta.es/wp-content/uploads/2020/02/Politica-de-privacidad-CNTA.pdf'}>
              {t('HOME.PRIVACY').toUpperCase()}
            </div>
            <div className="router-footer-privacy-separator">|</div>
            <div className="router-footer-privacy-item"
              onClick={() => window.location.href = 'https://www.cnta.es/wp-content/uploads/2020/05/aviso.pdf'}>
              {t('HOME.LEGAL').toUpperCase()}
            </div>
            <div className="router-footer-privacy-separator">|</div>
            <div className="router-footer-privacy-item"
              onClick={() => window.location.href = 'https://www.cnta.es/wp-content/uploads/2020/05/cookies.pdf'}>
              {t('HOME.COOKIES').toUpperCase()}
            </div>
          </div>
          <div className="flex-1 rowContainer router-footer-socials">
            <div
              className="container container-alignCenter container-justifyCenter router-footer-socials-item"
              style={{ backgroundColor: '#1877F2' }}
              onClick={() => window.location.href = 'https://www.facebook.com/CNTA.CIT/'}>
              <FaFacebook color="var(--white)" size={22} />
            </div>
            <div
              className="container container-alignCenter container-justifyCenter router-footer-socials-item"
              style={{ backgroundColor: '#08a0e9' }}
              onClick={() => window.location.href = 'https://twitter.com/i/flow/login?redirect_after_login=%2Fcnta_cit'}>
              <FaTwitter color="var(--white)" size={20} />
            </div>
            <div
              className="container container-alignCenter container-justifyCenter router-footer-socials-item"
              style={{ backgroundColor: '#0077b5' }}
              onClick={() => window.location.href = 'https://www.linkedin.com/company/cnta/'}>
              <FaLinkedin color="var(--white)" size={22} />
            </div>
            <div
              className="container container-alignCenter container-justifyCenter router-footer-socials-item"
              style={{ backgroundColor: '#c4302b' }}
              onClick={() => window.location.href = 'https://www.youtube.com/channel/UCxDJ4KmRYjexryK_IFJk4Sg'}>
              <FaYoutube color="var(--white)" size={24} />
            </div>
          </div>
        </div>
      </div>
      <div className="envText">CURRENTLY RUNNING: {process.env.REACT_APP_ENV}</div>
    </div>
  )
}

export default Router;