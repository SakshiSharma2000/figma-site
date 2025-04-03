import React from 'react'
import './navimg.css'
import { useState } from 'react'
function NavImg(){
const Handle=() =>{
    alert('clicked')
}

    return(
<div className="combo0" >
    <div className="combo1">
                <h1><b>Virtual healthcare for you</b></h1>
                <p> dsgchhjkklxnxljch vcdhb jdsn klsdncjldsb jd bvckhsbjsb ndx dxn bkshb jsxbsxbdbdsj bdn xn sh vkds

                </p>
                <button className="button1" onClick={Handle}>Consult today</button>
</div>
    <div className="combo2">
<img src ="h1.jpg" style={{ width:"100%"}}></img>
     </div>
</div>

    )
}
export default NavImg