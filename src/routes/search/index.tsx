import {
    Page,
    Main,
    Container,
    Hr,
    AppBar,
    Button,
    GridContainer,
    GridItem,
} from "@yakad/ui";
import { useNavigate } from "react-router-dom";

interface SuraItems {
    title: string;
    description: string;
    p: string;
}

const SuraLists: Array<SuraItems> = [
    {
        title: "الْفَاتِحَه+",
        description: "The Opener",
        p: "Al-Fatihah",
    },
    {
        title: "البَقَرَة+",
        description: "The Cow",
        p: "Al-Baqarah",
    },
    {
        title: "آل عِمرَان+",
        description: "Family of Imran",
        p: "Ali 'Imran",
    },
    {
        title: "النِّسَاء+",
        description: "The Women",
        p: "An-Nisa",
    },
    {
        title: "المَائدة+",
        description: "The Table Spread",
        p: "Al-Ma'idah",
    },

    {
        title: "الاٴنعَام+",
        description: "The Cattle",
        p: "Al-An'am",
    },
];

function Search() {
    const navigate = useNavigate();
    return (
        <Page>
            <AppBar>
                <input
                    style={{ background: "#7d7d7d15", width: "100%" }}
                    type="Search"
                    placeholder="Search Sura, Phrase or numbers(Sura:Aya, Page, Juz, Hizb)"
                />
                <Button
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    Cancel
                </Button>
            </AppBar>
            <Main>
                <Container maxWidth="md">
                    <h2>All: Sura Page Juz Hizb</h2>
                    <Hr />
                    <GridContainer>
                        <GridItem
                            xl={2}
                            style={{ height: "5rem", background: "red" }}
                        ></GridItem>
                        <GridItem
                            xl={2}
                            style={{ height: "5rem", background: "red" }}
                        ></GridItem>
                        <GridItem
                            xl={5}
                            style={{ height: "5rem", background: "red" }}
                        ></GridItem>
                        <GridItem
                            xl={1}
                            style={{ height: "5rem", background: "red" }}
                        ></GridItem>
                    </GridContainer>
                </Container>
            </Main>
        </Page>
    );
}

export default Search;
