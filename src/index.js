import React from "react"
import { render } from 'react-dom'
import Selection from "./Selection.jsx"
import Experience from "./Experience.jsx"

//scss
import './styles/main.scss'

const App = () => (
    //comment or uncomment to show
    /*<Selection/>*/
    <Experience/>
)

render(<App/>, document.getElementById('root'))