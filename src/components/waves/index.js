import React from 'react'
import './index.scss'

const Waves = (props) => {
    const waves = [1,2,3,4,5,6,7,8,9,10,11]
    const time = 3
    return (
        <div>
       <div className="barras">
            {waves.map( (b,i)=>{
                // console.log(i*3/waves.length);
                return (
                    <div className="barra" key={i} style={{ animation: `MoveUpDown 2s linear ${i*3/waves.length}s infinite` }}></div>
                )
            } )}

           
        </div>
        <div className="numbers">
        {waves.map( (w,i)=>{ return (
                    <b key={i}>{i}</b>
                ) } )}
        </div>
        </div>
 
       
    )
}

export default Waves
