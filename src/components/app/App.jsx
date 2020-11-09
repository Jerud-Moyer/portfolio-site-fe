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


export default function App() {
  return (
    <div className={styles.view}>
      <Router>
        <Switch>
          <Route exact path="/" component={FactDisplay} />
          <Route exact path="/list" component={FactList} />
          <Route exact path="/detail/:id" component={FactDetail} />
          <Route exact path="/admin" component={AdminPage} />
        </Switch>
      </Router>
    </div>
  );
}
