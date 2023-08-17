import React, { useState } from "react";
import iconO from "../../assets/images/iconO.png";
import iconmap from "../../assets/images/iconmap.png";
import iconchange from "../../assets/images/iconchange.png";
import { Box, DatePicker, Sheet } from "zmp-ui";
import Departure from "../Home/departure";
const AddressPicker = () => {
  const [actionSheetVisible, setActionSheetVisible] = useState(false);

  return (
    <Box>
      <div className=" bg-white rounded-[10px] p-3 border-2 border-grey-color flex relative items-center -mt-[50px]  z-10 mx-3  ">
        <div className="flex flex-col w-[20px] justify-center items-center">
          <img src={iconO} alt="1" />
          <span className="mt-[10px] h-[30px] w-1 relative bg-[burlywood] mb-[10px]"></span>
          <img src={iconmap} alt="1" />
        </div>
        <div className="z-10 ml-5 w-full">
          <div
            className="pb-[5px] w-full border-b-[1px] mb-[10px]  "
            onClick={() => {
              setActionSheetVisible(true);
            }}
          >
            <p>Nơi đi</p>
            <h3 className="font-bold">Hồ Chí Minh</h3>
          </div>
          <div className="inner-address">
            <p>Nơi đến </p>
            <h3 className="font-bold">Buôn Ma Thuột</h3>
          </div>
        </div>
        <div className="flex justify-center w-10 h-10 rounded-[10px] border-2 border-[beige] bg-[#855a2d] absolute right-5 items-center z-10">
          <img src={iconchange} alt="1" />
        </div>
      </div>
      <div
        className="mt-[10px] bg-white rounded-[10px] p-3 border-2 border-grey-color flex relative z-10 m-3 font-bold w-[93%]"
        id="date-picker"
      >
        <DatePicker
          label="Ngày khởi hành"
          mask
          maskClosable
          className="w-full"
          dateFormat="dd/mm/yyyy"
        />
      </div>
      <Sheet
        visible={actionSheetVisible}
        onClose={() => setActionSheetVisible(false)}
        swipeToClose
        snapPoints={[0.1]}
      >
        <Departure onClose={() => setActionSheetVisible(false)} />
      </Sheet>
    </Box>
  );
};
export default AddressPicker;
