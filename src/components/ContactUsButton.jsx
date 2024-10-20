import React from "react";
import styled from "styled-components";

const ContactUsButton = () => {
    return (
        <StyledWrapper>
            <button className="cta">
                <span>Contact Us</span>

            </button>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  .cta {
  position: relative;
  margin: auto;
  padding: 10px 16px;
  transition: all 0.2s ease;
  border: none;
  background: none;
  cursor: pointer;
}

.cta:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  border-radius: 50px;
  background: #FFE0B5;
  width: 45px;
  height: 45px;
  transition: all 0.3s ease;
}

.cta span {
  position: relative;
  font-family: "Ubuntu", sans-serif;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #234567;
}

.cta svg {
  position: relative;
  top: 0;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: #234567;
  stroke-width: 2;
  transform: translateX(-5px);
  transition: all 0.3s ease;
}

.cta:hover:before {
  width: 100%;
  background: #FFE0B5;
}

.cta:hover svg {
  transform: translateX(0);
}

.cta:active {
  transform: scale(0.95);
}

`;

export default ContactUsButton;
