import React from "react";




function Authors ({authors}){
    return (  
        <div className="authors">
                {authors.map((author)=>(
                    <div className="authorcard col-md-6">
                        <div className="card-body">
                        <div className="details">
                    <img className="authorimage" src={author.image_url} alt={author.name}/>
                <div>{author.name}</div>
                <div className="paragraph">
                <p>Is an providing managerial and board coaching and consultancy for corporations and non-profit organizations in the areas of recruitment, advancement, and retention of women and minority employees; leadership development; board roles and effective governance; executive coaching; and mentoring programs. Providing managerial and board coaching and consultancy for corporations and non-profit organizations in the areas of recruitment, advancement, and retention of women and minority employees; leadership development; board roles and effective governance; executive coaching; and mentoring programs. </p>
                </div>
                    </div>
                    </div>
                    </div>

                ))}

    
    
  </div>

            


    )
}


export default Authors;