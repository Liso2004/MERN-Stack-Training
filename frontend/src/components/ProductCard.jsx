import { DeleteIcon,EditIcon } from "@chakra-ui/icons"
import {Box , Heading , HStack , IconButton , Image , Text, useColorModeValue} from "@chakra-ui/react"
 
const ProductCard = ({product}) => {
const textcolor = useColorModeValue ("grey.600","grey.200");
const bg = useColorModeValue("white","gray.800"); 
  return (
  <Box
    shadow='lg'
    rounded='lg'
    overflow='hidden'
    transition='all 0.3s'
    _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
    bg={bg}
>
    <Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover' />

    <Box p={4}>
        <Heading as='h3' size='md' mb={2}>
            {product.name}
        </Heading>

        <Text fontweight='bold' fontsize='xl' color ={textcolor} mb={4}>
            R{product.price}
            </Text>


            <HStack spacing={2}>
                <IconButton icon={<EditIcon />}  colorScheme="blue"/>
                <IconButton icon={<DeleteIcon />}  colorScheme="red"/>
            </HStack>
        </Box>
    </Box>
  )
};
//1:44:37 / 2:16:25

export default ProductCard