import React from "react";
import { Button, List, ListItem } from "@yakad/ui";
import MenuLists from "../../assets/json/menu.json";

function NavigationList() {
    const [collapsedListRsitation, setcollapsedListRsitation] = React.useState(
        true
    );
    return (
        <List direction="column">
            {MenuLists.categories.map(item => (
                <ListItem>
                    <a href={"#" + item.tag || "/notfound"}>
                        <Button borderStyle="semi">{item.name}</Button>
                    </a>
                </ListItem>
            ))}
        </List>
    );
}
export default NavigationList;
