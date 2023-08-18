import React, { useState } from "react";
import { Icon, Page } from "zmp-ui";
import "../../css/searchtrip.scss";
import bannertrip from "../../assets/images/bannertrip.jpg";
import { useNavigate } from "react-router-dom";
import { Calendar} from "antd";
const SearchtripPage = () => {
  const navigate = useNavigate();
  const [isShowCalendar, setIsShowCalendar] = useState(false);

  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };
  console.log({ isShowCalendar });
  return (
    <Page className="flex flex-col flex-1">
      {isShowCalendar && (
        <div className="fixed top-0 left-0 h-screen w-screen z-[999]">
          <div className="top-0 h-[10vh] w-screen bg-white">
            <button
              className="p-[10px] bg-red-500 "
              onClick={() => setIsShowCalendar(false)}
            >
              X
            </button>
          </div>
          <div className="absolute top-[50%] h-[90vh] w-screen left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <Calendar onPanelChange={onPanelChange} />
          </div>
        </div>
      )}

      <img src={bannertrip} />
      <div className="bg-primary py-2 flex-1 rounded-t-3xl overflow-hidden -mt-[20px]">
        <div className="flex justify-between items-center px-3 text-white">
          <div>
            <div
              onClick={() => setIsShowCalendar(!isShowCalendar)}
              className="relative"
            >
              <Icon icon="zi-calendar" />
            </div>
          </div>
          <Icon icon="zi-chevron-left" />
          <div className="text-center">
            <p>Khởi hành</p>
            <p>Thứ 5,17/08/2023</p>
          </div>
          <Icon icon="zi-chevron-right" />
          <div onClick={() => navigate("/filter")}>
            <Icon icon="zi-tune" />
          </div>
        </div>
        <div className=" rounded-t-3xl h-full bg-[#c4c4c4] overflow-hidden">
          <div className="loop-wrapper">
            <div className="mountain"></div>
            <div className="hill"></div>
            <div className="tree"></div>
            <div className="tree"></div>
            <div className="tree"></div>
            <div className="rock"></div>
            <div className="truck"></div>
            <div className="wheels"></div>
          </div>
          <div className="text-center">
            <h1 className="font-bold">Không tìm thấy chuyến xe</h1>
            <p>
              Các chuyến xe trong ngày đã tạm hết vé <br /> Qúy khách vui lòng
              thử lại sau <br /> hoặc chọn ngày khởi hành khác
            </p>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default SearchtripPage;
