import React from "react";
import {useState} from "react";
import userEvent from "@testing-library/user-event";



function Courses ({id,image_url,name,topic_id, author_id}){
    return (  
        <div className="course">
            <form>
            <div class="card">
            <div class="card-body">
            <div className="details">
                <section>
                    <h3>{image_url}</h3>
                    <h3>Title{name}</h3>
                    <h3>Topic:{topic_id}</h3>
                    <h3>Author:{author_id}</h3>
                    
                </section>
                </div>

    
    
  </div>
</div>
            </form>
            

        </div>
    )
}


export default Courses;