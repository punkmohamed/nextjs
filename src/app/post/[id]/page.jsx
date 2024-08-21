"use client"
import BlogCard from '@/components/BlogCard/BlogCard'
import { useRouter } from 'next/navigation';
import axios from 'axios'
import React from 'react'

const Post = async ({ params }) => {

    const paras = parseInt(params.id)
    const id = Number(params.id)
    const router = useRouter()
    // const mongoClient = new MongoClient("mongodb://localhost:27017/Nextjs");
    // const client = await mongoClient.connect();
    // const db = client.db();
    // const post = await db.collection("nextData").findOne({_id:id})
    // // console.log(router)
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${paras}`)
    const data = await response.json()
    // const response = await axios.get(`http://localhost:3000/api/post/${id}`)
    // const data = response.data


    return (
        <>
            <h1>Blog single page</h1>
            <div>Post{params.id}</div>
            <BlogCard id={data.id} body={data.body} title={data.title} />
            <div className=''>
                <button className='p-2 bg-red-200 mx-4' onClick={() => router.replace(`/post/${paras + 1}`)}>next</button>
                {paras === 1 ? '' : <button className='p-2 bg-red-200 mx-4' onClick={() => router.replace(`/post/${paras - 1}`)}>previous</button>}
            </div>
        </>
    )
}

export default Post