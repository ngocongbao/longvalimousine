
import React, { useState } from "react";
import { HeaderPrimary } from "../../components/header/header-primary";
import {Page} from "zmp-ui";
import route from "../../assets/images/route.png"
const TripPage = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const handleTabSelect = (tabKey) => {
    setActiveTab(tabKey);
  };
  return (
    <Page className="flex flex-col flex-1 ">
      <HeaderPrimary title="Chuyến của tôi" />
      <div className="bg-primary py-2 flex-1 ">
        <div className="bg-white rounded-t-3xl py-4 overflow-hidden h-full">
          <div className=" flex justify-around items-center bg-[#FFEEDA] p-1 m-5 rounded-xl">
            <button
              onClick={() => handleTabSelect('tab1')}
              className={activeTab === 'tab1' ? 'active bg-white text-amber-600 px-6 h-[40px] rounded-md' : 'px-6'}
            >
              Hiện tại
            </button>
            <button
              onClick={() => handleTabSelect('tab2')}
              className={activeTab === 'tab2' ? 'active bg-white  text-amber-600 px-6 h-[40px] rounded-md' : 'px-6'}
            >
              Đã đi
            </button>
            <button
              onClick={() => handleTabSelect('tab3')}
              className={activeTab === 'tab3' ? 'active bg-white  text-amber-600 px-6 h-[40px] rounded-md' : 'px-6'}
            >
              Đã hủy
            </button>
          </div>
          <div>
            {
              activeTab === 'tab1' && <div className="flex justify-center items-center flex-col mt-[50%]">
                <img src={route} className="w-14" />
                <span>Bạn chưa có </span>
              </div>
            }
             {
              activeTab === 'tab2' && <div className="flex justify-center items-center flex-col mt-[50%]">
                <img src={route} className="w-14" />
                <span>hành trình nào</span>
              </div>
            }
             {
              activeTab === 'tab3' && <div className="flex justify-center items-center flex-col mt-[50%]">
                <img src={route} className="w-14" />
                <span>sắp tới</span>
              </div>
            }
          </div>
        </div>
      </div>
    </Page>

  );
};

export default TripPage;

