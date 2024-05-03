import { 
  StyleSheet,
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  Modal,
 } from "react-native";
import React, { useState, useRef } from "react";
import { Stack } from "expo-router";
import moment from 'moment';
import { Color, FontFamily, Border, FontSize } from "../../constants/GlobalStyles";
import ScreenHeaderBtn from "../../components/common/header/ScreenHeaderBtn";
import NotificationBtn from "../../components/common/header/NotificationBtn";
import DateSwiper from "../../components/common/DateSwiper";
import DatePicker from "react-native-modern-datepicker"; 


const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const onChange = (e, selectedDate) => {
    setDate(selectedDate);
  };

  function handleOnPress () {
    setOpen(!open);
  }

  function handleChange (propDate) {
    setDate(propDate);
  }

  let currentDate = moment(date).format('YYYY/MM/DD');
  let previousDate = new Date(date);
  previousDate.setDate(date.getDate() - 7);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Stack.Screen
        options={{
          title: "Dashboard",
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
        }}
      />
      {/* <DateTimePicker
        value={date}
        mode={"date"}
        is24Hour={true}
        onChange={onChange}
      /> */}
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.dateContainer}>
          <TouchableOpacity onPress={handleOnPress}>
            <Image source={require("../../assets/icons/calendar.png")} style={{width: 20, height: 20, marginRight: 10, marginBottom: 12}}/>
          </TouchableOpacity>
          <Modal 
            animationType='slide'
            transparent={true}
            visible={open}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <DatePicker
                  mode="calendar"
                  minimumDate={currentDate}
                  selected={date}
                  onDateChange={handleChange}
                />

                <TouchableOpacity onPress={handleOnPress}>
                  <Text>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <Text style={styles.title}>
            {moment(previousDate).format('DD MMM YYYY')} - {moment(date).format('DD MMM YYYY')}
          </Text>
        </View>
        <View style={styles.statisticsContainer}>
          {/* Change the content to an API statistics instead of a fixed image */}
          <Text style={styles.statTitle}>Avg Work Hour</Text>
          <View style={styles.statGraph}>
            <Image source={require("../../assets/icons/statistics.png")} style={{width: 225, height: 225}}/>
            <View style={styles.hourText}>
              <Text style={styles.statTextHour}>9 Hr</Text>
              <Text style={styles.statTextHour}>8 Hr</Text>
              <Text style={styles.statTextHour}>7 Hr</Text>
              <Text style={styles.statTextHour}>6 Hr</Text>
              <Text style={styles.statTextHour}>5 Hr</Text>
            </View>
          </View>
          <View style={styles.dateText}>
              <Text style={styles.statTextHour}>15</Text>
              <Text style={styles.statTextHour}>16</Text>
              <Text style={styles.statTextHour}>17</Text>
              <Text style={styles.statTextHour}>18</Text>
              <Text style={styles.statTextHour}>19</Text>
              <Text style={styles.statTextHour}>20</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: "#0E305D"
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '90%',
    padding: 35,
    alignItems: 'center',
    elevation: 5,
  },
  header: {
    paddingHorizontal: 16,
  },
  title: {
    flex: 0,
    fontSize: 16,
    fontWeight: '400',
    color: '#0E305D',
    marginBottom: 12,
  },
  statTitle: {
    flex: 0,
    fontSize: 20,
    fontWeight: '700',
    color: '#0E305D',
  },
  dateContainer: {
    marginRight: 100,
    paddingVertical: 50,
    justifyContent: 'flex-start',
    flexDirection: 'row', // Arrange components horizontally
    alignItems: 'center', // Align items vertically
  },
  dateText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10, // Add spacing between calendarBtn and dateText
  },
  statisticsContainer: {
    flex: 0,
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
    borderRadius: 30,
    justifyContent: 'center',
    flexDirection: 'column',
    elevation: 5,
  },
  hourText: {
    flex: 0,
    justifyContent: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  dateText: {
    flex: 0,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  statGraph: {
    flex: 0,
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  statTextHour: {
    paddingLeft: 20,
    fontSize: 14,
    fontWeight: '200',
    
  },
  statDateHour: {
    paddingLeft: 20,
    fontSize: 14,
    fontWeight: '200',
  }
})
