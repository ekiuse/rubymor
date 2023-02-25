import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Intro } from "./routes";

const isPwaIntroPagePassed = (): boolean => {
    return localStorage.getItem("pwaIntroPassed") === "true";
};

//Test mode in local host
const isLocalhost = Boolean(
    window.location.hostname === "localhost" ||
        // [::1] is the IPv6 localhost address.
        window.location.hostname === "[::1]" ||
        // 127.0.0.0/8 are considered localhost for IPv4.
        window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
        )
);

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Intro />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
