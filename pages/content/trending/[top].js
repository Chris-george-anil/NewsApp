import React from 'react'
import NewsCard from '../../../src/components/card/news_card';

const Trending = ({ data, title }) => {


    return (
        <NewsCard data={data} title={title} />


    )
}

export default Trending;

export async function getStaticPaths() {
    const arr = ["business", "entertainment", "general", "health", "science", "sports", "technology"];
    const allPaths = arr?.map((a) => {
        return {
            params: {
                top: a
            }
        }
    });

    return {
        paths: allPaths, fallback: false
    }
}

export async function getStaticProps(context) {
    const topic = context.params.top;
    console.log(context.query);
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${topic}&apiKey=${process.env.API_KEY}`);
    const data = await res.json();
    return { props: { data: data, title: topic } }
}