import { Container, Brand, Menu, Content, NewNote } from "./style.js"
import { Header } from "../../Components/Header/index.jsx";
import { ButtonText } from "../../Components/ButtonText/index.jsx";
import { Floor } from "../../Components/Floor/index.jsx";
import { IoExitOutline } from "react-icons/io5";
import { useAuth } from "../../Hooks/auth.jsx";
import { Card } from "../../Components/Card/index.jsx";
import { Card2 } from "../../Components/Card2/index.jsx";
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
                        <ButtonText title="Dispositivos" isActive />
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/Energia'>
                        <ButtonText title="Energia" />
                    </NavLink>
                </li>
            </Menu>

            <Content>
                <h1>1º Andar</h1>
                <Floor />

                <hr />
                <div>
                    <Card title="ACD001 BLCA LB07" />
                    <Card2 title2="ACD002 BLCA LB07" />
                </div>

            </Content>

            <NewNote onClick={signOut}>
                <IoExitOutline />
                Desconectar
            </NewNote>
        </Container>
    );
}