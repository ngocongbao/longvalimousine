import React from "react"
import { Box, Page, Text } from "zmp-ui"
import HeaderSecond from "../../components/header/header-second"
import iconinfo from "../../assets/images/iconinfo.png"
import iconback from "../../assets/images/iconback.png"
import iconvoucher from "../../assets/images/iconvoucher.png"
import iconsetting from "../../assets/images/iconsettings.png"
import iconhelp from "../../assets/images/iconhelp.png"
import iconlogout from "../../assets/images/iconlogout.png"
import iconmap from "../../assets/images/iconmap2.png"
import iconphone from "../../assets/images/iconcall.png"
import iconmail from "../../assets/images/iconmail.png"
import iconweb from "../../assets/images/iconweb.png"
import iconface from "../../assets/images/iconfacebook.png"
import "../User/user.scss"
import { useNavigate } from "react-router-dom"

const UserPage = () => {
  const navigate = useNavigate()

  return (

    <Page className="bg-primary flex-1  ">
      <HeaderSecond />

      <Box >
        <Box className="bg-white rounded-t-3xl py-4 overflow-hidden h-full ">
          <Box className="box-user1">
            <Box className="!flex gap-[20px]" onClick={() => navigate("/refferal")}>
              <img src={iconinfo} />
              <p>Giới thiệu nhà xe</p>
            </Box>
            <img src={iconback} className="w-[24px]" />
          </Box>
          <Box className="wrapper">
            <Box className="box-user  " onClick={()=>navigate("/endow")}>
              <Box className="!flex gap-[20px]" >
                <img src={iconvoucher} />
                <p >Ưu đãi</p>
              </Box>
              <img src={iconback} className="w-[24px]" />
            </Box>
            <Box className="box-user" onClick={()=>navigate("/setting")}>
              <Box className="!flex gap-[20px]" >
                <img src={iconsetting} />
                <p >Cài đặt</p>
              </Box>
              <img src={iconback} className="w-[24px]" />
            </Box>
            <Box className="box-user" onClick={()=>navigate("/support")}>
              <Box className="!flex gap-[20px]">
                <img src={iconhelp} />
                <p >Hỗ trợ</p>
              </Box>
              <img src={iconback} className="w-[24px]" />
            </Box>
            <Box className="box-user">
              <Box className="!flex gap-[20px]">
                <img src={iconlogout} />
                <p >Đăng xuất</p>
              </Box>
            </Box>
          </Box>
          <Box className="address">
            <Text className="titlte">Công ty TNHH Vận tải Thương mại Long Vân Limousine</Text>
            <Text>MST/ĐKKD/QĐTL:6001620751</Text>
            <Text>Trụ sở Doanh nghiệp :Số 49 Nguyễn Trãi,P.Thành Công ,Tp.Buôn Ma Thuộc,Đăk Lăk</Text>
          </Box>
          <Box>
            <Box className="contact">
              <img src={iconmap} className="w-[16px] h-[20px]" />
              <Text>Văn phòng BMT:49 Nguyễn Trãi ,Thành Công ,Tp.BMT</Text>
            </Box>
            <Box className="contact">
              <img src={iconphone} className="w-[20px]" />
              <Text>190 025 2547</Text>
            </Box>
            <Box className="contact">
              <img src={iconphone} className="w-[20px]" />
              <Text>098 338 9779</Text>
            </Box>
            <Box className="contact">
              <img src={iconmail} className="w-[20px]" />
              <Text>nhaxelongvanlimousine@gmail.com</Text>
            </Box>
            <Box className="contact">
              <img src={iconweb} className="w-[20px]" />
              <Text>https://longvanlimousine.vn/</Text>
            </Box>
            <Box className="contact">
              <img src={iconface} className="w-[20px]" />
              <Text>https://www.facebook.com/LongVanLimo</Text>
            </Box>
          </Box>
          <Text style={{color:"#af671a",paddingBottom:"30%",textAlign:"center"}}>Liên hệ</Text>
        </Box>
      </Box>
    </Page>
  )
};

export default UserPage;
