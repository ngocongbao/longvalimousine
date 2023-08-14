
import React from "react";
import image from "../../assets/images/imagenews.jpg";
const News = () => {
  return (
    <div className="h-[60%]" >
      <div className="news">
        <h3 className="news">Tin tức</h3>
        <h5 className="all_news">Xem tất cả</h5>
      </div>
      <div className="slide_news">
        <div className="slide">
          <img src={image} className="news_img" />
          <h4 className="title">
            LỄ KÍ KẾT HỢP TÁC PHÁT TRIỂN TUYẾN ĐƯỜNG BIỂN MÙA HÈ 2023 VỚI CÁT
            THIÊN HẢI TRAVEL
          </h4>
        </div>
        <div className="slide">
          <img src={image} className="news_img" />
          <h5 className="title">
            LẾ KÍ KẾT HỢP TÁC PHÁT TRIỂN TUYẾN ĐƯỜNG BIỂN MÙA HÈ 2023 VỚI CÁT
            THIÊN HẢI TRAVEL
          </h5>
        </div>
        <div className="slide">
          <img src={image} className="news_img" />
          <h5 className="title">
            LẾ KÍ KẾT HỢP TÁC PHÁT TRIỂN TUYẾN ĐƯỜNG BIỂN MÙA HÈ 2023 VỚI CÁT
            THIÊN HẢI TRAVEL
          </h5>
        </div>
      </div>
      <div className="footer">
        <p>Powered by Vexere.com CO.,LTD</p>
      </div>
    </div>
  );
};
export default News;
