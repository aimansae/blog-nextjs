"use server";

import { revalidatePath } from "next/cache";
import prisma from "./lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData) {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect('/api/auth/login')
  }
  const title = formData.get("title") as string;
  console.log(title);
  const body = formData.get("body") as string;
  console.log(body);

  // update the database
  await prisma.post.create({
    data: {
      title,
      body,
    },
  });

  revalidatePath("/posts/");
}
