import React from 'react'

import NewsCard from '../../src/components/card/news_card';

const News = ({ data, title }) => {


    return (
        <NewsCard data={data} title={title} />

    )
}

export default News;

export async function getServerSideProps(context) {
    const query = context.query.news;
    if (!query) {
        return {
            props: {
                data: "Nothing"
            }
        }
    }
    const res = await fetch(`https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=${process.env.API_KEY}`);
    const data = await res.json();
    // console.log("Slug", data);
    return { props: { data: data, title: query } }
}
