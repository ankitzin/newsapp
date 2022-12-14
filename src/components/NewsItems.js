// import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class NewsItems extends Component {
    
  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    // console.log(title,description,imageUrl,newsUrl)

    return (
        <>
            <div className='container my-3'>
                <div className="card" style={{"width": "18rem"}}>
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a href={newsUrl} className="btn btn-primary">Read More</a>
                </div>
                </div>
            </div>
        </>
    )
  }
}

export default NewsItems