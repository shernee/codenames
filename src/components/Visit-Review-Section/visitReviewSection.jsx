import React from "react"
import "./index.css"

class visitReviewSection extends React.Component {
  render() {
    return (
      <section id="visit-review-section">
        <h2 className="visit-review-name">
          Visit name
        </h2>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
      </section>
    )
  }
}

export default visitReviewSection