import React from "react";


function Courses ({courses}){
    return (  
        <div className="course">
                {courses.map((course)=>(
                    <div className="card col-md-6" style={{ width:"540px", marginBottom:"20px"}}>
                        <div className="card-body" >
                        <div className="details" >
                    <img src={course.image_url} alt={course.name}/>
                <div>Title: {course.name}</div>
                <div>Category: {course.topic.name}</div>
                <div>Author: {course.author.name}</div>
                <div>Course link: <a href={course.link} rel="noopener">Tap to view course</a></div>

                
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                    </div>
                    </div>
        </div>

                ))}

    
    
  </div>

            


    )
}


export default Courses;