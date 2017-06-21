import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import Header from './components/Header'
import MainPage from './components/MainPage'
import CreateForm from './components/CreateForm'
import store from './store'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path='/' component={MainPage}/>
              <Route path='/create' component={CreateForm}/>
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
