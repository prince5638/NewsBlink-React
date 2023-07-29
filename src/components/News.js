import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
      {
        "source": {
          "id": "associated-press",
          "name": "Associated Press"
        },
        "author": "KIM TONG-HYUNG",
        "title": "North Korean leader Kim Jong Un meets with Russian defense minister on military cooperation",
        "description": "SEOUL, South Korea (AP) — North Korean leader Kim Jong Un met with Russian Defense Minister Sergei Shoigu to discuss military issues and the regional security environment, state media said Thursday as the country celebrated the 70th anniversary of an armistic…",
        "url": "https://apnews.com/037cb0dca2dda580dbdb3037dfd724a5",
        "urlToImage": "https://storage.googleapis.com/afs-prod/media/0e35747e1fde419cbea8dae0f9c02031/3000.jpeg",
        "publishedAt": "2023-07-27T00:26:05Z",
        "content": "SEOUL, South Korea (AP) — North Korean leader Kim Jong Un met with Russian Defense Minister Sergei Shoigu to discuss military issues and the regional security environment, state media said Thursday a… [+2425 chars]"
      },
      {
        "source": {
          "id": "bbc-news",
          "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Niger soldiers announce coup on national TV",
        "description": "Earlier elite troops detained Niger's President Bazoum - now they are closing the country's borders.",
        "url": "http://www.bbc.co.uk/news/world-africa-66320895",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/83B3/production/_115651733_breaking-large-promo-nc.png",
        "publishedAt": "2023-07-26T23:37:19.6291708Z",
        "content": "Soldiers have gone on national TV in Niger and announced that they have carried out a coup.\r\nThey said they had dissolved the constitution, suspended all institutions and closed the West African coun… [+443 chars]"
      },
      {
        "source": {
          "id": "reddit-r-all",
          "name": "Reddit /r/all"
        },
        "author": "Dan Ladden-Hall",
        "title": "Elon Musk’s Twitter Rebrand as ‘X’ Gets Site Blocked Under Indonesia Porn Laws",
        "description": "The domain X.com had previously been used by sites running afoul of the country’s rules on “negative” content.",
        "url": "https://www.thedailybeast.com/elon-musks-twitter-rebrand-as-x-gets-site-blocked-under-indonesia-porn-laws?via=twitter_page&amp;utm_source=twitter_owned_tdb&amp;utm_medium=socialflow&amp;utm_campaign=owned_social",
        "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_3094,w_5500,x_0,y_134/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1690376181/2023-07-25T140212Z_1237681836_RC2DA2AP5ONE_RTRMADP_3_TESLA-MUSK-SEC_rsjtcs",
        "publishedAt": "2023-07-26T13:43:19Z",
        "content": "Elon Musks radical rebranding of Twitter as X led to the site being blocked in Indonesia on Tuesday under the countrys strict laws restricting pornography and gambling.\r\nThe Southeast Asian countrys … [+2660 chars]"
      },
      {
        "source": {
          "id": "associated-press",
          "name": "Associated Press"
        },
        "author": "SAM MEDNICK",
        "title": "Mutinous soldiers claim to have overthrown Niger's president",
        "description": "NIAMEY, Niger (AP) — Mutinous soldiers claimed to have overthrown Niger's democratically elected president, announcing on state television late Wednesday that they have put an end to the government over the African country's deteriorating security.",
        "url": "https://apnews.com/96f8f63b838af5467d4c95ba7b998b32",
        "urlToImage": "https://storage.googleapis.com/afs-prod/media/808ccfbb894b48d0a227e467a95f4adc/2048.jpeg",
        "publishedAt": "2023-07-26T12:19:40Z",
        "content": "NIAMEY, Niger (AP) — Mutinous soldiers claimed to have overthrown Niger's democratically elected president, announcing on state television late Wednesday that they have put an end to the government o… [+5505 chars]"
      },
      {
        "source": {
          "id": "axios",
          "name": "Axios"
        },
        "author": "Alex Fitzpatrick, Kavya Beheraj",
        "title": "The country's new business hot spots, mapped",
        "description": "The Southeastern U.S. is a hotbed of new business activity.",
        "url": "https://www.axios.com/2023/07/13/new-business-hot-spots",
        "urlToImage": "https://images.axios.com/aDr8aF2q-EoHWlnE6VUNLPYxpRE=/0x0:1280x720/1366x768/2023/07/12/1689197791881.png",
        "publishedAt": "2023-07-13T09:30:06Z",
        "content": "The Southeastern U.S. is a hotbed of new business activity, home to nine of the top 10 major metro areas with the most new business applications per 1,000 residents last year.\r\nDriving the news: That… [+1716 chars]"
      },
      {
        "source": {
          "id": "the-next-web",
          "name": "The Next Web"
        },
        "author": "Ioanna Lykiardopoulou",
        "title": "Rapid delivery giant Getir quits France, citing regulation hurdles",
        "description": "Quick commerce platform Getir is bidding adieu to the French market — less than two years since starting its operations in the country.\r\n\r\nIn a press release sent to AFP, the company ...",
        "url": "http://thenextweb.com/news/quick-delivery-giant-getir-quits-france",
        "urlToImage": "https://img-cdn.tnwcdn.com/image/tnw-blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2023%2F06%2FUntitled-design-3-11.jpg&signature=01a135e05b853a78b83268994e4f2cbf",
        "publishedAt": "2023-06-22T11:21:08Z",
        "content": "Quick commerce platform Getir is bidding adieu to the French market less than two years since starting its operations in the country.\r\nIn a press release sent to AFP, the company said that it will so… [+1469 chars]"
      },
      {
        "source": {
          "id": "fortune",
          "name": "Fortune"
        },
        "author": "Eamon Barrett",
        "title": "A new report shows how badly the Trump administration slashed the U.S.’s climate credentials",
        "description": "The ranking from Yale University says decisions made by the Trump administration slashed the country's climate credentials",
        "url": "https://fortune.com/2022/06/01/trump-us-climate-action-paris-accord-methane-yale-environmental-performance-index/",
        "urlToImage": "https://content.fortune.com/wp-content/uploads/2022/06/GettyImages-1342340441-e1654072113634.jpg?resize=1200,600",
        "publishedAt": "2022-06-01T10:31:29Z",
        "content": "Skip to Content"
      },
      {
        "source": {
          "id": "rte",
          "name": "RTE"
        },
        "author": "RTÉ News",
        "title": "275,000 appointments made at Penneys this week",
        "description": "There have been 275,000 appointment slots booked for Penneys stores around the country this week, the retailer has said.",
        "url": "https://www.rte.ie/news/business/2021/0515/1221782-penneys/",
        "urlToImage": "https://img.rasset.ie/0016c07f-1600.jpg",
        "publishedAt": "2021-05-15T10:52:52Z",
        "content": "There have been 275,000 appointment slots booked for Penneys stores around the country this week, the retailer has said.\r\nPenney's 36 stores opened on an appointment-only basis from last Monday, with… [+577 chars]"
      }
    ]
    constructor(){
      super();
      // console.log("Hello"); 
      this.state = {
        articles: this.articles,
        loading: false
      }
    }
    render() {
        return (
            <div className="container my-3">
                <h2>NewsBlink - Top Headlines</h2>
                <div className="row">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                    </div>
                })}
                </div>
            </div>
        )
    }
}

export default News
