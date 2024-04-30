import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import Swiper from 'react-native-swiper';
import CalendarBtn from './iconBtn/calendar';

const { width } = Dimensions.get('window');

export default function Example() {
  const swiper = useRef();
  const [value, setValue] = useState(new Date());
  const [week, setWeek] = useState(0);

  const weeks = React.useMemo(() => {
    const start = moment().add(week, 'weeks').startOf('week');

    return [-1, 0, 1].map(adj => {
      return Array.from({ length: 7 }).map((_, index) => {
        const date = moment(start).add(adj, 'week').add(index, 'day');

        return {
          weekday: date.format('ddd'),
          date: date.toDate(),
        };
      });
    });
  }, [week]);

  const currentDate = value.toDateString();
  const formattedDate = moment(currentDate).format('DD MMM, YYYY');


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.dateContainer}>
          <Image source={require("../../assets/icons/calendar.png")} style={{width: 30, height: 30, marginRight: 10, marginBottom: 12}}/>
          <Text style={styles.title}>
            {formattedDate}
          </Text>
        </View>

        <View style={styles.picker}>
          <Swiper
            index={1}
            ref={swiper}
            loop={false}
            showsPagination={false}
            onIndexChanged={ind => {
              if (ind === 1) {
                return;
              }
              setTimeout(() => {
                const newIndex = ind - 1;
                const newWeek = week + newIndex;
                setWeek(newWeek);
                setValue(moment(value).add(newIndex, 'week').toDate());
                swiper.current.scrollTo(1, false);
              }, 100);
            }}>
            {weeks.map((dates, index) => (
              <View
                style={[styles.itemRow, { paddingHorizontal: 16 }]}
                key={index}>
                {dates.map((item, dateIndex) => {
                  const isActive =
                    value.toDateString() === item.date.toDateString();
                  return (
                    <TouchableWithoutFeedback
                      key={dateIndex}
                      onPress={() => setValue(item.date)}>
                      <View
                        style={[
                          styles.item,
                          isActive && {
                            backgroundColor: '#0E305D',
                            borderColor: '#0E305D',
                          },
                        ]}>
                        <Text
                          style={[
                            styles.itemWeekday,
                            isActive && { color: '#fff' },
                          ]}>
                          {item.weekday}
                        </Text>
                        <Text
                          style={[
                            styles.itemDate,
                            isActive && { color: '#fff' },
                          ]}>
                          {item.date.getDate()}
                        </Text>
                      </View>
                    </TouchableWithoutFeedback>
                  );
                })}
              </View>
            ))}
          </Swiper>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    paddingVertical: 24,
    paddingHorizontal: 24,
    maxHeight: 200,
    backgroundColor: '#94A3B8',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  header: {
    paddingHorizontal: 16,
  },
  title: {
    flex: 0,
    fontSize: 32,
    fontWeight: '700',
    color: '#0E305D',
    marginBottom: 12,
  },
  picker: {
    flex: 1,
    maxHeight: 74,
    width: 350,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#999999',
    marginBottom: 12,
  },
  footer: {
    marginTop: 'auto',
    paddingHorizontal: 16,
  },
  /** Item */
  item: {
    flex: 0,
    height: 50,
    width: 40,
    marginHorizontal: 2,
    paddingVertical: 6,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#0E305D',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemRow: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: -18,
  },
  itemWeekday: {
    fontSize: 13,
    fontWeight: '500',
    color: '#0E305D',
    marginBottom: 4,
  },
  itemDate: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0E305D',
  },
  /** Placeholder */
  placeholder: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 400,
    marginTop: 0,
    padding: 0,
    backgroundColor: 'transparent',
  },
  placeholderInset: {
    borderWidth: 4,
    borderColor: '#e5e7eb',
    borderStyle: 'dashed',
    borderRadius: 9,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#007aff',
    borderColor: '#007aff',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#0E305D',
  },
  dateContainer: {
    justifyContent: 'center',
    flexDirection: 'row', // Arrange components horizontally
    alignItems: 'center', // Align items vertically
  },
  dateText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10, // Add spacing between calendarBtn and dateText
  },
});