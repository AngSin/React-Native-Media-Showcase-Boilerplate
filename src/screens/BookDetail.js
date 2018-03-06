import React, { Component } from 'react';
import { TouchableOpacity, ScrollView, View, Image, Text, Dimensions, Button } from 'react-native';
import { connect } from 'react-redux';
import styles, { colors } from '../styles/index.style';
import { buyBook } from '../actions/books_actions';
import { bindActionCreators } from 'redux';

const { width, height } = Dimensions.get('window');

const MovieDetail = (props) => {
  let { index } = props.navigation.state.params;
  let item = props.books[index];
  let { pdf_link, illustration, full_pic, title, titleArabic } = item;
  return (
    <ScrollView style={ styles.safeArea }>
      <Image source={ full_pic } style={{ width, height: height - 120 }}/>
      { item.available ? 
        <View style={{ flex: 1, flexDirection: 'row', paddingTop: 20, paddingBottom: 40, justifyContent: "space-around" }}>
          <Text style={{ paddingTop: 10, alignSelf: 'flex-start', color: 'white', fontSize: 20 }}>
            { !props.settings.isArabic ? title : titleArabic }
          </Text>
          
              <TouchableOpacity 
                style={{ alignSelf: 'flex-end', padding: 10, paddingRight: 20, paddingLeft: 20, borderRadius: 10, 
                  backgroundColor: colors.dullMaroon }} 
                onPress={ () => { props.navigation.navigate('book_pdf', { pdf_link }) }}
              >
                <Text style={{ color: 'white', fontSize: 18 }}>{ !props.settings.isArabic ? 'View' : 'راقب' }</Text>
              </TouchableOpacity>
                
        </View>
          :
        <View style={{ flex: 1, flexDirection: 'row', paddingTop: 20, paddingBottom: 40, justifyContent: "space-around" }}>
          <TouchableOpacity 
            style={{ alignSelf: 'flex-end', padding: 10, paddingRight: 20, paddingLeft: 20, borderRadius: 10, 
              backgroundColor: colors.dullMaroon }} 
            onPress={ () => { props.buyBook(index) }}
          >
            <Text style={{ color: 'white', fontSize: 18 }}>{ !props.settings.isArabic ? 'Buy' : 'يشترى' }</Text>
          </TouchableOpacity>
        </View>   
        }
    </ScrollView>
  );
}

function mapStateToProps(state) {
  return {
    settings: state.settings,
    books: state.books
  }
}

function dispatchActionToProps(dispatch) {
  return bindActionCreators({ buyBook }, dispatch);
}

export default connect (mapStateToProps, dispatchActionToProps) (MovieDetail);