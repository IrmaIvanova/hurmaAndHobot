import React from 'react';

export const Loading =({text}) => {
  let [i, setI] = React.useState(1)

  React.useEffect(()=>{
    const interval = setInterval(()=>setI(++i%4), 500);
    return ()=> clearInterval(interval)
  },[])

  return <i className=''> {text}{".".repeat(i)}</i>
}