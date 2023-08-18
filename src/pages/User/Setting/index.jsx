import React from "react";
import Toggle from "./Toggle";
import Select from "./Select";
import { HeaderThird } from "../../../components/header/header-third";
import iconlanguage from "../../../assets/images/iconlanguage.png";
import { Icon, Page } from "zmp-ui";
const UseSettingPage = () => {
  return (
    <Page className="bg-white flex-1 flex-col">
      <HeaderThird title="Cài đặt" />
      <div className="flex justify-between items-center p-3 border-b-2 border-gray">
        <div className="flex gap-2">
          <Icon icon="zi-notif"/>
          <p>Notification</p>
        </div>
        <Toggle />
      </div>
      <div className="flex justify-between items-center p-3 border-b-2 border-gray">
        <div className="flex gap-2">
          <img src={iconlanguage} />
          <p>Language</p>
        </div>
        <Select />
      </div>
      <div className="flex justify-between items-center p-3 border-b-2 border-gray">
        <div className="flex gap-2">
          <Icon icon="zi-warning-circle"/>
          <p>Version</p>
        </div>
        <p className="text-primary">1.0.6 (v10)</p>
      </div>
      <div className="p-3">
        <div className="flex gap-2">
           <Icon icon="zi-stranger"/>
          <p>Delete account</p>
        </div>
      </div>
    </Page>
  );
};

export default UseSettingPage;
