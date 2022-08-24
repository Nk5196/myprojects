import { Box, HStack, Spacer, Flex, Text, Container} from "@chakra-ui/react"
import { faArrowRight, faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping, faChevronDown, faHome, faMobileScreen, faTags, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "../SearchBar";

function SearchSection () {
    return (
       
            <Box 
            h='200px'
            bgGradient='radial( white, #e3f6fc)'
            fontFamily="Inter, sans-serif;" padding="40px">
            <Flex px="210px" mb="16px">
                <Text fontSize="22px"
                      fontWeight="600">What are you looking for?</Text>
                <Spacer></Spacer>
                <HStack gap="8px">
                <FontAwesomeIcon icon={faClipboardList} />  Profile
                <Text fontSize="14px" fontWeight="500">Order with prescription.</Text>
                <Text fontSize="14px" fontWeight="600" color="#10847e">UPLOAD NOW  <FontAwesomeIcon icon={faArrowRight} /></Text>
                </HStack>
               
            </Flex>
               <Box px="210px">
                  <SearchBar />
                </Box>
            </Box>
        
    
    )
}

export default SearchSection;