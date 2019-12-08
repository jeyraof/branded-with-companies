import { AnyAction } from 'redux';
import { LANGUAGES, LANUGAGE_TYPE, LANGUAGE_KOREAN, PREFIXES } from '../../constants';

export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
export interface changeLanguageType extends AnyAction {
  language: LANUGAGE_TYPE
}
export const changeLanguage = (language: LANUGAGE_TYPE = LANGUAGE_KOREAN): changeLanguageType => ({type: CHANGE_LANGUAGE, language: language})
export const toggleLanguage = (language: LANUGAGE_TYPE) => {
  return (dispatch: any) => {
    const targetLanguage = LANGUAGES[(LANGUAGES.indexOf(language) + 1) % LANGUAGES.length]
    dispatch(changeLanguage(targetLanguage))
  }
}

export interface changePrefixType extends AnyAction {
  prefix?: string
}
export const CHANGE_PREFIX = 'CHANGE_PREFIX';
export const changePrefix = (prefix?: string, current_language?: LANUGAGE_TYPE) => {
  return (dispatch: any) => {
    let target_language = null;
    if (prefix) {
      LANGUAGES.forEach(elm => {
        if (PREFIXES[elm].indexOf(prefix) > 0) {
          target_language = elm
        }
      })
    }
    if (target_language && (current_language !== target_language)) dispatch(changeLanguage(target_language as LANUGAGE_TYPE))
    return dispatch({type: CHANGE_PREFIX, prefix: prefix})
  }
}