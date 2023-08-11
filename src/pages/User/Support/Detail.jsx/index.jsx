import React from 'react'
import { Box, Text } from 'zmp-ui'
import { HeaderThird } from '../../../../components/header/header-third'
import logo from "../../../../assets/images/logo.png"
import gridview from "../../../../assets/images/gridview.png"
import longvan from "../../../../assets/images/longvan.png"
import iconmap from "../../../../assets/images/iconmap.png"
import iconcall2 from "../../../../assets/images/iconcall2.png"
import iconmail2 from "../../../../assets/images/iconmail2.png"
import iconface from "../../../../assets/images/iconfacebook1.png"
import icontiktok from "../../../../assets/images/icontiktok.png"
import iconyoutube from "../../../../assets/images/iconyoutube.png"
const UseDetailPage = () => {
    return (
        <Box>
            <HeaderThird title="Chi tiết" />
            <Box>
                <Box className='flex flex-1 bg-white flex-col'>
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
                        <img src={logo} style={{ width: "40%" }} />
                        <img src={gridview} />
                    </Box>
                    <Box>
                        <Box style={{ textAlign: "center", lineHeight: "30px" }}>
                            <Text style={{ fontWeight: "bold", fontSize: "30px", padding: "20px", lineHeight: "40px" }}>This page could <br /> not be found</Text>
                            <span>We are sorry .But the page you are looking for is not available</span>
                            <span> Perhaps you can try a new search</span>
                        </Box>
                        <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                            <input type='text' placeholder='Search' style={{ width: "90%", padding: "10px", border: "1px solid gray", borderRadius: "5px",margin:"20px" }} />
                            <button style={{  padding: "10px", background: "#14AFF1", color: "white" ,marginBottom:"20px"}}>BACK TO HOMEPAGE</button>
                        </Box>
                    </Box>
                </Box>
                <Box style={{padding:"20px"}}>
                    <Box >
                        <img src={longvan} style={{
                            width: "50%",marginBottom:"20px"
                        }} />
                        <span>Công ty TNHH Vận tải Thương mại Long Vân Limousine </span>
                        <span>MST/ĐKKD/QĐTL:6001620751</span>
                        <span>Trụ sở Doanh nghiệp :Số 49 Nguyễn Trãi ,P Thành Công ,Tp.Buôn Ma Thuộc,Đăk Lắk</span>
                    </Box>
                    <Box >
                        <Text style={{ fontWeight: "bold", margin: "10px 0" }}>Đăng kí nhận tin</Text>
                        <label>Email</label>
                        <input type='text' placeholder='"Địa chỉ Email' style={{ padding: "10px", width: "100%", margin: "10px 0", border: "1px solid orange" }} />
                        <button style={{ display: "block", margin: "auto", padding: "10px 30px", background: "#bc955e", color: "white" }}>Gửi</button>
                        <p style={{width:"100%",height:"1px",background:"black",margin:"20px auto"}}></p>
                    </Box>
                    <Box style={{marginTop:"10px"}}>
                        <Box style={{ display: "flex" }}>
                            <img src={iconcall2} />
                            <p className='pl-3'>1900 25 25 47-  0983 389 779</p>
                        </Box>
                        <Box style={{ display: "flex" }}>
                            <img src={iconmail2} />
                            <p className='pl-3'>nhaxelongvanlimousine@gmail.com</p>
                        </Box>
                        <Box style={{ display: "flex" }}>
                            <img src={iconmap} className='my-auto' />
                            <p className='pl-3'>Văn phòng BMT:49 Nguyễn Trãi,Thành Công,Tp.BMT</p>
                        </Box>
                    </Box>
                    <Box >
                        <Text style={{ fontWeight: "bold", margin: "10px 0" }}>Về chúng tôi</Text>
                        <p>Về chúng tôi</p>
                        <p>Tin tức</p>
                        <p>Ưu đãi- Khuyễn mãi</p>
                        <p>Văn phòng chi nhánh</p>
                        <p>Đối tác</p>
                        <p>Liên hệ</p>
                    </Box>
                    <Box>
                        <Text style={{ fontWeight: "bold", margin: "10px 0" }}>Tuyến phổ biến</Text>
                        <p>Sài Gòn -Đà Lạt</p>
                        <p>Sài Gòn - Buôn Ma Thuộc</p>
                        <p>Buôn Ma Thuộc - Sài Gòn</p>
                        <p>Buôn Ma Thuộc - Gia Nghĩa</p>
                    </Box>
                    <Box>
                        <Text style={{ fontWeight: "bold", margin: "10px 0" }}>Khách hàng</Text>
                        <p>Chính sách đổi trả vé</p>
                        <p>Chính sách thanh toán</p>
                    </Box>
                </Box>
                <Box className='bg-[#29414B] '>
                    <Text className='text-white text-center'>Copyright @ 2023 VeXeRe & LongVanLimousine -All <br /> Rights Reserved</Text>
                    <div className='flex justify-center items-center gap-3 p-4 '>
                        <img src={iconface} className='bg-white p-2 h-[40px] max-w-[40px] rounded-md' />
                        <img src={icontiktok} className='bg-white p-2 h-[40px] max-w-[40px] rounded-md' />
                        <img src={iconyoutube} className='bg-white p-2 h-[40px] max-w-[40px] rounded-md' />
                    </div>
                </Box>
            </Box>
        </Box>
    )
}

export default UseDetailPage