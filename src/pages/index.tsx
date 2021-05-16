import * as React from "react";
import {
    Box,
    Text,
    Button,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
} from "@chakra-ui/react";
import { navigate } from "gatsby-link";
import PageLayout from "../PageLayout";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";

export interface Item {
    label: string;
    value: string;
}

const countries = [
    { value: "southAfrica", label: "South Africa" },
    { value: "unitedStates", label: "United States" },
    { value: "canada", label: "Canada" },
];

const IndexPage: React.FC = () => {
    return (
        <PageLayout
            pageHeading="Heading"
            pageTitle="Welcome To the Recipe Book!"
        >
            <Box>
                <InputGroup>
                    <InputLeftElement width="auto" height="input">
                        <Box as={SearchIcon}></Box>
                    </InputLeftElement>
                    <Input
                        color="text"
                        height="input"
                        display="inline-block"
                        border="px"
                        borderColor="inputBorder"
                        boxSizing="border-box"
                        pl={40}
                        py={4}
                        maxLength={25}
                        outline="none"
                        placeholder="Search for a recipe"
                        onChange={() => {
                            console.log("typed");
                        }}
                    />
                    <InputRightElement width="input" height="input">
                        <Box as={ClearIcon}></Box>
                    </InputRightElement>
                </InputGroup>
            </Box>
            <Text>Hello Worlds</Text>
            <Button
                background={"#8A6534"}
                codeStyles
                onClick={() => {
                    navigate("/addRecipe");
                }}
            >
                Hello Button
            </Button>
        </PageLayout>
    );
};

export default IndexPage;
