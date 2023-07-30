import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source, color } = props;   // here i am destructuring the this.props object and pulling keys->value from this.porps as title and description

    return (
        <div className='my-3'>
            <div className="card">
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }}>
                    <span className={`badge rounded-pill bg-${color}`} style={{ zIndex: '1', left: '90%' }}>
                        {source}
                    </span>
                </div>
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

export default NewsItem