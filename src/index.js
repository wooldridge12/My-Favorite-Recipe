import React from "react"
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import { MyFavoriteRecipe } from "./components/MyFavoriteRecipe"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MyFavoriteRecipe />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
