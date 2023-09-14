import { FeeContext, BranchContext, SessionContext } from "./CompA"
import CompD from './CompD'


function CompC() {
    return (
        <div>
            CompC
            <div>
               <FeeContext.Consumer>
                {
                    (fee)=>{
                       
                            <BranchContext.Consumer>
                            {
                                (branch)=>{
                                    return (
                                        <SessionContext.Consumer>
                                            {
                                                (session)=>{
                                                    return <p>Fee is {fee} Branch Name is {branch} and Session is {session}</p>
                                                }
                                            }
                                        </SessionContext.Consumer>
                                    )
                                }
                            }
                            </BranchContext.Consumer>
                        
                    }
                }
               </FeeContext.Consumer>
        </div>

        <h2>
            <CompD/>
        </h2>

        </div >

    )
}

export default CompC