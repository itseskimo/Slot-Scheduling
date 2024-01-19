import { useSelector } from 'react-redux';
import { useAppDispatch, RootState, AppDispatch } from '../../redux/store';
import { setPopUpVisibility } from '../../redux/features/doctor/doctorSlice';
const Popup = () => {

    const { isPopUpVisible } = useSelector((state: RootState) => state.doctor);
    const { doctorsData } = useSelector((state: RootState) => state.doctor);

    const dispatch: AppDispatch = useAppDispatch();

    return (
        <>
            <section className='fixed top-[50%] left-[50%]  -translate-y-[50%] -translate-x-[50%]  z-50 flex items-center justify-center w-full h-full   bg-dashoverlay shadow-xl overflow-hidden' >
                <form className='flex text-white flex-col gap-[12px] bg-[#060f17] rounded-[8px] h-max w-[450px] py-5  px-5 shadow-white '>
                    <h5 className='text-xl font-semibold'>Hello Ayushmat!</h5>
                    <h6>Here are the available doctors in surat</h6>
                    {doctorsData.map((item) => (
                        <ul className='flex items-center justify-between px-4 py-2  cursor-pointer w-full  border-solid border-b-[1px] border-white'>
                            <li>{item.name}</li>
                            <li>{item.city}</li>
                            <li>{item.expertise}</li>
                        </ul>
                    ))}
                                    <button className='px-3 py-[6px] bg-[#00acc1] rounded-md'>Confirm Your Booking</button>

                </form>
            </section>
        </>
    )
}

export default Popup