import React from "react";
import { Page } from "zmp-ui";
import Banner from "./banner";
import AddressPicker from "./address-picker";
import Search from "./search";
import News from "./news";

const HomePage = () => {
  return (
    <Page>
      <Banner />
      <AddressPicker />
      <Search />
      <News />
    </Page>
  );
};

export default HomePage;
