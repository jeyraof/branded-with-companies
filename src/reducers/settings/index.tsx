import { CHANGE_LANGUAGE, changeLanguageType, changePrefixType, CHANGE_PREFIX } from '../../actions/settings';
import { Reducer } from 'redux'
import { LANGUAGE_DEFAULT, LANUGAGE_TYPE } from '../../constants';

type SettingsActionType = (changeLanguageType | changePrefixType);
interface SettingsStateType {
  language: LANUGAGE_TYPE,
  prefix?: string
}

const SettingsReducer: Reducer<SettingsStateType, SettingsActionType> = (
  state = {language: LANGUAGE_DEFAULT}, 
  action
) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.language,
        prefix: undefined,
      }
    case CHANGE_PREFIX:
      return {
        ...state,
        prefix: action.prefix
      }
    default:
      return state
  }
}
export default SettingsReducer