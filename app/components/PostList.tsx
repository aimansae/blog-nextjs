import Link from "next/link";

import React from "react";
import prisma from "../lib/db";
type PostsProps = {
  userId: 1;
  id: number;
  title: string;
  body: string;
};

const PostList = async () => {

  const posts = await prisma.post.findMany()  


  return (
    <>
      {" "}
      <ul className="">
        {posts.map((post) => (
          <li key={post.id} className="mb-3">
            <Link href={`/posts/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
