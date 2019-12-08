import React from 'react';
import { CompanyType } from '../../reducers/company';
import Company from '../companies/Company';

export type CandidateType = { prefix: string, companies: Array<CompanyType> }
interface CompanyListProps {
  candidate: CandidateType
}
const CompanyList: React.FC<CompanyListProps> = ({candidate}) => {
  return (
  <div className="candidate">
    <h3>{candidate.prefix}</h3>
    <ul>
      {candidate.companies.map((c: CompanyType, j) => {
        return (<li key={j}>
          <Company company={c}/>
        </li>);
      })}
    </ul>
  </div>
  );
}

export default CompanyList;