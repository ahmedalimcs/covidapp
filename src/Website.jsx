import React from 'react';
import './Website.css';

function Website() {
    return (
        <>
        <div>

        <nav className="navbar navbar-expand-lg navbar-light position-absolute ">
        <div className="container-fluid ">
          <a className="navbar-brand " href="#"><img className="m-2" src="https://jawan-tech-solution.web.app/static/media/logo2.2eff0356.png" alt="" width="200px" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-end " id="navbarNav">
            <ul  className="navbar-nav p-2">
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Ourproject</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
        <div className="cont">
        <img style={{'height': '100vh'}} src="https://jawan-tech-solution.web.app/static/media/slides1.5854e9a2.jpeg" alt="" width="100%"/>
        </div>
      <div className="container">
            <section class="nop">
                <h2 class="h1">Your Ideas, Our Process</h2>
                <br></br>
                <p class="pera">Our fast-paced software development methodologies and techniques are used to put your idea through an epic process, as we shape your thoughts into reality through the power of technology.</p>
            </section>
            <div>
                <button class="btn1">Contact us</button>
            </div>
        </div>
        <br></br>
        <div>
            <h1 className="text-center text-success">Our Services</h1>
            <p className="text-center">We deal with the state-of-the-art tools and technologies, to provide you the best services.</p>
        </div>
        <br></br>
        <div>



             
        <div class="container">
         <div class="row">
           <div class="div" className="col-md-3 border ">
                 <div>
                 <i class="i" className="bi bi-cup"></i>
                 </div>
                 <h5 class="p">UX/UiDesign</h5>
                 <p>Our in-house as well as contractual UI/UX design team deliver the cleanest, most modern and user-friendly designs.</p>
               </div>
              <div class="col-md-3">
                <div>
                <i class="icon" className="bi bi-code-slash"></i>
                </div>
                <h5 class="h2">WebDevelopement</h5>
                <p>We use modern frameworks such as React, Angular and Vue along-side the most robust backend technologies like Node-js and ASP.net.</p>
              </div>
              <div class="col-md-3">
                <div>
                <i class="foo" className="bi bi-cloud"></i>
                </div>
                <h5 class="h3">CloudSolution</h5>
                <p>Our cloud team can expertly navigate best solutions for your business to grow using AWS, Google Cloud and IBM Cloud</p>
               </div>
               </div>
              </div>
              <div class="container">
              <div class="row">
              <div class="col-md-3">
                 <div>
                 <i class="bi bi-globe"></i>
                 </div>
                 <h5 class="h4">MobileAppdevelopement</h5>
                 <p>Our in-house as well as contractual UI/UX design team deliver the cleanest, most modern and user-friendly designs.</p>
               </div>
               <div class="col-md-3">
                <div>
                <i class="bi bi-chat-dots"></i>
                </div>
                <h5 class="h6">ecommercedevelopement</h5>
                <p>We use modern frameworks such as React, Angular and Vue along-side the most robust backend technologies like Node-js and ASP.net.</p>
              </div>
              <div class="col-md-3">
                <div>
                <i class="bi bi-cpu"></i>
                </div>
                <h5 class="h7">ProductAutomation</h5>
                <p>Our cloud team can expertly navigate best solutions for your business to grow using AWS, Google Cloud and IBM Cloud</p>
               </div>
               </div>
              </div>

             

          








          </div>

     </>
    )
}

export default Website;
