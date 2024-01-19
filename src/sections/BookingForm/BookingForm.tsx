import { formSvgData } from '../../config/data';
import { useState } from 'react';
import { FormInput } from '../../components/FormInput/FormInput';
import { useSelector } from 'react-redux';
import { useAppDispatch, RootState, AppDispatch } from '../../redux/store';
import { getDoctorsListByCity } from '../../redux/features/doctor/doctorSlice';
import { resetDoctorsData, setPopUpVisibility, setUserInfo } from '../../redux/features/doctor/doctorSlice';
import { SyntheticEvent } from 'react';

const BookingForm = () => {

    const { doctorsData, isPopUpVisible } = useSelector((state: RootState) => state.doctor);
    let cities = [... new Set(doctorsData.map(x => x.city))];

    const dispatch: AppDispatch = useAppDispatch();

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        age: '',
        city: '',
        company: ''
    });


    const handleInputChange = (fieldName: string, value: string) => {
        setFormData((prevData) => ({
            ...prevData,
            [fieldName]: value,
        }));

        if (fieldName === 'city') {
            dispatch(getDoctorsListByCity({ city: value }));
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

    const handleSelectCity = (city: string) => {
        setFormData({ ...formData, 'city': city })
        dispatch(resetDoctorsData())
    };

    const handleSubmit = (e : SyntheticEvent) => {
        e.preventDefault()

        if (formData.name && formData.city && formData.phone && formData.age && formData.company) {
            dispatch(getDoctorsListByCity({ city: formData.city }));
            dispatch(setPopUpVisibility(true));
            dispatch(setUserInfo(formData));
        }
    };


    return (
        <section className='before:absolute before:inset-[1px] before:bg-[#060f17] before:rounded-2xl form-bg relative justify-self-center self-center rounded-2xl h-max py-8  px-5   w-[500px] flex flex-col gap-4 items-center justify-center '>

            <div className='text-white z-30 flex flex-col gap-4 '>
                <h6 className='font-bold text-[26px] text-center ' >Book an Appointment for <br></br> <span className='line-through text-[#00acc1] decoration-white'>Rs 1000</span>  FREE</h6>
                <p className='text-center text-[#00acc1]'>60+ Expert Physiotherapists for 200+ Conditions</p>

                <FormInput svgData={formSvgData[0]} placeholder='Name' type='text' value={formData.name} onChange={(value) => handleInputChange('name', value)} />
                <FormInput svgData={formSvgData[1]} placeholder='+91' type='number' value={formData.phone} onChange={(value) => handleInputChange('phone', value)} />



                <section className='flex items-center gap-4 relative'>
                    <FormInput svgData={formSvgData[2]} placeholder='Age' type='number' value={formData.age} onChange={(value) => handleInputChange('age', value)} />
                    <FormInput svgData={formSvgData[3]} placeholder='City' type='text' value={formData.city} onChange={(value) => handleInputChange('city', value)} />
                    <FormInput svgData={formSvgData[4]} placeholder='Company' type='text' value={formData.company} onChange={(value) => handleInputChange('company', value)} />

                    {!isPopUpVisible &&
                        <div className={` absolute top-[50px] flex flex-col w-full rounded-md overflow-hidden ${doctorsData.length && ' border-solid border-[1px] border-white'} `}>
                            {cities.map((item, i) => (
                                <ul key={i} onClick={() => handleSelectCity(item)} className='flex items-center justify-between px-4 py-2 bg-[#060f17] cursor-pointer w-full  border-solid border-b-[1px] border-white'>
                                    <li>{item}</li>
                                </ul>
                            ))}
                        </div>
                    }


                </section>


                <textarea className='border-solid border-[1px] border-[#AFB9BB] outline-none rounded-[6px] px-10 py-3 text-[12px] md:text-[16px]  w-full text-[#4C5864]  placeholder:text-[#4C5864]' placeholder='Message...' />

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

                <button className='submitBtn' onClick={handleSubmit}>
                    <section className='submitBtnOverlay'>    </section>
                    <span></span>
                    <h6>Start Your Recovery</h6>

                </button>

            </div>

        </section>)
}

export default BookingForm