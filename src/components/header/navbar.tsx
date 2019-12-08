import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../reducers';
import { PREFIXES, LANGUAGES, LANUGAGE_TYPE } from '../../constants';
import { toggleLanguage, changePrefix } from '../../actions/settings';
import { withRouter } from 'react-router-dom';
import { useHistory } from 'react-router';

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const settings = useSelector((state: StoreState) => state.SettingsReducer);
  const companies = useSelector((state: StoreState) => state.CompanyReducer.companies);
  const elements: string[] = PREFIXES[settings.language];

  return (<nav className={settings.language}>
    <a href="#convert" className="convert" onClick={(e) => {
      e.preventDefault();
      if (history.location.pathname !== '/') history.push('/')
      dispatch(toggleLanguage(settings.language));
    }}>
      <div>
        {LANGUAGES.map<React.ReactNode>((lang: LANUGAGE_TYPE) => {
          return (<span className={lang} key={lang}>{PREFIXES[lang][0]}</span>);
        }).reduce((prev, curr) => {
          return [prev, '/', curr]
        })}
      </div>
    </a>
    <ul className={`category ${settings.language}`}>
      {elements.map((element: string, i: number) => {
        return (<li key={i} className={`c${(companies || []).filter((c) => c.slug[settings.language] === element).length}`}>
          <a href={`/${element}`} className={element === settings.prefix ? 'active' : ''} onClick={(e) => {
            e.preventDefault();
            dispatch(changePrefix(element, settings.language))
            const isActive = (e.target as any).getAttribute('class') === 'active';
            if (isActive) { 
              history.push('/')
            } else {
              history.push(`/${element}`)
            }
          }}>
            {element}
          </a>
        </li>);
      })}
    </ul>
  </nav>);
}

export default withRouter(Navbar);