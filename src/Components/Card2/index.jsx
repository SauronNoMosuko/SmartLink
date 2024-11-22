import { StyledWrapper, Date, Hour, Onoff, Submit } from "./style.js";
import { useState } from "react";
import { api2 } from "../../services/api.js"



export const Card2 = ({ title2 }) => {
  const ON_MESSAGE = "Ligado"; // Constant for "Ligado" message
  const OFF_MESSAGE = "Desligado"; // Constant for "Desligado" message

  const handleOnoffChange = () => {
    // Since the checkbox is disabled, simulate the change by logging a message
    console.log(checked === 'off' ? OFF_MESSAGE : ON_MESSAGE);
  }

  //Estado para o switch
  const [checked, setChecked] = useState('off')

  const handleChange2 = async () => {
    const novoEstado1 = checked === 'off' ? 'on' : 'off';
    setChecked(novoEstado1);

    try {
      const response = await api2.post('/ligar-dispositivo1', {
        deviceId: 'seu_device_id', // Substitua pelo ID do seu dispositivo
        status1: novoEstado1,
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
        {title2}

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

        <Submit>
          <button>Submit</button>
        </Submit>

        <label className="switch">
          <input
            checked={checked === 'on'}
            onChange={handleChange2}
            type="checkbox" />
          <span className="slider round"></span>
        </label>

        <Onoff>
          <label className="onoff">
            <input className="chk" type="checkbox" onChange={handleOnoffChange} />
            <span className="slide" />
          </label>
        </Onoff>

      </div>
    </StyledWrapper>
  );
}

