import { combineReducers } from 'redux';
import SettingsReducer from './settings';
import CompanyReducer from './company';

const rootReducer = combineReducers({
  SettingsReducer,
  CompanyReducer,
})

export type StoreState = ReturnType<typeof rootReducer>
export default rootReducer;