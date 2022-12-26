import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import "./style.css";

const Pagination = ({ totalPages, limit, currPage, changePage }) => {
  const goNextPage = (e) => {
    if (currPage < totalPages) {
      changePage(currPage + 1);
    }
  };
  const goPrevPage = () => {
    if (currPage > 1) {
      changePage(currPage - 1);
    }
  };
  const goFirstPage = () => {
    changePage(1);
  };
  const goLastPage = () => {
    changePage(totalPages);
  };
  return (
    <div className="pagination-wrapper">
      <Button
        className={"pagination-btn"}
        onClick={goFirstPage}
        disabled={currPage === 1}
      >
        <FontAwesomeIcon icon={faAngleDoubleLeft} size="2x" />
      </Button>
      <Button
        className={"pagination-btn"}
        onClick={goPrevPage}
        disabled={currPage === 1}
      >
        <FontAwesomeIcon icon={faAngleLeft} size="2x" />
      </Button>
      <Button className={"pagination-btn"} active>
        <span>{currPage}</span>
      </Button>
      <Button
        className={"pagination-btn"}
        onClick={goNextPage}
        disabled={currPage === totalPages}
      >
        <FontAwesomeIcon icon={faAngleRight} size="2x" />
      </Button>
      <Button
        className={"pagination-btn"}
        onClick={goLastPage}
        disabled={currPage === totalPages}
      >
        <FontAwesomeIcon icon={faAngleDoubleRight} size="2x" />
      </Button>
    </div>
  );
};

export default Pagination;
