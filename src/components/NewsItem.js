import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description, imageurl,newsurl,author,date,source} =this.props;
    return (
      <div className="my-3"><div className="card">
      <img src={imageurl} className="card-img-top" alt="..." />
      <div className="card-body">
      <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>{source}</span>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><small class="text-body-secondary">Updated by {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
        <a href={newsurl} target='_blank' className="btn btn-sm btn-dark">Go to article</a>
      </div>
    </div>
      </div>
    )
  }
}

export default NewsItem
