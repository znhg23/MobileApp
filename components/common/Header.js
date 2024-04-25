import { View, Text } from "react-native";

const Header = (page) => {
  ({
    title: page,
    headerTitleAlign: "center",
    headerStyle: {
      backgroundColor: "white",
    },
    headerShadowVisible: false,
    headerLeft: () => <ScreenHeaderBtn />,
    headerRight: () => <NotificationBtn />,
    headerTitleStyle: {
      color: "#0E305D",
      fontSize: 20,
      fontWeight: "normal",
    },
  });
};

export default Header;
