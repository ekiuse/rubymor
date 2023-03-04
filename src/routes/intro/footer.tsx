import {
    Footer,
    Container,
    SvgIcon,
    Spacer,
    Row,
    Button,
    Hr,
    Stack,
} from "@yakad/ui";
import logo from "../../assets/images/logo512.png";
import { ReactComponent as Hot } from "../../assets/svg/coffee.svg";
import { ReactComponent as Brek } from "../../assets/svg/egg-fried.svg";
import { ReactComponent as Cake } from "../../assets/svg/cupcake.svg";
import { ReactComponent as Food } from "../../assets/svg/hamburger.svg";
import { ReactComponent as Cloud } from "../../assets/svg/glass-cocktail.svg";
import { ReactComponent as Others } from "../../assets/svg/bottle-soda-classic.svg";

function About() {
    return (
        <Footer
            id="footer"
            style={{
                padding: "2rem",
                backgroundColor: "#222222",
            }}
        >
            <Container maxWidth="xs">
                <Stack
                    style={{
                        width: "100%",
                        alignItems: "center",
                        textAlign: "center",
                    }}
                >
                    <img src={logo} style={{ width: "6rem" }} />
                    <h2 style={{ margin: 0, fontFamily: "Arial" }}>RubYmor</h2>
                    <h2 style={{ margin: 0 }}>
                        آدرس: خیابان حافظ به سمت پل سعدی، نرسیده به پل جنب دور
                        برگردان، روبروی دانشکده پرستاری
                    </h2>
                    <h2 style={{ margin: 0 }}>
                        تلفن:09143571040 فروتن -09145999923 حسینی
                    </h2>
                    <Hr variant="shortLine" />
                    <h2 style={{ fontFamily: "Arial", fontSize: "1.3rem" }}>
                        designed by{" "}
                        <a href="http://arjcloud.ir" target="blank">
                            arjcloud.ir
                        </a>
                    </h2>
                </Stack>
            </Container>
        </Footer>
    );
}

function BotNavBar() {
    return (
        <Footer
            id="botNavBar"
            style={{
                position: "sticky",
                bottom: "-1px",
                height: "auto",
                borderTop: "0.1rem solid #7d7d7d7d",
                backgroundColor: "#1a1c18",
                overflowY: "auto",
            }}
        >
            <Row
                style={{
                    width: "100%",
                    padding: "1rem 0",
                    justifyContent: "center",
                    gap: "1rem",
                }}
            >
                <a href="#espresso_bar">
                    <Button variant="tonal" icon={<Hot />} />
                </a>
                <a href="#cold_bar">
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
                <a href="#salad">
                    <Button variant="tonal" icon={<Others />} />
                </a>
            </Row>
        </Footer>
    );
}

export { About, BotNavBar };
