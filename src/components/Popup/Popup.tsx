import { useSelector } from 'react-redux';
import { useAppDispatch, RootState, AppDispatch } from '../../redux/store';
import { useState } from 'react';
import { setPopUpVisibility } from '../../redux/features/doctor/doctorSlice';
const Popup = () => {

    interface Doctor {
        expertise: string;
        name: string;
        city: string;
        _id: string
    }

    const dispatch: AppDispatch = useAppDispatch();

    const { userInfo } = useSelector((state: RootState) => state.doctor);
    const { doctorsData } = useSelector((state: RootState) => state.doctor);
    const [isBooked, setIsBooked] = useState<boolean>(false)
    const [doctorSelected, setDoctorSelected] = useState<Doctor | null>(null)

    function confirmBooking() {
        if (doctorSelected) setIsBooked(true)

    }
    return (
        <>
            <section className='fixed top-[50%] left-[50%]  -translate-y-[50%] -translate-x-[50%]  z-50 flex items-center justify-center w-full h-full   bg-dashoverlay shadow-xl overflow-hidden' >
                <div style={{
                    background: 'linear-gradient(90deg, rgba(6,15,23,1) 0%, rgba(4,65,78,1) 40%, rgba(2,109,126,1) 60%, rgba(0,172,193,1) 100%, rgba(0,172,193,1) 100%, rgba(0,172,193,1) 100%)'
                }} className='flex text-white flex-col gap-[12px]  rounded-[8px] h-max w-[450px] py-5  px-5 shadow-white '>
                   
                   <div className='flex items-center justify-between'>
                    <h5 className='text-xl font-semibold'>Hello {userInfo?.name}!</h5>
                    <svg onClick={()=>dispatch(setPopUpVisibility(false))} className='cursor-pointer' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill='#FFFFFF' d="M11.7342 0.274897C11.65 0.190519 11.55 0.123576 11.4399 0.0779014C11.3298 0.0322267 11.2117 0.00871629 11.0925 0.00871629C10.9733 0.00871629 10.8553 0.0322267 10.7452 0.0779014C10.6351 0.123576 10.535 0.190519 10.4508 0.274897L6 4.71663L1.54916 0.265794C1.4649 0.181527 1.36486 0.114683 1.25476 0.0690775C1.14466 0.0234724 1.02665 8.879e-10 0.90748 0C0.788308 -8.879e-10 0.670302 0.0234724 0.560202 0.0690775C0.450101 0.114683 0.350062 0.181527 0.265794 0.265794C0.181527 0.350062 0.114683 0.450101 0.0690775 0.560202C0.0234724 0.670302 -8.879e-10 0.788308 0 0.90748C8.879e-10 1.02665 0.0234724 1.14466 0.0690775 1.25476C0.114683 1.36486 0.181527 1.4649 0.265794 1.54916L4.71663 6L0.265794 10.4508C0.181527 10.5351 0.114683 10.6351 0.0690775 10.7452C0.0234724 10.8553 0 10.9733 0 11.0925C0 11.2117 0.0234724 11.3297 0.0690775 11.4398C0.114683 11.5499 0.181527 11.6499 0.265794 11.7342C0.350062 11.8185 0.450101 11.8853 0.560202 11.9309C0.670302 11.9765 0.788308 12 0.90748 12C1.02665 12 1.14466 11.9765 1.25476 11.9309C1.36486 11.8853 1.4649 11.8185 1.54916 11.7342L6 7.28337L10.4508 11.7342C10.5351 11.8185 10.6351 11.8853 10.7452 11.9309C10.8553 11.9765 10.9733 12 11.0925 12C11.2117 12 11.3297 11.9765 11.4398 11.9309C11.5499 11.8853 11.6499 11.8185 11.7342 11.7342C11.8185 11.6499 11.8853 11.5499 11.9309 11.4398C11.9765 11.3297 12 11.2117 12 11.0925C12 10.9733 11.9765 10.8553 11.9309 10.7452C11.8853 10.6351 11.8185 10.5351 11.7342 10.4508L7.28337 6L11.7342 1.54916C12.0801 1.20329 12.0801 0.620769 11.7342 0.274897Z" />
                    </svg>
                   </div>
                    

                    {!isBooked ?
                        <>
                            <h6>Here are the available doctors in {doctorsData[0]?.city}</h6>
                            {doctorsData.map((item, i) => (
                                <ul onClick={() => setDoctorSelected(item)} key={i} className={`${item._id === doctorSelected?._id && 'border-[1px] border-solid border-white rounded-xl'} flex items-center justify-between px-4 py-2  cursor-pointer w-full  border-solid border-b-[1px] border-white  `}>
                                    <li>{item.name}</li>
                                    <li>{item.city}</li>
                                    <li>{item.expertise}</li>
                                </ul>
                            ))}
                            <button className='px-3 py-[6px] bg-[#00acc1] rounded-md font-semibold' onClick={confirmBooking}>Confirm Your Booking</button>
                        </>
                        :
                        <span> Appointment Booked with {doctorSelected?.name}</span>
                    }


                </div>
            </section>
        </>
    )
}

export default Popup