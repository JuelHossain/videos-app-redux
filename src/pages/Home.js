import { Outlet } from "react-router-dom";
import Tags from "../components/tags/Tags";
import Pagination from "../components/ui/Pagination";
export default function Home() {
  return (
    <>
      <Tags />
      <Outlet />
      <Pagination />
    </>
  );
}
