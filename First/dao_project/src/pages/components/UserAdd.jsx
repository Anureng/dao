import React, { useState } from 'react'
import { usePrepareContractWrite, useContractWrite } from 'wagmi'
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "@/contract";
import { useContractRead } from 'wagmi'
import AllUser from './AllUser';
import { Flex } from '@chakra-ui/react';



function UserAdd() {
    const [address, setAddress] = useState()
    const [name, setName] = useState()
    const [adddress, setAdddress] = useState()
    const { config, error } = usePrepareContractWrite({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'createUser',
        args: [name, address]
      })
      const { write } = useContractWrite(config)
  return (
<div className='p-8 space-y-6 lg:flex items-center lg:justify-center lg:space-x-28 h-screen text-2xl bg-blue-400'>
    <div className='border border-black w-96 p-6 space-y-5 rounded-xl '>
      <div className='text-3xl'>
      UserAdd
      </div>
      <div className='flex flex-col space-y-3'>
        <input type="text" className='focus:outline-none rounded-xl p-1'  placeholder='Enter your name...' onChange={(e)=>setName(e.target.value)} />
        <input type="text" className='focus:outline-none rounded-xl p-1'  placeholder='Enter your address...' onChange={(e)=>setAddress(e.target.value)} />
        <button className='bg-blue-900 cursor-pointer text-white w-fit px-2 py-1 rounded-xl' disabled={!write} onClick={() => write?.()}>
        Click 
      </button>
      </div>
    </div>
    <div className='text-2xl lg:w-96 items-center '>
      In this project user can add their name with their address after that user can approve membership . Only owner can approve membership . Every user can create can create proposal and user can vote to the proposal . <br /> Owner can close the voting at any time and declare the voting result.
    </div>
</div>
        
  )
}

export default UserAdd