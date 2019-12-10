import axios from 'axios'
import { AnyAction } from 'redux';
import { CompanyType } from '../../reducers/company'
import * as Hangul from 'hangul-js';
// import groupBy from 'lodash/groupBy';
// import sortBy from 'lodash/sortBy';
import _ from 'lodash';

export interface CompanyResponseItem {
  address: string,
  description: string,
  founded_at: string,
  image: string,
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

const tuneCompany = (company: any): CompanyType => {
  return {
    address: company.url,
    description: company.description,
    founded_at: company.founded_at,
    image: company.logo_url,
    name: {
      'en': company.name_en,
      'ko': company.name_ko,
    },
    registered_at: company.registered_at,
    slug: {
      'en': (company.name_en[0] as string).toUpperCase(),
      'ko': indexKorean(company.name_ko),
    }
  }
}

export type fetchCompaniesType = AnyAction;
export const FETCHED_COMPANIES = 'FETCHED_COMPANIES';
export const fetchCompanies = () => {
  return (dispatch: any) => {
    return axios.get(
      'https://spreadsheets.google.com/feeds/cells/1x0drF0gZ27euPdiPTxcKCxZJQR50Z0_6b4phWBXu5eM/1/public/full?alt=json'
    ).then(resp => {
      const entries = resp.data.feed.entry;
      let data = _.groupBy(entries, e => e['gs$cell']['row']);
      let records = _.map(
        _.values(data),
        (row: any) => row.map((col: any) => {
          let col_val = col['gs$cell']['$t'];
          if (col_val === 'null') return undefined
          else return col_val
        })
      );

      const header = _.head(records) as Array<string>;
      const rows = _.drop(records);

      const companies = rows.map(r => _.zipObject(header, r))

      dispatch({
        type: FETCHED_COMPANIES,
        companies: companies.map(c => tuneCompany(c))
      })
    })
  }
}