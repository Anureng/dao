import { CONTRACT_ABI, CONTRACT_ADDRESS } from '@/contract'
import React, { useEffect, useState } from 'react'
import { useContractRead } from 'wagmi'
import { useAccount } from 'wagmi'

function UserProposal() {
    const { address, isConnecting, isDisconnected } = useAccount()
    const [proposalData, setProposalData] = useState(
        {
            heading:"",
            description:"",
            closed:false,
            created:true
        }
    )
    const { data, isError, isLoading } = useContractRead({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'ALLProposal',
        args:[address]
      })
      
      console.log(data);
      useEffect(() => {
          setProposalData( data);
      }, [data])
      
  return (
    <div className='p-4 flex flex-col lg:justify-items-start justify-center items-center space-y-4 h-96 bg-blue-400'>
        <div className='text-3xl border-b border-black'>You created this proposal</div>
        <div >
        {address ?(<div className='space-y-2 text-2xl'>
          Heading:  {proposalData.heading} <br />
 Description : {proposalData.description}
{proposalData.closed ? <div>This proposal is closed</div>:<div> This proposal is not closed</div>}
        </div>)
    :
    (<div>No proposal of this current user</div>)    
}
</div>
        </div>

  )
}

export default UserProposal