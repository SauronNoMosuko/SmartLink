import { StyledWrapper, Date, Hour } from "./style.js";
import { useState } from "react";
import { api2 } from "../../services/api.js"



export const Card = ({ title }) => {

    //Estado para o switch
    const [checked, setChecked] = useState('off')

    const handleChange = async () => {
        const novoEstado = checked === 'off' ? 'on' : 'off';
        setChecked(novoEstado);
    
        try {
          const response = await api2.post('/ligar-dispositivo', {
            deviceId: 'seu_device_id', // Substitua pelo ID do seu dispositivo
            status: novoEstado,
          });
    
          if (response.status === 200) {
            console.log('Dispositivo atualizado com sucesso!');
          } else {
            console.error('Erro ao atualizar o dispositivo:', response.data.erro);
          }
        } catch (error) {
          console.error('Erro na requisição:', error);
        }
      };

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

                <label className="switch">
                    <input 
                    checked={checked === 'on'}
                    onChange={handleChange}
                    type="checkbox" />
                    <span className="slider round"></span>
                </label>

            </div>
        </StyledWrapper>
    );
}

