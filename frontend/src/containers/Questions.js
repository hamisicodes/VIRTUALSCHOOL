import React, { useEffect, useState} from 'react';
import { Steps, Button, message, Skeleton, Alert } from 'antd';


const { Step } = Steps;
  
const Questions = () =>{
    // const [questions, setData] = useState()
    const [current, setCurrent] = useState(0)
    const [loading, setLoading]= useState(false)
    const [error] = useState(null)
    useEffect(()=>{
        setLoading(false)
        const next= ()=> {
            setCurrent(current+1)
          }
          const prev= ()=> {
            setCurrent(current - 1)
        };
    
    }, [])
 
    const {questions} = this.props
    return(    
        <div >
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
                <Steps progressDot current={current}>
                {questions.map((q, index)=> (
                    <Step key={index} />
                ))}
                </Steps>
                <div >{questions[current]}</div>
                <div >
                {current < questions.length - 1 && (
                    <Button type="primary" onClick={() => this.next()}>
                    Next
                    </Button>
                )}
                {current === questions.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                    Done
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => this.prev()}>
                    Previous
                    </Button>
                )}</div>
        </div>)}
        </div>
                )
}
export default Questions;