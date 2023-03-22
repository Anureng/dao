import React from 'react'
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Box ,Flex} from "@chakra-ui/react"
function Navbar() {
  return (
    <Flex justifyContent="space-evenly" backgroundColor="blue.200" alignItems="center" p="2.5">
        <div>
        DAO
        </div>
        <Box>
        <ConnectButton/>
        </Box>
    </Flex>
  )
}

export default Navbar