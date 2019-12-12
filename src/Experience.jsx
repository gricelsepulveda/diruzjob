import React from "react"

const Selection = () => {
  return (
    <section className="experience-page page flex col center">
			<div class="flex col center title-shine">
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
            <img className="team-photo" alt="team-photo" title="team-photo" src="https://i.pinimg.com/474x/ff/ee/d8/ffeed8d17dfefe52b0045bbbeb69d6d4.jpg"/>
            <div className="flex row center team-buttons">
                <button type="button">reset</button>

                <button type="button">submit</button>
            </div>
			<footer className="selection-footer">
				<p>
					<img src="https://shape.att.com/static-assets/images/2019/exhibits/exhibit-logo-att.png" alt="at&t_logo" title="logo at&t"/>
					Stadium powered by
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/WiFi_Logo.svg/1200px-WiFi_Logo.svg.png" alt="at&t_logo" title="5gsymbol"/>
				</p>
			</footer>
    </section>
  )
}

export default Selection