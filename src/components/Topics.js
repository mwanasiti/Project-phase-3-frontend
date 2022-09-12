import React from "react";




function Topics ({topics}){
    console.log(topics);
    return (  
    <>
    <div>
        {topics.map((topic) => {
            return (
                <>
                <div key={topic.id}>
                    <div className="topic">Category: {topic.name}</div>
                    <div>
                    <ul>
                        <li>Feminism and Social Justce</li>
                        <li>International Women's health and Human rights</li>
                    </ul>
                </div>
                </div>
                </>
            )
        })}
    </div>
    </>

    )
}


export default Topics;