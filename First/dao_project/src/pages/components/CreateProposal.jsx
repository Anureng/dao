import { CONTRACT_ADDRESS,CONTRACT_ABI } from '@/contract'
import React, { useEffect, useState } from 'react'
import { usePrepareContractWrite,useContractWrite } from 'wagmi'
import Allproposal from './Allproposal'

function CreateProposal() {
    const[heading,setHeading] =useState()
    const [description, setDescription] = useState()
    const { config, error } = usePrepareContractWrite({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'CreateProposal',
        args:[heading,description]
      })
      const { write } = useContractWrite(config)
  return (
    <div className=' flex items-center justify-center flex-col space-y-4 h-96 bg-blue-400'>
        <div className='text-xl border-b border-black'>Create Proposal</div>
      <div className='flex flex-col space-y-4 border border-black p-4 rounded-xl'>
        <input type="text" className='focus:outline-none p-2 rounded-xl' onChange={(e)=>setHeading(e.target.value)} placeholder='enter heading' />
        <textarea type="text" className='focus:outline-none p-2 rounded-xl'  onChange={(e)=>setDescription(e.target.value)} placeholder='enter description' />
          <button disabled={!write} className="border border-black px-2 py-1 rounded-xl w-fit cursor-pointer" onClick={() => write?.()}>
    Create
  </button>
      </div>
  </div>
  )
}

export default CreateProposal