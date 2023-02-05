import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, FlatList } from 'react-native';
import React, { useState } from 'react';
import { COLORS, FONTS, icons, images, SIZES } from '../constants'
import { LineDivider, HeaderButton } from '../components'


const Home = ({ navigation }) => {

  const profileData = {
    name: "Usman Aslam",
    point: 200,
  };

  const bookOtherWordsForHome = {
    id: 1,
    bookName: "Other Words For Home",
    bookCover: images.otherWordsForHome,
    rating: 4.5,
    language: "Eng",
    pageNo: 341,
    author: "Jasmine Warga",
    genre: [
      "Romance", "Adventure", "Drama"
    ],
    readed: "12k",
    description: "Jude never thought she’d be leaving her beloved older brother and father behind, all the way across the ocean in Syria. But when things in her hometown start becoming volatile, Jude and her mother are sent to live in Cincinnati with relatives. At first, everything in America seems too fast and too loud. The American movies that Jude has always loved haven’t quite prepared her for starting school in the US—and her new label of 'Middle Eastern,' an identity she’s never known before. But this life also brings unexpected surprises—there are new friends, a whole new family, and a school musical that Jude might just try out for. Maybe America, too, is a place where Jude can be seen as she really is.",
    backgroundColor: "rgba(240,240,232,0.9)",
    navTintColor: "#000"
  }

  const bookTheMetropolis = {
    id: 2,
    bookName: "The Metropolis",
    bookCover: images.theMetropolist,
    rating: 4.1,
    language: "Eng",
    pageNo: 272,
    author: "Seith Fried",
    genre: [
      "Adventure", "Drama"
    ],
    readed: "13k",
    description: "In Metropolis, the gleaming city of tomorrow, the dream of the great American city has been achieved. But all that is about to change, unless a neurotic, rule-following bureaucrat and an irreverent, freewheeling artificial intelligence can save the city from a mysterious terrorist plot that threatens its very existence. Henry Thompson has dedicated his life to improving America's infrastructure as a proud employee of the United States Municipal Survey. So when the agency comes under attack, he dutifully accepts his unexpected mission to visit Metropolis looking for answers. But his plans to investigate quietly, quickly, and carefully are interrupted by his new partner: a day-drinking know-it-all named OWEN, who also turns out to be the projected embodiment of the agency's supercomputer. Soon, Henry and OWEN are fighting to save not only their own lives and those of the city's millions of inhabitants, but also the soul of Metropolis. The Municipalists is a thrilling, funny, and touching adventure story, a tour-de-force of imagination that trenchantly explores our relationships to the cities around us and the technologies guiding us into the future.",
    backgroundColor: "rgba(247,239,219,0.9)",
    navTintColor: "#000"
  }

  const bookTheTinyDragon = {
    id: 3,
    bookName: "The Tiny Dragon",
    bookCover: images.theTinyDragon,
    rating: 3.5,
    language: "Eng",
    pageNo: 110,
    author: "Ana C Bouvier",
    genre: [
      "Drama", "Adventure", "Romance"
    ],
    readed: "13k",
    description: "This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!",
    backgroundColor: "rgba(119,77,143,0.9)",
    navTintColor: "#FFF"
  }

  const myBooksData = [
    {
      ...bookOtherWordsForHome,
      completion: "75%",
      lastRead: "3d 5h",

    },
    {
      ...bookTheMetropolis,
      completion: "23%",
      lastRead: "10d 5h",

    },
    {
      ...bookTheTinyDragon,
      completion: "10%",
      lastRead: "1d 2h",

    }
  ]

  const categoriesData = [
    {
      id: 1,
      categoryName: "Best Seller",
      books: [
        bookOtherWordsForHome, bookTheMetropolis, bookTheTinyDragon
      ]
    },
    {
      id: 2,
      categoryName: "The Latest",
      books: [
        bookTheMetropolis
      ]
    },
    {
      id: 3,
      categoryName: "Coming Soon",
      books: [
        bookTheTinyDragon
      ]
    },
  ]

  const [profile, setProfile] = useState(profileData);
  const [myBooks, setMyBooks] = useState(myBooksData);
  const [categories, setCategories] = useState(categoriesData);
  const [selectedCategory, setSelectedCategory] = useState(1);


  const renderHeader = () => {
    return (
      <View
        style={{ flex: 1, flexDirection: "row", paddingHorizontal: SIZES.padding * 2, alignItems: "center" }}
      >
        {/* Greetings */}
        <View
          style={{ flex: 1 }}
        >
          <View
            style={{ marginRight: SIZES.padding * 2 }}
          >
            <Text style={{ color: COLORS.lightGray3, ...FONTS.h3 }}>Good Morning</Text>
            <Text style={{ color: COLORS.white, ...FONTS.h2 }}>{profile.name}</Text>
          </View>
        </View>
        {/* Points */}
        <TouchableOpacity
          style={{ height: 40, backgroundColor: COLORS.primary, paddingLeft: 3, paddingRight: SIZES.padding2, borderRadius: SIZES.radius * .7 }}
          onPress={() => console.warn("point")}
        >
          <View
            style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", }}
          >
            <View
              style={{
                width: 30,
                height: 30,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: SIZES.radius * .8,
                backgroundColor: "rgba(0,0,0,0.5)"
              }}
            >
              <Image
                source={icons.plus_icon}
                resizeMode='contain'
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </View>
            <Text style={{ color: COLORS.white, ...FONTS.h3, marginLeft: SIZES.base }}>
              {profile.point}
              <Text style={{ ...FONTS.body3 }}> points</Text></Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  };

  const renderButtons = () => {
    return (
      <View
        style={{ flex: 1, justifyContent: "center", padding: SIZES.padding * 2 }}
      >
        <View
          style={{ flexDirection: "row", height: 70, backgroundColor: COLORS.secondary, borderRadius: SIZES.radius * .5 }}
        >
          {/* Claim */}
          <HeaderButton icon={icons.claim_icon} title={"Claim"} />
          {/* Divivder */}
          <LineDivider  padding={18} color={COLORS.lightGray}/>

          {/* Get Points */}
          <HeaderButton icon={icons.point_icon} title={"Get Point"} />

          {/* Divider */}
          <LineDivider  padding={18} color={COLORS.lightGray}/>

          {/* Get Card */}
          <HeaderButton icon={icons.card_icon} title={"My Card"} />

        </View>
      </View>
    )
  }

  const renderMyBooks = () => {

    const renderBook = ({ item, index }) => {
      return (
        <TouchableOpacity
          style={{
            flex: 1,
            marginLeft: index == 0 ? SIZES.padding * 2 : 0,
            marginRight: SIZES.padding2,
          }}
          onPress={() => navigation.navigate("bookDetail", { book: item })}
        >
          {/* Book Cover */}
          <Image
            source={item.bookCover}
            resizeMode='cover'
            style={{
              width: 180,
              height: 260,
              borderRadius: SIZES.radius * .7,
            }}
          />

          {/* Book Information */}
          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: SIZES.padding2 }}
          >
            <Image
              source={icons.clock_icon}
              resizeMode='contain'
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.lightGray,
              }}
            />
            <Text style={{ ...FONTS.body3, marginLeft: 5, color: COLORS.lightGray }}>{item.lastRead}</Text>

            <Image
              source={icons.page_icon}
              resizeMode='contain'
              style={{
                width: 20,
                height: 20,
                marginLeft: SIZES.padding2,
                tintColor: COLORS.lightGray
              }}
            />
            <Text style={{ ...FONTS.body3, marginLeft: 5, color: COLORS.lightGray }}>{item.completion}</Text>
          </View>

        </TouchableOpacity>
      )
    }
    return (
      <View style={{ flex: 1 }}>
        {/* Header */}
        <View
          style={{ flexDirection: "row", paddingHorizontal: SIZES.padding * 2, justifyContent: "space-between", }}
        >
          <Text style={{ color: COLORS.white, ...FONTS.h2 }}>My Books</Text>
          <TouchableOpacity
            onPress={() => console.warn("see more")}
          >
            <Text style={{ alignSelf: "flex-start", color: COLORS.lightGray, ...FONTS.body3, textDecorationLine: "underline", }}>see more</Text>
          </TouchableOpacity>
        </View>
        {/* Books */}
        <View
          style={{ flex: 1, marginTop: SIZES.padding2 * 2 }}
        >
          <FlatList
            data={myBooks}
            renderItem={renderBook}
            keyExtractor={item => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
  };

  const renderCategoryHeader = () => {
    const renderCategory = ({ item }) => {
      return (
        <TouchableOpacity
          style={{ flex: 1, marginRight: SIZES.padding * 2 }}
          onPress={() => setSelectedCategory(item.id)}
        >
          {
            selectedCategory == item.id &&
            <Text style={{ color: COLORS.white, ...FONTS.h2, }}>{item.categoryName}</Text>
          }
          {
            selectedCategory != item.id &&
            <Text style={{ color: COLORS.lightGray, ...FONTS.h2, }}>{item.categoryName}</Text>
          }
        </TouchableOpacity>
      )
    }
    return (
      <View
        style={{ flex: 1, paddingLeft: SIZES.padding * 2 }}
      >
        <FlatList
          data={categories}
          renderItem={renderCategory}
          keyExtractor={item => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };

  const renderCategoryData = () => {
    var books = []
    let selectedCategoryBooks = categories.filter(a => a.id == selectedCategory);

    if (selectedCategoryBooks.length > 0) {
      books = selectedCategoryBooks[0].books;
    }

    const renderData = ({ item }) => {
      return (
        <View
          style={{ marginVertical: SIZES.base }}
        >
          <TouchableOpacity
            style={{ flex: 1, flexDirection: "row", }}
            onPress={() => navigation.navigate("bookDetail", { book: item })}
          >
            {/* Book Cover */}
            <Image
              source={item.bookCover}
              resizeMode='cover'
              style={{
                borderRadius: SIZES.radius * .4,
                width: 100,
                height: 150,
              }}
            />
            <View
              style={{ flex: 1, marginLeft: SIZES.padding2 }}
            >
              {/* Book Name and Author */}
              <View
                style={{}}
              >
                <Text style={{ paddingRight: SIZES.padding2 * 2, color: COLORS.white, ...FONTS.h2 }}>{item.bookName}</Text>
                <Text style={{ color: COLORS.lightGray, ...FONTS.h3 }}>{item.author}</Text>
              </View>
              {/* Book Info */}
              <View
                style={{ flexDirection: "row", marginTop: SIZES.padding2 }}
              >
                <Image
                  source={icons.page_filled_icon}
                  resizeMode='contain'
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.lightGray,
                  }}
                />
                <Text style={{ color: COLORS.lightGray, ...FONTS.body4, paddingHorizontal: SIZES.padding2 }}>{item.pageNo}</Text>

                <Image
                  source={icons.read_icon}
                  resizeMode='contain'
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.lightGray,
                  }}
                />
                <Text style={{ color: COLORS.lightGray, ...FONTS.body4, paddingHorizontal: SIZES.padding2 }}>{item.readed}</Text>
              </View>
              {/* Genre */}
              <View
                style={{ flexDirection: "row", marginTop: SIZES.base }}
              >
                {
                  item.genre.includes("Adventure") &&
                  <View
                    style={{
                      height: 40,
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: COLORS.darkGreen,
                      borderRadius: SIZES.radius * .5,
                    }}
                  >
                    <Text style={{ ...FONTS.body3, color: COLORS.lightGreen }}>Adventure</Text>
                  </View>
                }
                {
                  item.genre.includes("Romance") &&
                  <View
                    style={{
                      height: 40,
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: COLORS.darkRed,
                      borderRadius: SIZES.radius * .4,
                    }}
                  >
                    <Text style={{ ...FONTS.body3, color: COLORS.lightRed }}>Romance</Text>
                  </View>
                }
                {
                  item.genre.includes("Drama") &&
                  <View
                    style={{
                      height: 40,
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: COLORS.darkBlue,
                      borderRadius: SIZES.radius * .5,
                    }}
                  >
                    <Text style={{ ...FONTS.body3, color: COLORS.lightBlue }}>Drama</Text>
                  </View>
                }

              </View>
            </View>
          </TouchableOpacity>
          {/* Bookmark Icon */}

          <TouchableOpacity
            style={{ position: "absolute", top: 5, right: 15 }}
            onPress={console.warn("bookmark")}
          >
            <Image
              source={icons.bookmark_icon}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.lightGray,
              }}
            />

          </TouchableOpacity>
        </View>
      )
    }
    return (
      <View
        style={{ flex: 1, marginTop: SIZES.padding2, paddingLeft: SIZES.padding * 2 }}
      >
        <FlatList
          data={books}
          renderItem={renderData}
          keyExtractor={item => `${item.id}`}
          showsVerticalScrollIndicator={false}
        />
      </View>
    )
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      {/* Header Section */}
      <View
        style={{ height: 200 }}
      >
        {renderHeader()}
        {renderButtons()}
      </View>
      {/* Body Section */}
      <ScrollView
        style={{ marginTop: SIZES.padding2 }}
      >
        {/* Books Section */}
        <View>
          {renderMyBooks()}
        </View>

        {/* Category Section */}
        <View
          style={{ marginTop: SIZES.padding * 2 }}
        >
          {/* Category Header */}
          <View>
            {renderCategoryHeader()}
          </View>
          <View>
            {renderCategoryData()}
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
