import Link from "next/link";
import { Post } from "../../data/schemas/Post";

function LatestPosts({ posts,  } : {posts : [Post], }) {
  return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap m-4">
   {posts.map(
       post => (
           <Link key={post.id} href={`/post/${post.slug}`}>
               <div className="flex flex-col group cursor-pointer border rounded-lg overflow-hidden">
                   {post.featuredImage &&
                        <img src={post.featuredImage?.url} alt="post image" className="h-60 w-auto object-cover object-center group-hover:scale-105 transition-transform duration-200 ease-in-out" /> 
                    }
                   <h3 className="px-5 mt-2 text-large font-bold">               
                       {post.title}
                   </h3>
                   <h5 className="px-5 mt-1 mb-3 text-gray-600 font-sans">
                       By <b>{post.writtenBy.userName}</b>
                   </h5>
               </div>
           </Link>
       )
   )}

  </div>;
}

export default LatestPosts;
