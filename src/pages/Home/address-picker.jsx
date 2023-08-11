import React from "react";
import { Box } from "zmp-ui";

import iconO from "../../assets/images/iconO.png";
import iconmap from "../../assets/images/iconmap.png";
import iconchange from "../../assets/images/change.png";
import calendar from "../../assets/images/calendar.png";
const AddressPicker = () => {
  return (
    <Box style={{ paddingLeft: "20px", paddingRight: "20px" }}>
      <Box className="box-adderess">
        <Box className="icon-list">
          <img src={iconO} alt="1" />
          <span className="line"></span>
          <img src={iconmap} alt="1" />
        </Box>
        <Box className="address-text">
          <Box className="inner-address-1">
            <p>Nơi đi</p>
            <h3 >Hồ Chí Minh</h3>
          </Box>
          <Box className="inner-address">
            <p>Nơi đến </p>
            <h3>Buôn Ma Thuột</h3>
          </Box>
        </Box>
        <Box className="change">
          <img src={iconchange} alt="1" />
        </Box>
      </Box>
      <Box className="date">
        <Box className="date_1">
          <p>Ngày khởi hành</p>
          <h3>Thứ ba , 01/08/2023</h3>
        </Box>
        <Box className="calendar">
          <img src={calendar} />
        </Box>
      </Box>
    </Box>
  );
};
export default AddressPicker;
