import { Button,Box, HStack,Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import { faCartShopping, faChevronDown, faHome, faMagnifyingGlass, faMobileScreen, faTags, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 
function SearchBar(){

    return (
        <Box>
          <HStack spacing="3px">
            <InputGroup>
             <Input borderRadius="25px" h="48px" mr="15px"  variant='outline' placeholder='Search for' />
             <InputRightElement pt="7px" width='110px' pe="20px">
                 <Button fontSize="15px" colorScheme='teal' borderRadius="20px" h='40px' size='sm'>
                   Search
                 </Button>
              </InputRightElement>
            </InputGroup>
          </HStack>
        </Box>
    )
}

export default SearchBar;