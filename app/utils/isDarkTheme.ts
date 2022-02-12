import useColorScheme from "../hooks/useColorScheme";

const isDarkTheme = ()=> useColorScheme() === "dark";

export default isDarkTheme;