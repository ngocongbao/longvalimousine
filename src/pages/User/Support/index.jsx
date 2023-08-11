import React from "react";
import { Box,Text} from "zmp-ui";
import { HeaderThird } from "../../../components/header/header-third";
import iconback from "../../../assets/images/iconback.png"
import { useNavigate } from "react-router-dom";

const UseSupportPage=()=>{
  const navigation =useNavigate();
  return(
   <Box >
    <HeaderThird title="Hỗ trợ"/>
    <Box >
      <Box onClick={()=>navigation('/detail')} style={{display:"flex",justifyContent:"space-between",margin:"10px" ,padding:"10px",borderBottom:"1px solid #B7BEC1 "}}>
        <Text>Chính sách đổi trả vé</Text>
        <img src={iconback}/>
      </Box>
      <Box onClick={()=>navigation('/detail')} style={{display:"flex",justifyContent:"space-between",margin:"10px" ,padding:"10px",borderBottom:"1px solid #B7BEC1"}}>
        <Text>Chính sách giao nhận vé</Text>
        <img src={iconback}/>
      </Box>
      <Box onClick={()=>navigation('/detail')} style={{display:"flex",justifyContent:"space-between",margin:"10px" ,padding:"10px",borderBottom:"1px solid  #B7BEC1"}}>
        <Text>Chính sách bảo mật thông tin</Text>
        <img src={iconback}/>
      </Box>
      <Box onClick={()=>navigation('/detail')} style={{display:"flex",justifyContent:"space-between",margin:"10px" ,padding:"10px",borderBottom:"1px solid #B7BEC1"}}>
        <Text>Hướng dẫn thanh toán</Text>
        <img src={iconback}/>
      </Box>
      <Box onClick={()=>navigation('/detail')} style={{display:"flex",justifyContent:"space-between",margin:"10px" ,padding:"10px",borderBottom:"1px solid #B7BEC1"}}>
        <Text>Câu hỏi thường gặp</Text>
        <img src={iconback}/>
      </Box>
    </Box>
   </Box>
  )
}
export default UseSupportPage