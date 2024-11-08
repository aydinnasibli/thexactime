import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/cropped_image.png'
const LogoFlipCard = () => {
    return (
        <StyledWrapper>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={Logo} />
                    </div>
                    <div className="flip-card-back ">
                        <p className='sm:text-xs md:text-3xl lg:text-5xl'>BACK</p>
                    </div>
                </div>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .flip-card {
    background-color: transparent;
    width: 12vw; /* 20% of viewport width */
    height: 12vw; /* 20% of viewport width to keep it circular */
    max-width: 300px; /* Optional: limits the size on larger screens */
    max-height: 300px; /* Same as above */
    perspective: 1000px;
    font-family: sans-serif;
  }

  
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front, .flip-card-back {
    box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 1px solid coral;
    border-radius: 50%; /* Makes it circular */
  }

  .flip-card-front {
    background: linear-gradient(120deg, bisque 60%, rgb(255, 231, 222) 88%,
       rgb(255, 211, 195) 40%, rgba(255, 127, 80, 0.603) 48%);
    color: coral;
  }

  .flip-card-back {
    background: linear-gradient(120deg, rgb(255, 174, 145) 30%, coral 88%,
       bisque 40%, rgb(255, 185, 160) 78%);
    color: white;
    transform: rotateY(180deg);
  }

  /* Additional Responsive Font Sizes for Smaller Screens */
  @media (max-width: 768px) {
    .title {
      font-size: 6vw; /* Adjusts title text size for smaller screens */
    }

    .flip-card {
      width: 25vw;
      height: 25vw; /* Adjust flip card size on smaller screens */
    }
  }

  @media (max-width: 480px) {
    .title {
      font-size: 8vw; /* Makes the text even smaller on very small screens */
    }

    .flip-card {
      width: 30vw;
      height: 30vw; /* Larger size for very small screens */
    }
  }
`;

export default LogoFlipCard;
