import React, { Component } from 'react'
import NewsItem from './NewsItem';
//import Spinner from './Spinner';
//import Spinner from './spinner';
import Spin from './Spin';
import PropTypes from 'prop-types'

export class News extends Component {
    // static defaultProps={
    //     country:'in',
    //     pageSize:20,
    //     category:'sports',
    // }
    static propTypes={
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string,
    }
        constructor(props){
            super(props);
            this.state={
                articles:[],
                page:1,
                total:0,
                loading :true
            }
            document.title=`${this.props.category.charAt(0).toUpperCase()+this.props.category.substring(1)} - News Monkey`
        }
        async updateNews(){
            let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5ccebd44c9d349d0a7842525902d40ee`;
            url=`${url}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
            let data=await fetch(url);
            let parseddata=await data.json();
            console.log(parseddata);
            this.setState({articles: parseddata.articles,
                total:Math.ceil(parseddata.totalResults/this.props.pageSize),
                loading:false
            });
        }
        
        async componentDidMount(){
            // console.log(this.state.page);
            // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5ccebd44c9d349d0a7842525902d40ee`;
            // url=`${url}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
            // let data=await fetch(url);
            // let parseddata=await data.json();
            // console.log(parseddata);
            // this.setState({articles: parseddata.articles,
            //     total:Math.ceil(parseddata.totalResults/this.props.pageSize),
            //     loading:false
            // });
            this.updateNews();
        }
        handlePre=async ()=>{
            // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5ccebd44c9d349d0a7842525902d40ee`;
            // url=`${url}&page=${this.state.page-1}&pagesize=${this.props.pageSize}`;
            // let data=await fetch(url);
            // let parseddata=await data.json();
            // this.setState({
            //     loading:true
            // });
            // //console.log(parseddata);
            // this.setState({articles: parseddata.articles,
            // page:this.state.page-1,
            // loading:false});
            await this.setState({
                page:this.state.page-1
            });

            this.updateNews();
        }
        handleNext= async()=>{
            // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5ccebd44c9d349d0a7842525902d40ee`;
            // url=`${url}&page=${this.state.page+1}&pagesize=${this.props.pageSize}`;
            // let data=await fetch(url);
            // let parseddata=await data.json();
            // this.setState({
            //     loading:true
            // });
            // this.setState({articles: parseddata.articles,
            // page:this.state.page+1,
            // loading:false});
            //console.log("before setting :"+this.state.page);
            await this.setState({
                page:this.state.page+1
            });
            //console.log(this.state.page);
            this.updateNews();
        }

  render() {
    return (
      <div>
        <div className="container my-3">
            <h1 className="text-center">{this.props.heading}</h1>
            {this.state.loading&&<div className="container text-center my-10">
                <Spin/>
            </div>}
            <div className="row">
            {this.state.articles.map((element)=>{
            return <div className="col-md-4 my-3" key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,45):" "} description={element.description?element.description.slice(0,88):" "} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
            </div>
            }) }
            </div>
            <div className="container d-flex justify-content-between">
            <button type="button" disabled={this.state.page<=1} rel="noreferrer" className="btn btn-dark mx-2" onClick={this.handlePre} >&larr; Previous</button>
            <button type="button" disabled={this.state.page>=this.state.total} rel="noreferrer" className="btn btn-dark" onClick={this.handleNext} >Next &rarr;</button>
            </div>
        </div>
        
      </div>
    )
  }
}

export default News
