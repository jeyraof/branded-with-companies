import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { RouteComponentProps } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../reducers';
import { changePrefix } from '../actions/settings';
import { fetchCompanies } from '../actions/company';
import sortBy from 'lodash/sortBy';
import { PREFIXES } from '../constants';
import groupBy from 'lodash/groupBy';
import CompanyList, { CandidateType } from '../components/companies/CompanyList';
import '../assets/styles/company.scss';


interface CompanyListProps {
  prefix?: string
}
const CompanyPage: React.FC<RouteComponentProps<CompanyListProps>> = ({match}) => {
  const dispatch = useDispatch();
  const { prefix } = match.params;
  const settings = useSelector((state: StoreState) => state.SettingsReducer);
  const companies = useSelector((state: StoreState) => state.CompanyReducer.companies);

  useEffect(() => {
    if ((!settings.prefix && prefix) || (settings.prefix !== prefix)) { dispatch(changePrefix(prefix)); }
    if (!companies) dispatch(fetchCompanies());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefix]);

  let candidates: Array<CandidateType> = [];
  const companiesByPrefix = groupBy(
    sortBy(companies || [], [o => o.name[settings.language]]), 
    c=>c.slug[settings.language]
  );
  PREFIXES[settings.language].forEach((prefix: string) => {
    candidates.push({
      prefix: prefix,
      companies: companiesByPrefix[prefix]
    })
  })
  
  if (prefix) candidates = candidates.filter((c: CandidateType) => c.prefix === prefix)

  return (<div id="company-page">
    {candidates.map((candidate: CandidateType, i) => {
      if (!candidate.companies) return false;
      return <CompanyList candidate={candidate} key={i}/>
    })}
  </div>);
}

export default withRouter(CompanyPage);