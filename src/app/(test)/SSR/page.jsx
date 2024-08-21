import React from 'react'

const page = async () => {
    const newsJson = await fetch("https://jsonplaceholder.typicode.com/posts");

    const post = await newsJson.json();
    return (
        <div>page</div>
    )
}

export default page