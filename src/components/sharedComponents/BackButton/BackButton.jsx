import React from 'react';
import {useNavigate} from "react-router-dom";
import s from './BackButton.module.scss'

const BackButton = ({classname}) => {
  
  const navigate = useNavigate()
  
  return (
      <button className={`${s.btn} ${classname}`} onClick={() => navigate(-1)}>
        <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM26 10.5L2 10.5V13.5L26 13.5V10.5Z"
              fill="url(#paint0_linear_102_24706)"/>
          <defs>
            <linearGradient id="paint0_linear_102_24706" x1="26" y1="11" x2="2" y2="11.9048"
                            gradientUnits="userSpaceOnUse">
              <stop offset="0.356588" stopColor="#872693"/>
              <stop offset="1" stopColor="#3972CD"/>
            </linearGradient>
          </defs>
        </svg>
        <span>Назад </span>
      </button>
  );
};

export default BackButton;