import React from "react";
import {useState} from "react";
import userEvent from "@testing-library/user-event";



function Authors ({authors}){
    return (  
        <div className="authors">
                {authors.map((author)=>(
                    <div className="card">
                        <div className="card-body">
                        <div className="details">
                    <img src={author.image_url} alt={author.name}/>
                <div>{author.name}</div>
                    </div>
                    </div>
                    </div>

                ))}

    
    
  </div>

            


    )
}


export default Authors;