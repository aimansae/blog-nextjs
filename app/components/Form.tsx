'use client'

import React, { useRef } from "react";
import { createPost } from "../actions";

const Form = () => {
    const ref = useRef<HTMLFormElement>(null)
  return (
    <form
      action={async formData=>{
        ref.current?.reset(); await createPost(formData)}}
      className="flex flex-col max-w-[450px] gap-2 mx-auto my-10"
    >
      <input
        className="border rounded h-10 px-3 "
        placeholder="Title for new post"
        type="text"
        name="title"
        required
      />
      <textarea
        name="body"
        placeholder="Content for new post"
        className="border rounded px-3 py-2"
        rows={6}
        required
      />
      <button className="h-10 bg-blue-500 px-5 rounded text-white">
        Submit
      </button>
    </form>
  );
};

export default Form;
