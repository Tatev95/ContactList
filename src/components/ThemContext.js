import React from "react";

const ThemeContext = React.createContext('white')

const ThemeProvider = ThemeContext.Provider
const ThemeConsumer = ThemeContext.Consumer

export {ThemeProvider,  ThemeConsumer}
export default ThemeContext