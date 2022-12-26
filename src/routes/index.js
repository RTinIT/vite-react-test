import About from "../pages/About";
import Content from "../pages/Content";
import Home from "../pages/Home";
import PostIdPage from "../pages/PostIdPage";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";

const routes = [
  { path: "/", element: Home },
  { path: "/about", element: About, exact: true },
  { path: "/content", element: Content, exact: true },
  { path: "/content/:id", element: PostIdPage, exact: true },
  { path: "/sign-in", element: SignIn, exact: true },
  { path: "/sign-up", element: SignUp, exact: true },
];

export default routes;
