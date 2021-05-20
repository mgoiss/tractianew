import NavBarSide from 'core/components/NavBarSide';
import NavBarUp from 'core/components/NavBarUp';
import history from 'core/utils/history';
import Assets from 'pages/Assets';
import AssetsDetails from 'pages/Assets/AssetsDetails';
import Home from 'pages/Home';
import Units from 'pages/Home/Units';
import UserScreen from 'pages/User';
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
                <UserScreen />
              </Route>
              <Route path="/assets" exact>
                <Assets />
              </Route>
              <Route path="/assets/:assetsId">
                <AssetsDetails />
              </Route>
            </Switch>
          </div>
        </section>
      </Router>
    </div >
  )
}

export default Routes;