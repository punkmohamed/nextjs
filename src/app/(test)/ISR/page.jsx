import React from 'react'
export const revalidate = 60;
//  ssg default
//  ssr
// export const fetchCashe = "force-no-store"
// isr
// export const revalidate=60
const page = async () => {
    const newsJson = await fetch("https://jsonplaceholder.typicode.com/posts");

    const post = await newsJson.json();
    return (
        <div>page</div>
    )
}

export default page