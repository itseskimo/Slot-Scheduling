import { useState, useEffect } from 'react';
import { addPhysioCalendar, getPhysioCalendar } from '../../redux/features/doctor/doctorSlice';
import { useAppDispatch, AppDispatch, RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

const AppointmentTable = () => {

    interface SelectedDate {
        day: string;
        date: string;
        selectedSlots: string[];
    }



    const { bookedSlots } = useSelector((state: RootState) => state.doctor);

    
    const [selectedDates, setSelectedDates] = useState<SelectedDate[]>([]);

    const [clientId, setClientId] = useState<string>('');
    const [token, setToken] = useState<string>('');
    const dispatch: AppDispatch = useAppDispatch();

    useEffect(() => {
        if (localStorage.getItem("userInfo")) {
            const data = localStorage.getItem("userInfo");
            if (data) {
                const loginData: { name: string, token: string } = JSON.parse(data);
                setClientId(loginData.name);
                setToken(loginData.token);
                // dispatch(getPhysioCalendar({ token: loginData.token }))
            }
        }
    }, []);


    useEffect(() => {
        setSelectedDates((bookedSlots && bookedSlots[0]?.calendars) ?? []);
    }, [bookedSlots])


    
    function handleSubmit() {
        const physioData: SelectedDate[] = selectedDates;
        dispatch(addPhysioCalendar({ physioData, token }));
    }

    function handleClick(day: string, date: string, selectedSlot: string) {
        if (currentDayIndex !== 0) {
            alert(`Slots available for Physios can only be selected on Sunday's`)
            return
        }

        setSelectedDates((prevDates) => {
            const existingDateIndex = prevDates.findIndex((dateObj) => dateObj.date === date);

            if (existingDateIndex !== -1) {
                // Date already exists, toggle selectedSlot
                return prevDates.map((dateObj, index) => {
                    if (index === existingDateIndex) {
                        // Update the existing date
                        const existingSlots = dateObj.selectedSlots;
                        if (existingSlots.includes(selectedSlot)) {
                            // SelectedSlot is already present, remove it
                            return { ...dateObj, selectedSlots: existingSlots.filter((slot) => slot !== selectedSlot) };
                        } else {
                            // SelectedSlot is not present, add it
                            return { ...dateObj, selectedSlots: [...existingSlots, selectedSlot] };
                        }
                    }
                    return dateObj;
                });
            } else {
                // Date doesn't exist, create a new object with a unique selectedSlot
                return [...prevDates, { day, date, selectedSlots: [selectedSlot] }];
            }
        });
    }




    // const currentDayIndex = new Date().getDay(); // Get the current day index 
    const currentDayIndex = 0



    const generateTimeSlots = () => {
        const startTime = new Date('2024-01-01T09:00:00');
        const endTime = new Date('2024-01-01T20:00:00');
        const timeSlots = [];

        let currentTime = new Date(startTime);

        while (currentTime <= endTime) {
            timeSlots.push(currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
            currentTime.setMinutes(currentTime.getMinutes() + 45);
        }

        return timeSlots;
    };

    const getFormattedDate = (offset: number) => {
        const today = new Date();
        const targetDate = new Date(today);
        targetDate.setDate(today.getDate() + offset);

        const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(targetDate);
        const date = targetDate.getDate();

        return `${month} ${date}`;
    };


    const calendarController = [
        { day: 'Saturday', date: getFormattedDate(0), slots: generateTimeSlots() },
        { day: 'Monday', date: getFormattedDate(2), slots: generateTimeSlots() },
        { day: 'Tuesday', date: getFormattedDate(3), slots: generateTimeSlots() },
        { day: 'Wednesday', date: getFormattedDate(4), slots: generateTimeSlots() },
        { day: 'Thursday', date: getFormattedDate(5), slots: generateTimeSlots() },
        { day: 'Friday', date: getFormattedDate(6), slots: generateTimeSlots() },
    ].filter((_, index) => index >= currentDayIndex || currentDayIndex === 0);


    return (
        <section className='flex flex-col items-start p-6'>

            <div className='mb-5 flex items-center justify-between'>
                <span className=' text-white text-xl'>Hello {clientId}</span>
                {/* <span className=' text-white text-xl'>SignOut</span> */}
            </div>


            <div className='border-t-[1px] border-[#FFFFFF80] border-solid w-full mb-6'></div>


            <div className='grid grid-cols-6 gap-8'>
                {calendarController.map((item, index) => (
                    <div key={index} className='flex flex-col text-white gap-3'>
                        <ul className='flex flex-col items-center'>
                            <li className='font-semibold'>{item.day}</li>
                            <li>{item.date}</li>
                        </ul>
                        {item.slots.map((element) => {

                            const isSelected = selectedDates.find(
                                (date) => date.date === item.date
                            )?.selectedSlots.includes(element);



                            // const isBooked = bookedSlots && bookedSlots[0]?.calendars?.some((entry) =>
                            //     entry.selectedSlots.some((cal) => {

                            //         return (
                            //             entry.day === item.day &&
                            //             entry.date === item.date &&
                            //             entry.selectedSlots.includes(element)
                            //         );
                            //     })
                            // );




                            return (
                                <span
                                    key={element}
                                    onClick={() => handleClick(item.day, item.date, element)}
                                    className={`px-8 py-2 whitespace-nowrap rounded-md text-center relative  ${currentDayIndex === 0 ? 'cursor-pointer' : 'cursor-not-allowed'
                                        } ${isSelected
                                            ? 'bg-[#00acc1] ' // Color for selected slots
                                            : 
                                            // isBooked ? 'bg-red-400 ' // Color for booked slots : 
                                            'bg-[#FFFFFF80] ' // Default color
                                        }`}
                                >

                                    {element}
                                </span>
                            );
                        })}
                    </div>
                ))}
            </div>

            <div className='border-t-[1px] border-[#FFFFFF80] border-solid w-full mt-10 mb-5'></div>
            <button onClick={handleSubmit} className='bg-[#081c1f] px-10 py-2 text-white  rounded-md shadow-sm shadow-[#00acc1] font-light'>SAVE</button>
        </section>
    )
}

export default AppointmentTable