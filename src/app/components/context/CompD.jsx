import {useContext} from 'react'
import {FeeContext, BranchContext, SessionContext} from './CompA'

function CompD() {
    const Fee=useContext(FeeContext)
    const branch=useContext(BranchContext)
    const session=useContext(SessionContext)
  return (
    <div>CompD
       <p>
        Fee= {Fee} Branch :{branch} and Session :{session}
       </p>

    </div>
  )
}

export default CompD