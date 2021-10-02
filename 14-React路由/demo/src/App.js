import { Switch, Route, Redirect } from 'react-router-dom'
import Routes from './config/router'
import React, { Suspense } from 'react';
import './App.css';

function App() {
  return (

    <div>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          {Routes.map(it => <Route {...it} key={it.path} />)}
          <Redirect to='login' />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
