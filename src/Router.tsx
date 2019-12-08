import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Header from './components/header';
import CompanyPage from './pages/CompanyPage';

const App: React.FC = () => {
  return (<HashRouter>
    <Header/>
    <Route path="/:prefix?" component={CompanyPage}/>
  </HashRouter>);
}

export default App;