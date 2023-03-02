import {
    Page,
    Main,
    Container,
    Hr,
    AppBar,
    Button,
    GridContainer,
    GridItem,
    Row,
    Spacer,
    Stack,
    Footer,
} from "@yakad/ui";
import { useNavigate } from "react-router-dom";
import Categories from "./categories";
import Header from "./appbar";
import { About, BotNavBar } from "./footer";
import { ReactComponent as Menu } from "../../assets/svg/menu.svg";
import logo from "../../assets/images/logo512.png";


function Intro() {
    const navigate = useNavigate();
    return (
        <Page>
            <Header />
            <AppBar style={{
                position: "sticky",
                top: "0",
            }}>
                <Button icon={<Menu />} />
                <Spacer />
                <a href="#header" style={{ display: "block", height: "100%" }}>
                    <Row style={{ height: "100%", gap: "0.5rem" }}>
                        <h1 style={{ fontFamily: "Arial" }}>RubYmor</h1>
                        <img style={{ height: "80%" }} src={logo} />
                    </Row>
                </a>
            </AppBar>
            <Main>
                <Categories />
            </Main>
            <BotNavBar />
            <About />
        </Page >
    );
}

export default Intro;
