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

function Intro() {
    const navigate = useNavigate();
    return (
        <Page>
            <Main>
                <Categories />
            </Main>
        </Page>
    );
}

export default Intro;
