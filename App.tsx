import React from "react";
import { StatusBar, useColorScheme } from "react-native";
import { Provider } from "react-redux";
import AppRouter from "./src/navigation/Router";
import store from "./src/redux/store";

const App = () => {
	const isDarkMode = useColorScheme() === "dark";

	return (
		<Provider store={store}>
			<StatusBar
				barStyle={isDarkMode ? "light-content" : "dark-content"}
			/>
			<AppRouter />
		</Provider>
	);
};

export default App;
