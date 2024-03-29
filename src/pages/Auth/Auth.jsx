import { FormInput } from '../../components/FormInput/FormInput';
import { SyntheticEvent, useEffect, useState } from 'react';
import { formSvgData } from '../../config/data';
import Dropdown from '../../components/Dropdown/Dropdown';
import { register, login } from '../../redux/features/doctor/doctorSlice';
import { useSelector , useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Auth = () => {

    const dispatch = useDispatch();
    const { role, userInfo } = useSelector((state) => state.doctor);
    const navigate = useNavigate();

    const [formToggler, setFormToggler] = useState(false)

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });


    const handleInputChange = (fieldName, value) => {

        setFormData((prevData) => ({
            ...prevData,
            [fieldName]: value,
        }));
    };

    function handleSubmit(e) {
        e.preventDefault()

        if (formData.username && formData.password && role && formToggler) {
            dispatch(register({ username: formData.username, password: formData.password, role }))
        }
        if (formData.username && formData.password && !formToggler) {
            dispatch(login({ username: formData.username, password: formData.password }))
        }

    }


    useEffect(() => {
        if (Object.keys(userInfo || {}).length) {
            let userData = JSON.stringify(userInfo);
            localStorage.setItem("userInfo", userData);

            if (userInfo?.role === 'Physio') {
                navigate('/physio')
            } else if (userInfo?.role === 'Operations') {
                navigate('/operations')
            } else if (userInfo?.role === 'Patient') {
                navigate('/patient')
            }
        }
    }, [userInfo])


    return (
        <div className='before:absolute before:inset-[1px] before:bg-[#060f17] before:rounded-2xl form-bg relative justify-self-center self-center rounded-2xl py-8  px-5   w-[360px] '>

            <form className='flex flex-col gap-4'>
                <legend className='text-white text-center text-2xl  z-30'>{formToggler ? 'Sign Up' : 'Login'}</legend>
                <FormInput svgData={formSvgData[0]} placeholder='Name' type='text' value={formData.username} onChange={(value) => handleInputChange('username', value)} />
                <FormInput svgData={formSvgData[0]} placeholder='Password' type='password' value={formData.password} onChange={(value) => handleInputChange('password', value)} />


                {formToggler && <Dropdown />}
                {!formToggler && <p className='text-white text-right text-xs  z-10'>Not Registered? <span className='cursor-pointer underline underline-offset-2' onClick={() => [setFormToggler(true), setFormData({ username: '', password: '' })]}>Sign Up</span></p>}
                <button className='submitBtn' onClick={handleSubmit}>
                    <section className='submitBtnOverlay'></section>
                    <span></span>
                    <h6>Submit</h6>
                </button>

            </form>
        </div>
    )
}

export default Auth