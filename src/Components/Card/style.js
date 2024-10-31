import styled from "styled-components";

export const StyledWrapper = styled.div`
  .card {
    margin: 3rem;
    position: relative;
    width: 220px;
    height: 270px;
    border-radius: 50px;
    background: ${({ theme }) => theme.COLORS.WHITE1};
    box-shadow: 10px 10px 60px #bebebe, -10px -10px 60px #ffffff;
    display: flex;
    justify-content: center;
    padding: 1.7rem;
    font-weight: 500;
    font-size: 1.9rem;


.switch {
    z-index: 1;
    position: absolute;
    bottom: 4rem;
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
    background-color: #2196F3;
}

input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
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
    transition: all 0.5s;
  }

  .input:hover,
  .input:focus {
    border: 2px solid #4a9dec;
    box-shadow: 0px 0px 0px 7px rgb(74, 157, 236, 20%);
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
    transition: all 0.5s;
  }

  .input:hover,
  .input:focus {
    border: 2px solid #4a9dec;
    box-shadow: 0px 0px 0px 7px rgb(74, 157, 236, 20%);
    background-color: white;
  }`;