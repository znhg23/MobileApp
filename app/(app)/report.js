import { 
  StyleSheet,
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
  Text,
  Image,
  Dimensions,
  Button,
  TouchableOpacity,
  Modal,
 } from "react-native";
import React, { useState, useRef } from "react";
import { Stack } from "expo-router";
import moment from 'moment';
import Footer from "../../components/common/Footer";
import { Color, FontFamily, Border, FontSize } from "../../constants/GlobalStyles";
import ScreenHeaderBtn from "../../components/common/header/ScreenHeaderBtn";
import NotificationBtn from "../../components/common/header/NotificationBtn";
import DateSwiper from "../../components/common/DateSwiper";
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker"; 

const Report = () => {
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
          title: "Report",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#E5EFFF",
          },
          headerShadowVisible: false,
          headerTitleStyle: {
            fontFamily: "IBMPlexSans_500Medium",
            color: "#0E305D",
            fontSize: 20,
            fontWeight: "normal",
          },
        }}
      />
      <DateSwiper/>
      <View style={styles.bottomContainer}>
        <View style={styles.generalContainer}>
          <Text style={styles.generalText}>General</Text>
          <View style={styles.toolBar}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/icons/sort.png")}
                style={{ width: 22, height: 19 }}
              />
              <Text style={styles.toolBarText}>Sort</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/icons/filter.png")}
                style={{ width: 24, height: 24 }}
              />
              <Text style={styles.toolBarText}>Filter</Text>
            </View>
            <View style={styles.search}>
              <Image
                source={require("../../assets/icons/search.png")}
                style={{ width: 16, height: 16 }}
              />
              <Text style={styles.searchText}>Search</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.reportContainer}>
        <Text style={styles.timeText}>07:00:00</Text>
        <TouchableOpacity style={styles.reportBtn}>
          <View style={styles.nameAndType}>
            <Text style={styles.name}>Trương Đức Dũng</Text>
            <View style={styles.type}>
              <Image 
                source={require("../../assets/icons/briefcase.png")}
                style={{ width: 17, height: 17, marginTop: 1, marginRight: 4 }}
              />
              <Text style={styles.typeText}>Absent Request</Text>
            </View>
          </View>
          <View style={{
            borderRadius: 20,
            flex: 0,
            backgroundColor: '#CBFFC5',
            justifyContent: 'center',
            padding: 10,
          }}>
            <Text style={{
              color: '#1CD919',
              fontSize: 12,
            }}>Approved</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.reportContainer}>
        <Text style={styles.timeText}>07:00:00</Text>
        <TouchableOpacity style={styles.reportBtn}>
          <View style={styles.nameAndType}>
            <Text style={styles.name}>Trương Đức Dũng</Text>
            <View style={styles.type}>
              <Image 
                source={require("../../assets/icons/briefcase.png")}
                style={{ width: 17, height: 17, marginTop: 1, marginRight: 4 }}
              />
              <Text style={styles.typeText}>Late in Request</Text>
            </View>
          </View>
          <View style={{
            borderRadius: 20,
            flex: 0,
            backgroundColor: '#FFE1DF',
            justifyContent: 'center',
            padding: 10,
          }}>
            <Text style={{
              color: '#ED2115',
              fontSize: 12,
            }}>Rejected</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.reportContainer}>
        <Text style={styles.timeText}>07:00:00</Text>
        <TouchableOpacity style={styles.reportBtn}>
          <View style={styles.nameAndType}>
            <Text style={styles.name}>Trương Đức Dũng</Text>
            <View style={styles.type}>
              <Image 
                source={require("../../assets/icons/briefcase.png")}
                style={{ width: 17, height: 17, marginTop: 1, marginRight: 4 }}
              />
              <Text style={styles.typeText}>Late in Request</Text>
            </View>
          </View>
          <View style={{
            borderRadius: 20,
            flex: 0,
            backgroundColor: '#FFE1DF',
            justifyContent: 'center',
            padding: 10,
          }}>
            <Text style={{
              color: '#ED2115',
              fontSize: 12,
            }}>Rejected</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.reportContainer}>
        <Text style={styles.timeText}>07:00:00</Text>
        <TouchableOpacity style={styles.reportBtn}>
          <View style={styles.nameAndType}>
            <Text style={styles.name}>Mai Hoàng Danh</Text>
            <View style={styles.type}>
              <Image 
                source={require("../../assets/icons/briefcase.png")}
                style={{ width: 17, height: 17, marginTop: 1, marginRight: 4 }}
              />
              <Text style={styles.typeText}>Early leave</Text>
            </View>
          </View>
          <View style={{
            borderRadius: 20,
            flex: 0,
            backgroundColor: '#F7F8C5',
            justifyContent: 'center',
            padding: 10,
          }}>
            <Text style={{
              color: '#D8B605',
              fontSize: 12,
            }}>Unresolved</Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.newReqBtn}>
        <Text style={{ fontWeight: 500, paddingHorizontal: 5}}>New request</Text>
        <Image source={require('../../assets/icons/add-more.png')} style={{ height: 16, width: 16, marginTop: 3}}/>
      </TouchableOpacity>
      
      <Footer/>

    </View>
  );
};

export default Report;

const styles = StyleSheet.create({
  topContainer: {
    width: "100%",
    height: 188,
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
    backgroundColor: "#E5EFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    flex: 0,
    width: "100%",
    padding: 16,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  generalContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 8,
  },
  generalText: {
    textAlignVertical: "center",
    fontSize: 24,
    fontFamily: "IBMPlexSans_500Medium",
    color: "#0E305D",
  },
  toolBar: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    columnGap: 6,
  },
  toolBarText: {
    marginLeft: 4,
    fontSize: 12,
    fontFamily: "IBMPlexSans_400Regular",
    color: "#0E305D",
  },
  search: {
    width: 80,
    padding: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "rgba(129, 154, 159, 0.23)",
  },
  searchText: {
    textAlignVertical: "center",
    paddingBottom: 2,
    marginLeft: 4,
    fontSize: 12,
    fontFamily: "IBMPlexSans_400Regular",
    color: "#0E305D",
    opacity: 0.7,
  },
  attendanceContainer: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  timeText: {
    fontSize: 16,
    fontFamily: "IBMPlexSans_400Regular",
    color: "black",
    marginTop: 25,
  },
  boxInfo: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#E5EFFF",
    borderRadius: 10,
  },
  status: {
    marginTop: 3,
    height: 18,
    width: 68,
    borderRadius: 8,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  reportContainer: {
    marginHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flex: 0,
    marginVertical: 5,
  },
  reportBtn: {
    marginLeft: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    borderRadius: 20,
    backgroundColor: "#E5EFFF",
    padding: 15,
  },
  statusText: {
    fontSize: 12,
    fontFamily: "IBMPlexSans_500Medium",
    textAlignVertical: "top",
  },
  otherText: {
    fontSize: 14,
    fontFamily: "IBMPlexSans_400Regular",
    color: "#94A3B8",
  },
  nameAndType: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 0,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    paddingVertical: 1,
  },
  type: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flex: 0,
  },
  typeText: {
    fontSize: 14,
    fontWeight: '200',
  },
  newReqBtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 0,
    alignItems: 'center',
    backgroundColor: '#CCDDF3',
    borderRadius: 20,
    marginTop: 10,
    padding: 10,
  }
});
