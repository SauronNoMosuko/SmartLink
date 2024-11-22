import { StyledSelect } from "./style.js";
import { useNavigate } from 'react-router-dom';


export const Floor = () => {

  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    const selectedFloor = event.target.value;
    navigate(`/${selectedFloor}`);
  };
  return (
    <StyledSelect>

      <select name="Andar" id="Andar" onChange={handleSelectChange}>
        <option value="andar1">1º Andar</option>
        <option value="andar2">2º Andar</option>
        <option value="andar3">3º Andar</option>
      </select>


    </StyledSelect>

  );
}