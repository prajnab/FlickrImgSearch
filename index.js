import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import "./src/utilities/object.helpers";

AppRegistry.registerComponent(appName, () => App);
