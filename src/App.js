import React from "react"
import styled from "styled-components"
import Landingpage from "./components/Landingpage"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "./components/Context"

const App = () => {

    return (
        <div
     
        >
          <Landingpage/>
        </div>
    )
}

export default App