import React from "react";
import { Page } from "zmp-ui";
import { HeaderPrimary } from "../../components/header/header-primary";
import iconsearch from "../../assets/images/search.png";
import iconthongbao from "../../assets/images/iconthongbao.jpg";
const NotificationPage = () => {
  return (
    <Page className="flex flex-col flex-1">
      <HeaderPrimary title="Thông báo" />
      <div className="bg-primary py-2 flex-1 ">
        <div className="bg-white rounded-t-3xl py-4 overflow-hidden h-full">
          <div className="relative ">
            <img
              src={iconsearch}
              className="absolute translate-x-[-50%] p-2 t-[50%] left-9 "
            />
            <input
              type="text"
              placeholder="Nhập từ khóa"
              className="block p-2 w-[90%] border-2 border-[#D9D9D9] pl-[10%] m-5 rounded-2xl"
            />
          </div>
          <div className="flex justify-center items-center flex-col">
            <img src={iconthongbao} width="50%" />
            <h5>Không có thông báo nào</h5>
            <p className="text-orange-500">Cập nhật</p>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default NotificationPage;
