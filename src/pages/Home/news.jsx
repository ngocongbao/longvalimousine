import { Box } from "zmp-ui";
import React from "react";

// import "../css/addresspicker.scss";
import image from "../../assets/images/imagenews.jpg";
const News = () => {
  return (
    <Box style={{ height: "60vh" }}>
      <Box className="news">
        <h3 className="news">Tin tức</h3>
        <h5 className="all_news">Xem tất cả</h5>
      </Box>
      <Box className="slide_news">
        <Box className="slide">
          <img src={image} className="news_img" />
          <h4 className="title">
            LỄ KÍ KẾT HỢP TÁC PHÁT TRIỂN TUYẾN ĐƯỜNG BIỂN MÙA HÈ 2023 VỚI CÁT
            THIÊN HẢI TRAVEL
          </h4>
        </Box>
        <Box className="slide">
          <img src={image} className="news_img" />
          <h5 className="title">
            LẾ KÍ KẾT HỢP TÁC PHÁT TRIỂN TUYẾN ĐƯỜNG BIỂN MÙA HÈ 2023 VỚI CÁT
            THIÊN HẢI TRAVEL
          </h5>
        </Box>
        <Box className="slide">
          <img src={image} className="news_img" />
          <h5 className="title">
            LẾ KÍ KẾT HỢP TÁC PHÁT TRIỂN TUYẾN ĐƯỜNG BIỂN MÙA HÈ 2023 VỚI CÁT
            THIÊN HẢI TRAVEL
          </h5>
        </Box>
      </Box>
      <Box className="footer">
        <p>Powered by Vexere.com CO.,LTD</p>
      </Box>
    </Box>
  );
};
export default News;
