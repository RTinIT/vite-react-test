import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetching from "../../hooks/useFetching";
import PostService from "../../api/PostService";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import PreLoader from "../../components/PreLoader";
import "./style.css";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [getDataById, isLoading, error] = useFetching(async () => {
    const resp = await PostService.getDataById(params.id);
    setPost(resp.data);
  });
  const [getCommentsByPostId, isCommentLoading, commentError] = useFetching(
    async () => {
      const resp = await PostService.getCommentsByPostId(params.id);
      setComments(resp.data);
    }
  );

  useEffect(() => {
    getDataById();
    getCommentsByPostId();
  }, []);

  return (
    <div className="container">
      <div className="post-list">
        <h2>Comments by post:</h2>
        <h2 style={{ color: "var(--font-color)" }}>
          {capitalizeFirstLetter(post.title)}
        </h2>
      </div>
      <div className="comments-wrapper">
        {isLoading ? (
          <PreLoader limit={6} rowsCount={3} addClass={"comments-wrapper"} />
        ) : (
          <div className="comments">
            {comments.map((c, i) => (
              <article className="comment" key={c.id}>
                <div className="comment-text">
                  <p className="comment-author">
                    {i + 1}. {c.email}
                  </p>
                  <h3 className="comment-title">
                    {capitalizeFirstLetter(c.name)}
                  </h3>
                  <p className="comment-body">{c.body}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostIdPage;
