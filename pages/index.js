import Head from 'next/head'
import Layout from '../shared/layouts/layout.component'
import CardNew from '../shared/components/cardNew'
import React, {useEffect, useState} from 'react';


function Home({posts}) {
  const [news, setPosts] = useState();

  useEffect(() => {
    fetch("https://node-hnapi.herokuapp.com/news")
    .then((response) => response.json())  
    .then((res) => setPosts(res));
  }, [])
  
  return (
    <>
      <Head>
        <title>Hacker News | Workshop</title>
        <meta name="description" content="Hacker News | Workshop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {news ? 
            (news.map( item => (
                <CardNew id={item.id} key={item.title} number={item.number} url={item.url} title={item.title} points={item.points} user={item.user} time_ago={item.time_ago} comments_count={item.comments_count}/>
          ))) : null
        }
      </Layout>
    </>
  )
}


export async function getServerSideProps(){
  const res = await fetch('https://node-hnapi.herokuapp.com/news')
  const posts = await res.json()
  return {
    props: {
      posts,
    }
  }
}

export default Home