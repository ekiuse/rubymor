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
} from "@yakad/ui";
import { useNavigate } from "react-router-dom";
import Categories from "./categories";
import Header from "./appbar";
import Footerr from "./footer";

function Intro() {
    const navigate = useNavigate();
    return (
        <Page>
            <Header />
            <Main>
                <Categories />
            </Main>
            <Footerr />
        </Page>
    );
}

export default Intro;
