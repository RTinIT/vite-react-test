import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import PostForm from "../../components/PostForm";
import PostList from "../../components/PostList";
import PostFilter from "../../components/PostFilter";
import Button from "../../components/Button";
import ModalWindow from "../../components/ModalWindow";
import Pagination from "../../components/Pagination";
import PreLoader from "../../components/PreLoader";
import { usePosts } from "../../hooks/usePosts";
import useFetching from "../../hooks/useFetching";
import PostService from "../../api/PostService";
import { getPageCount } from "../../utils/getPageCount";

import "./style.css";

const Content = () => {
  const [postList, setPostList] = useState([]);

  const [filter, setFilter] = useState({
    sortParam: "",
    queryParam: "",
  });

  const [modalVisible, setModalVisible] = useState(false);

  const [limit, setLimit] = useState(10);

  const [pageNumber, setPageNumber] = useState(1);

  const [totalPages, setTotalPages] = useState(0);

  const navigate = useNavigate();

  const [getPosts, isLoading, error] = useFetching(async () => {
    const resp = await PostService.getData(limit, pageNumber);
    setPostList(resp.data);

    const totalCount = resp.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount));
  });

  const sortAndSearchedPosts = usePosts(
    postList,
    filter.sortParam,
    filter.queryParam
  );

  useEffect(() => {
    getPosts();
  }, [pageNumber]);

  const createPost = (newPost) => {
    setPostList([...postList, newPost]);
  };

  const deletePost = (post) => {
    setPostList(postList.filter((p) => p.id !== post.id));
  };

  const openModal = () => {
    if (!localStorage.getItem("isAuth")) {
      navigate("/vite-react-test/sign-in");
    }
    setModalVisible(!modalVisible);
  };

  const closeModal = (e) => {
    if (e.target.classList.contains("modal-content")) {
      setModalVisible(!modalVisible);
    }

    if (e.target.classList.contains("btn")) {
      setModalVisible(!modalVisible);
    }
  };

  const changePage = (page) => {
    setPageNumber(page);
  };

  return (
    <div className="container">
      <ModalWindow visible={modalVisible} closeModal={closeModal}>
        <PostForm create={createPost} />
      </ModalWindow>
      <div className="controls">
        <PostFilter filter={filter} setFilter={setFilter} />
        <Button onClick={openModal} className="controls-btn">
          <FontAwesomeIcon
            icon={faPlus}
            className="btn-icons"
            style={{ color: "green", paddingRight: ".3em" }}
          />
          <span>New post</span>
        </Button>
      </div>
      <hr style={{ width: "67vw", border: "1px solid var(--font-color)" }} />

      {error ? <h2>{error}</h2> : ""}
      {isLoading ? (
        <PreLoader limit={limit} addClass={"post-list"} addInscription={true} />
      ) : (
        <PostList
          posts={sortAndSearchedPosts}
          deletePost={deletePost}
          isLoading={isLoading}
        />
      )}
      <Pagination
        totalPages={totalPages}
        limit={limit}
        currPage={pageNumber}
        changePage={changePage}
      />
    </div>
  );
};

export default Content;
