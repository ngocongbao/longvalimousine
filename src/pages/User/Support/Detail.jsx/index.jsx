import React from "react";
import { HeaderThird } from "../../../../components/header/header-third";
import logo from "../../../../assets/images/logo.png";
import gridview from "../../../../assets/images/gridview.png";
import longvan from "../../../../assets/images/longvan.png";
import iconmap from "../../../../assets/images/iconmap.png";
import iconcall2 from "../../../../assets/images/iconcall2.png";
import iconmail2 from "../../../../assets/images/iconmail2.png";
import iconface from "../../../../assets/images/iconfacebook1.png";
import icontiktok from "../../../../assets/images/icontiktok.png";
import iconyoutube from "../../../../assets/images/iconyoutube.png";
const UseDetailPage = () => {
  return (
    <div>
      <HeaderThird title="Chi tiết" />
      <div>
        <div className="flex flex-1 bg-white flex-col">
          <div className="bg-[#bc955e] flex justify-between items-center h-[60px] px-3 mt-1">
            <img src={logo} className="w-1/3" />
            <img src={gridview} />
          </div>
          <div>
            <div className="text-center">
              <p className="font-bold text-[20px] leading-6">
                This page could <br /> not be found
              </p>
              <p>
                We are sorry .But the page you are looking for is not available
              </p>
              <p> Perhaps you can try a new search</p>
            </div>
            <div className="flex justify-center items-center flex-col">
              <input
                type="text"
                placeholder="Search"
                className="p-2 border border-black-600 w-[90%] m-3"
              />
              <button className="bg-[#14AFF1] p-3 text-white m-3">
                BACK TO HOMEPAGE
              </button>
            </div>
          </div>
        </div>
        <div className="p-5">
          <div>
            <img src={longvan} className="w-1/2 mb-5" />
            <p>Công ty TNHH Vận tải Thương mại Long Vân Limousine </p>
            <p>MST/ĐKKD/QĐTL:6001620751</p>
            <p>
              Trụ sở Doanh nghiệp :Số 49 Nguyễn Trãi ,P Thành Công ,Tp.Buôn Ma
              Thuộc,Đăk Lắk
            </p>
          </div>
          <div>
            <p className="font-bold py-2">Đăng kí nhận tin</p>
            <label>Email</label>
            <input
              type="text"
              placeholder='"Địa chỉ Email'
              className="p-2 border border-orange-600 w-[90%] m-3"
            />
            <button className="bg-[#bc955e] px-5 py-3 block m-auto text-white">
              Gửi
            </button>
            <p className="w-full border-2 border-black my-5"></p>
          </div>
          <div>
            <div className="flex">
              <img src={iconcall2} />
              <p className="pl-3">1900 25 25 47- 0983 389 779</p>
            </div>
            <div className="flex">
              <img src={iconmail2} />
              <p className="pl-3">nhaxelongvanlimousine@gmail.com</p>
            </div>
            <div className="flex">
              <img src={iconmap} className="my-auto" />
              <p className="pl-3">
                Văn phòng BMT:49 Nguyễn Trãi,Thành Công,Tp.BMT
              </p>
            </div>
          </div>
          <div>
            <p className="font-bold my-3">Về chúng tôi</p>
            <div className="leading-8">
              <p>Về chúng tôi</p>
              <p>Tin tức</p>
              <p>Ưu đãi- Khuyễn mãi</p>
              <p>Văn phòng chi nhánh</p>
              <p>Đối tác</p>
              <p>Liên hệ</p>
            </div>
          </div>
          <div>
            <p className="font-bold my-3">Tuyến phổ biến</p>
            <div className="leading-8">
              <p>Sài Gòn -Đà Lạt</p>
              <p>Sài Gòn - Buôn Ma Thuộc</p>
              <p>Buôn Ma Thuộc - Sài Gòn</p>
              <p>Buôn Ma Thuộc - Gia Nghĩa</p>
            </div>
          </div>
          <div>
            <p className="font-bold my-3">Khách hàng</p>
            <div className="leading-8">
              <p>Chính sách đổi trả vé</p>
              <p>Chính sách thanh toán</p>
            </div>
          </div>
        </div>
        <div className="bg-[#29414B] ">
          <p className="text-white text-center">
            Copyright @ 2023 VeXeRe & LongVanLimousine -All <br /> Rights
            Reserved
          </p>
          <div className="flex justify-center items-center gap-3 p-4 ">
            <img
              src={iconface}
              className="bg-white p-2 h-[40px] max-w-[40px] rounded-md"
            />
            <img
              src={icontiktok}
              className="bg-white p-2 h-[40px] max-w-[40px] rounded-md"
            />
            <img
              src={iconyoutube}
              className="bg-white p-2 h-[40px] max-w-[40px] rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseDetailPage;
