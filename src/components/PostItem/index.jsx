import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faComment } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const PostItem = ({ post, deletePost }) => {
  const navigate = useNavigate();

  return (
    <div className="post">
      <div className="post-heading">
        <h2 className="post-title">
          <span>{post.id}. </span>
          {capitalizeFirstLetter(post.title)}
        </h2>
        <div className="btns-wrapper">
          <Button
            className={"post-btn"}
            onClick={() =>
              localStorage.getItem("isAuth")
                ? navigate("/vite-react-test/content/" + post.id)
                : navigate("/vite-react-test/sign-in")
            }
          >
            <FontAwesomeIcon icon={faComment} className="btn-icons" />
          </Button>
          <Button
            className={"post-btn"}
            onClick={() =>
              localStorage.getItem("isAuth")
                ? deletePost(post)
                : navigate("/vite-react-test/sign-in")
            }
          >
            <FontAwesomeIcon icon={faClose} className="btn-icons" />
          </Button>
        </div>
      </div>
      <div className="post-content">
        <p>{post.body}</p>
      </div>
    </div>
  );
};

PostItem.displayName = "PostItem";

export default PostItem;
