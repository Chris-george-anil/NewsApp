import Link from 'next/link';
import React from 'react'

const NewsCard = ({ data, title }) => {
    const news = data.articles;
    return (
        <div className="content">
            {title && <h1>Top news based on {title} </h1>

            }


            {news.map(ev => (
                <Link key={ev.title} href={ev.url} target="_blank">
                    <div className='card'>
                        {ev.urlToImage ? <img src={ev.urlToImage} alt={"Image"} height={250} width={250} /> :
                            <img src={"/images/newspaper.png"} alt="Image" height={250} width={250} />
                        }
                        <div className='incard'>
                            <h2>{ev.title}</h2>
                            <h5> Source:  <i>{ev.author}</i> </h5>
                            <p>{ev.description}</p></div>
                    </div></Link>

            ))}

        </div>
    )
}

export default NewsCard