

import Upvote from "@/app/components/Upvote";
import prisma from "@/app/lib/db";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: { id: string };
};

type PostProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
const PageDetail = async ({ params: { id } }: Props) => {
  const post = await prisma.post.findUnique({
    where:{
      id: parseInt(id)
    }
  });

  if(!post){
    notFound()
  }
  return (
    <main className="text-center pt-32 pyx-5">
    <h1 className="text-4xl md:text-5xl font-bold mb-5">
      {post.title}
    </h1>
    <p className="max-w-[750px] mx-auto leading-8">
      {post.body}
    </p>
<Upvote/>
  </main>
  );
};

export default PageDetail;
