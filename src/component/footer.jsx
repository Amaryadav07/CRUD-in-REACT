const Footer = () => {
    return (
      <footer className="bg-dark text-light pt-5 pb-3 mt-5">
        <div className="container">
          <div className="row">
          
            <div className="col-md-4 mb-4">
              <h5>☕ Chai aur React</h5>
              <p className="text-muted">
                Bridging developers and creativity over a cup of chai. Build. Learn. Share.
              </p>
            </div>
  
          
            <div className="col-md-4 mb-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="/home" className="text-light text-decoration-none">Home</a></li>
                <li><a href="/about" className="text-light text-decoration-none">About Us</a></li>
                <li><a href="/blog" className="text-light text-decoration-none">Blog</a></li>
                <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
              </ul>
            </div>
  
           
            <div className="col-md-4 mb-4">
              <h5>Contact</h5>
              <ul className="list-unstyled text-muted">
                <li><i className="bi bi-telephone me-2"></i> +91 98765 43210</li>
                <li><i className="bi bi-envelope me-2"></i> hello@chaiaurreact.dev</li>
                <li><i className="bi bi-geo-alt me-2"></i> Delhi, India</li>
              </ul>
            </div>
          </div>
  
        
          <div className="col-md-4 mb-4">
  <h5>Contact</h5>
  <ul className="list-unstyled text-light">
    <li><i className="bi bi-telephone me-2"></i> +91-8319960075</li>
    <li><i className="bi bi-envelope me-2"></i>amarnath2893@gmail.com</li>
    <li><i className="bi bi-geo-alt me-2"></i> MP Nagar Bhopal</li>
  </ul>
</div>

  
        
          <div className="text-center border-top pt-3 text-secondary">
            &copy; {new Date().getFullYear()} Chai aur React. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  