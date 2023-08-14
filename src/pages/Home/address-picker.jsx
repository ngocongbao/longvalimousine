import React from "react";
import iconO from "../../assets/images/iconO.png";
import iconmap from "../../assets/images/iconmap.png";
import iconchange from "../../assets/images/iconchange.png";
import calendar from "../../assets/images/calendar.png";
const AddressPicker = () => {
  return (
    <div className="px-5">
      <div className="box-adderess">
        <div className="icon-list">
          <img src={iconO} alt="1" />
          <span className="line"></span>
          <img src={iconmap} alt="1" />
        </div>
        <div className="address-text">
          <div className="inner-address-1">
            <p>Nơi đi</p>
            <h3 >Hồ Chí Minh</h3>
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
      <div className="date">
        <div className="date_1">
          <p>Ngày khởi hành</p>
          <h3>Thứ ba , 01/08/2023</h3>
        </div>
        <div className="calendar">
          <img src={calendar} />
        </div>
      </div>
    </div>
  );
};
export default AddressPicker;
