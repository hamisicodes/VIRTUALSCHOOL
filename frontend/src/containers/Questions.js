import React, { useState} from 'react';
import { Steps, Button, Skeleton, Alert } from 'antd';


const { Step } = Steps;
  
const Questions = (props) =>{
    // const [questions, setData] = useState()
    const [current, setCurrent] = useState(0)
    const [loading, setLoading]= useState(false)
    const [error] = useState(null)

    const next = () => {
            setCurrent(current+1)
          }
    // const prev = ()=>{
    //         setCurrent(current - 1)
    //     };
    
 
    const {questions} = props
    return(    
        <>
            {error && (
                    <div style={{ padding:5 , color:"red"}}>
                        <Alert
                            message="Error"
                            description=" An Error has occured while trying to get the requested material. Please Contact VirtualSchool Technician for Assistance. This is a Database related Error"
                            type="error"
                            showIcon
                        />
                    </div>
                )}
                {loading? 
                <div>
                    <Skeleton active />
                </div> :(<div>
                <Steps  current={current}>
                {questions.map((q, index)=> (
                    <Step key={index} />
                ))}
                </Steps>
                <div style={{fontSize:"em"}}>{questions[current]}</div>
                <div >
                {current < questions.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                    Next
                    </Button>
                )}
                {current === questions.length - 1 && (
                    <Button type="primary" onClick={() => props.submit()}>
                    Submit
                    </Button>
                )}
                {/* {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                    Previous
                    </Button>
                )} */}
                </div>
        </div>)}
        </>
                )
}
export default Questions;