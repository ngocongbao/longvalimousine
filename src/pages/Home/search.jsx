import React from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate=useNavigate()
  return (
    <div className="bg-[#bc955e] p-3 m-5 rounded-xl z-10" onClick={()=>navigate("/searchtrip")} >
      <p className="text-white text-center ">Tìm chuyến đi</p>
    </div>
  );
};
export default Search;
