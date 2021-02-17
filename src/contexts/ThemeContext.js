import React, { Component, createContext } from "react";
//import useToggle from "../hooks/useToggleState";
export const ThemeContext = createContext();
// export function ThemeProvider(props) {
//   const [isDarkMode, toggle] = useToggle(false);
//   return (
//     <ThemeContext.Provider values={{ isDarkMode, toggle }}>
//       {props.children}
//     </ThemeContext.Provider>
//   );
// }
export class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: true,
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }
  toggleTheme() {
    this.setState({ isDarkMode: !this.state.isDarkMode });
  }
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
