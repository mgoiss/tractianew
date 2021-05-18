import NavBarSide from 'core/components/NavBarSide';
import NavBarUp from 'core/components/NavBarUp';
import { useHeaderUp } from 'core/components/NavBarUp/HeaderUpContext';
import history from 'core/utils/history';
import Assets from 'pages/Assets';
import Home from 'pages/Home';
import Units from 'pages/Home/Units';
import User from 'pages/User';
import { useEffect } from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';

const Routes = () => {
  return (
    <div className="d-flex">
      <Router history={history}>
        <NavBarSide />
        <section className="content">
          <NavBarUp />
          <div className="container">
            <Switch>
              <Redirect from="/" to="/home" exact />
              <Route path="/home" exact>
                <Home />
              </Route>
              <Route path="/home/:unitsId" exact>
                <Units />
              </Route>
              <Route path="/users" >
                <User />
              </Route>
              <Route path="/assets" exact>
                <Assets />
              </Route>
              <Route path="/assets/:assetsId">
                <h1>assetsId</h1>
              </Route>
            </Switch>
          </div>
        </section>
      </Router>
    </div >
  )
}

export default Routes;