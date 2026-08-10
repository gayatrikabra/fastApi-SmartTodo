
const Footer  = () =>{
return <>
<footer className="bg-dark text-light pt-5 pb-4">
  <div className="container text-md-left">
    <div className="row text-md-left">

      
      <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
        <h5 className="text-uppercase mb-4 fw-bold text-warning">
          SmartTodo
        </h5>
        <p>
          Manage your daily tasks efficiently with a clean and smart
          productivity app.
        </p>
      </div>

      
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
        <h5 className="text-uppercase mb-4 fw-bold text-warning">
          Company
        </h5>
        <p>
          <a href="/about" className="text-light text-decoration-none">About</a>
        </p>
        <p>
          <a href="/careers" className="text-light text-decoration-none">Careers</a>
        </p>
        <p>
          <a href="/blog" className="text-light text-decoration-none">Blog</a>
        </p>
      </div>

      
      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
        <h5 className="text-uppercase mb-4 fw-bold text-warning">
          Resources
        </h5>
        <p>
          <a href="/help" className="text-light text-decoration-none">Help Center</a>
        </p>
        <p>
          <a href="/privacy" className="text-light text-decoration-none">Privacy Policy</a>
        </p>
        <p>
          <a href="/terms" className="text-light text-decoration-none">Terms</a>
        </p>
      </div>

    
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
        <h5 className="text-uppercase mb-4 fw-bold text-warning">
          Contact
        </h5>
        <p>Email: support@smarttodo.com</p>
        <p>Phone: +91 98765 43210</p>
        <p>Location: India</p>
      </div>
    </div>

    <hr className="mb-4 text-secondary"/>

    
    <div className="row align-items-center">
      <div className="col-md-7 col-lg-8">
        <p className="text-center text-md-start">
          © 2026 SmartTodo. All Rights Reserved.
        </p>
      </div>

      
      <div className="col-md-5 col-lg-4">
        <div className="text-center text-md-end">
          <a href="https://www.facebook.com" className="btn btn-outline-light btn-floating m-1">
            <i className="bi bi-facebook"></i>
          </a>

          <a href="https://www.twitter.com" className="btn btn-outline-light btn-floating m-1">
            <i className="bi bi-twitter-x"></i>
          </a>

          <a href="https://www.github.com" className="btn btn-outline-light btn-floating m-1">
            <i className="bi bi-github"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
</>
}
export default Footer
