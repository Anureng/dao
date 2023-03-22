import React, { useEffect, useState } from 'react'
import { usePrepareContractWrite, useContractWrite, useContractRead, useAccount } from 'wagmi'
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "@/contract";

function VoteFinish() {
  const { config, error } = usePrepareContractWrite({
    address:CONTRACT_ADDRESS ,
    abi: CONTRACT_ABI,
    functionName: 'closeVoting',
  })
  const { write } = useContractWrite(config)
  return (
    <div className=' flex items-center justify-center p-8 text-xl bg-blue-400'>
       <button disabled={!write}  className='border border-black cursor-pointer px-2 py-1 rounded-xl' onClick={() => write?.()}>
        Close Voting
      </button>
      <div>
      </div>
    </div>
  )
}

export default VoteFinish