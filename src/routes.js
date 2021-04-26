import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import login from './pages/login';
import home from './pages/home';
import account from './pages/account';

import ong_Home from './pages/ONG/Home';
import ong_validate from './pages/ONG/other/Validate';
import ong_singup from './pages/ONG/Cadastro';
import ong_singup2 from './pages/ONG/other/Step2';
import ong_singup3 from './pages/ONG/other/step3';
import ong_singin from './pages/ONG/Login';
import ong_page from './pages/ONG/ongPage';
import ong_edit from './pages/ONG/ongPageEdit'
import ong_recover from './pages/ONG/Recover'
import ong_recover_email from './pages/ONG/other/Recover2'
import ong_validate_resend from './pages/ONG/other/NewsletterSended'

export default function Routes() {
  return (
    <BrowserRouter>
      <logProvider>
        <Switch>
          <Route path="/" exact component={login} />
          <Route path="/home" exact component={home} />
          <Route path="/account" exact component={account} />
          <Route path="/ong" exact component={ong_Home} />
          <Route path="/ong/profile/:id_ong" exact component={ong_page} />
          <Route path="/ong/validate/" exact component={ong_validate} />
          <Route path="/ong/signup" exact component={ong_singup} />
          <Route path="/ong/signup/step2" exact component={ong_singup2} />
          <Route path="/ong/signup/step3" exact component={ong_singup3} />
          <Route path="/ong/signin" exact component={ong_singin} />
          <Route path="/ong/edit" exact component={ong_edit} />
          <Route path="/ong/recover" exact component={ong_recover} />
          <Route path="/ong/validate/resend" exact component={ong_validate_resend} />
          <Route path="/ong/recover/email" exact component={ong_recover_email} />
        </Switch>
      </logProvider>
    </BrowserRouter >
  );
}
