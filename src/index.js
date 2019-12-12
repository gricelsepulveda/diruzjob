import React from "react"
import { render } from 'react-dom'
import Selection from "./Selection.jsx"

//scss
import './styles/main.scss'

const App = () => (
    <Selection/>
)

render(<App/>, document.getElementById('root'))