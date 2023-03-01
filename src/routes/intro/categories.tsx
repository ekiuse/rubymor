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
    SvgIcon,
} from "@yakad/ui";
import ListItem from "./listItem";
import MenuLists from "../../assets/json/menu.json";

function Categories() {
    return (
        <Container
            maxWidth="xl"
            style={{ flexDirection: "column", padding: "0 2rem 4rem" }}
        >
            {MenuLists.categories.map(item => (
                <div
                    id={item.tag ? item.tag : "null"}
                    style={{ padding: "4.5rem 0 0" }}
                >
                    <h3 style={{ margin: "1rem", fontSize: "3rem" }}>{item.name}</h3>
                    <Hr variant="dashed" style={{ border: "none", borderTop: "0.2rem dashed var(--primaryContainerColor, #c2e7ff)" }} />
                    <GridContainer
                        style={{ padding: "2rem 0 0" }}
                        rowGap={2}
                        columnGap={2}
                    >
                        {item.list.map(item => (
                            <GridItem xl={4} lg={6} md={12}>
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
