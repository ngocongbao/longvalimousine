import React from 'react'
import {Box, Page,Text} from "zmp-ui"
import { HeaderThird } from "../../../components/header/header-third";
import logo from "../../../assets/images/logo.png"
import gridview from "../../../assets/images/gridview.png"
import banner2 from "../../../assets/images/banner2.jpg"
import logolongvan from "../../../assets/images/logolongvan.png"
import icontick from "../../../assets/images/icontick.png"
import icongift from "../../../assets/images/icongift.png"
import longvan from "../../../assets/images/longvan.png"
import iconcall2 from "../../../assets/images/iconcall2.png"
import iconmap from "../../../assets/images/iconmap.png"
import iconmail2 from "../../../assets/images/iconmail2.png"
import iconface from "../../../assets/images/iconfacebook1.png"
import icontiktok from "../../../assets/images/icontiktok.png"
import iconyoutube from "../../../assets/images/iconyoutube.png"

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
                 marginTop: "2px",
                
            }} >
                <img src={logo}  style={{ width: "40%" }}/>
                <img src={gridview}/>
            </Box>
            <Box>
                <Box  style={{padding:"30px 10px" }}>
                  <img src={banner2} style={{borderRadius:"20px"}}/>
                </Box>
                 <Box>
                  <Box style={{display:"flex"}}>
                    <img src={logolongvan} style={{width:"10%"}}/>
                    <h1 style={{fontWeight:"bold",fontSize:"20px",padding:"10px"}}>Long Vân Limousine</h1>
                  </Box>
                  <Box>
                    <Text>Long Vân Limousine là một trong những Tập Đoàn Vận Tải có chất lượng dịch vụ tốt nhất Tây 
                      Nguyên và xếp hạng cao ở Việt Nam .Với mong muốn đem đến cho khách hàng những chuyến đi trọn vẹn
                      ,Long Vân không ngừng cải thiện và nâng cao chất lượng dịch vụ một cách tốt nhất
                    </Text>
                  </Box>
                  <Box style={{display:"flex",gap:"10px",paddingTop:"20px"}}>
                    <img src={icontick} style={{background:"#bc955e",borderRadius:"50%"}}/>
                    <Text>Hệ thống giường nằm cao cấp ,rộng rãi,êm ái</Text>
                  </Box>
                  <Box style={{display:"flex",gap:"10px",paddingTop:"20px"}}>
                    <img src={icontick} style={{background:"#bc955e",borderRadius:"50%"}}/> 
                    <Text>Trang thiết bị hiện đại:ghế massage,tivi,wifi,..</Text>
                  </Box>
                  <Box style={{display:"flex",gap:"10px",paddingTop:"20px"}}>
                    <img src={icontick} style={{background:"#bc955e",borderRadius:"50%"}}/>
                    <Text>Hệ thống đèn giúp bảo vệ mắt và giảm stress</Text>
                  </Box>
                  <Box style={{display:"flex",gap:"10px",paddingTop:"20px"}}>
                    <img src={icontick} style={{background:"#bc955e",borderRadius:"50%"}}/>
                    <Text>Hệ thống phòng chờ cao cấp</Text>
                  </Box>
                  <Box style={{display:"flex",gap:"10px",paddingTop:"20px"}}>
                    <img src={icontick} style={{background:"#bc955e",borderRadius:"50%"}}/>
                    <Text>Bác tài dài dặn kinh nghiệm,nhiệt tình ,vui vẻ</Text>
                  </Box>
                </Box> 
                <Box>
                  <Box style={{display:"flex" }}>
                      <img src={logolongvan} style={{width:"10%"}}/>
                      <h1 style={{fontWeight:"bold",fontSize:"20px",padding:"10px"}}>Tại sao chọn chúng tôi ?</h1>
                  </Box>
                  <Box>
                    <Text>Long Vân Limousine mong muốn đem đến cho quý khách hàng những chuyến xe an toàn,chất lượng nhất
                      .Vì vật,chúng tôi không ngừng nâng cấp dịch vụ tiện ích.Đến với Long Vân Limousine mỗi chuyến xe là một trải nghiệm tuyệt vời
                    </Text>
                    <button style={{display:"block",margin:"20px auto",background:"#bc955e",padding:"10px",color:"white",borderRadius:"10px",fontWeight:"bold"}}> 
                     Đặt vé ngay</button>
                    <Box style={{border:"1px solid black ",borderRadius:"10px",margin:"20px",padding:"5px" }}>
                      <Box style={{display:"flex"}}>
                        <img src={icongift} style={{width:"10%"}}/>
                        <h1 style={{fontWeight:"bold",fontSize:"20px",padding:"10px",color:"#bc955e"}}>ĐẶT VÉ DỂ DÀNG</h1>
                      </Box>
                      <Text>Thao tác đơn giản,đặt vé nhanh chóng chưa đầy 30s</Text>
                    </Box>
                    <Box style={{border:"1px solid black ",borderRadius:"10px" ,margin:"20px",padding:"5px"}}>
                      <Box style={{display:"flex"}}>
                        <img src={icongift} style={{width:"10%"}}/>
                        <h1 style={{fontWeight:"bold",fontSize:"20px",padding:"10px",color:"#bc955e"}}>DỊCH VỤ ĐA DẠNG</h1>
                      </Box>
                      <Text>Dịch vụ đa dạng từ vận tải hành khách đến hàng hóa</Text>
                    </Box>
                    <Box style={{border:"1px solid black ",borderRadius:"10px" ,margin:"20px",padding:"5px"}}>
                      <Box style={{display:"flex"}}>
                        <img src={icongift} style={{width:"10%"}}/>
                        <h1 style={{fontWeight:"bold",fontSize:"20px",padding:"10px",color:"#bc955e"}}>PHỤC VỤ CHU ĐÁO</h1>
                      </Box>
                      <Text>Tư vấn nhiệt tình,phục vụ tân tâm,dịch vụ chuyên nghiệp</Text>
                    </Box>
                    <Box style={{border:"1px solid black ",borderRadius:"10px" ,margin:"20px",padding:"5px"}}>
                      <Box style={{display:"flex"}}>
                        <img src={icongift} style={{width:"10%"}}/>
                        <h1 style={{fontWeight:"bold",fontSize:"20px",padding:"10px",color:"#bc955e"}}>ƯU ĐÃI NGẬP TRÀN</h1>
                      </Box>
                      <Text>Định kì triển khai các chương trình khuyến mãi,đặc biệt là khách hàng thân thiết</Text>
                    </Box>
                  </Box>
                </Box> 
                 <Box style={{background:"#3A4E57",padding:"20px"}}>
                  <Box style={{border:"1px solid white",borderRadius:"10px",padding:"10px"}}>
                    <Box style={{display:"flex"}}>
                      <img src={logolongvan} style={{width:"10%"}}/>
                      <h1 style={{fontWeight:"bold",fontSize:"20px",padding:"10px" ,color:"white"}}>Tầm nhìn</h1>
                    </Box>
                    <Text style={{color:"white"}}>Long Vân Limousine định hướng phát triển thành một Tập đoàn Vận tải -Thương
                     mại Dịch vụ hàng đầu Việt Nam và vươn xa ra khu vực. Không ngừng đổi mới ,sáng tạo để đưa ra các sản phẩm
                     dịch vụ đẳng cấp ,góp phần nâng cao chất lượng cuộc sống của người Việt và nâng tầm vị thế của thương hiệu 
                     Việt trên trường quốc tế  
                    </Text>
                  </Box>
                  <Box  style={{border:"1px solid white",borderRadius:"10px",padding:"10px",marginTop:"10px"}}>
                    <Box style={{display:"flex"}}>
                      <img src={logolongvan} style={{width:"10%"}}/>
                      <h1 style={{fontWeight:"bold",fontSize:"20px",padding:"10px",color:"white"}}>SỨ MỆNH</h1>
                    </Box>
                    <Text style={{color:"white"}}>Long Vân Limousine định hướng phát triển thành 1 Tập đòan Vận tải -Thương mại Dịch vụ hàng đầu Việt Nam và vươn 
                      xa ra khu vực .Không ngừng đổi mới ,sáng tạo để đưa các sản phẩm dịch vụ đẳng cấp ,góp phần nâng cao chất lượng cuộc 
                      sống của người Việt và nâng tầm vị thế của người Việt trên trường quốc tế  
                    </Text>
                  </Box>
                </Box> 
                 <Box>
                  <Box style={{border:"1px solid black",margin:"10px",padding:"10px",boxShadow:"8px black",borderRadius:"10px"}}>
                    <Box style={{paddingBottom:"20px" }} >
                      <Text style={{color:"#bc955e"}}>150.000+</Text>
                      <Text style={{fontWeight:"bold"}}>Lượt khách mỗi năm</Text>
                    </Box>
                    <Box  style={{paddingBottom:"20px"}}>
                      <Text style={{color:"#bc955e"}}>05+</Text>
                      <Text style={{fontWeight:"bold"}}>Hệ thống văn phòng</Text>
                    </Box>
                    <Box  style={{paddingBottom:"20px"}}>
                      <Text style={{color:"#bc955e"}}>450+</Text>
                      <Text style={{fontWeight:"bold"}}>Chuyến xe mỗi tháng</Text>
                    </Box>
                  </Box>
                  <Box style={{display:"flex",padding:"20px 0px"}}>
                    <img src={logolongvan} style={{width:"10%"}}/>
                    <h1 style={{fontWeight:"bold",fontSize:"20px",padding:"10px"}}>Văn phòng chi nhánh</h1>
                  </Box>
                   <Box>
                    <Box >
                      <Box style={{position:"relative" }} >
                        <img src={banner2}/>
                          <Box style={{border:"1px solid gray",borderRadius:"15px 15px 0 0",position:"absolute",left:"0",right:"0",bottom:"-15%",background:"white",height:"15vh" }}>
                            <Text style={{fontWeight:"bold",textAlign:"center"}}>BÌNH THẠNH - TP.HCM</Text>
                            <Box style={{display:"flex",justifyContent:"center",alignItems:"center",padding:"10px"}}>
                              <img src={iconmap}/>
                              <Text>160 Chu Văn An ,P26 ,Q Bình Thạnh</Text>
                            </Box>
                            <Box style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                              <img src={iconcall2}/>
                              <Text>1900252547-0838499799</Text>
                            </Box>
                          </Box>
                      </Box>
                    </Box>
                  </Box> 
                </Box> 
            </Box>
            <Box style={{marginTop:"10vh"}}>
              <Box>
                <img src={longvan}/>
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
    </Page>
  )
}

export default UserRefferalPage