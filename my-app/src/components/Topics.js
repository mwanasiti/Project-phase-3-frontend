import React from "react";




function Topics ({topics, deleteTopic}){
    console.log(topics);
    return (  
    <>
    <div>
        {topics.map((topic) => {
            return (
                <>
                <div key={topic.id}>
                    <div className="topic">Category: {topic.name}</div>
                    <p></p>
                    <button onClick={() => deleteTopic(topic.id)}>Delete</button>
                </div>
                </>
            )
        })}
    </div>
    </>

    )
}


export default Topics;