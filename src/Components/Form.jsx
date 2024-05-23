import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Form = ({ setFormDetails }) => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        phoneno: "+91 ",
        country: "India",
        city: "Jaipur",
        panno: "",
        adharno: ""
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstname) newErrors.firstname = "First name is required";
        if (!formData.lastname) newErrors.lastname = "Last name is required";
        if (!formData.username) newErrors.username = "Username is required";
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email address is invalid";
        }
        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters long";
        }
        if (!formData.phoneno) {
            newErrors.phoneno = "Phone number is required";
        } else if (!/^(\+91\s?)?\d{10}$/.test(formData.phoneno)) {
            newErrors.phoneno = "Phone number is invalid";
        }
        if (!formData.city) newErrors.city = "City is required";
        if (!formData.panno) {
            newErrors.panno = "PAN No. is required";
        } else if (formData.panno.length < 9 || formData.panno.length > 9) {
            newErrors.panno = "Pan no. must be at least 9 characters long";
        }
        if (!formData.adharno) {
            newErrors.adharno = "Aadhar No. is required";
        } else if (formData.adharno.length < 12 || formData.adharno.length > 12) {
            newErrors.adharno = "Adhar no. must be at least 12 characters long";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setFormDetails(formData);
            navigate('/post-successful');
            setFormData({
                firstname: "",
                lastname: "",
                username: "",
                email: "",
                password: "",
                phoneno: "+91 ",
                country: "India",
                city: "Jaipur",
                panno: "",
                adharno: ""
            });
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    };

    return (
        <div>
            <div className='internal'>
                <form onSubmit={submitHandler}>
                    <br />
                    <label htmlFor='firstname'>First name</label>
                    <br />
                    <input
                        onChange={changeHandler}
                        value={formData.firstname}
                        className='input'
                        type="text"
                        name='firstname'
                        placeholder='Enter your first name'
                    />
                    {errors.firstname && <p className="error">{errors.firstname}</p>}
                    <br />
                    <label htmlFor='lastname'>Last name</label>
                    <br />
                    <input
                        onChange={changeHandler}
                        value={formData.lastname}
                        className='input'
                        type="text"
                        name='lastname'
                        placeholder='Enter your last name'
                    />
                    {errors.lastname && <p className="error">{errors.lastname}</p>}
                    <br />
                    <label htmlFor='username'>Username</label>
                    <br />
                    <input
                        onChange={changeHandler}
                        value={formData.username}
                        className='input'
                        type="text"
                        name='username'
                        placeholder='Enter your username'
                    />
                    {errors.username && <p className="error">{errors.username}</p>}
                    <br />
                    <label htmlFor='email'>Email address</label>
                    <br />
                    <input
                        onChange={changeHandler}
                        value={formData.email}
                        className='input'
                        type="email"
                        name='email'
                        placeholder='abc@gmail.com'
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                    <br />
                    <label htmlFor='password'>Password</label>
                    <br />
                    <div className="password-input-container">
                        <input
                            onChange={changeHandler}
                            value={formData.password}
                            className='input'
                            type={showPassword ? "text" : "password"}
                            name='password'
                            placeholder='Use strong password'
                        />
                        <button type="button" onClick={togglePasswordVisibility} className="toggle-password">
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                    {errors.password && <p className="error">{errors.password}</p>}
                    <br />
                    <label htmlFor='phoneno'>Phone No.</label>
                    <br />
                    <input
                        onChange={changeHandler}
                        value={formData.phoneno}
                        className='input'
                        type="text"
                        name='phoneno'
                        placeholder='Write country code before phone no. like: +91 0123456789'
                    />
                    {errors.phoneno && <p className="error">{errors.phoneno}</p>}

                    <br />
                    <div className='countryCityWrapper'>
                        <div className='countryCity'>
                            <div>
                                <label htmlFor='country'>Country</label>
                                <br />
                                <select
                                    className='input'
                                    onChange={changeHandler}
                                    name="country"
                                    id="country"
                                    value={formData.country}
                                >
                                    <option value="India">India</option>
                                    <option value="America">America</option>
                                    <option value="Russia">Russia</option>
                                    <option value="Europe">Europe</option>
                                    <option value="Australia">Australia</option>
                                    <option value="NewZeland">NewZeland</option>
                                </select>
                                {errors.country && <p className="error">{errors.country}</p>}
                            </div>
                            <div>
                                <label htmlFor='city'>City</label>
                                <br />
                                <select
                                    className='input'
                                    onChange={changeHandler}
                                    name="city"
                                    id="city"
                                    value={formData.city}
                                >
                                    <option value="Jaipur">Jaipur</option>
                                    <option value="Ajmer">Ajmer</option>
                                    <option value="Udaipur">Udaipur</option>
                                    <option value="Banglore">Banglore</option>
                                    <option value="Pune">Pune</option>
                                    <option value="Delhi">Delhi</option>
                                </select>
                                {errors.city && <p className="error">{errors.city}</p>}
                            </div>
                        </div>
                    </div>

                    <br />
                    <label htmlFor='panno'>PAN No.</label>
                    <br />
                    <input
                        onChange={changeHandler}
                        value={formData.panno}
                        className='input'
                        type="text"
                        name='panno'
                        placeholder='Enter your PAN No.'
                    />
                    {errors.panno && <p className="error">{errors.panno}</p>}
                    <br />
                    <label htmlFor='adharno'>Aadhar No.</label>
                    <br />
                    <input
                        onChange={changeHandler}
                        value={formData.adharno}
                        className='input'
                        type="text"
                        name='adharno'
                        placeholder='Enter your Aadhar No.'
                    />
                    {errors.adharno && <p className="error">{errors.adharno}</p>}
                    <br />
                    <button type="submit" className='button'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Form;