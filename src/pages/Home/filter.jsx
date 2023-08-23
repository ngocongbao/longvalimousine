import React, { useState } from "react";
import { HeaderThird } from "../../components/header/header-third";
import { Checkbox, Icon, Slider, Switch } from "zmp-ui";
import { QuantityPicker } from "./quantitypicker";
import { useNavigate } from "react-router-dom";
const UseFilterPage = () => {
  const [quantity, setQuantity] = useState(0);
  const navigate=useNavigate()
  return (
    <div>
      <HeaderThird title="Bộ lọc" />
        <div className=" bg-white mt-2">
            <div className="flex justify-between items-center border-b-[1px] p-3 border-gray" onClick={()=>navigate('/pickuppoint')}>
                <p>Điểm đón</p>
                <div className="flex">
                <p className="text-[#bc955e]">Tất cả</p>
                <Icon icon="zi-chevron-right" />
                </div>
            </div>
            <div  className="flex justify-between items-center p-3"onClick={()=>navigate('/paypoint')}>
                <p>Điểm trả</p>
                <div className="flex">
                <p className="text-[#bc955e]">Tất cả</p>
                <Icon icon="zi-chevron-right" />
                 </div>
            </div>
        </div>
        <div className="bg-white my-2 p-3">
            <Slider defaultValue={0} max={2000000} label="Giá vé (đ)" showValue />
        </div>
        <div className="bg-white my-2 p-3">
            <Slider defaultValue={0} max={5} label="Đánh giá (sao)" showValue />
        </div>
      <div className="p-3 bg-white">
        <h1 className="font-bold ">Tiêu chí phổ biến</h1>
        <div className="flex justify-between items-center border-b-[1px] border-gray py-3 ">
          <p>Chuyến xác nhận túc thì</p>
          <Switch />
        </div>
        <div className="flex justify-between items-center border-b-[1px] border-gray py-3">
          <p>Chuyến giảm giá</p>
          <Switch />
        </div>
        <div className="flex justify-between items-center border-b-[1px] border-gray py-3">
          <p>Chọn chỗ Online</p>
          <Switch />
        </div>
        <div className="flex justify-between items-center border-b-[1px] border-gray py-3">
          <p>Xe Vip Limousine</p>
          <Switch />
        </div>
      </div>
        <div className="bg-white mt-2 p-3">
        <h1 className="font-bold ">Loại ghế/Giường</h1>
            <div className="flex justify-between items-center border-b-[1px] border-gray py-3 ">
            <p>Ghế ngồi</p>
            <Checkbox />
            </div>
            <div className="flex justify-between items-center border-b-[1px] border-gray py-3 ">
            <p>Giường nằm</p>
            <Checkbox />
            </div>
            <div className="flex justify-between items-center border-b-[1px] border-gray py-3 ">
            <p>Giường nằm đôi</p>
            <Checkbox />
            </div>
        </div>
        <div className="bg-white mt-2 p-3">
            <div className="flex justify-between items-center py-3">
            <p className="font-bold">Số ghế trống</p>
            <div className="border-2 border-[#C0C0C0] rounded-md py-2 px-4">
            <QuantityPicker value={quantity} onChange={setQuantity}/>
            </div>
        </div>
        </div>
      <div className="bg-white mt-2 p-3">
        <button className="border-2 border-[#bc955e] text-[#bc955e] rounded-md p-2"> Xóa lọc</button>
        <button className="rounded-md text-white bg-[#bc955e] py-2 w-[75%] ml-2">Xem kết quả</button>
      </div>
    </div>
  );
};

export default UseFilterPage;
