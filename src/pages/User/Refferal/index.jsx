import React from 'react'
import {Box, Page} from "zmp-ui"
import { HeaderThird } from "../../../components/header/header-third";
import logo from "../../../assets/images/logo.png"
import gridview from "../../../assets/images/gridview.png"
const UserRefferalPage = () => {
  return (
    <Page>
        <HeaderThird title="Giới thiệu nhà xe"/>
        <Box>
            <Box style={{
                 background: "#bc955e",
                 display: "flex",
                 justifyContent: "space-between",
                 alignItems: "center",
                 height: "50px",
                 paddingLeft: "5%",
                 paddingRight: "5%",
                 marginTop: "2px"
            }} >
                <img src={logo}  style={{ width: "40%" }}/>
                <img src={gridview}/>
            </Box>
            <Box>
                
            </Box>
        </Box>
    </Page>
  )
}

export default UserRefferalPage