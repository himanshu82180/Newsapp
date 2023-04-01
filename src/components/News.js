import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
        constructor(){
            super();
            this.state={
                articles:[],
                loading :false
            }
        }
        async componentDidMount(){
            let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5ccebd44c9d349d0a7842525902d40ee";
            let data=await fetch(url);
            let parseddata=await data.json();
            console.log(parseddata);
            this.setState({articles: parseddata.articles});
        }
  render() {
    return (
      <div>
        <div className="container my-3">
            <h1>Latest News</h1>
            
            <div className="row">
            {this.state.articles.map((element)=>{
            return <div className="col-md-4 my-3" key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,45):" "} description={element.description?element.description.slice(0,88):" "} imageurl={element.urlToImage} newsurl={element.url}/>
            </div>
            }) }
            </div>
        </div>
        
      </div>
    )
  }
}

export default News
