import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch, useMedia } from "@yakad/lib";

import {
    AppBar,
    Main,
    Page,
    Spacer,
    Button,
    Container,
    GridContainer,
    GridItem,
    SvgIcon,
    Stack,
    Footer,
    Navigation,
    List,
    ListItem,
} from "@yakad/ui";
import styles from "./intro.module.css";
import { ReactComponent as LogoIcon } from "../../assets/svg/logoicon.svg";
import { ReactComponent as SearchIcon } from "../../assets/svg/search.svg";

const navListItems: Array<React.ReactElement> = [
    <ListItem>
        <Link to="quran">
            <Button style={{ width: "100%" }}>Quran</Button>
        </Link>
    </ListItem>,
    <ListItem>
        <a href="https://blog.natiq.net" target="_blank">
            <Button style={{ width: "100%" }}>Blog</Button>
        </a>
    </ListItem>,
];

function Intro() {
    const [navOpen, setNavOpen] = useState<boolean>(false);
    const matches = useMedia("(max-width: 1000px)");
    const toggleNavOpen = () => setNavOpen(value => !value);

    return (
        <Page>
            <AppBar>
                <SvgIcon size={5}>
                    <LogoIcon />
                </SvgIcon>
                <h1 style={{ fontWeight: "bold", marginInlineEnd: "2rem" }}>
                    Natiq Quran
                </h1>
                <List className={styles.appbar}>
                    {navListItems.map(item => item)}
                </List>
                <Spacer />
                <Link to="/search">
                    <Button variant="outlined" icon={<SearchIcon />}>
                        Search
                    </Button>
                </Link>
            </AppBar>
            <Main className={styles.main} style={{ padding: "5rem 0" }}>
                <GetStart />
            </Main>
            <Footer
                style={{
                    padding: "2rem",
                }}
            >
                <Container
                    maxWidth="lg"
                    style={{
                        alignItems: "center",
                        flexDirection: "row",
                        flexWrap: "wrap",
                    }}
                >
                    <SvgIcon size={7}>
                        <LogoIcon />
                    </SvgIcon>
                    <Spacer />
                    <Button variant="link">API</Button>
                    <a href="https://panel.natiq.net" target="_blank">
                        <Button variant="link">Panel</Button>
                    </a>
                </Container>
            </Footer>
            <Navigation anchor="top" open={navOpen}>
                <List direction="column" style={{ padding: "0 2rem" }}>
                    {navListItems.map(item => item)}
                </List>
            </Navigation>
        </Page>
    );
}

function GetStart() {
    return (
        <Container maxWidth="lg">
            <GridContainer className={styles.grid}>
                <GridItem md={12} xl={5}>
                    <SvgIcon style={{ maxWidth: "40rem", margin: "auto" }}>
                        <LogoIcon />
                    </SvgIcon>
                </GridItem>
                <GridItem
                    md={12}
                    xl={7}
                    style={{
                        alignItems: "center",
                        display: "flex",
                        paddingRight: "3rem",
                    }}
                >
                    <Stack style={{ width: "100%", alignItems: "center" }}>
                        <span style={{ display: "flex" }}>
                            <h1
                                style={{
                                    fontSize: "7rem",
                                    fontFamily: "Hafs",
                                }}
                            >
                                <span>الْقُرآنُ </span>
                                <span style={{ color: "#aa8a59" }}>
                                    النّاطِق
                                </span>
                            </h1>
                        </span>
                        <p
                            style={{
                                textAlign: "justify",
                                textAlignLast: "center",
                                fontSize: "1.6rem",
                                lineHeight: "2rem",
                            }}
                        >
                            Quran Nategh, Recitation, Word by Word, Translate &
                            Tafsir. Based on research.
                        </p>
                        <Link to="./PWA">
                            <Button variant="filled" size="large">
                                GET START
                            </Button>
                        </Link>
                    </Stack>
                </GridItem>
            </GridContainer>
        </Container>
    );
}

export default Intro;
