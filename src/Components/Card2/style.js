import styled from "styled-components";

export const Date = styled.div`
position: absolute;
top: 5rem;
  .input {
    border: 2px solid transparent;
    width: 10em;
    height: 2.5em;
    padding-left: 0.8em;
    outline: none;
    overflow: hidden;
    background-color: #d3d3d3 ;
    border-radius: 10px;
    transition: all 0.25s;
  }

  .input:hover,
  .input:focus {
    border: 2px solid ${({ theme }) => theme.COLORS.ORANGE};
    box-shadow: 0px 0px 0px 7px ${({ theme }) => theme.COLORS.ORANGE};
    background-color: white;
  }`;

export const Hour = styled.div`
position: absolute;
top: 10rem;
  .input {
    border: 2px solid transparent;
    width: 10em;
    height: 2.5em;
    padding-left: 0.8em;
    outline: none;
    overflow: hidden;
    background-color: #d3d3d3;
    border-radius: 10px;
    transition: all 0.25s;
  }

  .input:hover,
  .input:focus {
    border: 2px solid${({ theme }) => theme.COLORS.ORANGE};
    box-shadow: 0px 0px 0px 7px ${({ theme }) => theme.COLORS.ORANGE};
    background-color: white;
  }`;

export const Submit = styled.div`
position: absolute;
top: 15rem;

button {
width: 120px;
height: 30px;
border: 3px solid ${({ theme }) => theme.COLORS.ORANGE};
border-radius: 45px;
transition: all 0.25s;
cursor: pointer;
background: white;
font-size: 1em;
font-weight: 550;
}

button:hover {
background: ${({ theme }) => theme.COLORS.ORANGE};
color: white;
font-size: 1.1em;
}`;

export const Onoff = styled.div`
/* The switch - the box around the slide */
.onoff {
  position: absolute;
  bottom: 3rem;
  left: 7.5rem;
  font-size: 17px;
  display: inline-block;
  width: 2em;
  height: 2em;
}

/* Hide default HTML checkbox */
.onoff .chk {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slide */
.slide {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.COLORS.RED};
  transition: .4s;
  border-radius: 50%;
}

.slide:before {
  position: absolute;
  content: "";
  height: 0.8em;
  width: 0.8em;
  border-radius: 2.5px;
  left: 0.6em;
  bottom: 0.6em;
  background-color: white;
  transition: .4s;
  scale: 0;
}

.chk:checked + .slide {
  background-color: ${({ theme }) => theme.COLORS.GREEN};
  transform: scale(0.9);
  border-radius: 50%;
}

.chk:checked + .slide:before {
  transform: rotateZ(360deg);
  scale: 1;
  border-radius: 50%;
}`;

export const StyledWrapper = styled.div`
  .card {
    margin: 3rem;
    position: relative;
    width: 270px;
    height: 270px;
    border-radius: 50px;
    background: ${({ theme }) => theme.COLORS.WHITE1};
    display: flex;
    justify-content: center;
    padding: 1.7rem;
    font-weight: 500;
    font-size: 1.9rem;

.switch {
    z-index: 1;
    position: absolute;
    bottom: 3rem;
    right: 7.5rem;
    width: 60px;
    height: 34px;
}
.switch input { 
    opacity: 0;
    width: 0;
    height: 0;
}
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.COLORS.BLUE1};
    -webkit-transition: .4s;
    transition: .4s;
}
.slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}
input:checked + .slider {
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
}
input:focus + .slider {
    box-shadow: 0 0 1px ${({ theme }) => theme.COLORS.ORANGE};
}
input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}
/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}
.slider.round:before {
    border-radius: 50%;
}
}`;