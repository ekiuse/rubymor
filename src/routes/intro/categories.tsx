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
import ListItem from "./listItem";
import MenuLists from "../../assets/json/menu.json";

function Categories() {
    return (
        <Container maxWidth="lg" style={{ padding: "4rem 2rem" }}>
            <Row>
                {MenuLists.categories.map(item => (
                    <Button variant="filled">{item.name}</Button>
                ))}
            </Row>
            {MenuLists.categories.map(item => (
                <div>
                    <h2>{item.name}</h2>
                    <Hr />
                    <GridContainer>
                        {item.list.map(item => (
                            <GridItem
                                xl={4}
                                md={6}
                                sm={12}
                                style={{
                                    minHeight: "5rem",
                                    background: "red",
                                }}
                            >
                                <ListItem data={item} />
                            </GridItem>
                        ))}
                    </GridContainer>
                </div>
            ))}
        </Container>
    );
}

export default Categories;
