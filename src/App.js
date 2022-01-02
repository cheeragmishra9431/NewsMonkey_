import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

export default class App extends Component {
  pageSize=15;
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
        <Router>
      <div>
        <Navbar />
        <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        {/* <News setProgress={this.setProgress}  pageSize={this.pageSize} country='in' category="sports"/> */}
        <Routes>
          <Route exact path="/">element={ <News setProgress={this.setProgress}  key="general" pageSize={this.pageSize} country='in' category="general"/>}</Route>
          
          <Route exact path="/general"> <News setProgress={this.setProgress}  key="general" pageSize={this.pageSize} country='in' category="general"/></Route>
          <Route exact path="/business"> <News setProgress={this.setProgress}  key="business" pageSize={this.pageSize} country='in' category="business"/></Route>
          <Route exact path="/entertainment"> <News setProgress={this.setProgress}  key="entertainment" pageSize={this.pageSize} country='in' category="entertainment"/></Route>
          <Route exact path="/health"> <News setProgress={this.setProgress}  key="health" pageSize={this.pageSize} country='in' category="health"/></Route>
          <Route exact path="/science"> <News setProgress={this.setProgress}  key="science" pageSize={this.pageSize} country='in' category="science"/></Route>
          <Route exact path="/sports"> <News setProgress={this.setProgress}  key="sports" pageSize={this.pageSize} country='in' category="sports"/></Route>
          <Route exact path="/technology"> <News setProgress={this.setProgress}  key="technology" pageSize={this.pageSize} country='in' category="technology"/></Route>
          
         
          
        </Routes>
      </div>
        </Router>
    )
  }
} 



