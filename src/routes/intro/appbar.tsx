import { AppBar, Stack } from "@yakad/ui";
import logo from "../../assets/images/logo512.png";

function Header() {
    return <AppBar style={{
        height: "auto",
        padding: "2rem",
        justifyContent: "center"
    }} >
        <Stack style={{
            alignItems: "center"
        }}>
            <img src={logo} style={{ width: "16rem" }} />
            <h1 style={{ margin: "0", fontFamily: "Arial", fontSize: "2.4rem" }}>RUBYMOR</h1>
            <h2 style={{ fontSize: "1.8rem" }}>به کافه روبیمور خوش آمدید.</h2>
        </Stack>
    </AppBar >;
}
export default Header;
