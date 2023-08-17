import React, { useState } from "react";
import { Page } from "zmp-ui";
import { HeaderThird } from "../../../components/header/header-third";
import iconvoucher2 from "../../../assets/images/iconvoucher2.png";
const UseEndowPage = () => {
  const [activeTab, setactiveTab] = useState("tab1");
  const handleTabSelect = (tabkey) => {
    setactiveTab(tabkey);
  };
  return (
    <Page className="flex flex-col">
      <HeaderThird title="Ưu đãi" />
      <div>
        <div className="flex justify-around items-center bg-[#D3D3D3] p-[10px] m-5 rounded-xl">
          <button
            onClick={() => handleTabSelect("tab1")}
            className={
              activeTab === "tab1"
                ? "active bg-orange-200 font-bold text-amber-600 px-10 h-[45px] rounded-md"
                : "px-10"
            }
          >
            Khả dụng
          </button>
          <button
            onClick={() => handleTabSelect("tab2")}
            className={
              activeTab === "tab2"
                ? "active bg-orange-200 font-bold text-amber-600 px-10 h-[45px] rounded-md"
                : "px-10"
            }
          >
            Hết hạn
          </button>
        </div>
      </div>
      <div className="mx-4 my-2 flex items-center bg-[#f8f5f5] rounded-xl overflow-hidden">
        <div className="flex-1 flex items-center ml-3">
          <img className="block w-8" src={iconvoucher2} />
          <input
            type="text"
            className="py-4 px-2 outline-none border-none w-full"
            placeholder="Nhập mã giảm giá"
          />
        </div>
        <button type="submit" className="bg-primary text-white h-full w-1/4">
          Áp dụng
        </button>
      </div>
      <div>
        <p className="text-center pt-3">Bạn chưa có coupon nào</p>
      </div>
    </Page>
  );
};
export default UseEndowPage;
