
import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ title, body, id, pic }) {
    return (
        <div className="p-4 shadow-2xl ">
            <div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
                <div className="flex items-center mb-3">
                    <Image
                        src={pic}
                        width={600}
                        height={400}
                    />
                    {/* <img src={images} width={200} height={100} alt="" /> */}
                    <div
                        className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                    </div>
                    <h2 className="text-white dark:text-white text-lg font-medium">{title}</h2>
                </div>
                <div className="flex flex-col justify-between flex-grow">
                    <p className="leading-relaxed text-base text-white dark:text-gray-300">
                        {body}
                    </p>
                    <div className="flex justify-between align-middle mt-3">
                        <Link href={`/post/${id}`}>
                            <button class='p-3 bg-blue-800'>Read more</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}
