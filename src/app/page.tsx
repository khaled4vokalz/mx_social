import { getPosts } from "@/actions/post.action";
import { getDbUserId } from "@/actions/user.action";
import CreatePost from "@/components/create-post";
import PostCard from "@/components/post-card";
import WhoToFollow from "@/components/who-to-follow";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  const posts = await getPosts();
  const dbUserId = await getDbUserId();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
      <div className="lg:col-span-6">
        {user ? <CreatePost /> : null}
        <div className="space-y-6">
          {posts.map((post: any) => (
            <PostCard key={post.id} post={post} dbUserId={dbUserId}></PostCard>
          ))}
        </div>
      </div>
      <div className="hidden lg:block lg:col-span-4">
        <WhoToFollow />
      </div>
    </div>
  );
}
