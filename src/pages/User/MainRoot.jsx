import { Outlet } from "react-router-dom";
import Footer from "../../components/User/Footer";
import Navbar from "../../components/User/Navbar";
import { useEffect, useState } from "react";

const MainRoot = () => {
  let [count, setCount] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("favorites")) {
      let favoritesLocal = JSON.parse(localStorage.getItem("favorites"));
      setCount(favoritesLocal);
    }
  }, []);
  return (
    <>
      <Navbar count={count} />
      <Outlet context={[count, setCount]} />
      <Footer count={count} />
    </>
  );
};

export default MainRoot;
