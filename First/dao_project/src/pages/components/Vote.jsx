import React, { useState } from 'react'
import { useContractRead } from 'wagmi'
import { CONTRACT_ADDRESS,CONTRACT_ABI } from '@/contract'
import { usePrepareContractWrite,useContractWrite } from 'wagmi'
import { useAccount } from 'wagmi'
function Vote() {
    const [voteIncrease, setVoteIncrease] = useState()
    const { config, error } = usePrepareContractWrite({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'Vote',
        args:[voteIncrease]
      })
      const { write } = useContractWrite(config)
  return (
    <div className='flex items-center justify-center p-2 h-60 text-xl bg-blue-300'>
    <div className='border border-black w-fit p-3 rounded-xl flex flex-col space-y-4'>
                <input type="text" className='focus:outline-none p-2 rounded-xl' onChange={(e)=>setVoteIncrease(e.target.value)} placeholder='enter address to vote' />
          <button className='border border-black px-2 py-1 cursor-pointer rounded-xl' disabled={!write} onClick={() => write?.()}>
    Vote
  </button>
    </div>
    </div>
  )
}

export default Vote