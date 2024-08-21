import React from 'react'

const ContactUs = ({ params }) => {
    console.log(params.slug)
    return (
        <ul>
            {params.slug?.map((item) => (<li>{item}</li>))}
        </ul>
    )
}

export default ContactUs