import React from "react";
import { Box, Text } from "zmp-ui";
import { HeaderThird } from "../../../components/header/header-third";
import iconback from "../../../assets/images/iconback.png";
import { useNavigate } from "react-router-dom";

const UseSupportPage = () => {
  const navigation = useNavigate();
  return (
    <div>
      <HeaderThird title="Hỗ trợ" />
      <div>
        <div
          onClick={() => navigation("/detail")}
          className=" flex justify-between m-[10px] p-[10px] border-b-2 border-[#B7BEC1]"
        >
          <p>Chính sách đổi trả vé</p>
          <img src={iconback} />
        </div>
        <div
          onClick={() => navigation("/detail")}
          className=" flex justify-between m-[10px] p-[10px] border-b-2 border-[#B7BEC1]"
        >
          <p>Chính sách giao nhận vé</p>
          <img src={iconback} />
        </div>
        <div
          onClick={() => navigation("/detail")}
          className=" flex justify-between m-[10px] p-[10px] border-b-2 border-[#B7BEC1]"
        >
          <p>Chính sách bảo mật thông tin</p>
          <img src={iconback} />
        </div>
        <div
          onClick={() => navigation("/detail")}
          className=" flex justify-between m-[10px] p-[10px] border-b-2 border-[#B7BEC1]"
        >
          <p>Hướng dẫn thanh toán</p>
          <img src={iconback} />
        </div>
        <div
          onClick={() => navigation("/detail")}
          className=" flex justify-between m-[10px] p-[10px] border-b-2 border-[#B7BEC1]"
        >
          <p>Câu hỏi thường gặp</p>
          <img src={iconback} />
        </div>
      </div>
    </div>
  );
};
export default UseSupportPage;
