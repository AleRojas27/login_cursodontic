import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

//COMPONENTES

import HeaderLogin from './components/HeaderLogin';
import PaginaPrincipal from './components/PaginaPrincipal';
import LoginCursodontic from './components/LoginCursodontic';
import FooterLogin from './components/FooterLogin'; 
import Chatbot from './components/Chatbot';
import PromocionProtectoresAcetatos from './components/PromocionProtectoresAcetatos';
import AvisoCookies from './components/AvisoCookies';
import Error404Pendulum from './components/Error404Pendulum';
import Error404Waves from './components/Error404Waves';
import Error404Orange from './components/Error404Orange';

function App() {

  return (
   
    <React.Fragment>

      <BrowserRouter>

        <HeaderLogin />

        <Switch>

          <Route path='/error' exact>

            <Error404Pendulum />

          </Route>

          {/* <Route path='/errorWaves' exact>

            <Error404Waves />

          </Route>

          <Route path='/errorOrange' exact>

            <Error404Orange />

          </Route> */}

          <Route path="/login" exact>

            <LoginCursodontic />
            <FooterLogin />

          </Route>

          <Route path="/promocion/" exact>

            <PromocionProtectoresAcetatos />

          </Route>

          <Route path="/chatbot/" exact>

            <Chatbot />

          </Route>

          <Route path="/">

            <PaginaPrincipal />
            <AvisoCookies />

          </Route>

        </Switch>

      </BrowserRouter>

    </React.Fragment>
  );
}

export default App;
