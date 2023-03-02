import { AppBar, Stack } from "@yakad/ui";
import logo from "../../assets/images/logo512.png";

function Header() {
    return (
        <AppBar
            id="header"
            style={{
                height: "auto",
                padding: "2rem",
                justifyContent: "center",
            }}
        >
            <Stack
                style={{
                    alignItems: "center",
                }}
            >
                <img src={logo} style={{ width: "16rem" }} />
                <h1 style={{ margin: "0", fontFamily: "Arial" }}>RubYmor</h1>
                <h2 style={{ margin: "0", fontSize: "1.6rem", fontWeight: "normal" }}>به کافه روبیمور خوش آمدید</h2>
            </Stack>
        </AppBar>
    );
}
export default Header;
