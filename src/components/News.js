import React, { Component } from 'react'
import NewsItem from './NewsItem';
//import Spinner from './Spinner';
//import Spinner from './spinner';
import Spin from './Spin';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
    // static defaultProps={
    //     country:'in',
    //     pageSize:20,
    //     category:'sports',
    // }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            page: 1,
            total: 0,
            loading: true,
            totalResults:0
        }
        document.title = `${this.props.category.charAt(0).toUpperCase() + this.props.category.substring(1)} - News Monkey`
    }
    async updateNews() 
    {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}`;
        url = `${url}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        let data = await fetch(url);
        this.props.setProgress(30);
        let parseddata = await data.json();
        this.props.setProgress(50);
        console.log(parseddata);
        this.setState({
            articles: parseddata.articles,
            total: Math.ceil(parseddata.totalResults / this.props.pageSize),
            loading: false,
            totalResults:parseddata.totalResults
        });
        this.props.setProgress(100);
    }

    async componentDidMount() {
        this.updateNews();
    }
    
    fetchMoreData= async ()=>{
        this.setState({
            page:this.state.page+1
        })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}`;
        url = `${url}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseddata = await data.json();
        console.log(parseddata);
        this.setState({
            articles: this.state.articles.concat(parseddata.articles),
            total: Math.ceil(parseddata.totalResults / this.props.pageSize),
            loading: false,
            totalResults:parseddata.totalResults
        });
    }

    render() {
        return (
            <>
                
                    <h1 className="text-center">{this.props.heading}</h1>
                    {this.state.loading && <div className="container text-center my-10">
                        <Spin />
                    </div>}
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length!==this.state.totalResults}
                        loader={<Spin/>}
                    >
                        <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4 my-3" key={element.url}>
                                    <NewsItem title={element.title ? element.title.slice(0, 45) : " "} description={element.description ? element.description.slice(0, 88) : " "} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                        </div>
                    </InfiniteScroll>
            </>
        )
    }
}

export default News
