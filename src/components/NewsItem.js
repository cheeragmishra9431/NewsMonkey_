import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class NewsItem extends Component {
   
    render() {
        let {title, description,imageUrl,newsUrl}=this.props
        return (
            <div className='my-3'>
               <div className="card" >
                    <img src={imageUrl} alt="https://www.shutterstock.com/image-vector/abstract-business-logo-corporate-identity-design-1826060273"/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark">Read More</a>
                    </div> 
                    </div>
            </div>
        )
    }
}

export default NewsItem
