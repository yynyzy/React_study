import { Switch, Route, Redirect } from 'react-router-dom'
import Routes from './config/router'

import './App.css';

function App() {
  return (

    <div>
      <Switch>
        {Routes.map(it => <Route {...it} key={it.path} />)}
        <Redirect to='login' />
      </Switch>

    </div>
  );
}

export default App;
