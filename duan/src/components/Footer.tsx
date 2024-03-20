const Footer = () => {
  return (
    <div>
      <section className="footer" id="footerid">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-12 mx-auto">
                    <h3>About Us</h3>
                    <p>Iso, Halal, & Haccap certified, approved by the Sindh Food Authority & made to the very highest
                        standards of hygiene & healthfulness, our age-old virtues of quality & good service
                        intact
                        <hr></hr>
                        <b>Baker's Kitchen</b> is now reinventing the art of baking with the same tender
                        loving care that has earned us your trust.</p>
                    <hr className="w-25 mx-auto text-dark"></hr>
                    <a href="https://www.facebook.com/" target="blank"><i className="bi bi-facebook"></i></a>
                    <a href="https://twitter.com" target="blank"><i className="fab fa-twitter"></i></a>
                    <a href="https://gmail.google.com" target="blank"><i className="fab fa-google-plus-g"></i></a>
                    <a href="https://www.pinterest.com/" target="blank"><i className="fab fa-pinterest"></i></a>
                    <a href="https://instagram.com/" target="blank"><i className="fab fa-instagram"></i></a>
                </div>
                <div className="col-lg-4 col-md-4 col-12 mx-auto">
                    <h3>Contact Us</h3>
                    <p>C-21, Lucknow Society Sector 31 E Korangi, Karachi, Karachi City, Sindh</p>
                    <hr className="w-25 mx-auto text-dark"></hr>
                    <p>
                      <p> Hours: Opens 6-AM To 10-PM </p>
                       <p> Monday to Monday </p>
                        Phone: (021) 35127361</p>
                </div>
                <div className="col-lg-4 col-md-4 col-12 mx-auto">
                    <h3>Location</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14485.08557107192!2d67.123408!3d24.8203909!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x23320c2fdcb48428!2sAptech%20Learning%20Korangi!5e0!3m2!1sen!2s!4v1633338566993!5m2!1sen!2s"
                        height="200"  style={{border:0}}  loading="lazy"
                        className ="container-fluid"></iframe>
                </div>
            </div>
        </div>
        <hr className="w-50 mt-5 mx-auto text-dark"></hr>
        <div className="container last-footer">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-12 mx-auto Copyright">
                    <h4 id="last-logo">Backer's kitchen</h4>
                </div>
                <div className="col-lg-4 col-md-4 col-12 mx-auto Copyright">
                    <h4><span id="Name">Backer's kitchen</span> © Privacy Policy</h4>
                </div>
                <div className="col-lg-4 col-md-4 col-12 mx-auto Copyright">
                    <h4>Design & Developed by <span id="Name">MUDASSIR UDDIN</span></h4>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
