import React, { useState } from "react";
import './App.css';

function App() {

  const Time = new Date().toLocaleTimeString();

  const [data, setdata] = useState({
    name: "",
    comment: "",
  });

  const change = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const [final, setfinal] = useState([]);
  const Submit = () => {
    setfinal([...final, data]);
  };

  return (

    <div className="container">
      <h1 className='text-center mt-5'>COMMENT / REVIEW</h1>
      <hr />
      <form >
        <div className='d-flex mt-5'>
          <div className='user border border-end-0 border-success  form d-flex align-items-center text-center ps-3'>
            <i className="fa-solid fa-user py-3 user-icon"></i>
          </div>
          <hr />
          <form className='border border-success card card-body'>
            <div className="mb-3">
              <label for="exampleFormControlInput1" htmlFor="" className="form-label">Name :</label>
              <input name="name" className="form-control input border-success" onChange={change} id="exampleFormControlInput1" placeholder="Full Name" />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" htmlFor="textAreaExample" className="form-label">Comment :</label>
              <textarea name="comment" className="form-control input border-success" onChange={change} rows="3" placeholder='Comment'></textarea>
            </div>
          </form>
        </div>
        <div className='my-4 float-end'>
          <button type='button' className='btn btn-primary fs-5 px-5' onClick={Submit}>SUBMIT</button>
        </div>
      </form>

      <center>
        <div className="col-8 output ">
          {final.map((val, index) => {
            return (
              <div
                key={index}
                className="card bg-transparent border-success card-body"
                style={{
                  border: "2px solid #eee",
                  margin: "5px 0px 5px 0 ",
                }}>
                <div className="d-flex flex-start align-items-center">

                  <i className="fa-solid fa-user user-i mx-3"></i>

                  <div>
                    <h4 className="fw-bold text-dark float-start mb-1">
                      {val.name}
                    </h4>
                    <br />
                    <p className="mt-3 mb-3 float-start pb-1 d-block">
                      {val.comment}
                    </p>
                    <p className="text-muted small float-start mb-2">
                      Time:- {Time}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </center>



    </div>
  );
}

export default App;