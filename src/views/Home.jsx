import NewPost from "../components/NewPost"
import PostList from "../components/PostList"

export default function Home() {
  return <>
    <div className="mb-6">
      <NewPost></NewPost>
    </div>
    <div>
      <PostList></PostList>
    </div>
  </>
}