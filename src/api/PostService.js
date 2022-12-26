import axios from "axios";

const baseUrl = `https://jsonplaceholder.typicode.com/posts`;

class PostService {
  static async getData(limit = 10, page = 1) {
    const resp = await axios.get(baseUrl, {
      params: {
        _limit: limit,
        _page: page,
      },
    });
    return resp;
  }
  static async getDataById(id) {
    const resp = await axios.get(baseUrl + "/" + id);
    return resp;
  }
  static async getCommentsByPostId(id) {
    const resp = await axios.get(baseUrl + "/" + id + "/comments");
    return resp;
  }
}

export default PostService;
