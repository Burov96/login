import { Link, Route, Routes } from "react-router-dom";
import Table from "../pages/table/Table";
import Homepage from "../pages/home/Homepage";
import "../index.scss";

const AppRoutes = (): JSX.Element => {
  return (
    <>
    <div className="outerDiv">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </div>
    <Link to="/" className="miniNavbarToHome"/>
    </>
  );
};

export default AppRoutes;
