import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors, Fonts, Strings } from "../../assets";
import {
	GeneralStackParamList,
	GeneralStackRouteName
} from "../../navigation/type";
import { horizontalScale } from "../../utilities";

type Props = NativeStackScreenProps<
	GeneralStackParamList,
	GeneralStackRouteName.Splash
>;
export const Splash = ({ navigation }: Props) => {
	useEffect(() => {
		setTimeout(() => {
			navigation.replace(GeneralStackRouteName.Home);
		}, 3000);
	}, []);

	return (
		<View style={styles.container}>
			<Text style={styles.message}>{Strings.splash.welcome_text}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Colors.bgPrimary,
		padding: horizontalScale(20)
	},
	message: {
		color: Colors.body,
		fontFamily: Fonts.Bold,
		fontSize: horizontalScale(20)
	}
});
