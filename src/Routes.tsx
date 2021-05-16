import NavBarSide from 'core/components/NavBarSide';
import NavBarUp from 'core/components/NavBarUp';
import history from 'core/utils/history';
import { Redirect, Route, Router, Switch } from 'react-router-dom';

const Routes = () => (
  <div className="d-flex">
    <Router history={history}>
      <NavBarSide />
      <section className="content">
        <NavBarUp />
        <div className="container">
          <Switch>
            <Redirect from="/" to="/home" exact />
            <Route path="/home" exact>
              <h1>Home</h1>
            </Route>
            <Route path="/home/:unitsId" exact>
              <h1>unitsId</h1>
            </Route>
            <Route path="/users" >
              <h1>User</h1>
            </Route>
            <Route path="/assets" exact>
              <h1>Assets</h1>
            </Route>
            <Route path="/assets/:assetsId">
              <h1>assetsId</h1>
            </Route>
          </Switch>
        </div>
      </section>
    </Router>
  </div >
);

export default Routes;