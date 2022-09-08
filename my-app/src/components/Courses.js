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
                <div>Course link: <a href={course.link}>Tap to view course</a></div>

                
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