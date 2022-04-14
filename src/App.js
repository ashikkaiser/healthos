import React from "react"

import { Switch, BrowserRouter as Router } from "react-router-dom"
import { connect, useSelector } from "react-redux"
import { userRoutes, authRoutes } from "./routes/allRoutes"

import Authmiddleware from "./routes/middleware/Authmiddleware"

import VerticalLayout from "./components/VerticalLayout/"
import NonAuthLayout from "./components/NonAuthLayout"

// Import scss
import "./assets/scss/theme.scss"


const App = props => {
  const hello = useSelector(state => state)
  return (
    <React.Fragment>
      <Router>
        <Switch>
          {authRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={NonAuthLayout}
              component={route.component}
              key={idx}
              isAuthProtected={false}
            />
          ))}

          {userRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={VerticalLayout}
              component={route.component}
              key={idx}
              isAuthProtected={true}
              exact
            />
          ))}
        </Switch>
      </Router>
    </React.Fragment>
  )
}


const mapStateToProps = state => {
  return {
    layout: {
      layoutType: "vertical",
      layoutWidth: "fluid",
      leftSideBarTheme: "dark",
      leftSideBarType: "default",
      topbarTheme: "light",
      isPreloader: false,
      showRightSidebar: false,
      isMobile: false,
      showSidebar: true,
      leftMenu: false,
    }
  }
}

// export default connect(mapStateToProps, null)(App)
export default App