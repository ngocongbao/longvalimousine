
import React from "react";
import {  Box, Page } from "zmp-ui";
import { HeaderPrimary } from "../../components/header/header-primary";
import iconsearch from "../../assets/images/search.png"
import iconthongbao from "../../assets/images/iconthongbao.jpg"
const NotificationPage = () => {
  return(
    <Page className="flex flex-col flex-1">
      <HeaderPrimary title="Thông báo"/>
      <Box className="bg-primary py-2 flex-1 ">
        <Box className="bg-white rounded-t-3xl py-4 overflow-hidden h-full">
          <Box className="relative ">
            <img src={iconsearch} style={{
              position:"absolute",
              transform: "translateY(-50%)",
              padding:"8px",
              top:"50%",
              left:"20px",
              
            }}/>
            <input type="text" placeholder="Nhập từ khóa"
             style={{
              display:"block",
              height:"40px",
              width:"90%",
              border:"1px solid #D9D9D9",
              paddingLeft:"10%",
              margin:"20px",
              borderRadius:"15px"
             }}
            />
          </Box>
          <Box style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
          <img src={iconthongbao} width="50%" />
          <h5>Không có thông báo nào</h5>
          <p className="text-orange-500">Cập nhật</p>
          </Box>
        </Box>
      </Box>
    </Page>
  )
};

export default NotificationPage;

