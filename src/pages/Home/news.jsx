import React from "react";
import image from "../../assets/images/imagenews.jpg";
import { useNavigate } from "react-router-dom";
const News = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[60%]">
      <div className="flex justify-between items-center px-2">
        <h3 className="font-bold text-[20px]">Tin tức</h3>
        <h5 className="text-[#bc955e]">Xem tất cả</h5>
      </div>
      <div className="flex overflow-x-scroll py-[10px] px-[20px]">
        <div
          className="min-w-[250px] border-2  border-grey-color rounded-[20px] m-[5px] "
          onClick={() => navigate("/detainewslhome")}
        >
          <img src={image} className="w-full rounded-t-[20px]" />
          <h4 className="p-2 m-0 font-bold">
            LỄ KÍ KẾT HỢP TÁC PHÁT TRIỂN TUYẾN ĐƯỜNG BIỂN MÙA HÈ 2023 VỚI CÁT
            THIÊN HẢI TRAVEL
          </h4>
        </div>
        <div className="min-w-[250px] border-2  border-grey-color rounded-[20px] m-[5px] ">
          <img src={image} className="w-full rounded-t-[20px]" />
          <h5 className="p-2 m-0 font-bold">
            LẾ KÍ KẾT HỢP TÁC PHÁT TRIỂN TUYẾN ĐƯỜNG BIỂN MÙA HÈ 2023 VỚI CÁT
            THIÊN HẢI TRAVEL
          </h5>
        </div>
        <div className="min-w-[250px] border-2  border-grey-color rounded-[20px] m-[5px] ">
          <img src={image} className="w-full rounded-t-[20px]" />
          <h5 className="p-2 m-0 font-bold">
            LẾ KÍ KẾT HỢP TÁC PHÁT TRIỂN TUYẾN ĐƯỜNG BIỂN MÙA HÈ 2023 VỚI CÁT
            THIÊN HẢI TRAVEL
          </h5>
        </div>
      </div>
      <div className="footer">
        <p className="font-bold">Powered by Vexere.com CO.,LTD</p>
      </div>
    </div>
  );
};
export default News;
