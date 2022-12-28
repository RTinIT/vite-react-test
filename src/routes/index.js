import About from "../pages/About";
import Content from "../pages/Content";
import Home from "../pages/Home";
import PostIdPage from "../pages/PostIdPage";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";

const routes = [
  { path: "/vite-react-test/home", element: Home },
  { path: "/vite-react-test/about", element: About, exact: true },
  { path: "/vite-react-test/content", element: Content, exact: true },
  { path: "/vite-react-test/content/:id", element: PostIdPage, exact: true },
  { path: "/vite-react-test/sign-in", element: SignIn, exact: true },
  { path: "/vite-react-test/sign-up", element: SignUp, exact: true },
];

export default routes;
