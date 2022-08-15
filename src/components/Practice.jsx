import React from 'react'
import puppy from "../assets/img/puppy.jpg"

function Practice () {
    return(
        <div className= "flex justify-center items h-screen">
           <div className="shadow-md">
             <div className="h-60 overflow-hidden">
            </div>
            <div>
                <img src={puppy} alt="" />
            </div>
            <div className="flex justify-between">
                <h3 className="font-bold capitilization">Hp pavillion 15</h3>
                <h6>GHC4500</h6>
            </div>
            <div>
                <h3>Lorem, ipsum dolor.</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, inventore.
                </p>
             </div>  
          </div>
        </div>
    )
}


export default Practice