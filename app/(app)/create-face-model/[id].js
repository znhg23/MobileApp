global.Buffer = global.Buffer || require("buffer").Buffer;
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  Image,
  Button,
  KeyboardAvoidingView,
  FlatList,
} from "react-native";

import React, { useState, useEffect } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import BASE_URL from "../../../env";

import {
  useFonts,
  IBMPlexSans_300Light,
  IBMPlexSans_400Regular,
  IBMPlexSans_500Medium,
  IBMPlexSans_600SemiBold,
  IBMPlexSans_700Bold,
} from "@expo-google-fonts/ibm-plex-sans";

const CreateFaceModel = () => {
  const [image, setImage] = useState([]);
  const { id } = useLocalSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/manager/getFaceModelList/${id}`
        );
        for (const item of response.data.message) {
          try {
            const res = await axios.get(
              `${BASE_URL}/manager/getFaceModel/?model_path=${item}`,
              {
                responseType: "arraybuffer",
              }
            );
            const base64Image = Buffer.from(res.data, "binary").toString(
              "base64"
            );
            setImage((prevImage) => [
              ...prevImage,
              { uri: `data:image/jpeg;base64,${base64Image}` },
            ]);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
      } catch (error) {
        alert(error.response.data.message || "An error occurred");
      }
    };

    fetchData();
  }, []);

  let [fontsLoaded, fontError] = useFonts({
    IBMPlexSans_300Light,
    IBMPlexSans_400Regular,
    IBMPlexSans_500Medium,
    IBMPlexSans_600SemiBold,
    IBMPlexSans_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return (
      <>
        <Stack.Screen options={{ headerShown: false }} />
        <ActivityIndicator size="large" color="#94A3B8" />
      </>
    );
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      if (image) {
        setImage([...image, ...result.assets]);
      } else {
        setImage(result.assets);
      }
    }
  };
  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      if (image) {
        setImage([...image, ...result.assets]);
      } else {
        setImage(result.assets);
      }
    }
  };
  const clearImages = () => {
    setImage(null);
  };

  const uploadImage = async () => {
    if (!image) {
      console.error("No image selected");
      return;
    }

    try {
      const formData = new FormData();

      image.forEach((item, index) => {
        formData.append("file", {
          uri: item.uri,
          name: `image${index}.jpg`,
          type: "image/jpeg",
        });
      });

      // Make POST request using Axios
      const response = await axios
        .patch(`${BASE_URL}/manager/updateFaceModel/${id}`, formData, {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        })
        .catch((error) => {
          alert(error.response.data.message || "An error occurred");
        });

      console.log("Upload successful:", response);
      // Handle response or update UI as needed
    } catch (error) {
      console.error("Error uploading image:", error);
      // Handle error or display error message
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Create Face Model",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "white",
          },
          headerBackVisible: true,
          headerShadowVisible: false,
          headerTitleStyle: {
            fontFamily: "IBMPlexSans_500Medium",
            color: "#0E305D",
            fontSize: 20,
            fontWeight: "normal",
          },
        }}
      />
      <View style={styles.imagePickerContainer}>
        <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
          <Image
            source={require("../../../assets//icons/library-image.png")}
            style={{ height: 50, width: 50 }}
          />
          <Text style={styles.importText}>Choose image from library</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imagePicker} onPress={takePhoto}>
          <Image
            source={require("../../../assets//icons/camera-image.png")}
            style={{ height: 50, width: 50 }}
          />
          <Text style={styles.importText}>Take photo from camera</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={clearImages}
        style={{
          justifyContent: "center",
          alignSelf: "flex-end",
          paddingVertical: 10,
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "IBMPlexSans_400Regular",
            fontSize: 14,
            color: "#0E305D",
          }}
        >
          Clear Images
        </Text>
      </TouchableOpacity>
      {image && (
        <FlatList
          contentContainerStyle={{
            height: (Dimensions.get("window").width - 16) / 3,
            columnGap: 8,
          }}
          data={image}
          renderItem={({ item }) => (
            <Image source={{ uri: item.uri }} style={styles.image} />
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      )}
      <View style={styles.employeeInfo}></View>
      <Button title="Upload" onPress={uploadImage} />
    </View>
  );
};
export default CreateFaceModel;
const styles = StyleSheet.create({
  imagePickerContainer: {
    width: "100%",
    height: 150,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    columnGap: 20,
  },
  imagePicker: {
    flex: 1,
    height: "100%",
    borderWidth: 1,
    borderRadius: 10,
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  imageList: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  image: {
    width: (Dimensions.get("window").width - 16) / 3,
    height: (Dimensions.get("window").width - 16) / 3,
  },
  importText: {
    fontFamily: "IBMPlexSans_400Regular",
    fontSize: 14,
    color: "#0E305D",
    textAlign: "center",
    opacity: 0.7,
  },
  employeeInfo: {
    flex: 1,
    width: "100%",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
