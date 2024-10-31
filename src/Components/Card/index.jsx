import { StyledWrapper, Date, Hour } from "./style.js";
import { useState } from "react";



export const Card = ({ title }) => {

    //Estado para o switch
    const [checked, setChecked] = useState(false)

    //Estado para data e hora
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    return (
        <StyledWrapper>

            <div className="card">
                {title}
                
                <Date>
                    <input placeholder="Search" className="input" type="date" value={date} 
                    onChange={(e) => {
                        setDate(e.target.value);
                        console.log("Date:", e.target.value);
                    }} />
                </Date>

                <Hour>
                    <input placeholder="Search" className="input" type="time" value={time} 
                    onChange={(e) => {
                        setTime(e.target.value);
                        console.log("Hour:", e.target.value);
                    }} />
                </Hour>

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

