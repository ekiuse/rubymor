import { Footer, Container, SvgIcon, Spacer, Button, Hr, Stack } from "@yakad/ui";
import logo from "../../assets/images/logo512.png";
function Footerr() {
    return (
        <Footer
            style={{
                padding: "2rem",
                backgroundColor: "#222222",
            }}
        >
            <Container
                maxWidth="xs"
            >
                <Stack style={{ width: "100%", alignItems: "center", textAlign: "center" }}>
                    <img src={logo} style={{ width: "6rem" }} />
                    <h2 style={{ margin: 0, fontFamily: "Arial" }}>RubYmor</h2>
                    <h2>
                        آدرس: خیابان خافظ به سمت پل سعدی ـ نرسیده به پل جنب دور
                        برگردان ـ روبروی دانشکده پرستاری
                    </h2>
                    <Hr variant="shortLine" />
                    <h2 style={{ fontFamily: "Arial" }}>
                        designed by <a>arjcloud.ir</a>
                    </h2>
                </Stack>
            </Container>
        </Footer>
    );
}
export default Footerr;
