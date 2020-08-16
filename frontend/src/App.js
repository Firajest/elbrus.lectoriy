import React from 'react';
import HomePage from './components/homepage/homepage'
import LoginForm from './components/loginForm/loginForm'
import NewUserForm from './components/newUserForm/newUserForm'
import Logout from './components/logout/logout'
import './App.css'
import { Input } from 'semantic-ui-react';
import {
  Link, BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Logo from './ElbrusBootCamp-logo-RGB.svg'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider, useSelector } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import ViewInfo from './redux/reducers/IndexReducer'

const InputExampleIconProps = () => (
  <Input className="searchBar"
    icon={{ name: 'search', circular: true, link: true }}
    placeholder='Search by tag'
    id='searchBar'
  />
)

function App() {
  const store = createStore(
    ViewInfo,
    composeWithDevTools(applyMiddleware(thunk))
  )
  return (
    <Provider store={store}>
      <div className="App">
        <header className="navbar">
          <img src={Logo} className="logo" />
          {InputExampleIconProps()}
          <Router>
            <Switch>
              <Link to="/login">
                <button className="loginButton">Sign in</button>
              </Link>
            </Switch>
            <Route path='/login'>
              <LoginForm />
            </Route>
          </Router>
          <Logout />
        </header>
        <br></br>
        <HomePage />
      </div>
      <NewUserForm />
    </Provider>
  );
}

export default App;
