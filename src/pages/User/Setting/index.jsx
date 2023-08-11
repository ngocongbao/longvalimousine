import React from 'react'
import { Box,Text } from 'zmp-ui'
import { HeaderThird } from '../../../components/header/header-third'
import iconbell from "../../../assets/images/bell.png"
import iconlanguage from "../../../assets/images/iconlanguage.png"
import iconinfor2 from "../../../assets/images/iconinfor2.png"
import delaccount from "../../../assets/images/iconacount.png"
const UseSettingPage = () => {
  return (
    <Box>
      <HeaderThird title="Cài đặt"/>
      <Box >
        <Box>
          <Box>
            <img src={iconbell}/>
            <Text>Thông báo</Text>
          </Box>
        </Box>
        <Box>
          <Box>
            <img src={iconlanguage}/>
            <Text>Ngôn ngữ</Text>
          </Box>
        </Box>
        <Box>
          <Box>
            <img src={iconinfor2}/>
            <Text>Phiên bản</Text>
          </Box>
        </Box>
        <Box>
          <Box>
            <img src={delaccount}/>
            <Text>Xóa tài khoản</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default UseSettingPage