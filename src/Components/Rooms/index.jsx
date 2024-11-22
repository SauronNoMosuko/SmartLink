import { StyledSelect } from "./style.js";

export const Rooms = () => {
  return (
    <StyledSelect>

      <select name="rooms" id="rooms">

        <option value="sala1">Sala 1</option>
        <option value="sala2">Sala 2</option>
        <option value="sala3">Sala 3</option>

      </select>

    </StyledSelect>

  );
}