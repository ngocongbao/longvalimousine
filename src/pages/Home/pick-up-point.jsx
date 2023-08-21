
import React from 'react'
import { HeaderThird } from '../../components/header/header-third'
import { Checkbox, Select } from 'antd'
const PickUpPointPage = () => {
  return (
    <div>
      <HeaderThird title="Chọn điểm đón"/>
      <div>
        <input
          type='text'
          placeholder='Tìm Tỉnh/Thành,Quận/Huyện'
          className='p-3 w-full border-[1px] border-[#DCDCDC] rounded-md '
        />
        <div>
          <div className='flex justify-between items-center'>
            <div className='flex' >
              <Checkbox/>
              <h1 className='px-2'>Thủ Đức</h1>
            </div>
            <select
            className='w-50%'
            defaultValue=''
             >
             <option >
                <Checkbox/>
                <h1 className='px-2'>Cầu vượt Linh Xuân</h1>
             </option>
             <option value='cauvuotsongthan'>
                <Checkbox/>
                <h1 className='px-2'>Cầu vượt Sóng Thần</h1>
             </option>
            </select>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default PickUpPointPage
