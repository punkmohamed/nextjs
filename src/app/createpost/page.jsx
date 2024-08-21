import clientPromise from "@/lib/mongodb";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import axios from 'axios'
const CreatePost = () => {
    const createPost = async (formData) => {
        // "use server";
        // const title = formData.get("title");
        // const body = formData.get("body");
        // const resopnse = axios.post('http://localhost:3000/api/post', { title, body })
        // revalidatePath("/blog")
        // redirect('/blog')
    }
    return (
        <form action={createPost}>
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-2xl font-semibold">Create Post</h1>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="relative">
                                        <input autocomplete="off" id="title" name="title" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Title" />
                                        <label htmlFor="title" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Title</label>
                                    </div>
                                    <div className="relative">
                                        <textarea autocomplete="off" id="body" name="body" className="peer placeholder-transparent w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600 resize-none" placeholder="Body" rows="4" />
                                        <label htmlFor="body" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Body</label>
                                    </div>
                                    <div className="relative">
                                        <button className="bg-cyan-500 text-white rounded-md px-2 py-1" type="submit">Create</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default CreatePost;
