import React, { useEffect, useState } from "react";
import Button from "../Button";
import Input from "../Input";
import "./style.css";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  const addPost = (e) => {
    e.preventDefault();

    const newPost = {
      ...post,
      id: Date.now(),
    };

    create(newPost);

    setPost({
      title: "",
      body: "",
    });
  };

  return (
    <form className="post-form">
      <h2>Add new post</h2>
      <Input
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        placeholder="add title"
      />
      <Input
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        placeholder="add text"
      />
      <Button onClick={addPost} className="form-btn">
        Create
      </Button>
    </form>
  );
};

export default PostForm;
