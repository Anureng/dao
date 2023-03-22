import React, { useEffect, useState } from 'react'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '@/contract'
import { usePrepareContractWrite, useContractWrite } from 'wagmi'

function ApproveMembership() {
    const [address,setAddress] = useState('')
    const { config, error } = usePrepareContractWrite({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'approvedMember',
        args: [address],
        onSuccess(data) {
            console.log('Success', data)
          },
      })
      const { write } = useContractWrite(config)
  return (
    <div className=' p-4 flex flex-row lg:justify-center lg:items-center bg-blue-300'>   
    <div className='border border-black p-4 rounded-xl space-x-2'>
        <input type="text"  placeholder='Enter your address' className='focus:outline-none p-1 rounded-xl' onChange={(e)=>setAddress(e.target.value)} />
        <button disabled={!write} className="border font-bold border-black px-2 py-1 rounded-xl cursor-pointer" onClick={() => write?.()}>
    Approve Membership
  </button>
    </div>
</div>
  )
}

export default ApproveMembership