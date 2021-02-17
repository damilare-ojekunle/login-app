import React, { Component } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

// export default function PageContent(props) {
//   const { isDarkMode } = useContext(ThemeContext);
//   const styles = {
//     backgroundColor: isDarkMode ? "black" : "white",
//     heigth: "100vh",
//     width: "100vw",
//   };
//   return <div style={styles}>{props.children}</div>;
// }
class PageContent extends Component {
  static contextType = ThemeContext;
  render() {
    const { isDarkMode } = this.context;
    console.log(isDarkMode);
    const styles = {
      backgroundColor: isDarkMode ? "black" : "white",
      heigth: "100vh",
      width: "100vw",
    };
    return <div style={styles}>{this.props.children}</div>;
  }
}

export default PageContent;
