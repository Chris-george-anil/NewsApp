import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import NewsCard from '../../../src/components/card/news_card';


const Trending = ({ data }) => {
    const news = data.articles;
    const ref = useRef()
    const [categ, setcateg] = useState();
    const router = useRouter();

    const handleChange = async (e) => {
        e.preventDefault();
        console.log("Changed", e.target.value);

        setcateg(e.target.value);
        router.push(`/content/trending/${e.target.value}`)
    }
    const arr = ["business", "entertainment", "general", "health", "science", "sports", "technology"];
    return (
        <div className="content"> <h1>Trending Now</h1>
            <div>
                <select value={categ} onChange={handleChange} ref={ref} on>
                    <option selected="selected">
                        Choose a topic
                    </option>
                    {arr.map(a => (
                        <option key={a} value={a}>{a}</option>
                    ))}


                </select>
            </div>
            <NewsCard data={data} title="" />

        </div>
    )
}

export default Trending

export async function getStaticProps(context) {

    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=9359210ff01a464796a0c0558242e088`);
    const data = await res.json();
    return { props: { data: data } }
}
