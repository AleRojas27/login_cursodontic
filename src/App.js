import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HeaderLogin from './components/HeaderLogin';
import LoginCursodontic from './components/LoginCursodontic';
import FooterLogin from './components/FooterLogin'; 
import Chatbot from './components/Chatbot';
import PromocionProtectoresAcetatos from './components/PromocionProtectoresAcetatos';
import AvisoCookies from './components/AvisoCookies';

function App() {

  return (
   
    <React.Fragment>

      <BrowserRouter>

        <Switch>

          <Route path="/promocion/" exact>

            <HeaderLogin />
            <PromocionProtectoresAcetatos />

          </Route>


          <Route path="/chatbot/" exact>

            <Chatbot />

          </Route>

          <Route path="/">

            <HeaderLogin />
            <LoginCursodontic />
            <FooterLogin />
            <AvisoCookies />
            
          </Route>

        </Switch>

      </BrowserRouter>

    </React.Fragment>
  );
}

export default App;
