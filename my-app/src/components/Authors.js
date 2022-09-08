import React from "react";
import {useState} from "react";
import userEvent from "@testing-library/user-event";



function Authors ({id,image_url,name}){
    return (  
        <div className="course">
            <form>
            <div class="card">
            <div class="card-body">
            <div className="details">
                <section>
                    <h3>{image_url}</h3>
                    <h3>Author:{name}</h3>
                    
                </section>
                </div>

    
    
  </div>
</div>
            </form>
            

        </div>
    )
}


export default Authors;