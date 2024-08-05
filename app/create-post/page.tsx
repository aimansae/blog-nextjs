import React, { useActionState } from "react";
import { content } from "../content";
import { createPost } from "../actions";
import {
  getKindeServerSession,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import Form from "../components/Form";

const page = async () => {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login?post_login_redirect_url=/create-post");
  }
  return (
    <main className="text-center pt-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">
        {content.createPost.title}
      </h1>
      <Form/>
  
    </main>
  );
};

export default page;
