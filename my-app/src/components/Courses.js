import React from "react";




function Courses ({courses}){
    return (  
        <div className="course">
                {courses.map((course)=>(
                    <div className="card">
                        <div className="card-body">
                        <div className="details">
                    <img src={course.image_url} alt={course.name}/>
                <div>{course.name}</div>
                <div>{course.topic_id}</div>
                <div>{course.author_id}</div>
                <div>{course.link}</div>
                    </div>
                    </div>
                    </div>

                ))}

    
    
  </div>

            


    )
}


export default Courses;