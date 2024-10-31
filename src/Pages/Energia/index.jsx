import { FiPlus, FiSearch } from "react-icons/fi";
import { Container, Brand, Menu, Search, Content, NewNote } from "./style.js"
import { Header } from "../../Components/Header/index.jsx";
import { Input } from "../../Components/Input/index.jsx";
import { Section } from "../../Components/Section/index.jsx";
import { ButtonText } from "../../Components/ButtonText/index.jsx";
import { Note } from "../../Components/Note/index.jsx";
import { IoExitOutline } from "react-icons/io5";
import { useAuth } from "../../Hooks/auth.jsx";
import { useState } from "react";
import { Boxe } from "../../Components/Boxe/index.jsx";
import { NavLink } from "react-router-dom";



export function Energia() {

    const [checked, setChecked] = useState(false)

    const { signOut } = useAuth()

    return (
        <Container>
            <Brand>
                <h1>SmartSync</h1>
            </Brand>

            <Header />

            <Menu>
                <li>
                    <NavLink to='/'>
                        <ButtonText title="Dispositivos" />
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/Energia'>
                        <ButtonText title="Energia" isActive />
                    </NavLink>
                </li>

            </Menu>
            
            <Content>
                <h1>Gasto Total</h1>
                <hr />
                <h1>Gasto Semanal</h1>
                <hr />
                <h1>Gasto do Dia</h1>
            </Content>

            <NewNote onClick={signOut}>
                <IoExitOutline />
                Desconectar
            </NewNote>
        </Container>
    );
}