
import React, { useState } from "react";
import { HeaderPrimary } from "../../components/header/header-primary";
import { Box, Page } from "zmp-ui";
import route from "../../assets/images/route.png"
const TripPage = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const handleTabSelect = (tabKey) => {
    setActiveTab(tabKey);
  };
  return (
    <Page className="flex flex-col flex-1 ">
      <HeaderPrimary title="Chuyến của tôi" />
      <Box className="bg-primary py-2 flex-1 ">
        <Box className="bg-white rounded-t-3xl py-4 overflow-hidden h-full">
          <Box className="" style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            background: "#FFEEDA",
            padding: "5px",
            margin: "20px",
            borderRadius:"10px"
          }}>
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
          </Box>
          <Box>
            {
              activeTab === 'tab1' && <Box style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",marginTop:"50%"}}>
                <img src={route} width={50} />
                <span>Bạn chưa có </span>
              </Box>
            }
             {
              activeTab === 'tab2' && <Box style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",marginTop:"50%"}}>
                <img src={route} width={50} />
                <span>hành trình nào</span>
              </Box>
            }
             {
              activeTab === 'tab3' && <Box style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",marginTop:"50%"}}>
                <img src={route} width={50} />
                <span>sắp tới</span>
              </Box>
            }
          </Box>
        </Box>
      </Box>
    </Page>

  );
};

export default TripPage;

