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
import { ReactComponent as Hot } from "../../assets/svg/Hot.svg";
import { ReactComponent as Brek } from "../../assets/svg/Break.svg";
import { ReactComponent as Cake } from "../../assets/svg/Cake.svg";
import { ReactComponent as Food } from "../../assets/svg/Food.svg";
import { ReactComponent as Cloud } from "../../assets/svg/Cloud.svg";
import { ReactComponent as Others } from "../../assets/svg/others.svg";

function Categories() {
    return (
        <div>
            <AppBar style={{
                position: "initial",
                top: "0",
            }}></AppBar>
            <Container
                maxWidth="xl"
                style={{ flexDirection: "column", padding: "4rem 2rem" }}
            >
                {MenuLists.categories.map(item => (
                    <div
                        id={item.tag ? item.tag : "null"}
                        style={{ padding: "2rem 0" }}
                    >
                        <h3 style={{ margin: "1rem", fontSize: "3rem" }}>{item.name}</h3>
                        <Hr variant="dashed" style={{ border: "none", borderTop: "0.2rem dashed var(--primaryContainerColor, #c2e7ff)" }} />
                        <GridContainer
                            style={{ padding: "2rem" }}
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
            <Footer
                style={{
                    position: "sticky",
                    bottom: "-1px",
                    height: "auto",
                    padding: "1rem 0",
                    borderTop: "0.1rem solid #7d7d7d7d",
                    backgroundColor: "#1a1c18",
                    overflowY: "auto",
                }}
            >
                <Row
                    style={{
                        width: "100%",
                        justifyContent: "center",
                        gap: "1rem",
                    }}
                >
                    <a href="#hot_drink">
                        <Button variant="tonal" icon={<Hot />} />
                    </a>
                    <a href="#cold_drink">
                        <Button variant="tonal" icon={<Cloud />} />
                    </a>
                    <a href="#cake">
                        <Button variant="tonal" icon={<Cake />} />
                    </a>
                    <a href="#breakfast">
                        <Button variant="tonal" icon={<Brek />} />
                    </a>
                    <a href="#food">
                        <Button variant="tonal" icon={<Food />} />
                    </a>
                    <a href="#other">
                        <Button variant="tonal" icon={<Others />} />
                    </a>
                </Row>
            </Footer>
        </div>
    );
}

export default Categories;
