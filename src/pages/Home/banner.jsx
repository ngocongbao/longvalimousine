import React from "react";

import banner from "../../assets/images/banner.jpg";
const Banner = () => {
  return (
    <div className="sticky top-0 left-0 right-0 z-[9]">
      <img src={banner}/>
    </div>
  );
};
export default Banner;
