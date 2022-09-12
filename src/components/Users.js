
import {React, useState, useEffect} from 'react'


function Users() {
    const [allFeedback, setAllFeedback] = useState([]);
    const [formData, setFormData] = useState({
        name:'',
        rating:'',
        reason:'',
        course_id: ''
    });

  useEffect(() => {
      fetch(`https://fempro-backend.herokuapp.com/feedbacks`)
      .then(r => r.json())
      .then(data => setAllFeedback(data))
  }, [])

  function handleSubmit(e){
    e.preventDefault();
    fetch(`https://fempro-backend.herokuapp.com/feedbacks`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(data => {
        setAllFeedback(data)
    })

    setFormData({
        name: '',
        rating: '',
        reason: '',
        course_id: ''
    })
  }

  function deleteReview(id){
    fetch(`https://fempro-backend.herokuapp.com/feedbacks/${id}`,{
        method: "DELETE",
    })
    .then(r => r.json())
    .then(() => {
        const destroyIt = allFeedback.filter((review) => review.id !== id)
            setAllFeedback(destroyIt)
        })
  }

  const onChange=(e)=>{
    const name = e.target.name
    let value = e.target.value

    setFormData({
      ...formData,
      [name]:value
    });
  }

  return (
      <>
     <form className='card cardform p-5'>
          <label>
            Name:
          </label>
          <input onChange={onChange} name="name" value={formData.name} type="text"/>
          <hr></hr>
   
          <label>
            Course quality rating(1-10):
          </label>
          <input onChange={onChange} name="rating" value={formData.rating} type="number" min='1' max='10'/>
          <hr></hr>

          
          <label>
            Reason for above rating:
          </label>
          <textarea onChange={onChange} name="reason" value={formData.reason} type="text"/>
        
          <hr></hr>

          <label>
            Enter the Course id you are rating:
          </label>
          <input onChange={onChange} name="course_id" value={formData.course_id} type="number"/>

          
    <div>
    <button type='submit' onClick={handleSubmit}>Submit</button>
    </div>
    </form>
    <br />
    <h1 style={{textAlign: 'center', color: '#fff'}}>FeedBack</h1>
    <div>
        {allFeedback.map((feedback) => {
            return (
                <>
                <div className="card feedback-card col-md-5 p-5">
                    <div class="card-body" style={{backgroundColor: 'aliceblue'}}>
                        <blockquote class="blockquote mb-0">
                        <h3>Name: {feedback.name}</h3>
                        <p>Rating: {feedback.rating}</p>
                        <p>Reason: {feedback.reason}</p>
                        <p>Course: {feedback.course.name}</p>
                        <button 
                        type="button" 
                        className="btn btn-outline-primary btn-rounded"
                        onClick={() => deleteReview(feedback.id)}>Delete</button>
                        </blockquote>
                    </div>
                </div>
                </>
            )
        })}
    </div>
    </>
  );
}

export default Users;