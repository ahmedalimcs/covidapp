import React from 'react'
import image from './Images/jawanpak.png'

function Task() {
    return (
        <>
        <div>
            <h1 className="text-center">Website through React</h1>
         <div>

         <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src={image} alt="" width="200px" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Service</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Details</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Ourproject</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contactus</a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
             
         </div>
            
        </div>

      </>
    )
}

export default Task
