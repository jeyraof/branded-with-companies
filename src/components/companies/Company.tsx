import React from 'react';
import { CompanyType } from '../../reducers/company';
import { useSelector } from 'react-redux';
import { StoreState } from '../../reducers';
import { LANGUAGE_ENGLISH, LANGUAGE_KOREAN } from '../../constants';

interface CompanyProps {
  company: CompanyType
}
const Company: React.FC<CompanyProps> = ({company}) => {
  const language = useSelector((state: StoreState) => state.SettingsReducer.language);
  // eslint-disable-next-line
  return (<a className="company" href={company.address} target="_blank">
    <div className={`thumb ${company.image && company.image.length > 0 && 'is_image'}`}>
      <div className="holder"></div>
      <span className="helper"></span>
      {company.image && company.image.length > 0 && <img src={company.image} alt={company.name[language]}/>}
    </div>
    <div className="metadata">
      <h2>
        {company.name[LANGUAGE_KOREAN]}
        <small>: {company.name[LANGUAGE_ENGLISH]}</small>
      </h2>
      <div className="description">{company.description || '설명없음'}</div>
    </div>
  </a>)
}

export default Company;