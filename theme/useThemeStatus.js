import { useContext } from "react";
import { themeStatusContext } from "./ThemeStatusProvider";

const useThemeStatus = () => useContext(themeStatusContext);

export default useThemeStatus;
