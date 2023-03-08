import React from "react";
import { Button, List, ListItem } from "@yakad/ui";
import MenuLists from "../../assets/json/menu.json";

function NavigationList() {
    return (
        <List direction="column">
            {MenuLists.categories.map(item => (
                <ListItem>
                    <a href={"#" + item.tag || "/notfound"}>
                        <Button borderStyle="semi" style={{ width: "100%" }}>
                            {item.name}
                        </Button>
                    </a>
                </ListItem>
            ))}
        </List>
    );
}
export default NavigationList;
