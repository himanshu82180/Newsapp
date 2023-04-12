import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description, imageurl,newsurl,author,date,source} =this.props;
    return (
      <div className="my-3"><div className="card">
        <div style={{display:'flex', justifiyContent:'flex-end',position:'absolute' ,right:'0' }}>
        <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
      <img src={imageurl} className="card-img-top" alt="..." />
      <div className="card-body">
      
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><small className="text-body-secondary">Updated by {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
        <a href={newsurl} target='_blank' className="btn btn-sm btn-dark">Go to article</a>
      </div>
    </div>
      </div>
    )
  }
}

export default NewsItem
