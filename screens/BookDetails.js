import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, Animated } from 'react-native';
import React, { useEffect, useState } from 'react';
import { FONTS, COLORS, SIZES, icons } from '../constants'
import { LineDivider } from '../components'

const BookDetails = ({ navigation, route }) => {
  const [book, setBook] = useState(null)

  const [scrollViewWholeHeight, setScrollViewWholeHeight] = useState(1)
  const [scrollViewVisibleHeight, setScrollViewVisibleHeight] = useState(0)

  const indicator = new Animated.Value(0)

  useEffect(() => {
    let { book } = route.params;
    setBook(book);
  }, [book]);

  const renderBookInfo = () => {
    return (
      <View style={{ flex: 1 }} >
        <ImageBackground
          source={book.bookCover}
          resizeMode='cover'
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
        {/* Color Overlay */}
        <View
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: book.backgroundColor }}
        >
        </View>
        {/* Navigation Header */}
        <View
          style={{ height: 80, flexDirection: "row", paddingHorizontal: SIZES.padding2, alignItems: "flex-end" }}
        >
          <TouchableOpacity
            style={{ marginLeft: SIZES.base }}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={icons.back_arrow_icon}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                tintColor: book.navTintColor,
              }}
            />
          </TouchableOpacity>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ ...FONTS.h3, color: book.navTintColor }}>Book Details</Text>
          </View>
          <TouchableOpacity
            style={{ marginRight: SIZES.base }}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={icons.more_icon}
              resizeMode='contain'
              style={{
                width: 30,
                height: 30,
                tintColor: book.navTintColor,
                alignSelf: "flex-end"
              }}
            />
          </TouchableOpacity>
        </View>
        {/* Book Cover */}
        <View
          style={{ flex: 5, alignItems: "center", paddingTop: SIZES.padding2 * 2 }}
        >
          <Image
            source={book.bookCover}
            resizeMode='contain'
            style={{
              flex: 1,
              width: 150,
              height: "auto"
            }}
          />
        </View>
        {/* Book Name and Author */}
        <View
          style={{ flex: 1.8, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ ...FONTS.h2, color: book.navTintColor }}>{book.bookName}</Text>
          <Text style={{ ...FONTS.body3, color: book.navTintColor }}>{book.author}</Text>
        </View>
        {/* Book Info */}

        <View
          style={{ flexDirection: "row", paddingVertical: 20, margin: SIZES.padding * 2, borderRadius: SIZES.radius * .4, backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          {/* Rating */}
          <View
            style={{ flex: 1, alignItems: "center" }}
          >
            <Text style={{ ...FONTS.h3, color: COLORS.white }}>{book.rating}</Text>
            <Text style={{ ...FONTS.body4, color: COLORS.white }}>Rating</Text>
          </View>

          <LineDivider padding={5} color={COLORS.lightGray2} />
          {/* Pages */}
          <View
            style={{ flex: 1, alignItems: "center", paddingHorizontal: SIZES.base }}
          >
            <Text style={{ ...FONTS.h3, color: COLORS.white }}>{book.pageNo}</Text>
            <Text style={{ ...FONTS.body4, color: COLORS.white }}>No of Pages</Text>
          </View>

          <LineDivider padding={5} color={COLORS.lightGray2} />
          {/* Language */}
          <View
            style={{ flex: 1, alignItems: "center" }}
          >
            <Text style={{ ...FONTS.h3, color: COLORS.white }}>{book.language}</Text>
            <Text style={{ ...FONTS.body4, color: COLORS.white }}>Language</Text>
          </View>

        </View>
      </View>
    )
  }

  const renderBookDescription = () => {

    const indicatorSize = scrollViewWholeHeight > scrollViewVisibleHeight ? scrollViewVisibleHeight * scrollViewVisibleHeight / scrollViewWholeHeight : scrollViewVisibleHeight
    const difference = scrollViewVisibleHeight > indicatorSize ? scrollViewVisibleHeight - indicatorSize : 1
    return (
      <View
        style={{ flex: 1, flexDirection: "row", padding: SIZES.padding * 2 }}
      >
        {/* Custom ScrollView */}
        <View
          style={{ width: 4, height: "100%", backgroundColor: COLORS.gray1 }}
        >
          <Animated.View
            style={{
              width: 4,
              height: indicatorSize,
              backgroundColor: COLORS.lightGray4,
              transform: [{
                translateY: Animated.multiply(indicator, scrollViewVisibleHeight / scrollViewWholeHeight).
                  interpolate({
                    inputRange: [0, difference],
                    outputRange: [0, difference],
                    extrapolate: "clamp"
                  })
              }]
            }}
          />
        </View>
        {/* Description */}
        <ScrollView
          contentContainerStyle={{ paddingLeft: SIZES.padding2 * 2 }}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onContentSizeChange={(width, height) => {
            setScrollViewWholeHeight(height)
          }}
          onLayout={({ nativeEvent: { layout: { x, y, width, height } } }) => {
            setScrollViewVisibleHeight(height)
          }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: indicator } } }],
            { useNativeDriver: false }
          )}
        >
          <Text style={{ ...FONTS.h2, color: COLORS.white, marginBottom: SIZES.padding * 2 }}>Description</Text>
          <Text style={{ ...FONTS.body2, color: COLORS.lightGray }}>{book.description}</Text>
        </ScrollView>
      </View>

    );
  };
  const renderButtons = () => {
    return(
      <View
        style={{flex:1, flexDirection:"row" }}
      >
        {/* Bookmark */}
        <TouchableOpacity
          style={{
            width:60,
            marginVertical:SIZES.base,
            marginLeft:SIZES.padding*2,
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:COLORS.secondary,
            borderRadius:SIZES.padding2,
          }}
          onPress={() => console.warn("bookmark")}
        >
          <Image 
            source={icons.bookmark_icon}
            resizeMode='contain'
            style={{
              width:25,
              height:25,
              tintColor:COLORS.lightGray2,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex:1,
            backgroundColor:COLORS.primary,
            margin:SIZES.base,
            borderRadius:SIZES.padding2,
            justifyContent:"center",
            alignItems:"center",
          }}
          onPress={() => console.warn("start reading")}
        >
          <Text style={{...FONTS.h3, color:COLORS.white}}>Start Reading</Text>
        </TouchableOpacity>
      </View>
    )
  }
  if (book) {
    return (
      <View style={{ flex: 1, backgroundColor: COLORS.black }}>
        {/* Book Cover */}
        <View style={{ flex: 4 }}>
          {renderBookInfo()}
        </View>
        {/* Description */}
        <View style={{ flex: 2 }}>
          {renderBookDescription()}
        </View>
        {/* Buttons */}
        <View style={{ height: 70, marginBottom: SIZES.padding * 2 }}>
          {renderButtons()}
        </View>
      </View>
    );
  } else {
    return (<></>)
  }

};

export default BookDetails;

const styles = StyleSheet.create({});
