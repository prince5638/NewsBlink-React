import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source, color } = this.props;   // here i am destructuring the this.props object and pulling keys->value from this.porps as title and description
        return (
            <div className='my-3'>
                <div className="card">
                    <span className={`position-absolute translate-middle badge rounded-pill bg-${color}`} style={{zIndex: '1', left: '90%'}}>
                        {source}
                    </span>
                    <img src={imageUrl ? imageUrl : "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} className="btn btn-sm btn-dark" target="_blank" >Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
