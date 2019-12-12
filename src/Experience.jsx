import React from "react"
import "./styles/experience.scss"

const Experience = () => {
  return (
    <section className="experience-page page flex col center">
			<div className="flex col center title-shine">
				<div className="shine">
					<h1>
						<span>Share your</span>
						experience
					</h1>
				</div>
				<h1>
					<span>Share your</span>
					experience
				</h1>
			</div>
            <img className="team-photo" alt="team-photo" title="team-photo" src="https://pbs.twimg.com/profile_images/1077954872060698624/4lfWQbrQ_400x400.jpg"/>
            <div className="flex col center experience-buttons">
                <button className="_button" type="button">reset</button>
                <button className="_button"  type="button">submit</button>
            </div>
			<footer className="experience-footer">
				<p>
					<img src="https://shape.att.com/static-assets/images/2019/exhibits/exhibit-logo-att.png" alt="at&t_logo" title="logo at&t"/>
					Stadium powered by
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/WiFi_Logo.svg/1200px-WiFi_Logo.svg.png" alt="at&t_logo" title="5gsymbol"/>
				</p>
			</footer>
    </section>
  )
}

export default Experience