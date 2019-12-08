import axios from 'axios'
import { AnyAction } from 'redux';
import { CompanyType } from '../../reducers/company'
import * as Hangul from 'hangul-js';


export interface CompanyResponseItem {
  address: string,
  description: string,
  founded_at: string,
  name: {
    "en": string,
    "ko": string,
  },
  registered_at: string
}
const indexKorean = (name: string) => {
  return Hangul.assemble([
    Hangul.disassemble(name)[0],
    'ㅏ'
  ])
}
const indexCompany = (company: CompanyResponseItem): CompanyType => {
  return {
    ...company,
    slug: { 
      'ko': indexKorean(company.name['ko']),
      'en': (company.name['en'][0] as string).toUpperCase()
    }
  };
}

export type fetchCompaniesType = AnyAction;
export const FETCHED_COMPANIES = 'FETCHED_COMPANIES';
export const fetchCompanies = () => {
  return (dispatch: any) => {
    return axios.get('/companies.json').then(resp => {
      let companies: Array<CompanyResponseItem> = resp.data.companies;
      dispatch({
        type: FETCHED_COMPANIES, 
        companies: companies.map((c) => indexCompany(c))
      })
    })
  }
}