import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl} = this.props;   // here i am destructuring the this.props object and pulling keys->value from this.porps as title and description
        return (
            <div className='my-3'>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageUrl ? imageUrl : "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a rel="noreferrer" href={newsUrl} className="btn btn-sm btn-dark" target="_blank" >Read more</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
