import {Box, Button,Flex, Spacer} from "@chakra-ui/react"

function Navbar() {
    return (
        <Box>
            <Flex gap="10px" p="10px" borderBottom="1px" borderColor="gray.200">
                <Button>PharmEasy</Button>
                <Button>Express delivery</Button>
                <Spacer></Spacer>
                <Button>Download App</Button>
                <Button>User</Button>
                <Button>Offers</Button>
                <Button>Cart</Button>
            </Flex>
        </Box>
    )
}

export default Navbar; 