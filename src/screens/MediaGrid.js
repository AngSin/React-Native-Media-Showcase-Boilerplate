import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import styles, { colors } from '../styles/index.style';
import LinearGradient from 'react-native-linear-gradient';

MediaGrid = (props) => {
  return (
    <SafeAreaView style={styles.safeArea}>
					<LinearGradient
							colors={[colors.background1, colors.background2]}
							startPoint={{ x: 1, y: 0 }}
							endPoint={{ x: 0, y: 1 }}
							style={styles.gradient}
					>
						<View style={styles.container}>
							<StatusBar
								translucent={true}
								backgroundColor={'rgba(0, 0, 0, 0.3)'}
								barStyle={'light-content'}
							/>
							<ScrollView
								style={ styles.scrollview }
								scrollEventThrottle={ 200 }
								directionalLockEnabled={ true }
							>
								{  props.navigation.state.params.data.map((item, index) => {
                  return (
                    <TouchableOpacity 
                      key={ item.title } 
                      style={{ alignSelf: index % 2 == 0 ? 'flex-start' : 'flex-end',
                        padding: 10,
                        marginBottom: index % 2 == 0 ? index == (props.navigation.state.params.data.length - 1) ? 0 : -184 : 0 }}
                      onPress={() => {
                        item.type == 'movie' ? 
                            props.navigation.navigate('movie_detail', { index })
                                :
                            props.navigation.navigate('book_detail', { index });
                      }}
                    >
                      <Image source={ item.illustration } style={{ width: 150, height: 150, borderRadius: 5 }}/>
                      <Text style={{ textAlign: 'center', color: 'white', fontSize: 14 }}>{ props.settings.isArabic ? item.titleArabic : item.title }</Text>
                    </TouchableOpacity>
                  ) })
                }
							</ScrollView>
						</View>
					</LinearGradient>
				</SafeAreaView>
  );
}

function mapStateToProps(state) {
  return {
    settings: state.settings
  }
}

export default connect(mapStateToProps, null)(MediaGrid);
