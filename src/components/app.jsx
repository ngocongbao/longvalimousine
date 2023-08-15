import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { AnimationRoutes, App, SnackbarProvider } from "zmp-ui";
import HomePage from "../pages/Home";
import TripPage from "../pages/Trip";
import NotificationPage from "../pages/Notification";
import UserPage from "../pages/User";
import { BottomNavigation } from "./bottom-navigation";
import UserRefferalPage from "../pages/User/Refferal";
import UseEndowPage from "../pages/User/Endow";
import UseSettingPage from "../pages/User/Setting"
import UseSupportPage from "../pages/User/Support"
import UseDetailPage from "../pages/User/Support/Detail.jsx"
import UseDetailhomePage from "../pages/Home/detailhome"
const MyApp = () => {
  return (
    <BrowserRouter>
      <App>
        <SnackbarProvider>
          <AnimationRoutes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/trip" element={<TripPage></TripPage>}></Route>
            <Route path="/notification" element={<NotificationPage></NotificationPage>}></Route>
            <Route path="/user" element={<UserPage />}></Route>
            <Route path="/refferal" element={<UserRefferalPage></UserRefferalPage>}></Route>
            <Route path="/endow" element={<UseEndowPage></UseEndowPage>}></Route>
            <Route path="/setting" element={<UseSettingPage></UseSettingPage>}></Route>
            <Route path="/support" element={<UseSupportPage></UseSupportPage>}></Route>
            <Route path="/detail" element={<UseDetailPage></UseDetailPage>}></Route>
            <Route path="/detailhome" element={<UseDetailhomePage></UseDetailhomePage>}></Route>
          </AnimationRoutes>
          <BottomNavigation />
        </SnackbarProvider>
      </App>
    </BrowserRouter>
  );
};
export default MyApp;
