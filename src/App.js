import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  pageSize=15;
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress});
  }
  apiKey=process.env.REACT_APP_NEWS_API;
  
  render() {
    return (
  
      <BrowserRouter>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
      />
        <Routes>
        <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="home" heading="News Monkey - Top Headline" pageSize={this.pageSize} country='in' category="general"/>} /> 
        <Route path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" heading="News Monkey - Top Headline" pageSize={this.pageSize} country='in' category="general"/>} />
        <Route path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" heading="News Monkey - Top Headline" pageSize={this.pageSize} country='in' category="business"/>} /> 
        <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" heading="News Monkey - Top Headline" pageSize={this.pageSize} country='in' category="entertainment"/>} /> 
        <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" heading="News Monkey - Top Headline" pageSize={this.pageSize} country='in' category="health"/>} /> 
        <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" heading="News Monkey - Top Headline" pageSize={this.pageSize} country='in' category="science"/>} /> 
        <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" heading="News Monkey - Top Headline" pageSize={this.pageSize} country='in' category="sports"/>} /> 
        <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" heading="News Monkey - Top Headline" pageSize={this.pageSize} country='in' category="technology"/>} />     
        </Routes>
      </BrowserRouter>
    )
  }
}

