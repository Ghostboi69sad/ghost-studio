import React, { useState, Fragment, useRef } from "react";

import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/footer/Footer";
import usePaymentInputs from 'react-payment-inputs/es/usePaymentInputs';

const Payment = (props) => {

    const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps } = usePaymentInputs();

    const [cardNumber, setCardNumber] = useState("");
    const handleChangeCardNumber = (e) => {
        setCardNumber(e.target.value)
    }

    const [expiryDate, setExpiryDate] = useState("");
    const handleChangeExpiryDate = (e) => {
        setExpiryDate(e.target.value)
    }

    const [cvc, setCvc] = useState("");
    const handleChangeCVC = (e) => {
        setCvc(e.target.value)
    }

    return (
        <Fragment>
            <div className="overflow-hidden bg__gray-1">
                <div className="bg__purple position-relative">
                    <Navbar />
                </div>

                <section>
                    <div className="container">

                        <div className="wrapper__nav-step mb-5">
                            <a href="#!" className="medium font__size--14 text__14-1024 color__black">
                                Home
                            </a>
                            <img src="./../images/Line.png" alt="" />
                            <a href="#!" className="medium font__size--14 text__14-1024 color__black">
                                Courses
                            </a>
                            <img src="./../images/Line.png" alt="" />
                            <a href="#!" className="medium font__size--14 text__14-1024 color__black clamp__1">
                                Basic UIUX Design for beginner
                            </a>
                            <img src="./../images/Line.png" alt="" />
                            <a href="#!" className="medium font__size--14 text__14-1024 color__black">
                                Checkout
                            </a>
                        </div>

                        <div className="row">
                            <div className="order-lg-1 order-2 col-lg-6">
                                <h2 className="bold font__size--28 text__28-1024 mb-5">Checkout</h2>

                                <h5 className="bold font__size--20 text__20-1024 mb-4">Pay with</h5>

                                <div className="wrapper__select-pay position-relative mb-4">
                                    <input type="radio" name="payment" value="paypal" className="" />
                                    <div className="wrap">
                                        <div className="radio"></div>
                                        <img src="./../images/Frame 162682.png" className="ml-3" alt="" />
                                    </div>
                                </div>

                                <div className="wrapper__select-pay position-relative mb-4">
                                    <input type="radio" name="payment" value="applepay" className="" />
                                    <div className="wrap">
                                        <div className="radio"></div>
                                        <img src="./../images/ApplePay.png" className="ml-3" alt="" />
                                    </div>
                                </div>

                                <div className="wrapper__select-pay position-relative mb-4">
                                    <input type="radio" name="payment" value="gpay" className="" />
                                    <div className="wrap">
                                        <div className="radio"></div>
                                        <img src="./../images/gpay.png" className="ml-3" alt="" />
                                    </div>
                                </div>

                                <div className="wrapper__select-pay position-relative">
                                    <input type="radio" name="payment" value="gopay" className="" />
                                    <div className="wrap">
                                        <div className="radio"></div>
                                        <img src="./../images/Frame 162682 (1).png" className="ml-3" alt="" />
                                    </div>
                                </div>

                                <h5 className="normal font__size--16 text__16-1024 text__16-1024 text__16-1024 color__gray-2 my-4">Or  using a credit card</h5>

                                <div className="form-group">
                                    <label htmlFor="" className="medium font__size--14 text__14-1024 text__14-1024 color__black">Cardholder Name</label>
                                    <input className="font__size--14 text__14-1024 text__14-1024 color__gray-2 form-control wrapper__input-field" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="" className="medium font__size--14 text__14-1024 text__14-1024 color__black">Card Number</label>
                                    <input {...getCardNumberProps({ onChange: handleChangeCardNumber })} value={cardNumber} className="font__size--14 text__14-1024 text__14-1024 color__gray-2 form-control wrapper__input-field" placeholder="Ex:  31111 1111 1111 1111" />
                                </div>

                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="" className="medium font__size--14 text__14-1024 text__14-1024 color__black w-100">Postal Code</label>
                                            <input type="text" className="font__size--14 text__14-1024 text__14-1024 color__gray-2 form-control wrapper__input-field" placeholder="Postal or ZIP code" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="" className="medium font__size--14 text__14-1024 text__14-1024 color__black">Expiration</label>
                                            <input {...getExpiryDateProps({ onChange: handleChangeExpiryDate })} value={expiryDate} type="text" className="font__size--14 text__14-1024 text__14-1024 color__gray-2 form-control wrapper__input-field" placeholder="MM/YY" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="" className="medium font__size--14 text__14-1024 text__14-1024 color__black">CVV</label>
                                            <input {...getCVCProps({ onChange: handleChangeCVC })} value={cvc} type="text" className="font__size--14 text__14-1024 text__14-1024 color__gray-2 form-control wrapper__input-field" />
                                        </div>
                                    </div>
                                </div>

                                <label class="wrapper__checkbox position-relative medium font__size--14 text__14-1024 text__14-1024 color__black d-flex align-items-center mb-5">
                                    <input type="checkbox" className="select" />
                                    <span class="checkmark mb-0 mr-3">
                                        <div className="box"></div>
                                    </span>
                                    Save card
                                </label>

                                <div className="form-group">
                                    <label htmlFor="" className="medium font__size--14 text__14-1024 text__14-1024 color__black">Message the host (Optional)</label>
                                    <textarea className="font__size--14 text__14-1024 text__14-1024 color__gray-2 form-control wrapper__input-field textarea" placeholder="Type here..." name="" id="" cols="30" rows="10"></textarea>
                                </div>

                                <div className="semi-bold font__size--14 text__14-1024 btn btn__purple color__white shadow">Confirm and Pay</div>

                            </div>
                            <div className="order-1 order-lg-2 mb-4 mb-lg-0 col-lg-5 col-xl-4 offset-lg-1 offset-xl-2">
                                <div className="wrapper__card-summary">
                                    <h4 className="bold font__size--28 text__28-1024 mb-3">Summary</h4>
                                    <img src="./../images/Rectangle 36.png" className="cover mb-3" alt="" />

                                    <h5 className="bold font__size--20 text__20-1024 mb-2">Basic UIUX Design for beginner</h5>

                                    <div className="rating mb-4">
                                        <img src="./../images/Frame (sasd5).png" alt="" />
                                        <img src="./../images/Frame (sasd5).png" alt="" />
                                        <img src="./../images/Frame (sasd5).png" alt="" />
                                        <img src="./../images/Frame (sasd5).png" alt="" />
                                        <img src="./../images/Frame (sasd5).png" alt="" />
                                        <span className="bold font__size--18">(7)</span>
                                    </div>

                                    <h5 className="semi-bold font__size--16 text__16-1024 mb-3">Price details</h5>

                                    <div className="d-flex align-items-center justify-content-between">
                                        <p className="mb-0 medium font__size--16 text__16-1024 color__gray-2">Original price:</p>
                                        <p className="mb-0 medium font__size--16 text__16-1024">$24.00</p>
                                    </div>

                                    <hr className="my-3" />

                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <p className="mb-0 semi-bold font__size--16 text__16-1024">Total:</p>
                                        <p className="mb-0 medium font__size--16 text__16-1024">$24.00</p>
                                    </div>

                                    <p className="mb-3 medium font__size--14 text__14-1024 color__gray-2 mb-3">By completing your purchase you agree to these <a href="#!" className="color__purple">Terms of Service</a>.</p>

                                    <a href="#!" className="semi-bold font__size--14 text__14-1024 btn btn__purple color__white shadow w-100">Complete Checkout</a>

                                </div>
                            </div>
                        </div>


                    </div>
                </section>

                <Footer />
            </div>
        </Fragment>
    );
};

export default Payment;
