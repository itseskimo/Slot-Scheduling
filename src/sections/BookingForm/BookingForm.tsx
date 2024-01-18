import { formSvgData, doctorsArray } from '../../config/data';
import { useState } from 'react';
import { FormInput } from '../../components/FormInput/FormInput';

interface Doctor {
    name: string;
    expertise: string;
    city: string;
}

const BookingForm = () => {
    const [selectedCityDoctors, setSelectedCityDoctors] = useState<Doctor[]>([]);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        age: '',
        city: '',
        company: ''
        // Add more fields as needed
    });


    const handleInputChange = (fieldName: string, value: string) => {
        setFormData((prevData) => ({
            ...prevData,
            [fieldName]: value,
        }));


        if (fieldName === 'city') {
            const filteredDoctors: Doctor[] = doctorsArray.filter(doctor => doctor.city.toLowerCase().startsWith(value.toLowerCase()));
            if (value.length === 0) setSelectedCityDoctors([])
            else setSelectedCityDoctors(filteredDoctors)
        }

    };


    const [hasExperience, setHasExperience] = useState(false);
    const [showBestDoctors, setShowBestDoctors] = useState(false);


    const handleExperienceChange = () => {
        setHasExperience((prev) => !prev);
    };

    const handleShowDoctorsChange = () => {
        setShowBestDoctors((prev) => !prev);
    };

    const handleSelectCity = (city:string) => {
     setFormData({...formData , 'city' : city})
     setSelectedCityDoctors([])
    };


    return (
        <form className='before:absolute before:inset-[1px] before:bg-[#060f17] before:rounded-2xl form-bg relative justify-self-center self-center rounded-2xl h-max py-8  px-5   w-[500px] flex flex-col gap-4 items-center justify-center '>

            <div className='text-white z-30 flex flex-col gap-4 '>
                <h6 className='font-bold text-[26px] text-center ' >Book an Appointment for <br></br> <span className='line-through text-[#00acc1] decoration-white'>Rs 1000</span>  FREE</h6>
                <p className='text-center text-[#00acc1]'>60+ Expert Physiotherapists for 200+ Conditions</p>

                <FormInput svgData={formSvgData[0]} placeholder='Your Name' type='text' value={formData.name} onChange={(value) => handleInputChange('name', value)} />
                <FormInput svgData={formSvgData[1]} placeholder='+91' type='number' value={formData.phone} onChange={(value) => handleInputChange('phone', value)} />



                <section className='flex items-center gap-4 relative'>
                    <FormInput svgData={formSvgData[2]} placeholder='Your Age' type='number' value={formData.age} onChange={(value) => handleInputChange('age', value)} />
                    <FormInput svgData={formSvgData[3]} placeholder='Your City' type='text' value={formData.city} onChange={(value) => handleInputChange('city', value)} />
                    <FormInput svgData={formSvgData[4]} placeholder='Your Company' type='text' value={formData.company} onChange={(value) => handleInputChange('company', value)} />

                    <div className={` absolute top-[50px] flex flex-col w-full rounded-md overflow-hidden ${selectedCityDoctors.length && ' border-solid border-[1px] border-white'} `}>
                        {selectedCityDoctors.map((item) => (
                            <ul onClick={()=>handleSelectCity(item.city)} className='flex items-center justify-between px-4 py-2 bg-[#060f17] cursor-pointer w-full  border-solid border-b-[1px] border-white'>
                                <li>{item.name}</li>
                                <li>{item.city}</li>
                                <li>{item.expertise}</li>
                            </ul>

                        ))}
                    </div>

                </section>


                <textarea className='border-solid border-[1px] border-[#AFB9BB] outline-none rounded-[6px] px-10 py-3 text-[12px] md:text-[16px]  w-full text-[#4C5864]  placeholder:text-[#4C5864]' placeholder='Complaints...' />

                {
                    parseInt(formData.age) >= 40 && (
                        <div onClick={handleExperienceChange} className=' flex items-center gap-2 cursor-pointer'>
                            <input
                                type='checkbox'
                                checked={hasExperience}
                            />
                            <label className='cursor-pointer'>Any previous experience with physiotherapy?</label>
                        </div>
                    )
                }

                <div onClick={handleShowDoctorsChange} className=' flex items-center gap-2 cursor-pointer'>
                    <input
                        type='checkbox'
                        checked={showBestDoctors}
                    />
                    <label className='cursor-pointer'>Show best available doctors for their city</label>
                </div>

                <div className='submitBtn'>
                    <section className='submitBtnOverlay'>    </section>
                    <span></span>
                    <h6>Start Your Recovery</h6>
                </div>

            </div>

        </form>)
}

export default BookingForm