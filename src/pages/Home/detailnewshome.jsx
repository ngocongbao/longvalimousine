import React from "react";
import { Icon, Page } from "zmp-ui";
import { HeaderThird } from "../../components/header/header-third";
import logo from "../../assets/images/logo.png";
import image from "../../assets/images/imagenews.jpg";
import longvan from "../../assets/images/longvan.png";
import iconmail2 from "../../assets/images/iconmail2.png";
import iconface from "../../assets/images/iconfacebook1.png";
import icontiktok from "../../assets/images/icontiktok.png";
import iconyoutube from "../../assets/images/iconyoutube.png";
const UseDetailnewshome = () => {
  return (
    <Page>
      <HeaderThird title="Chi tiết" />
      <div>
        <div className="bg-[#bc955e] flex justify-between items-center h-[50px] px-3 mt-1">
          <img src={logo} className="w-1/3" />
           <Icon icon="zi-more-grid" className="text-white"/>
        </div>
        <div className="mx-3">
          <div>
            <img src={image} className="rounded-xl my-4" />
            <h1 style={{ fontWeight: "bold" }}>
              LỄ KÍ KẾT HỢP TÁC PHÁT TRIỂN TUYẾN ĐƯỜNG BIỂN MÙA HÈ 2023 VỚI CÁT
              THIÊMN HẢI TRAVEL
            </h1>
          </div>
          <div>
            <p>
              Ngày 08/07/2023 ,Long Vân Limousine phối hợp cùng với Cát Thiên
              Hải Travel tiến hành lễ kí hợp tác phát triển tại văn phòng Long
              Vân Limousine chi nhánh Bình Thạnh -Sài Gòn.Long Vân Limousine và
              Cát Thiên Hải Travel ,mỗi bên cử ra 2 đại diện để cùng kí kết văn
              bản hợp tác phát triển lần này
            </p>
            <p>
              Nhầm mục tiêu phủ rộng mạng lưới ,đưa thương hiệu vận tải Long Vân
              Limosine đến gần hơn với khách hàng tại Nha Trang,Mũi Né ,Phan
              Thiết.Đồng thời ,với mục tiêu phát triển tối đa hệ thống dịch vụ
              vận tải góp phần nâng cao chất lượng và dịch vụ vận tải ,góp phần
              nâng cao chất lựog và dịch vụ cho sự phát triển kinh tế -xã hội
              cho khu vực và đất nước .Long Vân Limousine và Cát Thiên Hải
              Travel thảo luận và đi đến thống nhất liên kết hợp tác trong phát
              triển dịch vụ vận tải tuyến đường biển .Việc phối hợp cùng Cát
              Thiên Hải Travel lần này là quyết tâm và tâm huyết của Long Vân
              Limousine để sớm hoàn thiện đượuc hệ thống vận tải khắp các tỉnh
              ,thành phố trên cả nước ,mang thương hiệu dịch vụ đến gần hơn với
              khách hàng tại địa phương
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 bg-[#c0c9cf] p-3">
        <div>
          <img src={longvan} className="mb-2" />
          <p>Công ty TNHH Vận tải Thương mại Long Vân Limousine </p>
          <p>MST/ĐKKD/QĐTL:6001620751</p>
          <p>
            Trụ sở Doanh nghiệp :Số 49 Nguyễn Trãi ,P Thành Công ,Tp.Buôn Ma
            Thuộc,Đăk Lắk
          </p>
        </div>
        <div>
          <p className="font-bold my-2">Đăng kí nhận tin</p>
          <label>Email</label>
          <input
            type="text"
            placeholder='"Địa chỉ Email'
            className="w-full p-2 "
          />
          <button className="block m-auto bg-[#bc955e] p-3 my-3 text-white">
            Gửi
          </button>
          <p className="w-full h-[1px] bg-black my-4"></p>
        </div>
        <div className="mt-3">
          <div className="flex">
            <Icon icon="zi-call" className="text-[#bc955e]"/>
            <p className="pl-3">1900 25 25 47- 0983 389 779</p>
          </div>
          <div className="flex">
            <img src={iconmail2} />
            <p className="pl-3">nhaxelongvanlimousine@gmail.com</p>
          </div>
          <div className="flex">
            <Icon icon="zi-location" className="text-[#bc955e]"/>
            <p className="pl-3">
              Văn phòng BMT:49 Nguyễn Trãi,Thành Công,Tp.BMT
            </p>
          </div>
          <div>
            <p className="font-bold my-3">Về chúng tôi</p>
            <p>Về chúng tôi</p>
            <p>Tin tức</p>
            <p>Ưu đãi- Khuyễn mãi</p>
            <p>Văn phòng chi nhánh</p>
            <p>Đối tác</p>
            <p>Liên hệ</p>
          </div>
          <div>
            <p className="font-bold my-3">Tuyến phổ biến</p>
            <p>Sài Gòn -Đà Lạt</p>
            <p>Sài Gòn - Buôn Ma Thuộc</p>
            <p>Buôn Ma Thuộc - Sài Gòn</p>
            <p>Buôn Ma Thuộc - Gia Nghĩa</p>
          </div>
          <div>
            <p className="font-bold my-3">Khách hàng</p>
            <p>Chính sách đổi trả vé</p>
            <p>Chính sách thanh toán</p>
          </div>
        </div>
      </div>
      <div className="bg-[#29414B] ">
        <p className="text-white text-center">
          Copyright @ 2023 VeXeRe & LongVanLimousine -All <br /> Rights Reserved
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
    </Page>
  );
};

export default UseDetailnewshome;
