import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route} from "react-router-dom";

export default class App extends Component {
  pageSize=15;
  render() {
    return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="/" element={<News key="home" heading="News Monkey - Top Headline" pageSize={this.pageSize} country='in' category="general"/>} /> 
        <Route path="/general" element={<News key="general" heading="News Monkey - Top Headline" pageSize={this.pageSize} country='in' category="general"/>} />
        <Route path="/business" element={<News key="business" heading="News Monkey - Top Headline" pageSize={this.pageSize} country='in' category="business"/>} /> 
        <Route path="/entertainment" element={<News key="entertainment" heading="News Monkey - Top Headline" pageSize={this.pageSize} country='in' category="entertainment"/>} /> 
        <Route path="/health" element={<News key="health" heading="News Monkey - Top Headline" pageSize={this.pageSize} country='in' category="health"/>} /> 
        <Route path="/science" element={<News key="science" heading="News Monkey - Top Headline" pageSize={this.pageSize} country='in' category="science"/>} /> 
        <Route path="/sports" element={<News key="sports" heading="News Monkey - Top Headline" pageSize={this.pageSize} country='in' category="sports"/>} /> 
        <Route path="/technology" element={<News key="technology" heading="News Monkey - Top Headline" pageSize={this.pageSize} country='in' category="technology"/>} />     
        </Routes>
      </BrowserRouter>
    )
  }
}

