import { Row, Spacer, Stack } from "@yakad/ui";
import images from "../../assets/images/index";

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
        <div {...props}>
            {" "}
            <Row style={{ direction: "rtl" }}>
                <img
                    width="30%"
                    src={
                        props.data.image ? images[props.data.image] : images[1]
                    }
                />
                <Stack>
                    <h3>{props.data.name}</h3>
                    <p>{props.data.dicribtion}</p>
                </Stack>
                <Spacer />
                <div>{props.data.price}</div>
            </Row>
        </div>
    );
}

export default ListItem;
