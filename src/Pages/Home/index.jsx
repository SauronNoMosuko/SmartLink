import { FiPlus, FiSearch } from "react-icons/fi";
import { Container, Brand, Menu, Search, Content, NewNote } from "./style"
import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";
import { Section } from "../../Components/Section";
import { ButtonText } from "../../Components/ButtonText";
import { Note } from "../../Components/Note";
import { IoExitOutline } from "react-icons/io5";
import { useAuth } from "../../Hooks/auth.jsx";
import { useState } from "react";
import { Boxe } from "../../Components/Boxe/index.jsx";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/Logo_Sidney.png"



export function Home() {

    const { signOut } = useAuth()

    return (
        <Container>
            <Brand>
                <img width={30} src={logo} alt="" />
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
                    <NavLink to='/energia'>
                        <ButtonText title="Energia" />
                    </NavLink>
                </li>
            </Menu>

            <Content>
                <NavLink to='/bloco1'>
                    <Boxe title="Bloco 1" />
                </NavLink>

                <NavLink to="#" ><Boxe title="Bloco 2" /></NavLink>
            </Content>

            <NewNote onClick={signOut}>
                <IoExitOutline />
                Desconectar
            </NewNote>
        </Container>
    );
}