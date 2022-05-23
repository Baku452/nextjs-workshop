import React from 'react';
import Layout from '../../shared/layouts/layout.component';


const NewsComment  = ({newPostJson}) => {
    return ( 
        <Layout>
            <h1>{newPostJson.title}</h1>
        </Layout>
     );
}

export async function getStaticPaths(){
    const req = await fetch('https://node-hnapi.herokuapp.com/news');
    const news = await req.json();
    console.log(req)
    const paths = news.map(item => (
        {
            params: {id: item.id}
        }
    ))
    return { paths:paths, fallback: true }
}
 
export async function getStaticProps({params}){
    const newPost = await fetch(`https://node-hnapi.herokuapp.com/item/${params.id}`)
    const newPostJson = await newPost.json();

    return {
        props: {
            newPostJson
        }, revaliste: 60
    }
}

export default NewsComment;