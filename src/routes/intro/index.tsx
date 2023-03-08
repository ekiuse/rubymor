import {
    Page,
    Main,
    AppBar,
    Button,
    Row,
    Spacer,
    Navigation,
    ListItem,
} from "@yakad/ui";
import NavigationList from "./navigationList";
import { useNavigate } from "react-router-dom";
import Categories from "./categories";
import React, { useState } from "react";
import Header from "./appbar";
import { About, BotNavBar } from "./footer";
import { ReactComponent as Menu } from "../../assets/svg/menu.svg";
import { ReactComponent as Close } from "../../assets/svg/close.svg";
import logo from "../../assets/images/logo512.png";

function Intro() {
    const navigate = useNavigate();
    const [navOpen, setNavOpen] = useState<boolean>(false);
    const toggleNavOpen = () => setNavOpen(value => !value);
    return (
        <Page>
            <Header />
            <AppBar
                style={{
                    position: "sticky",
                    top: "0",
                }}
            >
                <Button icon={<Menu />} onClick={toggleNavOpen} />
                <Spacer />
                <a href="#header" style={{ display: "block", height: "100%" }}>
                    <Row style={{ height: "100%", gap: "0.5rem" }}>
                        <h1 style={{ fontFamily: "Arial" }}>RubYmor</h1>
                        <img style={{ height: "80%" }} src={logo} />
                    </Row>
                </a>
            </AppBar>
            {/* {matches ? <h1>true</h1> : <h1>false</h1>} */}
            <Main onClick={() => setNavOpen(false)}>
                <Categories />
            </Main>
            <BotNavBar />
            <About />
            <Navigation
                anchor="right"
                open={navOpen}
                onClick={toggleNavOpen}
                style={{ top: "0", height: "100%" }}
            >
                <Button icon={<Close />} style={{ marginRight: "0.5rem" }} />
                <NavigationList />
                <ListItem>
                    <a href={"#footer"}>
                        <Button>درباره ما</Button>
                    </a>
                </ListItem>
            </Navigation>
        </Page>
    );
}

export default Intro;
