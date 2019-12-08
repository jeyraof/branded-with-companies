import { Reducer } from 'redux';
import { CompanyResponseItem, FETCHED_COMPANIES, fetchCompaniesType } from '../../actions/company';

type CompanyActionType = (fetchCompaniesType);
export interface CompanyType extends CompanyResponseItem {
  slug: {
    "ko": string,
    "en": string
  }
}
interface CompanyStateType {
  companies?: Array<CompanyType>,
}
const CompanyReducer: Reducer<CompanyStateType, CompanyActionType> = (
  state = {},
  action
) => {
  switch (action.type) {
    case FETCHED_COMPANIES:
      return {
        ...state,
        companies: action.companies
      }
    default:
      return state
  }
}

export default CompanyReducer