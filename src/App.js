import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';
const App=()=> {
  let pageSize=15;
  const [progress,setProgress]=useState(0);
  // state={
  //   progress:0
  // }
  const setProg=(progress)=>{
    // setState({progress:progress});
    setProgress(progress);
  }
  let apiKey=process.env.REACT_APP_NEWS_API;
  
  
    return (
      <>
      <BrowserRouter>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      />
        <Routes>
        <Route path="/" element={<News setProgress={setProg} apiKey={apiKey} key="home" heading="News Monkey - Top Headline" pageSize={pageSize} country='in' category="general"/>} /> 
        <Route path="/general" element={<News setProgress={setProg} apiKey={apiKey} key="general" heading="News Monkey - Top Headline" pageSize={pageSize} country='in' category="general"/>} />
        <Route path="/business" element={<News setProgress={setProg} apiKey={apiKey} key="business" heading="News Monkey - Top Headline" pageSize={pageSize} country='in' category="business"/>} /> 
        <Route path="/entertainment" element={<News setProgress={setProg} apiKey={apiKey} key="entertainment" heading="News Monkey - Top Headline" pageSize={pageSize} country='in' category="entertainment"/>} /> 
        <Route path="/health" element={<News setProgress={setProg} apiKey={apiKey} key="health" heading="News Monkey - Top Headline" pageSize={pageSize} country='in' category="health"/>} /> 
        <Route path="/science" element={<News setProgress={setProg} apiKey={apiKey} key="science" heading="News Monkey - Top Headline" pageSize={pageSize} country='in' category="science"/>} /> 
        <Route path="/sports" element={<News setProgress={setProg} apiKey={apiKey} key="sports" heading="News Monkey - Top Headline" pageSize={pageSize} country='in' category="sports"/>} /> 
        <Route path="/technology" element={<News setProgress={setProg} apiKey={apiKey} key="technology" heading="News Monkey - Top Headline" pageSize={pageSize} country='in' category="technology"/>} />     
        </Routes>
      </BrowserRouter>
      </>
    )
  
}

export default App