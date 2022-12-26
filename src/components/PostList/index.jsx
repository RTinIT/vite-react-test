import React from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import PostItem from "../../components/PostItem";
import "./style.css";

const PostList = ({ posts, deletePost }) => {
  const [parent, enableAnimations] = useAutoAnimate();

  const isNoPosts = (posts) => {
    return !posts.length ? (
      <h2>There are no posts here. </h2>
    ) : (
      <h2>Post's List</h2>
    );
  };

  return (
    <div className="post-list" ref={parent}>
      {isNoPosts(posts)}
      {posts.map((p, i) => (
        <PostItem post={p} deletePost={deletePost} key={p.id} />
      ))}
    </div>
  );
};

export default PostList;
