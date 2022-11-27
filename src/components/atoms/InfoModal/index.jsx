import { Box, Heading, Text } from '@chakra-ui/react';

export const InfoModal = ({ title, data }) => {
    return (
        <Box>
            <Heading as='h3' size='sm'>
                {title}
            </Heading>
            <Text color='blackAlpha.700'>{data}</Text>
        </Box>
    );
};
