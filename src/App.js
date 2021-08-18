
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'

function App() {
  return (
    <div>
      <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Toggle top offcanvas</button>

<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
  
  <div class="offcanvas-body">
          <input data-bs-toggle="offcanvas"></input>
          <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  Button with data-bs-target
</button>

  </div>
</div>
    </div>
  )
}

export default App
