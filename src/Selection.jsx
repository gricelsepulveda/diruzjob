import React from "react"
import "./styles/selection.scss"

const Selection = () => {
  return (
    <section className="selection-page page">
			<div className="flex col center title-shine">
				<div className="shine">
					<h1>
						<span>Pose with</span>
						the pros
					</h1>
				</div>
				<h1>
					<span>Pose with</span>
					the pros
				</h1>
			</div>
			<div className="selection-body flex col center">
				<h1>
					<span>Select</span>
					five players
				</h1>
				<div className="selection-lot flex col center">
					<div className="pj-grid flex row center">
						<div className="pj star">
							<div className="pj-image">
								<img alt="pj-name" title="pj-name" src="https://www.alfabetajuega.com/wp-content/uploads/2018/10/156665.alfabetajuega-slowpoke-150716.png"/>
							</div>
							<h2><span>Name</span>LastName</h2>
						</div>
						<div className="pj circle">
							<div className="pj-image">
								<img alt="pj-name" title="pj-name" src="https://www.alfabetajuega.com/wp-content/uploads/2018/10/156665.alfabetajuega-slowpoke-150716.png"/>
							</div>
							<h2><span>Name</span>LastName</h2>
						</div>
					</div>
					<div className="flex row center">
						<div className="button">
							<button type="button">reset</button>
						</div>
						<div className="button">
							<button type="button">submit</button>
						</div>
					</div>
					<a href="#">ADA Menu</a>
				</div>
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