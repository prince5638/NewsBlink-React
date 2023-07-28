import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description} = this.props;   // here i am destructuring the this.props object and pulling keys->value from this.porps as title and description
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src="https://s.yimg.com/uu/api/res/1.2/WWxZOEkjflA2qQciRsmAww--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-07/32bbce60-2aff-11ee-ab75-65dac9878430.cf.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href="/newsdetail" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
