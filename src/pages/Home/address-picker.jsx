import React, { useState } from "react";
import iconO from "../../assets/images/iconO.png";
import iconmap from "../../assets/images/iconmap.png";
import iconchange from "../../assets/images/iconchange.png";
import calendar from "../../assets/images/calendar.png";
import { Box, DatePicker, Sheet } from "zmp-ui";
import Departure from "../Home/departure";
const AddressPicker = () => {
  const [actionSheetVisible, setActionSheetVisible] = useState(false);
 
  return (
    <Box>
      <div className="box-adderess z-10 mx-3  ">
        <div className="icon-list">
          <img src={iconO} alt="1" />
          <span className="line"></span>
          <img src={iconmap} alt="1" />
        </div>
        <div className="address-text">
          <div
            className="inner-address-1 "
            onClick={() => {
              setActionSheetVisible(true);
            }}
          >
            <p>Nơi đi</p>
            <h3>Hồ Chí Minh</h3>
          </div>
          <div className="inner-address">
            <p>Nơi đến </p>
            <h3>Buôn Ma Thuột</h3>
          </div>
        </div>
        <div className="change">
          <img src={iconchange} alt="1" />
        </div>
      </div>
      <div className="date z-10 m-3 font-bold w-[93%]" id="date-picker">
        {/* <div className="date_1" >
          <p>Ngày khởi hành</p>
          <h3>Thứ ba , 01/08/2023</h3>
        </div>
        <div className="calendar">
          <img src={calendar} />
        </div> */}
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
      >
        <Departure />
      </Sheet>
    </Box>
  );
};
export default AddressPicker;
