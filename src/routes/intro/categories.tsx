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
import ListItem from "./listItem";
import MenuLists from "../../assets/json/menu.json";

function Categories() {
    return (
        <div>
            {/* <AppBar
                style={{
                    position: "sticky",
                    top: "-1px",
                    height: "auto",
                    padding: "1rem 0",
                }}
            >
                <Row
                    style={{
                        width: "100%",
                        justifyContent: "center",
                        overflowX: "auto",
                        overflowY: "auto",
                    }}
                >
                    {MenuLists.categories.map(item => (
                        <a href={"#" + item.name || "/notfound"}>
                            <Button
                                variant="filled"
                                size="medium"
                                style={{
                                    width: "10rem",
                                    height: "4.5rem",
                                    fontSize: "1.5rem",
                                    justifyContent: "center",
                                }}
                            >
                                {item.name}
                            </Button>
                        </a>
                    ))}
                </Row>
            </AppBar> */}
            <Container
                maxWidth="xl"
                style={{ flexDirection: "column", padding: "4rem 2rem" }}
            >
                {MenuLists.categories.map(item => (
                    <div id={item.tag ? item.tag : "null"} style={{ padding: "2rem 0" }}>
                        <h2>{item.name}</h2>
                        <Hr variant="dashed" />
                        <GridContainer
                            style={{ padding: "2rem" }}
                            rowGap={2}
                            columnGap={2}
                        >
                            {item.list.map(item => (
                                <GridItem xl={4} lg={6} md={6} sm={12}>
                                    <ListItem data={item} />
                                </GridItem>
                            ))}
                        </GridContainer>
                    </div>
                ))}
            </Container>
            <Footer
                style={{
                    position: "sticky",
                    bottom: "-1px",
                    height: "auto",
                    padding: "1rem 0",
                    borderTop: "0.1rem solid #7d7d7d7d",
                    backgroundColor: "#000",
                }}
            >
                <Row
                    style={{
                        width: "100%",
                        justifyContent: "center",
                        overflowX: "auto",
                        overflowY: "auto",
                    }}
                >
                    <a href="#hot_drink"><Button variant="elevated">HOT</Button></a>
                    <a href="#cold_drink"><Button variant="elevated">Cold</Button></a>
                    <a href="#cake"><Button variant="elevated">Cake</Button></a>
                    <a href="#breakfast"><Button variant="elevated">Break</Button></a>
                    <a href="#food"><Button variant="elevated">Food</Button></a>
                    <a href="#other"><Button variant="elevated">Other</Button></a>
                </Row>
            </Footer>
        </div >
    );
}

export default Categories;
