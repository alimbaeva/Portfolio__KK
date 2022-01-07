import React from 'react';
import { useForm } from 'react-hook-form';
import './contacts.scss';

function Contacts() {

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({ mode: "onBlur" });

    const onSubmit = (formData) => {
        console.log(formData);
        reset();
    }

    return (
        <section className='contacts' id='contacts'>
            <h1>Contacts</h1>
            <div className="contacts__inner">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label >
                        Your First Name: <br />
                        <input
                            {...register('firstName', {
                                required: "Field can'be empty",
                                minLength: {
                                    value: 3,
                                    message: 'Minimum 3 chars'
                                },
                            })} placeholder='first Name' />
                    </label>
                    <p>
                        {errors?.firstName && (
                            <span>{errors?.firstName.message || 'Error!'}</span>
                        )}
                    </p>
                    <label >
                        Your Second Name: <br />
                        <input
                            {...register('secondName', {
                                required: "Field can'be empty",
                                minLength: {
                                    value: 3,
                                    message: 'Minimum 3 chars'
                                },
                            })}
                            placeholder='Your Second Name' />
                    </label>
                    <p>
                        {errors?.secondName && (
                            <span>{errors?.secondName.message || 'Error!'}</span>
                        )}
                    </p>
                    <label >
                        Your Email Name: <br />
                        <input {...register('email', {
                            required: "Field can'be empty",
                            pattern: {
                                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                message: 'Invalid email address',
                            },
                        })} placeholder='Your Email Name' />
                    </label>
                    <p>
                        {errors?.email && (<span>{errors?.email.message || 'Error!'}</span>)}
                    </p>
                    <button type='submit'>Отправить</button>
                </form>
            </div>
        </section>
    )
}

export default Contacts
