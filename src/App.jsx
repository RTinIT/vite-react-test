import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const App = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <SkeletonTheme
        baseColor="var(--bg-color-dark)"
        highlightColor="var(--bg-color-light)"
      >
        <Header />
        <MainContent />
        <Footer />
      </SkeletonTheme>
    </>
  );
};

export default App;
