import "./Footer.css";


function Footer(props) {
  return (
    <footer className="Footer">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <h1 className="line-h">Company</h1>
            <p>
              The brand strives to create respect for its products among the
              audience, so that the presence of the company's products is a sign
              of prestige.
            </p>
            <div className="display">
              <a href="/">
              </a>
              <a href="/">
              </a>
            </div>
          </div>
          <div className="col-3 line-h">
            <h1>Navigation</h1>
            <aside>Product catalog</aside>
            <aside>About company</aside>
            <aside>Bonus program</aside>
            <aside>Work process</aside>
            <aside>Partners</aside>
            <aside>Privacy Policy</aside>
          </div>
          <div className="col-3 line-h">
            <h1>Opening</h1>
            <aside>Care cosmetics</aside>
            <aside>Eyebrow cosmetics</aside>
            <aside>Decorative cosmetics</aside>
            <aside>New in the collection</aside>
            <aside>Box and complect</aside>
            <aside>Accessories</aside>
          </div>
          <div className="col-3">
            <h1 className="line-h">Contacts</h1>
            <p>
              We are open to new opportunities, so you can contact our company
              representatives for any questions
            </p>
            <a href="/">
            <i class="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
