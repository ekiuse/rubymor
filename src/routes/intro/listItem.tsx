import { Row, Spacer, Stack, Card } from "@yakad/ui";
import images from "../../assets/images/foods";
import defaultPhoto from "../../assets/images/defaultPhoto.png";

interface ListItems {
    name: string;
    dicribtion?: string;
    price: number;
    price_double?: number;
    image?: number;
}
interface ListProps extends React.HTMLAttributes<HTMLElement> {
    data: ListItems;
}
function ListItem(props: ListProps) {
    return (
        <Card
            {...props}
            style={{
                padding: "0",
                paddingLeft: "1rem",
                backgroundColor: "#222",
                overflow: "hidden",
            }}
        >
            <Row>
                <img
                    src={
                        props.data.image ? images[props.data.image] : defaultPhoto
                    }
                    style={{
                        width: "15rem",
                        height: "15rem",
                    }}
                />
                <Stack style={{ justifyContent: "space-between", gap: "0.2rem", height: "13rem", margin: "1rem 0" }}>
                    <h3 style={{ margin: "0", fontSize: "1.8rem" }}>{props.data.name}</h3>
                    <p style={{ margin: "0", fontSize: "1.3rem" }}>{props.data.dicribtion}</p>
                    {props.data.price ? (
                        <div>
                            <span style={{ fontSize: "2.2rem" }}>
                                {props.data.price}
                                {props.data.price_double ? " - " + props.data.price_double : null}
                            </span>
                            <span style={{ fontSize: "1.2rem" }}>  هزار تومان</span>
                        </div>
                    ) : (<div><span style={{ fontSize: "1.6rem" }}>نا موجود</span></div>)}
                </Stack>
            </Row>
        </Card>
    );
}

export default ListItem;
