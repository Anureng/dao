import React, { useEffect, useState } from 'react'
import { usePrepareContractWrite, useContractWrite, useContractRead, useAccount } from 'wagmi'
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "@/contract";
function VoteCount() {
  const [voteCount, setVoteCount] = useState()
  const { address, isConnecting, isDisconnected } = useAccount()
  const { data, isError, isLoading } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'voteCount',
    args:[address],
    onSuccess(data) {
        console.log('Success', data)
      },
      onError(error) {
        console.log('Error', error)
      },
}) 

useEffect(() => {
  setVoteCount(data)

}, [data])

console.log(data);
  return (
    <div>
     
    </div>
  )
}

export default VoteCount