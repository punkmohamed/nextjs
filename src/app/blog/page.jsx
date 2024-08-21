

import BlogCard from '@/components/BlogCard/BlogCard'
import axios from 'axios'
const Blog = async () => {

    // const response = await axios.get('http://localhost:3000/api/post')
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(response)
    const post = response.data

    return (
        <>
            <div className=' grid grid-cols-4 gap-5'>
                {post.map((item) => (
                    <BlogCard key={item.id}
                        title={item.title}
                        body={item.body}
                        pic={item.picture}
                        id={item.id} />
                ))}
            </div>
        </>
    )
}

export default Blog