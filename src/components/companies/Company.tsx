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
  const image = 'http://cfile208.uf.daum.net/image/11482E49510528EA173CA9'
  const desc = '하늘에는 무덤 별 하나에 아이들의 듯합니다. 아이들의 그리고 말 무엇인지 버리었습니다. 별에도 어머니, 이름과 계집애들의 나는 거외다.';
  return (<a className="company" href={company.address} target="_blank">
    <div className="thumb">
      <img src={image} alt={company.name[language]}/>
    </div>
    <h2>
      {company.name[LANGUAGE_KOREAN]}
      <small>{company.name[LANGUAGE_ENGLISH]}</small>
    </h2>
    <div className="description">{desc}</div>
  </a>)
}

export default Company;