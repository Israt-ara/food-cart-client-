import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/foodCart.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className=''>

            <section className="w-[95%] mx-auto md:mt-[30px] text-black py-20 lg:py-[120px] overflow-hidden relative z-10">
                <div className="container">
                    <div className="flex flex-wrap lg:justify-between -mx-4">
                        <div className="w-full lg:w-1/2 xl:w-6/12 px-4">
                            <div className="max-w-[570px] mb-12 lg:mb-0">
                                <span className="block mb-4 text-base contact-color font-semibold">
                                    Contact Us
                                </span>
                                <h2
                                    className="
                  text-dark
                  mb-6
                  uppercase
                  font-bold
                  text-[32px]
                  sm:text-[40px]
                  lg:text-[36px]
                  xl:text-[40px]
                  "
                                >
                                    GET IN TOUCH
                                </h2>
                                <p className="text-base text-body-color leading-relaxed mb-9">
                                    Would you like to book an event, rent a food cart, or find out more about our Food? Get in touch by filling out the contact form below.
                                </p>
                                <div className="flex mb-8 max-w-[370px] w-full">
                                    {/* <div
                                        className="
                     max-w-[60px]
                     sm:max-w-[70px]
                     w-full
                     h-[60px]
                     sm:h-[70px]
                     flex
                     items-center
                     justify-center
                     mr-6
                     overflow-hidden
                     bg-primary bg-opacity-5
                     text-primary
                     rounded
                     "
                                    >
                                        {/*  */}
                                    {/* </div> */}

                                </div>
                                <div className="flex mb-8 max-w-[370px] w-full">
                                    <div
                                        className="
                                        contact-color
                     max-w-[60px]
                     sm:max-w-[70px]
                     w-full
                     h-[60px]
                     sm:h-[70px]
                     flex
                     items-center
                     justify-center
                     mr-6
                     overflow-hidden
                     bg-primary bg-opacity-5
                     text-primary
                     rounded
                     "
                                    >
                                        <svg
                                            width="24"
                                            height="26"
                                            viewBox="0 0 24 26"
                                            className="fill-current"
                                        >
                                            <path
                                                d="M22.6149 15.1386C22.5307 14.1704 21.7308 13.4968 20.7626 13.4968H2.82869C1.86042 13.4968 1.10265 14.2125 0.97636 15.1386L0.092295 23.9793C0.0501967 24.4845 0.21859 25.0317 0.555377 25.4106C0.892163 25.7895 1.39734 26 1.94462 26H21.6887C22.1939 26 22.6991 25.7895 23.078 25.4106C23.4148 25.0317 23.5832 24.5266 23.5411 23.9793L22.6149 15.1386ZM21.9413 24.4424C21.8992 24.4845 21.815 24.5687 21.6466 24.5687H1.94462C1.81833 24.5687 1.69203 24.4845 1.64993 24.4424C1.60783 24.4003 1.52364 24.3161 1.56574 24.1477L2.4498 15.2649C2.4498 15.0544 2.61819 14.9281 2.82869 14.9281H20.8047C21.0152 14.9281 21.1415 15.0544 21.1835 15.2649L22.0676 24.1477C22.0255 24.274 21.9834 24.4003 21.9413 24.4424Z"
                                            />
                                            <path
                                                d="M11.7965 16.7805C10.1547 16.7805 8.84961 18.0855 8.84961 19.7273C8.84961 21.3692 10.1547 22.6742 11.7965 22.6742C13.4383 22.6742 14.7434 21.3692 14.7434 19.7273C14.7434 18.0855 13.4383 16.7805 11.7965 16.7805ZM11.7965 21.2008C10.9966 21.2008 10.3231 20.5272 10.3231 19.7273C10.3231 18.9275 10.9966 18.2539 11.7965 18.2539C12.5964 18.2539 13.2699 18.9275 13.2699 19.7273C13.2699 20.5272 12.5964 21.2008 11.7965 21.2008Z"
                                            />
                                            <path
                                                d="M1.10265 7.85562C1.18684 9.70794 2.82868 10.4657 3.67064 10.4657H6.61752C6.65962 10.4657 6.65962 10.4657 6.65962 10.4657C7.92257 10.3815 9.18552 9.53955 9.18552 7.85562V6.84526C10.5748 6.84526 13.7742 6.84526 15.1635 6.84526V7.85562C15.1635 9.53955 16.4264 10.3815 17.6894 10.4657H17.7315H20.6363C21.4782 10.4657 23.1201 9.70794 23.2043 7.85562C23.2043 7.72932 23.2043 7.26624 23.2043 6.84526C23.2043 6.50847 23.2043 6.21378 23.2043 6.17169C23.2043 6.12959 23.2043 6.08749 23.2043 6.08749C23.078 4.90874 22.657 3.94047 21.9413 3.18271L21.8992 3.14061C20.8468 2.17235 19.5838 1.62507 18.6155 1.28828C15.795 0.193726 12.2587 0.193726 12.0903 0.193726C9.6065 0.235824 8.00677 0.446315 5.60716 1.28828C4.681 1.58297 3.41805 2.13025 2.36559 3.09851L2.3235 3.14061C1.60782 3.89838 1.18684 4.86664 1.06055 6.04539C1.06055 6.08749 1.06055 6.12959 1.06055 6.12959C1.06055 6.21378 1.06055 6.46637 1.06055 6.80316C1.10265 7.18204 1.10265 7.68722 1.10265 7.85562ZM3.37595 4.15097C4.21792 3.3932 5.27038 2.93012 6.15444 2.59333C8.34355 1.79346 9.7749 1.62507 12.1745 1.58297C12.3429 1.58297 15.6266 1.62507 18.1525 2.59333C19.0365 2.93012 20.089 3.3511 20.931 4.15097C21.394 4.65615 21.6887 5.32972 21.7729 6.12959C21.7729 6.25588 21.7729 6.46637 21.7729 6.80316C21.7729 7.22414 21.7729 7.68722 21.7729 7.81352C21.7308 8.78178 20.8047 8.99227 20.6784 8.99227H17.7736C17.3526 8.95017 16.679 8.78178 16.679 7.85562V6.12959C16.679 5.7928 16.4685 5.54021 16.1738 5.41392C15.9213 5.32972 8.55405 5.32972 8.30146 5.41392C8.00677 5.49811 7.79628 5.7928 7.79628 6.12959V7.85562C7.79628 8.78178 7.1227 8.95017 6.70172 8.99227H3.79694C3.67064 8.99227 2.74448 8.78178 2.70238 7.81352C2.70238 7.68722 2.70238 7.22414 2.70238 6.80316C2.70238 6.46637 2.70238 6.29798 2.70238 6.17169C2.61818 5.32972 2.91287 4.65615 3.37595 4.15097Z"
                                            />
                                        </svg>
                                    </div>
                                    <div className="w-full">
                                        <h4 className="font-bold text-dark text-xl mb-1">Phone Number</h4>
                                        <p className="text-base text-body-color">+6756789986</p>
                                    </div>
                                </div>
                                <div className="flex mb-8 max-w-[370px] w-full">
                                    <div
                                        className="contact-color
                     max-w-[60px]
                     sm:max-w-[70px]
                     w-full
                     h-[60px]
                     sm:h-[70px]
                     flex
                     items-center
                     justify-center
                     mr-6
                     overflow-hidden
                     bg-primary bg-opacity-5
                     text-primary
                     rounded
                     "
                                    >
                                        <svg
                                            width="28"
                                            height="19"
                                            viewBox="0 0 28 19"
                                            className="fill-current"
                                        >
                                            <path
                                                d="M25.3636 0H2.63636C1.18182 0 0 1.16785 0 2.6052V16.3948C0 17.8322 1.18182 19 2.63636 19H25.3636C26.8182 19 28 17.8322 28 16.3948V2.6052C28 1.16785 26.8182 0 25.3636 0ZM25.3636 1.5721C25.5909 1.5721 25.7727 1.61702 25.9545 1.75177L14.6364 8.53428C14.2273 8.75886 13.7727 8.75886 13.3636 8.53428L2.04545 1.75177C2.22727 1.66194 2.40909 1.5721 2.63636 1.5721H25.3636ZM25.3636 17.383H2.63636C2.09091 17.383 1.59091 16.9338 1.59091 16.3499V3.32388L12.5 9.8818C12.9545 10.1513 13.4545 10.2861 13.9545 10.2861C14.4545 10.2861 14.9545 10.1513 15.4091 9.8818L26.3182 3.32388V16.3499C26.4091 16.9338 25.9091 17.383 25.3636 17.383Z"
                                            />
                                        </svg>
                                    </div>
                                    <div className="w-full">
                                        <h4 className="font-bold text-dark text-xl mb-1">
                                            Email Address
                                        </h4>
                                        <p className="text-base text-body-color">foodcart@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
                            <div className="bg-white relative rounded-lg p-8 sm:p-12 shadow-lg">
                                <form>
                                    <div className="mb-6">
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <input
                                            type="text"
                                            placeholder="Your Phone"
                                            className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <textarea
                                            rows="6"
                                            placeholder="Your Message"
                                            className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        resize-none
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                                        ></textarea>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="button-color
                        w-full
                        text-white
                        bg-primary
                        rounded
                        border 
                        p-3
                        transition
                        hover:bg-opacity-90
                        "
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                                <div>
                                    <span className="absolute -top-10 -right-9 z-[-1]">
                                        <svg
                                            width="100"
                                            height="100"
                                            viewBox="0 0 100 100"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                                                fill="#3056D3"
                                            />
                                        </svg>
                                    </span>
                                    <span className="absolute -right-10 top-[90px] z-[-1]">
                                        <svg
                                            width="34"
                                            height="134"
                                            // viewBox="0 0 34 134"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                cx="31.9993"
                                                cy="132"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 132)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 117.333)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 102.667)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="88"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 88)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 73.3333)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="45"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 45)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="16"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 16)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="59"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 59)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="30.6666"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 30.6666)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="1.66665"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 1.66665)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="132"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 132)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 117.333)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 102.667)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="88"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 88)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 73.3333)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="45"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 45)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="16"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 16)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="59"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 59)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="30.6666"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 30.6666)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="1.66665"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 1.66665)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="132"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 132)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 117.333)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 102.667)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="88"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 88)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 73.3333)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="45"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 45)"
                                                fill="#9A1663"
                                            />

                                        </svg>
                                    </span>
                                    <span className="absolute -left-7 -bottom-7 z-[-1]">
                                        <svg
                                            width="107"
                                            height="134"
                                            viewBox="0 0 107 134"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                cx="104.999"
                                                cy="132"
                                                r="1.66667"
                                                transform="rotate(180 104.999 132)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="104.999"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 104.999 117.333)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="104.999"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 104.999 102.667)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="104.999"
                                                cy="88"
                                                r="1.66667"
                                                transform="rotate(180 104.999 88)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="104.999"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 104.999 73.3333)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="104.999"
                                                cy="45"
                                                r="1.66667"
                                                transform="rotate(180 104.999 45)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="104.999"
                                                cy="16"
                                                r="1.66667"
                                                transform="rotate(180 104.999 16)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="104.999"
                                                cy="59"
                                                r="1.66667"
                                                transform="rotate(180 104.999 59)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="104.999"
                                                cy="30.6666"
                                                r="1.66667"
                                                transform="rotate(180 104.999 30.6666)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="104.999"
                                                cy="1.66665"
                                                r="1.66667"
                                                transform="rotate(180 104.999 1.66665)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="90.3333"
                                                cy="132"
                                                r="1.66667"
                                                transform="rotate(180 90.3333 132)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="90.3333"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 90.3333 117.333)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="90.3333"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 90.3333 102.667)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="90.3333"
                                                cy="88"
                                                r="1.66667"
                                                transform="rotate(180 90.3333 88)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="90.3333"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 90.3333 73.3333)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="90.3333"
                                                cy="45"
                                                r="1.66667"
                                                transform="rotate(180 90.3333 45)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="90.3333"
                                                cy="16"
                                                r="1.66667"
                                                transform="rotate(180 90.3333 16)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="90.3333"
                                                cy="59"
                                                r="1.66667"
                                                transform="rotate(180 90.3333 59)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="90.3333"
                                                cy="30.6666"
                                                r="1.66667"
                                                transform="rotate(180 90.3333 30.6666)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="90.3333"
                                                cy="1.66665"
                                                r="1.66667"
                                                transform="rotate(180 90.3333 1.66665)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="75.6654"
                                                cy="132"
                                                r="1.66667"
                                                transform="rotate(180 75.6654 132)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="132"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 132)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="75.6654"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 75.6654 117.333)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 117.333)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="75.6654"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 75.6654 102.667)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 102.667)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="75.6654"
                                                cy="88"
                                                r="1.66667"
                                                transform="rotate(180 75.6654 88)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="88"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 88)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="75.6654"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 75.6654 73.3333)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 73.3333)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="75.6654"
                                                cy="45"
                                                r="1.66667"
                                                transform="rotate(180 75.6654 45)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="45"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 45)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="75.6654"
                                                cy="16"
                                                r="1.66667"
                                                transform="rotate(180 75.6654 16)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="16"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 16)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="75.6654"
                                                cy="59"
                                                r="1.66667"
                                                transform="rotate(180 75.6654 59)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="59"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 59)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="75.6654"
                                                cy="30.6666"
                                                r="1.66667"
                                                transform="rotate(180 75.6654 30.6666)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="30.6666"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 30.6666)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="75.6654"
                                                cy="1.66665"
                                                r="1.66667"
                                                transform="rotate(180 75.6654 1.66665)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="31.9993"
                                                cy="1.66665"
                                                r="1.66667"
                                                transform="rotate(180 31.9993 1.66665)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="60.9993"
                                                cy="132"
                                                r="1.66667"
                                                transform="rotate(180 60.9993 132)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="132"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 132)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="60.9993"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 60.9993 117.333)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 117.333)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="60.9993"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 60.9993 102.667)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 102.667)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="60.9993"
                                                cy="88"
                                                r="1.66667"
                                                transform="rotate(180 60.9993 88)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="88"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 88)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="60.9993"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 60.9993 73.3333)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 73.3333)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="60.9993"
                                                cy="45"
                                                r="1.66667"
                                                transform="rotate(180 60.9993 45)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="45"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 45)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="60.9993"
                                                cy="16"
                                                r="1.66667"
                                                transform="rotate(180 60.9993 16)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="16"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 16)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="60.9993"
                                                cy="59"
                                                r="1.66667"
                                                transform="rotate(180 60.9993 59)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="59"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 59)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="60.9993"
                                                cy="30.6666"
                                                r="1.66667"
                                                transform="rotate(180 60.9993 30.6666)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="30.6666"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 30.6666)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="60.9993"
                                                cy="1.66665"
                                                r="1.66667"
                                                transform="rotate(180 60.9993 1.66665)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="17.3333"
                                                cy="1.66665"
                                                r="1.66667"
                                                transform="rotate(180 17.3333 1.66665)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="46.3333"
                                                cy="132"
                                                r="1.66667"
                                                transform="rotate(180 46.3333 132)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="132"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 132)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="46.3333"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 46.3333 117.333)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="117.333"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 117.333)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="46.3333"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 46.3333 102.667)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="102.667"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 102.667)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="46.3333"
                                                cy="88"
                                                r="1.66667"
                                                transform="rotate(180 46.3333 88)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="88"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 88)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="46.3333"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 46.3333 73.3333)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="73.3333"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 73.3333)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="46.3333"
                                                cy="45"
                                                r="1.66667"
                                                transform="rotate(180 46.3333 45)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="45"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 45)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="46.3333"
                                                cy="16"
                                                r="1.66667"
                                                transform="rotate(180 46.3333 16)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="16"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 16)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="46.3333"
                                                cy="59"
                                                r="1.66667"
                                                transform="rotate(180 46.3333 59)"
                                                fill="#9A1663"
                                            />
                                            <circle
                                                cx="2.66536"
                                                cy="59"
                                                r="1.66667"
                                                transform="rotate(180 2.66536 59)"
                                                fill="#9A1663"
                                            />

                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >


            {/* <!-- ====== Footer Section Start --> */}
            < footer class="footer-design  text-black px-10 pt-20 lg:pt-[120px] pb-10 lg:pb-20 relative z-10" >
                <div class="container">
                    <div class="flex flex-wrap -mx-4">
                        <div class="w-full sm:w-2/3 lg:w-3/12 px-4">
                            <div class="w-full mb-10">
                                <Link to='/'
                                    class="inline-block font-bold text-blue-600 text-2xl max-w-[160px] mb-6"
                                >
                                    <img className='w-24' src={logo} alt="" />
                                </Link>
                                <p class="text-base text-body-color mb-7">
                                    FOOD CART <br />
                                    Authentic,Pure Food
                                </p>
                                <p class="flex items-center text-sm text-dark font-medium">
                                    <span class="text-primary mr-3">
                                        <svg
                                            width="19"
                                            height="21"
                                            viewBox="0 0 19 21"
                                            class="fill-current"
                                        >
                                            <path
                                                d="M17.8076 11.8129C17.741 11.0475 17.1088 10.5151 16.3434 10.5151H2.16795C1.40261 10.5151 0.803643 11.0808 0.703816 11.8129L0.00502514 18.8008C-0.0282506 19.2001 0.104853 19.6327 0.371059 19.9322C0.637265 20.2317 1.03657 20.398 1.46916 20.398H17.0755C17.4748 20.398 17.8741 20.2317 18.1736 19.9322C18.4398 19.6327 18.5729 19.2334 18.5396 18.8008L17.8076 11.8129ZM17.2751 19.1668C17.2419 19.2001 17.1753 19.2667 17.0422 19.2667H1.46916C1.36933 19.2667 1.2695 19.2001 1.23623 19.1668C1.20295 19.1336 1.1364 19.067 1.16968 18.9339L1.86847 11.9127C1.86847 11.7463 2.00157 11.6465 2.16795 11.6465H16.3767C16.5431 11.6465 16.6429 11.7463 16.6762 11.9127L17.375 18.9339C17.3417 19.0337 17.3084 19.1336 17.2751 19.1668Z"
                                            />
                                            <path
                                                d="M9.25704 13.1106C7.95928 13.1106 6.92773 14.1422 6.92773 15.4399C6.92773 16.7377 7.95928 17.7693 9.25704 17.7693C10.5548 17.7693 11.5863 16.7377 11.5863 15.4399C11.5863 14.1422 10.5548 13.1106 9.25704 13.1106ZM9.25704 16.6046C8.6248 16.6046 8.09239 16.0722 8.09239 15.4399C8.09239 14.8077 8.6248 14.2753 9.25704 14.2753C9.88928 14.2753 10.4217 14.8077 10.4217 15.4399C10.4217 16.0722 9.88928 16.6046 9.25704 16.6046Z"
                                            />
                                            <path
                                                d="M0.802807 6.05619C0.869358 7.52032 2.16711 8.11928 2.83263 8.11928H5.16193C5.19521 8.11928 5.19521 8.11928 5.19521 8.11928C6.19348 8.05273 7.19175 7.38722 7.19175 6.05619V5.25757C8.28985 5.25757 10.8188 5.25757 11.9169 5.25757V6.05619C11.9169 7.38722 12.9152 8.05273 13.9135 8.11928H13.9467H16.2428C16.9083 8.11928 18.206 7.52032 18.2726 6.05619C18.2726 5.95636 18.2726 5.59033 18.2726 5.25757C18.2726 4.99136 18.2726 4.75843 18.2726 4.72516C18.2726 4.69188 18.2726 4.6586 18.2726 4.6586C18.1727 3.72688 17.84 2.96154 17.2743 2.36258L17.241 2.3293C16.4091 1.56396 15.4109 1.13138 14.6455 0.865169C12.416 0 9.62088 0 9.48778 0C7.52451 0.0332757 6.26003 0.199654 4.36331 0.865169C3.63125 1.0981 2.63297 1.53068 1.80108 2.29603L1.7678 2.3293C1.20212 2.92827 0.869359 3.69361 0.769531 4.62533C0.769531 4.6586 0.769531 4.69188 0.769531 4.69188C0.769531 4.75843 0.769531 4.95809 0.769531 5.22429C0.802807 5.52377 0.802807 5.92308 0.802807 6.05619ZM2.5997 3.12792C3.26521 2.52896 4.09711 2.16292 4.7959 1.89672C6.52624 1.26448 7.65761 1.13138 9.55433 1.0981C9.68743 1.0981 12.2829 1.13138 14.2795 1.89672C14.9783 2.16292 15.8102 2.49568 16.4757 3.12792C16.8417 3.52723 17.0746 4.05964 17.1412 4.69188C17.1412 4.79171 17.1412 4.95809 17.1412 5.22429C17.1412 5.55705 17.1412 5.92308 17.1412 6.02291C17.1079 6.78825 16.3759 6.95463 16.276 6.95463H13.98C13.6472 6.92135 13.1148 6.78825 13.1148 6.05619V4.69188C13.1148 4.42567 12.9485 4.22602 12.7155 4.12619C12.5159 4.05964 6.69262 4.05964 6.49296 4.12619C6.26003 4.19274 6.09365 4.42567 6.09365 4.69188V6.05619C6.09365 6.78825 5.56124 6.92135 5.22848 6.95463H2.93246C2.83263 6.95463 2.10056 6.78825 2.06729 6.02291C2.06729 5.92308 2.06729 5.55705 2.06729 5.22429C2.06729 4.95809 2.06729 4.82498 2.06729 4.72516C2.00073 4.05964 2.23366 3.52723 2.5997 3.12792Z"
                                            />
                                        </svg>
                                    </span>
                                    <span>+07847099000</span>
                                </p>
                            </div>
                        </div>
                        <div class="w-full sm:w-1/2 lg:w-2/12 px-4">
                            <div class="w-full mb-10">
                                <h4 class="text-dark text-lg font-semibold mb-9">Resources</h4>
                                <ul>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            class="
                        inline-block
                        text-base text-body-color
                        hover:text-primary
                        leading-loose
                        mb-2
                        "
                                        >

                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            class="
                        inline-block
                        text-base text-body-color
                        hover:text-primary
                        leading-loose
                        mb-2
                        "
                                        >
                                            Our Products
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            class="
                        inline-block
                        text-base text-body-color
                        hover:text-primary
                        leading-loose
                        mb-2
                        "
                                        >
                                            User Flow
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            class="
                        inline-block
                        text-base text-body-color
                        hover:text-primary
                        leading-loose
                        mb-2
                        "
                                        >
                                            User Strategy
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="w-full sm:w-1/2 lg:w-2/12 px-4">
                            <div class="w-full mb-10">
                                <h4 class="text-dark text-lg font-semibold mb-9">Company</h4>
                                <ul>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            class="
                        inline-block
                        text-base text-body-color
                        hover:text-primary
                        leading-loose
                        mb-2
                        "
                                        >
                                            About Food Cart
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            class="
                        inline-block
                        text-base text-body-color
                        hover:text-primary
                        leading-loose
                        mb-2
                        "
                                        >
                                            Contact & Support
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            class="
                        inline-block
                        text-base text-body-color
                        hover:text-primary
                        leading-loose
                        mb-2
                        "
                                        >
                                            Success History
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            class="
                        inline-block
                        text-base text-body-color
                        hover:text-primary
                        leading-loose
                        mb-2
                        "
                                        >
                                            Setting & Privacy
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="w-full sm:w-1/2 lg:w-2/12 px-4">
                            <div class="w-full mb-10">
                                <h4 class="text-dark text-lg font-semibold mb-9">Quick Links</h4>
                                <ul>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            class="
                        inline-block
                        text-base text-body-color
                        hover:text-primary
                        leading-loose
                        mb-2
                        "
                                        >
                                            Premium Support
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            class="
                        inline-block
                        text-base text-body-color
                        hover:text-primary
                        leading-loose
                        mb-2
                        "
                                        >
                                            Our Services
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            class="
                        inline-block
                        text-base text-body-color
                        hover:text-primary
                        leading-loose
                        mb-2
                        "
                                        >
                                            Know Our Team
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            class="
                        inline-block
                        text-base text-body-color
                        hover:text-primary
                        leading-loose
                        mb-2
                        "
                                        >
                                            Download App
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="w-full sm:w-1/2 lg:w-3/12 px-4">
                            <div class="w-full mb-10">
                                <h4 class="text-dark text-lg font-semibold mb-9">Follow Us On</h4>
                                <div class="flex items-center mb-6">
                                    <a target="_blank"
                                        href="https://web.facebook.com/Robiulalam76/"
                                        class="
                     w-8
                     h-8
                     flex
                     items-center
                     justify-center
                     rounded-full
                     border border-[#E5E5E5]
                     text-dark
                     hover:text-white hover:bg-primary hover:border-primary
                     mr-3
                     sm:mr-4
                     lg:mr-3
                     xl:mr-4
                     "
                                    >
                                        <svg
                                            width="8"
                                            height="16"
                                            viewBox="0 0 8 16"
                                            class="fill-current"
                                        >
                                            <path
                                                d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z"
                                            />
                                        </svg>
                                    </a>

                                    <a
                                        href="javascript:void(0)"
                                        class="
                     w-8
                     h-8
                     flex
                     items-center
                     justify-center
                     rounded-full
                     border border-[#E5E5E5]
                     text-dark
                     hover:text-white hover:bg-primary hover:border-primary
                     mr-3
                     sm:mr-4
                     lg:mr-3
                     xl:mr-4
                     "
                                    >
                                        <svg
                                            width="16"
                                            height="12"
                                            viewBox="0 0 16 12"
                                            class="fill-current"
                                        >
                                            <path
                                                d="M15.6645 1.88018C15.4839 1.13364 14.9419 0.552995 14.2452 0.359447C13.0065 6.59222e-08 8 0 8 0C8 0 2.99355 6.59222e-08 1.75484 0.359447C1.05806 0.552995 0.516129 1.13364 0.335484 1.88018C0 3.23502 0 6 0 6C0 6 0 8.79263 0.335484 10.1198C0.516129 10.8664 1.05806 11.447 1.75484 11.6406C2.99355 12 8 12 8 12C8 12 13.0065 12 14.2452 11.6406C14.9419 11.447 15.4839 10.8664 15.6645 10.1198C16 8.79263 16 6 16 6C16 6 16 3.23502 15.6645 1.88018ZM6.4 8.57143V3.42857L10.5548 6L6.4 8.57143Z"
                                            />
                                        </svg>
                                    </a>

                                </div>
                                <p class="text-base text-body-color">&copy; Food Cart</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <span class="absolute left-0 bottom-0 z-[-1]">
                        <svg
                            width="217"
                            height="229"
                            viewBox="0 0 217 229"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                                fill="url(#paint0_linear_1179_5)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_1179_5"
                                    x1="76.5"
                                    y1="281"
                                    x2="76.5"
                                    y2="1.22829e-05"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#3056D3" stop-opacity="0.08" />
                                    <stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </span>
                    <span class="absolute top-10 right-10 z-[-1]">
                        <svg
                            width="75"
                            height="75"
                            viewBox="0 0 75 75"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
                                fill="url(#paint0_linear_1179_4)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_1179_4"
                                    x1="-1.63917e-06"
                                    y1="37.5"
                                    x2="75"
                                    y2="37.5"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#9A1663" stop-opacity="0.31" />
                                    <stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </span>
                </div>


            </footer >


        </div >
    );
};

export default Footer;