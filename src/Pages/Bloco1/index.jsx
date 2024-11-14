import { Container, Brand, Menu, Content, NewNote } from "./style.js"
import { Header } from "../../Components/Header/index.jsx";
import { ButtonText } from "../../Components/ButtonText/index.jsx";
import { IoExitOutline } from "react-icons/io5";
import { useAuth } from "../../Hooks/auth.jsx";
import { Card } from "../../Components/Card/index.jsx";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/Logo_Sidney.png"

export function Bloco1() {

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
                        <ButtonText title="Dispositivos" isActive/>
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/Energia'>
                        <ButtonText title="Energia" />
                    </NavLink>
                </li>
            </Menu>

            <Content>
                <div>
                    <h1>1º Andar</h1>
                    <Card title="Dispositivo 1" />
                    <hr />

                    <h1>2º Andar</h1>

                </div>
            </Content>

            <NewNote onClick={signOut}>
                <IoExitOutline />
                Desconectar
            </NewNote>
        </Container>
    );
}