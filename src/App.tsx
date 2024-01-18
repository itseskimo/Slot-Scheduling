import './App.css'
import Navbar from './components/Navbar/Navbar'
import { formSvgData } from './config/data'
import React, { useState, ChangeEvent } from 'react';


interface FormInputProps {
  svgData: string;
  placeholder: string;
  type: string;
  value: string | number;
  onChange: (value: string) => void;
}

const FormInput: React.FC<FormInputProps> = ({ svgData, placeholder, type, value, onChange }) => {

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className='flex items-center relative w-full '>
      <span className='absolute left-0 px-2' dangerouslySetInnerHTML={{ __html: svgData }}></span>
      <input
        className='border-solid border-[1px] border-[#AFB9BB] outline-none rounded-[6px] py-[6px] text-[12px] md:text-[16px] md:py-[10px] pl-10 pr-5 w-full text-[#4C5864]  placeholder:text-[#4C5864]'
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};





function App() {

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    city:'',
    company:''
    // Add more fields as needed
  });
  
  console.log(formData)
  const handleInputChange = (fieldName: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  return (
    <>
      <Navbar />

      <div className=' grid grid-cols-2 bg-[#060f17] '>

        <form className='before:absolute before:inset-[1px] before:bg-[#060f17] before:rounded-2xl form-bg relative justify-self-center self-center rounded-2xl h-max py-8  px-5   w-[500px] flex flex-col gap-4 items-center justify-center '>
          <div className='text-white z-30 flex flex-col gap-4 '>
            <h6 className='font-bold text-[26px] text-center ' >Book an Appointment for <br></br> <span className='line-through text-[#00acc1] decoration-white'>Rs 1000</span>  FREE</h6>
            <p className='text-center text-[#00acc1]'>60+ Expert Physiotherapists for 200+ Conditions</p>

            <FormInput svgData={formSvgData[0]} placeholder='Your Name' type='text' value={formData.name} onChange={(value) => handleInputChange('name', value)} />
            <FormInput svgData={formSvgData[1]} placeholder='+91' type='number' value={formData.phone} onChange={(value) => handleInputChange('phone', value)} />

            <section className='flex items-center gap-4'>
            <FormInput svgData={formSvgData[3]} placeholder='Your Age' type='number' value={formData.age} onChange={(value) => handleInputChange('age', value)} />
            <FormInput svgData={formSvgData[4]} placeholder='Your City' type='text' value={formData.city} onChange={(value) => handleInputChange('city', value)} />
            <FormInput svgData={formSvgData[5]} placeholder='Your Company' type='text' value={formData.company} onChange={(value) => handleInputChange('company', value)} />
            </section>


            <textarea className='border-solid border-[1px] border-[#AFB9BB] outline-none rounded-[6px] px-10 py-3 text-[12px] md:text-[16px]  w-full text-[#4C5864]  placeholder:text-[#4C5864]' placeholder='Complaints...' />

            <div className=' flex items-center gap-2 cursor-pointer'>
              <input type='checkbox' />
              <span className="">Any previous experience with physiotherapy?</span>
            </div>

            <div className=' flex items-center gap-2 cursor-pointer'>
              <input type='checkbox' />
              <span className="">Show best available doctors for their city</span>
            </div>

            <div className='box'>
              <section className='hoveroverlay'>    </section>
              <ul className='sparkle'></ul>
              <span></span>
              <h6>Start Your Recovery</h6>
            </div>

          </div>
        </form>

        <img src='./img/hh.png' className='h-[100vh]' />

      </div>
    </>
  )
}

export default App
