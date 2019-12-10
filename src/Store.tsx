import CombinedReducer, { StoreState } from './reducers';
import { createStore, Store, applyMiddleware, compose } from 'redux';
import { loadState, saveState } from './loadStorage';
import throttle from 'lodash/throttle';
import thunk from 'redux-thunk';


export default function configureStore(): Store {
  const persistedState = loadState();
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    CombinedReducer,
    persistedState as StoreState,
    composeEnhancers(
      applyMiddleware(thunk),
    )
  );

  store.subscribe(throttle(() => {
    // saveState(store.getState())
    // Specific
    // saveState({
    //   AuthReducer: store.getState().AuthReducer
    // });
    saveState({
      CompanyReducer: {
        companies: store.getState().CompanyReducer.companies
      },
      SettingsReducer: {
        language: store.getState().SettingsReducer.language
      }
    } as StoreState)
  }, 1000));

  return store;
}
