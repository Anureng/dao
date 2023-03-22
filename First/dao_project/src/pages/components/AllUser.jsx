import React, { useEffect, useState } from 'react'
import { usePrepareContractWrite, useContractWrite, useContractRead, useAccount } from 'wagmi'
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "@/contract";
function AllUser() {
  const { address, isConnecting, isDisconnected } = useAccount()
  const[contractData, setContractData] = useState({
    name:'',
    approved:false,
    voted:false
  })
    const { data, isError, isLoading } = useContractRead({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'AllUser',
        args:[address],
        onSuccess(data) {
            console.log('Success', data)
          },
          onError(error) {
            console.log('Error', error)
          },
    }) 
    console.log(data);
    useEffect(() => {
    setContractData(data)
  }, [data])
  
  return (
<div className='text-lg flex flex-col lg:flex-row space-y-10  items-center px-8 py-4 lg:px-20 justify-evenly h-96 bg-blue-300'>
<div className='border border-black w-fit p-4 rounded-xl'>

    {address &&     <div> Hello ,  
    <div className='font-bold'>
      {contractData.name ? <div> {contractData.name}</div>: <div>User Need to be created</div>} 
    </div>
      <div>
       {
         contractData.approved ? (
           <div>You are approved</div>
           ):(
            <div>You are not approved</div>
            )
          }
      {
        contractData.voted ? (
          <div>you have already voted</div>
          ):(
            <div>You are not voted</div>
            )
          } 
      
      </div>
          </div>}

            </div>
            <div> Owner Account Address :- <div className='font-bold'>0x0AcBD71649b4339A08C2d14f843dA3A4610d2730</div></div>
          </div>
  )
}

export default AllUser