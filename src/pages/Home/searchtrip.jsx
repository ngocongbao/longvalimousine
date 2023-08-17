import React from 'react'
import { Page } from 'zmp-ui'
import "../../css/searchtrip.scss"
import bannertrip from "../../assets/images/bannertrip.jpg"
const SearchtripPage = () => {
  return (
    <Page className="flex flex-col flex-1">
        <img src={bannertrip} />
        <button></button>
            <div className="bg-primary py-2 flex-1 rounded-t-3xl overflow-hidden -mt-[20px]">
                <div className=" rounded-t-3xl mt-12  h-full bg-[#5bdbce] overflow-hidden">
                    <div className="loop-wrapper">
                        <div className="mountain"></div>
                        <div className="hill"></div>
                        <div className="tree"></div>
                        <div className="tree"></div>
                        <div className="tree"></div>
                        <div className="rock"></div>
                        <div className="truck"></div>
                        <div className="wheels"></div>
                    </div> 
                    <div>
                        <h1>Không tìm thấy chuyến xe</h1>
                    </div>
                </div>
            </div>
    </Page>

  )
}

export default SearchtripPage
