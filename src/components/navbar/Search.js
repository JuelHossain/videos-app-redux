import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import { searched } from "../../features/filter/filterSlice";

export default function Search() {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.filter);

  const match = useMatch("/");
  const navigate = useNavigate();

  return (
    <input
      className="outline-none border-none mr-2"
      type="search"
      name="search"
      placeholder="Search"
      value={search}
      onChange={(e) => {
        dispatch(searched(e.target.value));
        if (!match) {
          navigate("/");
        }
      }}
    />
  );
}
