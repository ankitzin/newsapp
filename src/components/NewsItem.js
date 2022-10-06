// import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class NewsItems extends Component {
    
  render() {
    let {title,description,imageUrl,newsUrl, author, date_at} = this.props;
    // console.log(title,description,imageUrl,newsUrl)

    return (
        <>
            <div className='container my-3'>
                <div className="card">
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {author} on {new Date(date_at).toGMTString()}</small></p>
                    <a href={newsUrl} className="btn btn-dark">Read More</a>
                    
                </div>
                </div>
            </div>
        </>
    )
  }
}

export default NewsItems