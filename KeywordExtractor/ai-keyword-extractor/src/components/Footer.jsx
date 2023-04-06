import {Box, Image, Text, Flex} from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/openai.png'

const Footer = () => {
  return (
    <Box marginTop={50}>
        <Flex> 
            <Image src={logo} marginRight={1}/>
            <Text>Powered by OpenAI</Text>
        </Flex>
    </Box>
  )
}

export default Footer