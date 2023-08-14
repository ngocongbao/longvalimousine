import React, { useState } from "react"
import {  Modal, Page } from "zmp-ui"
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
import { useNavigate, } from "react-router-dom"

const UserPage = () => {
  const navigate = useNavigate()
  const [dialogVisible, setDialogVisible] = useState(false);
  return (
    <Page className="bg-primary flex-1  ">
      <HeaderSecond />
      <div>
        <div className="bg-white rounded-t-3xl py-4 overflow-hidden h-full ">
          <div className="flex justify-between rounded-lg bg-[#d9d9d9] p-[10px] m-5">
            <div className="!flex gap-[20px]" onClick={() => navigate("/refferal")}>
              <img src={iconinfo} />
              <p>Giới thiệu nhà xe</p>
            </div>
            <img src={iconback} className="w-[24px]" />
          </div>
          <div className="bg-[#d9d9d9] my-0 mx-5 rounded-lg">
            <div className="flex justify-between p-[10px] border-b-gray" onClick={() => navigate("/endow")}>
              <div className="!flex gap-[20px]" >
                <img src={iconvoucher} />
                <p >Ưu đãi</p>
              </div>
              <img src={iconback} className="w-[24px]" />
            </div>
            <div className="flex justify-between p-[10px] border-b-gray" onClick={() => navigate("/setting")}>
              <div className="!flex gap-[20px]" >
                <img src={iconsetting} />
                <p >Cài đặt</p>
              </div>
              <img src={iconback} className="w-[24px]" />
            </div>
            <div className="flex justify-between p-[10px] border-b-gray" onClick={() => navigate("/support")}>
              <div className="!flex gap-[20px]">
                <img src={iconhelp} />
                <p >Hỗ trợ</p>
              </div>
              <img src={iconback} className="w-[24px]" />
            </div>
            <div className="flex justify-between p-[10px] border-b-gray" onClick={() => { setDialogVisible(true) }}>
              <div className="!flex gap-[20px]" >
                <img src={iconlogout} />
                <p >Đăng xuất</p>
              </div>
            </div>
            <Modal
              visible={dialogVisible}
              title="Đăng xuất"
              onClose={() => {
                setDialogVisible(false)
              }}
              actions={[
                {
                  text: "Bỏ qua",
                  close: true,
                  highLight: true,
                },
                {
                  text: "Đồng ý",
                }
              ]}
              description="Bạn có muốn đăng xuất không"
            />
          </div>
          <div className="m-[18px]">
            <h1 className="font-bold">Công ty TNHH Vận tải Thương mại Long Vân Limousine</h1>
            <p>MST/ĐKKD/QĐTL:6001620751</p>
            <p>Trụ sở Doanh nghiệp :Số 49 Nguyễn Trãi,P.Thành Công ,Tp.Buôn Ma Thuộc,Đăk Lăk</p>
          </div>
          <div>
            <div className="flex gap-5 m-[10px] items-center">
              <img src={iconmap} className="w-[16px] h-[20px]" />
              <p>Văn phòng BMT:49 Nguyễn Trãi ,Thành Công ,Tp.BMT</p>
            </div>
            <div className="flex gap-5 m-[10px] items-center">
              <img src={iconphone} className="w-[20px]" />
              <p>190 025 2547</p>
            </div>
            <div className="flex gap-5 m-[10px] items-center">
              <img src={iconphone} className="w-[20px]" />
              <p>098 338 9779</p>
            </div>
            <div className="flex gap-5 m-[10px] items-center">
              <img src={iconmail} className="w-[20px]" />
              <p>nhaxelongvanlimousine@gmail.com</p>
            </div>
            <div className="flex gap-5 m-[10px] items-center">
              <img src={iconweb} className="w-[20px]" />
              <p>https://longvanlimousine.vn/</p>
            </div>
            <div className="flex gap-5 m-[10px] items-center">
              <img src={iconface} className="w-[20px]" />
              <p>https://www.facebook.com/LongVanLimo</p>
            </div>
          </div>
          <div>
            <p className="text-center pb-[20%] text-[#bc955e]">Liên hệ</p>
          </div>
        </div>
      </div>
    </Page>
  )
};

export default UserPage;
