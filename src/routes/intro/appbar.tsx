import { AppBar, Stack } from "@yakad/ui";
import logo from "../../assets/images/logo512.png";

function Header() {
    return (
        <AppBar
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
                <h1>RubYmor</h1>
            </Stack>
        </AppBar>
    );
}
export default Header;
