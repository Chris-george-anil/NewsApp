import React from 'react'
import NewsCard from '../../../src/components/card/news_card';

const Trending = ({ data, title }) => {


    return (
        <NewsCard data={data} title={title} />


    )
}

export default Trending;

// export async function getStaticPaths() {
//     const arr = ["business", "entertainment", "general", "health", "science", "sports", "technology"];
//     const allPaths = arr?.map((a) => {
//         return {
//             params: {
//                 top: a
//             }
//         }
//     });

//     return {
//         paths: allPaths, fallback: false
//     }
// }

export async function getServerSideProps(context) {
    const topic = context.query.top;
    console.log(context.query);
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${topic}&apiKey=9359210ff01a464796a0c0558242e088`);
    const data = await res.json();
    return { props: { data: data, title: topic } }
}