import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";

export type PageLayoutProps = {
    children: React.ReactNode;
    pageHeading: string;
    pageTitle: string;
    pageDescription?: string;
};

const PageLayout: React.FC<PageLayoutProps> = (p: PageLayoutProps) => {
    const { children, pageHeading, pageTitle, pageDescription } = p;
    return (
        <Flex bg="gray">
            <Grid
                w="full"
                lineHeight="normal"
                fontFamily="body"
                fontSize="base"
            >
                <Box>
                    <Text fontSize="20">{pageTitle}</Text>
                    <Text fontSize="16">{pageHeading}</Text>
                    {pageDescription && (
                        <Box mt="12">
                            <Text>{pageDescription}</Text>
                        </Box>
                    )}
                </Box>
                {children}
            </Grid>
        </Flex>
    );
};

export default PageLayout;
