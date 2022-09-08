import React from "react";




function Courses ({courses}){
    return (  
        <div className="course">
                {courses.map((course)=>(
                    <div className="card">
                        <div className="card-body">
                        <div className="details">
                    <img src={course.image_url} alt={course.name}/>
                <div>Title: {course.name}</div>
                <div>Category: {course.topic_id}</div>
                <div>Author: {course.author_id}</div>
                <div><a href={course.link}>Course link</a></div>
                    </div>
                    </div>
                    </div>

                ))}

    
    
  </div>

            


    )
}


export default Courses;