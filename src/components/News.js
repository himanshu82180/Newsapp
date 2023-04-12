import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem';
//import Spinner from './Spinner';
//import Spinner from './spinner';
import Spin from './Spin';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
const News=(props)=> {
    // static defaultProps={
    //     country:'in',
    //     pageSize:20,
    //     category:'sports',
    // }
    const [articles,setArticles]=useState([]);
    const [page,setPage]=useState(1);
    const [total,setTotal]=useState(0);
    const [loading,setLoading]=useState(true);
    const [totalResults,setTotalResults]=useState(0);
    //document.title = `${props.category.charAt(0).toUpperCase() + props.category.substring(1)} - News Monkey`
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         articles: [],
    //         page: 1,
    //         total: 0,
    //         loading: true,
    //         totalResults:0
    //     }
        
    // }
     const updateNews= async()=> 
    {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}`;
        url = `${url}&page=${page}&pagesize=${props.pageSize}`;
        let data = await fetch(url);
        props.setProgress(30);
        let parseddata = await data.json();
        props.setProgress(50);
        console.log(parseddata);
        setArticles(parseddata.articles);
        setTotal(Math.ceil(parseddata.totalResults / props.pageSize));
        setLoading(false);
        setTotalResults(parseddata.totalResults);
        // this.setState({
        //     articles: parseddata.articles,
        //     total: Math.ceil(parseddata.totalResults / props.pageSize),
        //     loading: false,
        //     totalResults:parseddata.totalResults
        // });
        props.setProgress(100);
    }

    // componentDidMount= async ()=> {
    //     this.updateNews();
    // }
    useEffect(()=>{
        document.title = `${props.category.charAt(0).toUpperCase() + props.category.substring(1)} - News Monkey`
        updateNews();  
    },[]);
    
    const fetchMoreData= async ()=>{
        // this.setState({
        //     page:page+1
        // })
        
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}`;
        url = `${url}&page=${page+1}&pagesize=${props.pageSize}`;
        setPage(page+1);
        let data = await fetch(url);
        let parseddata = await data.json();
        console.log(parseddata);
        setArticles(articles.concat(parseddata.articles));
        setTotal(Math.ceil(parseddata.totalResults / props.pageSize));
        setLoading(false);
        setTotalResults(parseddata.totalResults);
        // this.setState({
        //     articles: articles.concat(parseddata.articles),
        //     total: Math.ceil(parseddata.totalResults / props.pageSize),
        //     loading: false,
        //     totalResults:parseddata.totalResults
        // });
    }

    
        return (
            <>
                
                    <h1 className="text-center">{props.heading}</h1>
                    {loading && <div className="container text-center my-10">
                        <Spin />
                    </div>}
                    <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length!==totalResults}
                        loader={<Spin/>}
                    >
                        <div className="container">
                        <div className="row">
                            {articles.map((element) => {
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

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News
