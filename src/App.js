import React from "react"
import { Route } from "react-router-dom"
import "./App.css"

import HomePage from "./pages/homepage/homepage.component"

const HatsPage = (props) => <h1>Hats</h1>

function App() {
  return (
    <div>
      {/* <Switch> */}
      <Route exact path="/" component={HomePage} />
      <Route path="/hats" component={HatsPage} />
      {/* </Switch> */}
    </div>
  )
}

export default App
