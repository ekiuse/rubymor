import {
    Page,
    Main,
    Container,
    Hr,
    AppBar,
    Button,
    GridContainer,
    GridItem,
} from "@yakad/ui";
import { useNavigate } from "react-router-dom";

interface MenuItems {
    name: string;
    description: string;
    price: number;
}

const MenuLists: Array<MenuItems> = [
    {
        name: "test",
        description: "The Opener",
        price: 15000,
    },
    {
        name: "test",
        description: "The Opener",
        price: 15000,
    },
    {
        name: "test",
        description: "The Opener",
        price: 15000,
    },
    {
        name: "test",
        description: "The Opener",
        price: 15000,
    },
];

function Intro() {
    const navigate = useNavigate();
    return (
        <Page>
            <AppBar></AppBar>
            <Main>
                <Container maxWidth="md">
                    <h2>Menu</h2>
                    <Hr />
                    <GridContainer>
                        {MenuLists.map((item, index) => (
                            <GridItem
                                xl={4}
                                sm={6}
                                style={{ height: "5rem", background: "red" }}
                            >
                                {item.name}
                            </GridItem>
                        ))}
                    </GridContainer>
                </Container>
            </Main>
        </Page>
    );
}

export default Intro;
