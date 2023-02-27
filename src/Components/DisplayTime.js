import React from 'react'

const DisplayTime = (props) => {
 const h = () => {
      if(props.time.h === 0){
        return '';
      } else{
        return <h5>{(props.time.h >= 10) ? props.time.h : "0" + props.time.h}</h5>
      }
 }

  return (
    <div className='timer'>
  
    {h()}
    &nbsp;<h5>{(props.time.m >= 10) ? props.time.m : "0" + props.time.m}  </h5> 
    <span>:</span>
     &nbsp;<h5>{(props.time.s >= 10) ? props.time.s : "0" + props.time.s}  </h5>  
     <span>:</span>
     &nbsp;<h5>{(props.time.ms >= 10) ? props.time.ms : "0" + props.time.ms} </h5>
    </div>
        
   
  )
}

export default DisplayTime