import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { tagRemoved, tagSelected } from "../../features/filter/filterSlice";
export default function Tag({ title }) {
  const dispatch = useDispatch();
  const { tags } = useSelector((state) => state.filter);
  const isSelected = tags.includes(title) ? true : false;
  const navigate = useNavigate();
  useEffect(() => {
    if (tags.length > 0) {
      navigate("/");
    }
  }, [navigate, tags]);
  const style = isSelected
    ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
    : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";

  const handleSelect = () => {
    if (isSelected) {
      dispatch(tagRemoved(title));
    } else {
      dispatch(tagSelected(title));
    }
  };

  return (
    <div className={style} onClick={handleSelect}>
      {title}
    </div>
  );
}
