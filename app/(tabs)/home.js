import { View, SafeAreaView } from "react-native";

import UserHome from "../../screens/UserHome";
const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <UserHome />
      </View>
    </SafeAreaView>
  );
};

export default Home;
