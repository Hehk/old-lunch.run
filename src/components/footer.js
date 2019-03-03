import React from "react"
import { rhythm } from "../utils/typography"

const Footer = () => {
  return (
    <footer
      style={{
        marginTop: rhythm(2.5),
      }}
    >
      <a href="https://www.github.com/hehk">github</a>
      {" :: "}
      <a href="https://www.strava.com/athletes/25975441">strava</a>
      {" :: "}
      <a href="https://ultrasignup.com/results_participant.aspx?fname=Kyle&lname=Henderson">
        ultra_signup
      </a>
      {" :: []"}
    </footer>
  )
}

export default Footer
