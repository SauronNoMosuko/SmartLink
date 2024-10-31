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



export function Home() {

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
                    <ButtonText title="Dispositivos" isActive />
                    </NavLink>
                </li>

                 <li>
                    <ButtonText title="Energia" />
                </li>

            </Menu>

            {/* <Search>
                <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
            </Search> */}

            <Content>
               <NavLink to="/blocos" ><Boxe title="Bloco 1" /></NavLink>
               <NavLink to="/blocos" ><Boxe title="Bloco 2" /></NavLink>

            </Content>

            <NewNote onClick={signOut}>
            <IoExitOutline />
                Desconectar
            </NewNote>
        </Container>
    );
}