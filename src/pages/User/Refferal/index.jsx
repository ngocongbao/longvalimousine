import React from "react";
import { Page } from "zmp-ui";
import { HeaderThird } from "../../../components/header/header-third";
import logo from "../../../assets/images/logo.png";
import gridview from "../../../assets/images/gridview.png";
import banner2 from "../../../assets/images/banner2.jpg";
import logolongvan from "../../../assets/images/logolongvan.png";
import icontick from "../../../assets/images/icontick.png";
import icongift from "../../../assets/images/icongift.png";
import longvan from "../../../assets/images/longvan.png";
import iconcall2 from "../../../assets/images/iconcall2.png";
import iconmap from "../../../assets/images/iconmap.png";
import iconmail2 from "../../../assets/images/iconmail2.png";
import iconface from "../../../assets/images/iconfacebook1.png";
import icontiktok from "../../../assets/images/icontiktok.png";
import iconyoutube from "../../../assets/images/iconyoutube.png";

const UseRefferalPage = () => {
  return (
    <Page>
      <HeaderThird title="Giới thiệu nhà xe" />
      <div>
        <div className="bg-[#bc955e] flex justify-between items-center h-[50px] px-3 mt-1">
          <img src={logo} className="w-1/3" />
          <img src={gridview} />
        </div>
        <div>
          <div className="py-4 px-2">
            <img src={banner2} className="rounded-xl" />
          </div>
          <div className="px-3">
            <div className="flex">
              <img src={logolongvan} className="w-[10%]" />
              <h1 className="font-bold text-[20px] p-3">Long Vân Limousine</h1>
            </div>
            <div>
              <p>
                Long Vân Limousine là một trong những Tập Đoàn Vận Tải có chất
                lượng dịch vụ tốt nhất Tây Nguyên và xếp hạng cao ở Việt Nam
                .Với mong muốn đem đến cho khách hàng những chuyến đi trọn vẹn
                ,Long Vân không ngừng cải thiện và nâng cao chất lượng dịch vụ
                một cách tốt nhất
              </p>
            </div>
            <div className="flex gap-2 my-2">
              <img src={icontick} className="bg-[#bc955e] rounded-full" />
              <p>Hệ thống giường nằm cao cấp ,rộng rãi,êm ái</p>
            </div>
            <div className="flex gap-2 my-2">
              <img src={icontick} className="bg-[#bc955e] rounded-full" />
              <p>Trang thiết bị hiện đại:ghế massage,tivi,wifi,..</p>
            </div>
            <div className="flex gap-2 my-2">
              <img src={icontick} className="bg-[#bc955e] rounded-full" />
              <p>Hệ thống đèn giúp bảo vệ mắt và giảm stress</p>
            </div>
            <div className="flex gap-2 my-2">
              <img src={icontick} className="bg-[#bc955e] rounded-full" />
              <p>Hệ thống phòng chờ cao cấp</p>
            </div>
            <div className="flex gap-2 my-2">
              <img src={icontick} className="bg-[#bc955e] rounded-full" />
              <p>Bác tài dài dặn kinh nghiệm,nhiệt tình ,vui vẻ</p>
            </div>
          </div>
          <div className="flex-1 flex flex-col bg-[#d0d6db] px-3">
            <div className="flex">
              <img src={logolongvan} className="w-[10%]" />
              <h1 className="font-bold p-2 text-[20px]">
                Tại sao chọn chúng tôi ?
              </h1>
            </div>
            <div>
              <p>
                Long Vân Limousine mong muốn đem đến cho quý khách hàng những
                chuyến xe an toàn,chất lượng nhất .Vì vật,chúng tôi không ngừng
                nâng cấp dịch vụ tiện ích.Đến với Long Vân Limousine mỗi chuyến
                xe là một trải nghiệm tuyệt vời
              </p>
              <button className="bg-[#bc955e] block m-auto my-2 p-3 text-white rounded-lg ">
                Đặt vé ngay
              </button>
              <div className="border-2  border-gray rounded-lg p-1 my-2">
                <div className="flex">
                  <img src={icongift} className="h-[30px] my-auto" />
                  <h1 className="text-[#bc955e] font-bold text-lg p-[10px]">
                    ĐẶT VÉ DỂ DÀNG
                  </h1>
                </div>
                <p>Thao tác đơn giản,đặt vé nhanh chóng chưa đầy 30s</p>
              </div>
              <div className="border-2  border-gray rounded-lg p-1 my-2">
                <div className="flex">
                  <img src={icongift} className="h-[30px] my-auto" />
                  <h1 className="text-[#bc955e] font-bold text-lg p-[10px]">
                    DỊCH VỤ ĐA DẠNG
                  </h1>
                </div>
                <p>Dịch vụ đa dạng từ vận tải hành khách đến hàng hóa</p>
              </div>
              <div className="border-2  border-gray rounded-lg p-1 my-2">
                <div className="flex">
                  <img src={icongift} className="h-[30px] my-auto" />
                  <h1 className="text-[#bc955e] font-bold text-lg p-[10px]">
                    PHỤC VỤ CHU ĐÁO
                  </h1>
                </div>
                <p>Tư vấn nhiệt tình,phục vụ tân tâm,dịch vụ chuyên nghiệp</p>
              </div>
              <div className="border-2  border-gray rounded-lg p-1 my-2">
                <div className="flex">
                  <img src={icongift} className="h-[30px] my-auto" />
                  <h1 className="text-[#bc955e] font-bold text-lg p-[10px]">
                    ƯU ĐÃI NGẬP TRÀN
                  </h1>
                </div>
                <p>
                  Định kì triển khai các chương trình khuyến mãi,đặc biệt là
                  khách hàng thân thiết
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#3A4E57] p-[10px] text-white">
            <div className="border-2 border-white rounded-lg p-[10px] ">
              <div className="flex gap-2">
                <img src={logolongvan} className="w-[10%]" />
                <h1 className="font-bold text-xl">TẦM NHÌN</h1>
              </div>
              <p>
                Long Vân Limousine định hướng phát triển thành một Tập đoàn Vận
                tải -Thương mại Dịch vụ hàng đầu Việt Nam và vươn xa ra khu vực.
                Không ngừng đổi mới ,sáng tạo để đưa ra các sản phẩm dịch vụ
                đẳng cấp ,góp phần nâng cao chất lượng cuộc sống của người Việt
                và nâng tầm vị thế của thương hiệu Việt trên trường quốc tế
              </p>
            </div>
            <div className="border-2 border-white rounded-lg p-[10px] mt-[10px] ">
              <div className="flex gap-2">
                <img src={logolongvan} className="w-[10%]" />
                <h1 className="font-bold text-xl">SỨ MỆNH</h1>
              </div>
              <p>
                Long Vân Limousine định hướng phát triển thành 1 Tập đòan Vận
                tải -Thương mại Dịch vụ hàng đầu Việt Nam và vươn xa ra khu vực
                .Không ngừng đổi mới ,sáng tạo để đưa các sản phẩm dịch vụ đẳng
                cấp ,góp phần nâng cao chất lượng cuộc sống của người Việt và
                nâng tầm vị thế của người Việt trên trường quốc tế
              </p>
            </div>
          </div>
          <div>
            <div className="border-2 border-black m-[10px] p-[10px] rounded-md">
              <div className="pb-5">
                <p className="text-[#bc955e]">150.000+</p>
                <p className="font-bold">Lượt khách mỗi năm</p>
              </div>
              <div className="pb-5">
                <p className="text-[#bc955e]">05+</p>
                <p className="font-bold">Hệ thống văn phòng</p>
              </div>
              <div className="pb-5">
                <p className="text-[#bc955e]">450+</p>
                <p className="font-bold">Chuyến xe mỗi tháng</p>
              </div>
            </div>
            <div className="flex">
              <img src={logolongvan} className="w-[10%]" />
              <h1 className="font-bold p-2 text-xl">Văn phòng chi nhánh</h1>
            </div>
            <div className="relative">
              <div>
                <div>
                  <img src={banner2} />
                </div>
                <div className="absolute border-2 border-gray left-0 right-0 rounded-t-xl b-[-20px] h-[40%] p-3">
                  <p className="font-bold pb-2">BÌNH THẠNH - TP.HCM</p>
                  <div className="flex gap-2 pb-2">
                    <img src={iconmap} />
                    <p>160 Chu Văn An,P26,Q Bình Thạnh</p>
                  </div>
                  <div className="flex gap-2 pb-2">
                    <img src={iconcall2} />
                    <p>1900252547 - 0838499799</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[40%] bg-[#c0c9cf] p-3">
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
    </Page>
  );
};

export default UseRefferalPage;
