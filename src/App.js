import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//components
import NavBar from './components/FrontEnd/NavBar/navBar'
import HomePageBody from './components/FrontEnd/HomePage/homePageBody'
import ContactUs from './components/FrontEnd/ContactUs/ContactUs'
import AboutUs from './components/FrontEnd/AboutUs/aboutUs'
import NoctuSign from './components/FrontEnd/NoctuSign/NoctuSign'
import CustomDesigns from './components/FrontEnd/CustomDesigns/CustomDesigns'
import './App.css'



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
            <div className = "componentBodyWrapper">
              <Route exact path="/" component={HomePageBody}></Route>
              <Route exact path="/noctusign" component={NoctuSign}></Route>
              <Route exact path="/customdesigns" component={CustomDesigns}></Route>
              <Route exact path="/contactus" component={ContactUs}></Route>
              <Route exact path="/aboutus" component={AboutUs}></Route>
            </div>
          </div>
        </Router>
    );
  }
}


export default App;
