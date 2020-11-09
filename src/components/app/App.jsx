import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import FactDetail from '../facts/FactDetail';
import FactDisplay from '../facts/FactDisplay';
import FactList from '../facts/FactList';
import AdminPage from '../admin/AdminPage';
import styles from './app.css';
import UpdateFact from '../admin/UpdateFact';
import CreateFact from '../admin/CreateFact';


export default function App() {
  return (
    <div className={styles.view}>
      <Router>
        <Switch>
          <Route exact path="/" component={FactDisplay} />
          <Route exact path="/list" component={FactList} />
          <Route exact path="/detail/:id" component={FactDetail} />
          <Route exact path="/admin" component={AdminPage} />
          <Route exact path="/UpdateFact/:id" component={UpdateFact} />
          <Route exact path="/Create" component={CreateFact} />
        </Switch>
      </Router>
    </div>
  );
}
