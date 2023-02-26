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
import MenuLists from "../../assets/json/menu.json";
import images from "../../assets/images/index";

// interface MenuItems {
//     name: string;
//     description: string;
//     price: number;
// }

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
                                md={6}
                                sm={12}
                                style={{ minHeight: "5rem", background: "red" }}
                            >
                                <img width="100%" src={images[item.image]} />
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
