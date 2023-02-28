import { Footer, Container, SvgIcon, Spacer, Button, Hr } from "@yakad/ui";
import logo from "../../assets/images/logo512.png";
function Footerr() {
    return (
        <Footer
            style={{
                padding: "0.5rem",
                backgroundColor: "#222222",
            }}
        >
            <Container
                maxWidth="lg"
                style={{
                    alignItems: "center",
                    flexDirection: "row",
                    flexWrap: "wrap",
                }}
            >
                <h2>
                    آدرس:خیابان خافظ به سمت پل سعدی ـ نرسیده به پل جنب دور
                    برگردان ـ روبروی دانشکده پرستاری{" "}
                </h2>
                <Spacer />

                <h2>RubYmor</h2>
                <img src={logo} style={{ width: "6rem" }} />
                <Hr />
                <h2 style={{ alignItems: "center" }}>
                    designed by <a>arjcloud.ir</a>
                </h2>
            </Container>
        </Footer>
    );
}
export default Footerr;
