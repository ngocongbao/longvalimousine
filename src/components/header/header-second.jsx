import React from "react";
import { Box,Text } from "zmp-ui";
import iconperson from "../../assets/images/person.png"
import iconedit from "../../assets/images/iconedit.png"
const HeaderSecond =()=>{
    return(
       <Box style={{
           display:"flex",
           justifyContent:"space-between",
           position:"relative",
           padding:" 20px",
           background:"#b5905b",
           color:"white",
           height:"10%"
       }}>
        <Box>
            <Text style={{display:"flex"}}>Bảo <img src={iconedit} style={{width:"15px",height:"15px",margin:"auto 3px"}}/></Text>
            <Text>0344462861</Text>
        </Box>
        <Box>
            <img src={iconperson} style={{background:"#F2F2F4",padding:"15px",borderRadius:"10px"}}/>
        </Box>
       </Box>
    )
}
export default HeaderSecond