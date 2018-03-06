import React, { Component } from 'react';
import { AsyncStorage, Platform, View, ScrollView, Text, StatusBar, Dimensions, SafeAreaView, FlatList, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';

import LinearGradient from 'react-native-linear-gradient';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import SliderEntry from '../components/SliderEntry';
import SettingsPanel from '../containers/SettingsPanel';
import { sliderWidth, itemWidth } from '../styles/SliderEntry.style';
import styles, { colors } from '../styles/index.style';
import { scrollInterpolators, animatedStyles } from '../utils/animations';

const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;
const { width, height } = Dimensions.get('window');

class Home extends Component {
	state = {
		slider1ActiveSlide: SLIDER_1_FIRST_ITEM
	};

	componentWillReceiveProps(nextProps) {
		!this.props.settings.isArabic && nextProps.settings.isArabic ? this.booksList.scrollToEnd() : null;
		!this.props.settings.isArabic && nextProps.settings.isArabic ? this.moviesList.scrollToEnd() : null;
	}

	static navigationOptions = ({ navigation, screenProps }) => ({
		header: 
			<TouchableOpacity activeOpacity={ 1 } onPress={ screenProps.cancelSettingsVisibility } style={{ overflow: 'visible' }}>
				<View style={{ flexDirection: 'row', maxHeight: 70, paddingTop: 24, paddingBottom: 24, backgroundColor: colors.grey }}>
					<Text style={{ color: "white", fontSize: 24, alignSelf: 'flex-start', paddingLeft: 10, flex: 1 }}>Q Shoow</Text>
					<View style={{ alignSelf: 'flex-end' }}>
						<SettingsPanel screenProps={ screenProps } navigation={ navigation }/>
					</View>
				</View>
			</TouchableOpacity>,
    });

	renderItem = ({item, index}) => {
		let media_specific_index = item.type == 'movie' ? this.props.movies.indexOf(item) : this.props.books.indexOf(item);
		return	<SliderEntry
							navigation={ this.props.navigation } 
							data={ item } 
							even={(index + 1) % 2 === 0} 
							index={ media_specific_index }
						/>;
	}
	
	customAnimation = (refNumber) => {
		let POPULAR = this.props.movies.concat(this.props.books);
		// Do not render examples on Android; because of the zIndex bug, they won't work as is
		return (
				<View style={[styles.exampleContainer]} onPress={ this.props.screenProps.cancelSettingsVisibility }>
						<Text style={ styles.title }>{ !this.props.settings.isArabic ? 'Popular' : 'جمع' }</Text>
						<Carousel
							loop={ true }
							data={ POPULAR }
							renderItem={ this.renderItem }
							sliderWidth={sliderWidth}
							itemWidth={itemWidth}
							containerCustomStyle={styles.slider}
							contentContainerCustomStyle={styles.sliderContentContainer}
							scrollInterpolator={scrollInterpolators[`scrollInterpolator${refNumber}`]}
							slideInterpolatedStyle={animatedStyles[`animatedStyles${refNumber}`]}
							useScrollView={true}
						/>
				</View>
		);
	}

	render() {
		const example6 = this.customAnimation(2);
		return (
			<SafeAreaView style={styles.safeArea} onPress={ this.props.screenProps.cancelSettingsVisibility }>
				<LinearGradient
						onPress={ this.props.screenProps.cancelSettingsVisibility }
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
							onPress={ this.props.screenProps.cancelSettingsVisibility }
							style={ styles.scrollview }
							scrollEventThrottle={ 200 }
							directionalLockEnabled={ true }
						>
							{ example6 }
							<View style={{ marginBottom: 40 }}>
							{/* 'دي في دي' 'أكثرمن' */}
							{ !this.props.settings.isArabic ? 
										<View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20, borderBottomColor: 'white', borderBottomWidth: 2 }}>
											<Text style={{ textAlign: !this.props.settings.isArabic ? 'left' : 'right', color: 'white', fontSize: 18, padding: 10 }}>
												{ 'Movies' }
											</Text>
											<Text
												onPress={ () => { this.props.navigation.navigate('media_grid', { data: this.props.books }) }}  
												style={{ textAlign: !this.props.settings.isArabic ? 'right' : 'left', padding: 10, color: 'white', fontSize: 14 }}>
												{ 'More' }
											</Text>
										</View>
											:
										<View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20, borderBottomColor: 'white', borderBottomWidth: 2 }}>
											<Text 
												onPress={ () => { this.props.navigation.navigate('media_grid', { data: this.props.books }) }}
												style={{ textAlign: !this.props.settings.isArabic ? 'right' : 'left', padding: 10, color: 'white', fontSize: 14 }}
											>
												{ 'أكثرمن' }
											</Text>
											<Text
												style={{ textAlign: !this.props.settings.isArabic ? 'left' : 'right', color: 'white', fontSize: 18, padding: 10 }}
											>
												{ 'دي في دي' }
											</Text>
										</View>
								}
								<FlatList
									data={ this.props.movies }
									ref={ element => this.moviesList = element }
									horizontal={ true }
									extraData={ this.props }
									keyExtractor={ item => item.title }
									showsHorizontalScrollIndicator={false}
									renderItem={ (entry) => {
										let { item, index } = entry;
										return (
											<TouchableOpacity 
												onPress={ () => { this.props.screenProps.cancelSettingsVisibility(); this.props.navigation.navigate('movie_detail', { index }) }}
												style={{ marginLeft: 30, marginRight: 30, marginTop: 20 }}
											>
												<Image source={ item.illustration } style={{ width: 150, height: 150, marginBottom: 10 }} />
												<Text style={{ fontSize: 14, color: colors.golden, textAlign: 'center' }}>
												{ !this.props.settings.isArabic ? item.title : item.titleArabic }
												</Text>
												<Text style={{ fontSize: 14, color: colors.dullWhite, textAlign: 'center' }}>
													{ this.props.movies[index].available ? 'Free' : `$${item.price}` }
												</Text>
											</TouchableOpacity>
										);
									}}
								/>
							</View>
							{/* 'كتب' 'أكثرمن'*/}
							<View style={{ marginBottom: 40 }} onPress={ this.props.screenProps.cancelSettingsVisibility }>
								{ !this.props.settings.isArabic ? 
										<View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20, borderBottomColor: 'white', borderBottomWidth: 2 }}>
											<Text style={{ textAlign: !this.props.settings.isArabic ? 'left' : 'right', color: 'white', fontSize: 18, padding: 10 }}>
												{ 'Books' }
											</Text>
											<Text 
												onPress={ () => { this.props.navigation.navigate('media_grid', { data: this.props.movies }) }}
												style={{ textAlign: !this.props.settings.isArabic ? 'right' : 'left', padding: 10, color: 'white', fontSize: 14 }}
											>
												{ 'More' }
											</Text>
										</View>
											:
										<View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20, borderBottomColor: 'white', borderBottomWidth: 2 }}>
											<Text 
												onPress={ () => { this.props.navigation.navigate('media_grid', { data: this.props.movies }) }}
												style={{ textAlign: !this.props.settings.isArabic ? 'right' : 'left', padding: 10, color: 'white', fontSize: 14 }}>
												{ 'أكثرمن' }
											</Text>
											<Text 
												style={{ textAlign: !this.props.settings.isArabic ? 'left' : 'right', color: 'white', fontSize: 18, padding: 10 }}
											>
												{ 'كتب' }
											</Text>
										</View>
								}
								<FlatList
									ref={ element => this.booksList = element }
									// inverted={ this.props.settings.isArabic ? true : false }
									data={ this.props.books }
									horizontal={ true }
									extraData={ this.props }
									keyExtractor={ item => item.title }
									showsHorizontalScrollIndicator={ false }
									renderItem={ (entry) => {
										let { item, index } = entry;
										return (
											<TouchableOpacity 
												onPress={ () => { this.props.screenProps.cancelSettingsVisibility(); this.props.navigation.navigate('book_detail', { index }) }}
												style={{ marginLeft: 30, marginRight: 30, marginTop: 20 }}
											>
												<Image source={ item.illustration } style={{ width: 150, height: 150, marginBottom: 10 }} />
												<Text style={{ fontSize: 14, color: colors.golden, textAlign: 'center' }}>
													{ !this.props.settings.isArabic ? item.title : item.titleArabic }
												</Text>
												<Text style={{ fontSize: 14, color: colors.dullWhite, textAlign: 'center' }}>
													{ this.props.books[index].available ? 'Free' : `$${item.price}` }
												</Text>
											</TouchableOpacity>
										);
									}}
								/>
							</View>
						</ScrollView>
					</View>
				</LinearGradient>
			</SafeAreaView>
		);
	}
}

function mapStateToProps(state) {
	return {
		settings: state.settings,
		movies: state.movies,
		books: state.books
	};
}

export default connect(mapStateToProps, null)(Home);