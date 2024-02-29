import { NavLink, useLocation } from "react-router-dom"
import './Navbar.scss'
import { useTranslation } from "react-i18next"
import i18next from "i18next";


export const NavBar = () => {

  const { t } = useTranslation();
  const location = useLocation();

  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? 'var(--primary)' : 'var(--text-primary)',
      fontWeight: isActive ? 'bold' : 'normal'
    }
  }

  return (
    <nav className="primary-nav">

      <div className="primary-nav-logo">
        <img src={require('../../assets/img/map-foodtech-logo.png')} />
      </div>
      <div className="rowContainer flex-1 primary-nav-content">
        <NavLink style={navLinkStyles} className='primary-nav-itemWrapper' to='/'>
          {t('TABS.HOME').toUpperCase()}
        </NavLink>
        <NavLink style={navLinkStyles} className='primary-nav-itemWrapper' to='/destacamos'>
          {t('TABS.OUTSTANDING').toUpperCase()}
        </NavLink>
        <NavLink style={navLinkStyles} className='primary-nav-itemWrapper' to='/startups'>
          {t('TABS.STARTUPS').toUpperCase()}
        </NavLink>

        <NavLink style={navLinkStyles} className='primary-nav-itemWrapper' to='/reports'>
          {t('TABS.REPORTS').toUpperCase()}
        </NavLink>
        <NavLink
          className='primary-nav-itemWrapper'
          to={location.pathname}
          onClick={() => window.open("https://www.cnta.es/", "_blank")}>
          {t('TABS.MORE').toUpperCase()}
        </NavLink>
        <div className="primary-nav-separator" />
        <div
          className={`primary-nav-lang ${i18next.language === 'es' && 'primary-nav-langActive'}`}
          onClick={() => i18next.changeLanguage('es')}>
          ES
        </div>
        <div
          className={`primary-nav-lang ${i18next.language === 'en' && 'primary-nav-langActive'}`}
          onClick={() => i18next.changeLanguage('en')}>
          EN
        </div>
      </div>
    </nav>
  )

}