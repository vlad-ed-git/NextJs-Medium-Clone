
import Banner from '../components/home/Banner'
import LatestPosts from '../components/home/LatestPosts';
import { GenDummyPosts } from '../data/dummy_gen/GenDummyPosts'
import { Post } from '../data/schemas/Post';

interface Props {
    posts : [Post],
}

export default function Home( { posts } : Props ) {
  console.log(posts);

  return (
   <main className="font-serif">
     <Banner />
     <LatestPosts posts={posts} />
   </main>
  )
}

export const getServerSideProps = async () => {
    const posts = await GenDummyPosts(1, true, 10);
    return {
      props : {
        posts
      }
    }
}