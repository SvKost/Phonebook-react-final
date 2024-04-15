import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
// import css from "../../components/App.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <main>
        <Suspense fallback={null}>{children}</Suspense>
      </main>
    </div>
  );
};

export default Layout;
