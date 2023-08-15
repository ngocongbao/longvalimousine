import React, { useState } from 'react'
import { Page } from 'zmp-ui'
import banner from "../../assets/images/banner3.jpg"
const Departure = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const handleTabSelect = (tabKey) => {
    setActiveTab(tabKey);
  };
  return (
    <Page className="flex flex-col flex-1 ">
        <img src={banner} />
      <div className="bg-primary flex-1 rounded-t-2xl">
        <div className=" flex justify-around items-center flex-col ">
          <div className='py-2 px-4 bg-white rounded-lg text-[#bc955e] '>
            <button>X</button>
          </div>
          <input 
            type='text'
            placeholder='Tìm Tỉnh/Thành,Quận/Huyện'
            className='w-[90%] p-3 rounded-xl bg-white  m-5'
          />
          <div >
            <button 
              onClick={() => handleTabSelect('tab1')}
              className={activeTab === 'tab1' ? 'active bg-white text-black px-6 h-[40px] rounded-md' : 'px-6 text-white'}
            >
              Tỉnh thành
            </button>
            <button
              onClick={() => handleTabSelect('tab2')}
              className={activeTab === 'tab2' ? 'active bg-white text-black px-6 h-[40px] rounded-md' : 'px-6 text-white'}
            >
              Quận huyện
            </button>
          </div>
          <div>
          {
            activeTab==='tab1'&&
            <div className=' p-5 leading-7' >
              <p className='hover:text-blue-400 p-3 hover:bg-blue-100 text-center rounded-lg'>Hồ Chí Minh</p>
              <p className='hover:text-blue-400 p-3 hover:bg-blue-100 text-center rounded-lg'>Lâm Đồng</p>
              <p className='hover:text-blue-400 p-3 hover:bg-blue-100 text-center rounded-lg'>Đăk Lăk</p>
              <p className='hover:text-blue-400 p-3 hover:bg-blue-100 text-center rounded-lg'>Đăk Nông</p>
              <p className='hover:text-blue-400 p-3 hover:bg-blue-100 text-center rounded-lg'>Khánh Hòa</p>
            </div>
          }
          {
            activeTab==='tab2'&&
            <div>
            <h1>Hồ Chí Minh</h1>
            </div>
          }
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Departure


