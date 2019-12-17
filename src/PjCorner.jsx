import React, {useState} from "react"


const PjCorner = (props) => {
    const [active, setActive] = useState(props.active)

    const handleClick = () => {
        setActive(!active)
    }

    return (
        <div className={`pj-corner ${active == true ? "active" : ""}`} onClick={() => handleClick()}>
            <img alt="pj-corner" title="pj-corner" src="https://www.alfabetajuega.com/wp-content/uploads/2018/10/156665.alfabetajuega-slowpoke-150716.png"/>
        </div>
    )
}

export default PjCorner