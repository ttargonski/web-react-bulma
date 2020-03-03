import React, { Component } from "react";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="title">About us</div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                atque eveniet! A eos nam voluptatum porro rerum dicta?
                Reprehenderit ipsam quia accusamus recusandae voluptatum ea,
                saepe deserunt ex molestiae? Sed blanditiis vero minus placeat
                nihil quos corporis voluptas expedita eligendi, nisi, iure fuga
                amet doloribus repudiandae asperiores ratione at. Maxime?
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus ad consectetur sunt dolorum sequi obcaecati, hic
                reiciendis repellendus eligendi possimus commodi quia laudantium
                id aliquam similique temporibus dolore a et!
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                cupiditate sint doloribus sed inventore quas deserunt similique,
                veritatis aliquid, fugit libero iusto quibusdam nihil rerum
                eligendi architecto eos tenetur adipisci voluptatum dolore? Eos,
                qui, dolorem quaerat ipsa possimus culpa quibusdam, sunt cum
                incidunt sequi ipsum!
              </p>
            </div>
            <div className="column is-one-third">
              <div id="company" className="card"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
