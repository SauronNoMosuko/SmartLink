import { FiPlus, FiSearch } from "react-icons/fi";
import { Container, Brand, Menu, Content, NewNote } from "./style.js"
import { Header } from "../../Components/Header/index.jsx";
import { Input } from "../../Components/Input/index.jsx";
import { Section } from "../../Components/Section/index.jsx";
import { ButtonText } from "../../Components/ButtonText/index.jsx";
import { Note } from "../../Components/Note/index.jsx";
import { IoExitOutline } from "react-icons/io5";
import { useAuth } from "../../Hooks/auth.jsx";
import { useState } from "react";
import { Card } from "../../Components/Card/index.jsx";

export function Blocos() {
    
    const { signOut } = useAuth()

    return (
        <Container>
            <Brand>
                <h1>SmartSync</h1>
            </Brand>

            <Header />

            <Menu>
                <li>

                    <ButtonText title="Dispositivos" isActive />
                </li>

                {<li>
                    <ButtonText title="Energia" />
                </li>}
            </Menu>

            <Content>
                <div>
                    <h1>1º Andar</h1>
                    <Card title="Dispositivo 1" />
                </div>
            </Content>

            <NewNote onClick={signOut}>
                <IoExitOutline />
                Desconectar
            </NewNote>
        </Container>
    );
}