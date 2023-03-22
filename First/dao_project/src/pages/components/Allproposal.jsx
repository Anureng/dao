import React, { useEffect, useState } from 'react'
import { useContractRead } from 'wagmi'
import { CONTRACT_ADDRESS,CONTRACT_ABI } from '@/contract'
import { useAccount } from 'wagmi'


function Allproposal() {
  const [allProposal, setAllProposal] = useState({
    heading:"",
    description:"",
    closed:false,
    created:true,
    whoCreate:"",
  vote:""
 } )
    const { address, isConnecting, isDisconnected } = useAccount()
    const { data, isError, isLoading } = useContractRead({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'allproposalofUser',
      })
      const arrayDataItems = data?.map(el => 
        <div className='lg:p-8 lg:text-xl' key={el.id}>
          <p> Heading :- {el.heading}</p>
          <span> Description :- {el.description}</span> <br />
          <span> Created By :- {el.whoCreate}</span>
        </div>
      )
      console.log(data);
  return (
    <div className='space-y-8 bg-blue-300'   > 
      <div className='flex items-center justify-center text-2xl '>
      All Proposal
      </div>
      {arrayDataItems}</div>
  )
}

export default Allproposal