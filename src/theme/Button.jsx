import { chakra } from "@chakra-ui/react"

const Button = {
    variants: {
        solid:{},
        outline: {
            color:""
        },
        ghost:{
           
            transition:'all 0.2s cubic-bezier(.08,.52,.52,1)'
        }
        
    },
    baseStyle:{
        fontSize:"16px",
    }
}

export default Button;