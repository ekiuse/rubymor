import { Row, Spacer, Stack, Card, SvgIcon } from "@yakad/ui";
import images from "../../assets/images/foods";
import logoGrayscale from "../../assets/images/logoGrayscale512.png";
import logo from "../../assets/images/logo512.png";

interface ListItems {
    name: string;
    dicribtion?: string;
    special?: boolean;
    price30?: number;
    price_double30?: number;
    price70?: number;
    price_double70?: number;
    price: number;
    price_double?: number;
    image?: number;
}
interface ListProps extends React.HTMLAttributes<HTMLElement> {
    data: ListItems;
}

interface PriceLineProps extends React.HTMLAttributes<HTMLElement> {
    price: number;
    price_double?: number;
    composition?: string;
}

function ListItem(props: ListProps) {
    return (
        <Card
            {...props}
            style={{
                padding: "0",
                paddingLeft: "2rem",
                backgroundColor: "#222",
                overflow: "hidden",
            }}
        >
            <Row>
                <div style={{
                    width: "90%",
                    maxWidth: "16rem",
                    height: "16rem",
                    backgroundImage: `url(${props.data.image ? images[props.data.image] : logoGrayscale})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    boxShadow: "inset 0 0 50rem #0004"
                }} />
                <Stack
                    style={{
                        justifyContent: "space-between",
                        gap: "0.2rem",
                        width: "100%",
                        minHeight: "16rem",
                        padding: "1.5rem 0",
                    }}
                >
                    <Row style={{ margin: "0.5rem 0" }}>
                        <h3 style={{ margin: "0", fontSize: "2.1rem", fontWeight: "normal", lineHeight: "2.1rem" }}>
                            {props.data.name}
                        </h3>
                        <Spacer />
                        {props.data.special ? (
                            <img style={{ height: "3rem" }} src={logo} />
                        ) : null}
                    </Row>
                    <p style={{ margin: "0", fontSize: "1.3rem" }}>
                        {props.data.dicribtion}
                    </p>
                    <Stack style={{ gap: "0.4rem" }}>
                        <div>
                            {props.data.price30 ? (
                                <PriceLine
                                    price={props.data.price30}
                                    price_double={props.data.price_double30}
                                    composition={props.data.price30 ? "30A/70R" : ""}
                                />
                            ) : null}
                            {props.data.price70 ? (
                                <PriceLine
                                    price={props.data.price70}
                                    price_double={props.data.price_double70}
                                    composition={props.data.price30 ? "70A/30R" : ""}
                                />
                            ) : null}
                            {props.data.price ? (
                                <PriceLine
                                    price={props.data.price}
                                    price_double={props.data.price_double}
                                    composition={props.data.price30 ? "Full" : ""}
                                />
                            ) : (
                                <div>
                                    <span style={{ fontSize: "1.6rem" }}>متغیر</span>
                                </div>
                            )}
                        </div>
                        <span style={{ fontSize: "1.2rem", marginInlineStart: "0.5rem" }}>
                            {"هزار تومان"}
                        </span>
                    </Stack>
                </Stack>
            </Row >
        </Card >
    );
}

function PriceLine(props: PriceLineProps) {
    return (<Row>
        <span style={{ fontSize: "2.1rem", lineHeight: "1.9rem" }}>
            {props.price}
            {props.price_double
                ? (<span><b style={{ fontSize: "1.4rem" }}> - </b>{props.price_double}</span>)
                : null}
        </span>
        <Spacer />
        <span style={{ fontSize: "1.3rem", fontFamily: "Arial" }}>
            {props.composition}
        </span>
    </Row>);
}

export default ListItem;
