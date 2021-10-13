import React from 'react'
import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { PrivateRoute } from './components/privateRoute/Index'
import ScrollToTop from './components/scrollToTop/Index'

import Home from './pages/home/Index'
import Search from './pages/search/Index'
import Photos from './pages/photos/Index'
import PhotoShow from './pages/photos/Show'
import UserProfile from './pages/users/Show'
import Login from './pages/login/Index'
import Register from './pages/register/Index'
import Reset from './pages/reset/Index'
import AccountMaster from './pages/account/master/Index'
import About from './pages/about/Index'
import PrivacyPolicy from './pages/privacyPolicy/Index'
import FAQ from './pages/faq/Index'
import FourOFour from './pages/fourOfour/Index'

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/photos" component={Photos} />
            <Route exact path="/photo/:slug" component={PhotoShow} />
            <Route exact path="/users/:id" component={UserProfile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/reset" component={Reset} />
            <Route exact path="/about" component={About} />
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
            <Route exact path="/faq" component={FAQ} />
            <PrivateRoute path="/account" component={AccountMaster} />

            <Route path="*" component={FourOFour} />
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
