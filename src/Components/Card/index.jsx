import { StyledWrapper } from "./style.js";
import { useState } from "react";



export const Card = ({title}) => {

const [checked, setChecked] = useState(false)


    return (
        <StyledWrapper>

            <div className="card">
                {title}

                <label class="switch">
                    <input onChange={(e) => {
                        setChecked(e.target.checked)
                        console.log(checked)
                    }} type="checkbox" />
                    <span class="slider round"></span>
                </label>

            </div>
        </StyledWrapper>
    );
}

