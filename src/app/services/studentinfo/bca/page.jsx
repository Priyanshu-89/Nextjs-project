"use client"
import { useState } from 'react'
import Link from 'next/link';

function BCA() {
  const [reg, setReg] = useState(0);
  return (
    <>
      BCA Student

      <div>
        <form>
          <label>Enter Registration Number</label>
          <input type="text" onChange={e => setReg(e.target.value)} className='outline-none border-none border-indigo-800 px-2 py-2' />
          <Link href={`/services/studentinfo/bca/${reg}`}>Get student</Link>
        </form>
      </div>

    </>
  )
}

export default BCA