import React from 'react'
import Toggle from './Toggle'
import Select from './Select'
import { HeaderThird } from '../../../components/header/header-third'
import iconbell from "../../../assets/images/bell.png"
import iconlanguage from "../../../assets/images/iconlanguage.png"
import iconinfor2 from "../../../assets/images/iconinfor2.png"
import delaccount from "../../../assets/images/iconacount.png"
const UseSettingPage = () => {
  return (
    <div>
      <HeaderThird title="Cài đặt"/>
      <div className='flex justify-between items-center p-3 border-b-2 border-gray'>
        <div className='flex gap-2'>
          <img src={iconbell}/>
          <p>Notification</p>
        </div>
        <Toggle/>
      </div>
      <div className='flex justify-between items-center p-3 border-b-2 border-gray'>
        <div className='flex gap-2'>
          <img src={iconlanguage}/>
          <p>Language</p>
        </div>
        <Select />
      </div>
      <div className='flex justify-between items-center p-3 border-b-2 border-gray'>
        <div className='flex gap-2'>
          <img src={iconinfor2}/>
          <p>Version</p>
        </div>
        <p className="text-primary">1.0.6 (v10)</p>
      </div>
      <div className='p-3'>
        <div className='flex gap-2'>
          <img src={delaccount}/>
          <p>Delete account</p>
        </div>
      </div>
    </div>
  )
}

export default UseSettingPage