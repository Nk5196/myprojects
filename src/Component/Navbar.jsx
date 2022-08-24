import {Box, Button,Flex, Spacer, VStack,Image,Center, HStack, Text, Divider} from "@chakra-ui/react"
import PharmEasyIcon from "./icon/pharmeasy";
import { faCartShopping, faChevronDown, faHome, faMobileScreen, faTags, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, MenuButton, MenuList, MenuItem,MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider,
  } from '@chakra-ui/react'


function Navbar() {
    return (
        <Box >
            <Flex  ml="35px" gap="10px"  align='center' p="5px" borderBottom="1px" borderColor="gray.200">
                <PharmEasyIcon mr="15px"/>
                <Center px="25px" height='40px' width="1px">
                  <Divider  borderColor="black" orientation='vertical' />
                </Center>
                    <VStack > 
                        <HStack spacing='15px'>
                        <Image src="https://assets.pharmeasy.in/apothecary/images/ic_express%20delivery.svg?dim=32x0"/>
                            <Text  fontSize='sm'>   
                              Express delivery to 
                            </Text>
                        </HStack>
                        <Box p="0px"> <Button gap={2} size='md' h="12px" mt="-15px" variant="ghost">Select Pincode <FontAwesomeIcon icon={faChevronDown} /></Button> </Box>
                    </VStack>
                
                <Spacer></Spacer>
                <Button gap={2}><FontAwesomeIcon icon={faMobileScreen} />Download App</Button>
                <Box>
                    <Menu>
                    <MenuButton as={Button} variant="ghost">
                    <FontAwesomeIcon icon={faUser} />  Profile
                    </MenuButton>
                    <MenuList>
                      <MenuGroup title='Your Account'>
                        <MenuItem>Order</MenuItem>
                        <MenuItem>Saved Doctors Notes </MenuItem>
                        <MenuItem>My Addresses</MenuItem>
                        <MenuItem>Refund Settings</MenuItem>
                        <MenuItem>Need Help? </MenuItem>
                      </MenuGroup>
                      <MenuDivider />
                      <MenuGroup >
                        <MenuItem>Logout</MenuItem>
                      </MenuGroup>
                    </MenuList>
                   </Menu>
                </Box>
                <Button gap={2} variant="ghost"><FontAwesomeIcon icon={faTags} />Offers</Button>
                <Button gap={2} variant="ghost"><FontAwesomeIcon icon={faCartShopping} />Cart</Button>
            </Flex>
        </Box>
    )
}

export default Navbar; 