import React, { useState } from 'react';
import "./styles.css";
import { NavLink } from "react-router-dom";
import GoBack from "../../assets/icons/goback";
import ContactPhone from "../../assets/icons/ContactPhone";
import ContactEmail from "../../assets/icons/ContactEmail";
import PhoneIcon from "../../assets/icons/phone";
import Message from "../../assets/icons/message";
import User from "../../assets/icons/user";
import MessageOpen from "../../assets/icons/messageopen";
import LocationBlue from "../../assets/icons/LocationBlue";
import Validation from "../../validations/validationText/validation";
import InputMask from "react-input-mask";
import {emailValidations, phoneNumberValidation} from "../../validations/adressValidation/validation";
import {nameValidation} from "../../validations/paymentValidations/paymentValidation";
import ContactService from "../../services/contactService";
import {useAlert} from "react-alert";

function EmploymentCon() {
    //state
    const [status, setStatus] = useState(1);
    const [name, setName] = useState('');
    const [email, setEmail]  = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const [emailValid, setEmailValid] = useState(true);
    const [phoneValid, setPhoneValid] = useState(true);
    const [nameValid, setNameValid] = useState(true);
    const [messageValid, setMessageValid] = useState(true);
    const [valid, setValid] = useState(false);
    //service
    const service = new ContactService();
    const alert = useAlert();
    //functions
    const checkValidations = () => {
        if(!email.includes('@')) {
            setEmailValid(false);
        }
        if(phone.includes('_') || phone.length <= 0) {
            setPhoneValid(false);
        }
        if(name.length <= 0) {
            setNameValid(false);
        }
        if(message.length <= 0) {
            setMessageValid(false);
        }
    }
    const checkAll = () => {
        if(email.length > 0 && !phone.includes('_') && message.length> 0 && emailValid) {
            setValid(true);
        }
        console.log(valid)
    }

    const sendData = async () => {
        console.log(valid)
        if(valid) {
            const feedback = {
                id:0,
                fullName:name,
                email:email,
                phoneNumber:phone,
                message:message
            }
            try {
                const response = await service.post(feedback)
                if(response.isSuccessfull) {
                    alert.success("Your message is sent successfully")
                }else {
                    alert.error('Error')
                }
            }catch (e) {
                console.log(e)
            }
        }
        return  checkValidations()
    }

    return (
        <div className="contactcontainer">
            <div className="container">
                <div className="row back-arrow">
                    <div className="col-lg-12 d-flex align-items-start">
                        <NavLink to="/calculate">
                            <GoBack className="gobackicon" />
                        </NavLink>
                    </div>
                </div>

                <div className="row d-flex justify-content-center">
                    <div className="col-12 d-flex flex-column align-items-center">
                        <p className="headTxt contact-heading ">JFK moving contacts</p>
                    </div>
                </div>
                <div className='row d-flex justify-content-center' >
                    <div className='col-xl-5 col-lg-6' >
                        <div className='contact_left' >
                            <h3 className='help_title' >How can I help you?</h3>
                            <p className='help_desc' >Fill in the form or drop an email</p>
                            <div className='buttons_group' >
                                <a href='tel:2133276395' className='contact_button' >
                                    <ContactPhone />
                                    <p className='contact_phone' >(213) 327-6395</p>
                                </a>
                                <a href='tel:2133276395' className='contact_button' >
                                    <ContactPhone />
                                    <p className='contact_phone' >(213) 327-6395</p>
                                </a>
                                <a href='mailto:jfkmoving@gmail.com' className='contact_button' >
                                    <ContactEmail />
                                    <p className='contact_phone' >jfkmoving@gmail.com</p>
                                </a>
                                <a href='mailto:jfkmoving@gmail.com' className='contact_button' >
                                    <ContactEmail />
                                    <p className='contact_phone' >jfkmoving@gmail.com</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-5 col-lg-6' >
                        <div className='contact_right' >
                            <div className="input2" >
                                <div className={nameValid? "locationInpCon" : "validation-error"}>
                                    <User />
                                    <input
                                        value={name}
                                        placeholder="Your name"
                                        type={"text"}
                                        className="form-input"
                                        onChange={e => {
                                            setName(e.target.value);
                                            setNameValid(nameValidation(e.target.value));
                                            checkAll();
                                        }}
                                    />
                                </div>
                                <div className={nameValid ? 'opacity-0 validation--contact' : 'opacity-100 validation--contact'}>
                                    <Validation> Please enter the name </Validation>
                                </div>

                            </div>
                            <div className="input2" >
                                <div className={emailValid ? "locationInpCon" : "validation-error"}>
                                    <Message />
                                    <input
                                        placeholder="Your email"
                                        type={"email"}
                                        className="form-input"
                                        onChange={e => {
                                            setEmail(e.target.value);
                                            setEmailValid(emailValidations(e.target.value));
                                            checkAll();
                                        }}
                                    />
                                </div>
                                <div className={emailValid ? 'opacity-0 validation--contact' : 'opacity-100 validation--contact'}>
                                    <Validation> Please enter valid email </Validation>
                                </div>

                            </div>
                            <div className="input2" >
                                <div className={phoneValid ? "locationInpCon" : "validation-error"}>
                                    <PhoneIcon />
                                    <InputMask
                                        mask={'999-999-9999'}
                                        placeholder="Your number"
                                        type={"tel"}
                                        className="form-input"
                                        onChange={e => {
                                            setPhone(e.target.value);
                                            setPhoneValid(phoneNumberValidation(e.target.value));
                                            checkAll();
                                        }}
                                    >
                                    </InputMask>
                                </div>
                                <div className={phoneValid ? 'opacity-0 validation--contact' : 'opacity-100 validation--contact'}>
                                    <Validation> Please enter valid phone number </Validation>
                                </div>

                            </div>
                            <div className="input2" >
                                <div className={messageValid ? "locationInpCon" : "validation-error"}>
                                    <MessageOpen />
                                    <input
                                        placeholder="Message"
                                        type={"text"}
                                        className="form-input"
                                        onChange={e => {
                                            setMessage(e.target.value);
                                            setMessageValid(nameValidation(e.target.value));
                                            checkAll();
                                        }}
                                    />
                                </div>
                                <div className={messageValid ? 'opacity-0 validation--contact' : 'opacity-100 validation--contact'}>
                                    <Validation> Please enter the message </Validation>
                                </div>

                            </div>
                            <button className='submit_button' onClick={sendData} > Submit information</button>
                        </div>
                    </div>
                </div>
                <div className='row d-flex justify-content-center ' >
                    <div className='col-lg-5 col-sm-6' >
                        <div className='location_button' >
                            <LocationBlue className='location_blue' />
                            <p className='location_text' >Los Angeles CA, 400 s. Kingsley</p>
                        </div>
                    </div>
                    <div className='col-lg-5 col-sm-6' >
                        <div className='location_button' >
                            <LocationBlue className='location_blue' />
                            <p className='location_text' >Los Angeles CA, 400 s. Kingsley</p>
                        </div>
                    </div>
                </div>
                <div className='row d-flex justify-content-center ' >
                    <div className='col-lg-10  contact_map' >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3259758.766378537!2d-113.20915486513341!3d37.07277544750536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suz!2s!4v1655146743194!5m2!1suz!2s" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className='row' >
                    <div className='col-12 d-flex flex-column align-items-center'>
                        <h3 className='headTxt' >Proudly serving</h3>
                        <p className='proudly_text' >Los Angeles, Beverly Hills,Santa Monica, Burbank, Glendale, Pasadena, Altadena,Van Nuys, North Hollywood, LAX Area, Valley Village, Sherman Oaks, Encino, Tarzana, San Fernando, Woodland Hills, Calabasas, Anaheim, Brea, Buena Park, Cypress, Orange, Irvine, Newport Beach, Santa Ana, Huntington Beach, Laguna Beach, Costa Mesa, Fullerton, Tustin, Garden Grove, Mission Viejo, San Clemente, Westminster, Yorba Linda, Fountain Valley, La Palma, Los Alimatos, Lake Fores, Laguna Beach, Dana Point, Laguna Niguel, Aliso Viejo, La Habra, Rancho Santa Margarita, CypressSan, Juan Capistrano, Coto de Caza, Seal Beach, Seal Beach, North Tustin, Rossmoor, Palasentia, Midway City, Las Flores, Ladera Ranch, Laguna Woods, Villa Park, Laguna Hills, Riverside, San Bernardino, Temecula, Adelanto, Apple Valley, Beaumont, Calimesa, Cathedral City, Chino, Chino Hills `,Colton, Corona, Desert Hot Springs, Fontana, Grand Terrace, Hemet,Hesperia, Highland, Indio, Joshua Tree, Lake Elsinore, La Quinta, Loma Linda, Yucca Valley, Wildomar, Yucaipa, Norco, Rancho, Redlands, San Jacinto, Montclair, Menifee, Mentone, Sun City, Victorville, Murrieta, Rancho Cucamonga, Palm Springs, Palm Desert, Perris, Ontario, Moreno Valley, Upland, Rialto</p>
                        <button className='get_quote_button' >Get a quote</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default EmploymentCon