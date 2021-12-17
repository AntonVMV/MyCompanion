import { useState } from "react";
import { useDispatch } from "react-redux";
import { useValidation } from "../../hooks/validationHook";
import { useNavigate } from "react-router-dom";

export const ContactForm = ({item, onSubmit}) => {
    const [values, setValues] = useState(item);
    const errors = useValidation(values);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const setHandler = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value })
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        for(let value in values){
            if(errors[value]){
                return
            }
        }
        await dispatch(onSubmit('contactBook', values));
        navigate('/ContactBook');
    }

    return (
        <div className='contacts__container'>
            <form className='contacts__form' onSubmit={submitHandler}>
                <label className="form-label" htmlFor="name-id" >First Name:</label>
                <input type="text" value={values.name} name='name' onChange={setHandler} id='name-id' className="input-field" required/>
                <label className="form-label" htmlFor="lastName-id">Last Name:</label>
                <input type="text" value={values.lastName} name='lastName' onChange={setHandler} id='lastName-id' className="input-field" />
                <label className="form-label" htmlFor="phone-id">Phone:</label>
                <input type="text" value={values.phone} name='phone' onChange={setHandler} id='phone-id' className="input-field" required onBlur={errors.checkErrors}/>
                {errors.phone ? <p className="input-error">{errors.phone}</p> : null}
                <label className="form-label" htmlFor="'email-id">E-mail:</label>
                <input type="text" value={values.email} name='email' onChange={setHandler} id='email-id' className="input-field" onBlur={errors.checkErrors}/>
                {errors.email ? <p className="input-error">{errors.email}</p> : null}
                <label className="form-label" htmlFor="adress-id">Adress:</label>
                <input type="text" value={values.adress} name='adress' onChange={setHandler} id='adress-id' className="input-field" />
                <label className="form-label" htmlFor="company-id">Company:</label>
                <input type="text" value={values.company} name='company' onChange={setHandler} id='company-id' className="input-field" />

                <div className="form-controls">
                    <button className="button form__button">Submit</button>
                    <button className="button form__button" onClick={() => navigate(-1)}>Cancel</button>
                </div>
            </form>
        </div>
    )
}