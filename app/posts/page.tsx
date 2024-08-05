import React, { Suspense } from "react";
import { content } from "../content";
import PostList from "../components/PostList";

const PostsPage = async () => {
  return (
    <main className="text-center pt-32 pyx-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">
        {content.posts.title}
      </h1>
      <Suspense fallback={"Loading..."}>
        <PostList />
      </Suspense>
    </main>
  );
};

export default PostsPage;
