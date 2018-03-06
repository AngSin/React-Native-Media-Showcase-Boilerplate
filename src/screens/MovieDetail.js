import React, { Component } from 'react';
import { TouchableOpacity, View, Image, ScrollView, Text, FlatList, Dimensions, Alert } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { buyVideo } from '../actions/movies_actions';
import styles, { colors } from '../styles/index.style';
import Video from 'react-native-video';

const { width, height } = Dimensions.get('window')

class MovieDetail extends Component {
  state = {
    paused: false
  };

  render() {
    let { index } = this.props.navigation.state.params;
    let item = this.props.movies[index];
    // console.log(item);
    return (
      <ScrollView style={ styles.safeArea }>
        <Video 
          source={{ uri: item.promo }} 
          ref={(ref) => {
            player = ref
          }}                                      // Store reference
          rate={1.0}                              // 0 is paused, 1 is normal.
          volume={1.0}                            // 0 is muted, 1 is normal.
          muted={false}                           // Mutes the audio entirely.
          paused={ this.state.paused }                          // Pauses playback entirely.
          resizeMode="cover"                      // Fill the whole screen at aspect ratio.*
          repeat={true}                           // Repeat forever.
          presentFullscreenPlayer={ true }
          controls={ true }
          playInBackground={false}                // Audio continues to play when app entering background.
          playWhenInactive={false}                // [iOS] Video continues to play when control or notification center are shown.
          ignoreSilentSwitch={"ignore"}           // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
          onEnd={this.onEnd}                      // Callback when playback finishes
          onError={ () => Alert.alert('Please check your internet connection!') }               // Callback when video cannot be loaded
          onBuffer={this.onBuffer}                // Callback when remote video is buffering
          onTimedMetadata={this.onTimedMetadata}  // Callback when the stream receive some metadata
          style={{ width, height: 300 }} 
        />
        <View>
          <Text style={{ color: colors.golden, fontSize: 20, textAlign: 'center', padding: 10 }}>
            { item.title }
          </Text>
          <Text style={{ color: colors.dullWhite, fontSize: 14, marginRight: 10, marginLeft: 10, textAlign: 'right' }}>
            { item.description }
          </Text>
          <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-end', paddingTop: 30 }}>
            <Text style={{ fontSize: 14, color: colors.dullWhite, marginLeft: 'auto', marginRight: 10, textAlign: 'right' }}>{ item.info }</Text>
            <Image source={ item.illustration } style={{ width: 150, height: 150 }}/>
          </View>
            {
              item.available ? 
                <View style={{ height: item.episodes.length * 100 }}>
                  <FlatList
                    data={ item.episodes }
                    extraData={ this.props}
                    keyExtractor={ video => video }
                    renderItem={ video =>
                      <TouchableOpacity 
                        onPress={ () => { 
                          this.setState({ paused: true }); 
                          this.props.navigation.navigate('movie_episode', { link: video.item }) 
                        }}
                        style={{ flex: 1, flexDirection: 'row', height: 100, justifyContent: 'space-between', borderColor: colors.lightBlue, 
                        borderWidth: 1 }}
                      >
                        <Image source={ item.illustration } style={{ alignSelf: 'flex-start', width: 98, height: 98 }}/>
                        <Text style={{ paddingRight: 40, alignSelf: 'center', fontSize: 18, color: colors.lightBlue }}>
                          { `Episode ${video.index + 1}` }
                        </Text>
                      </TouchableOpacity>
                    }
                  />
                </View>
                  :
                <TouchableOpacity 
                  style={{ alignSelf: 'center', padding: 10, paddingRight: 20, paddingLeft: 20, borderRadius: 10, 
                  backgroundColor: colors.dullMaroon }} 
                  onPress={ () => { this.props.buyVideo(index) }}
                >
                  <Text style={{ color: 'white', fontSize: 18 }}>{ !this.props.settings.isArabic ? 'Buy' : 'يشترى' }</Text>
                </TouchableOpacity>
            }
        </View>
      </ScrollView>
    );
  }
}
function mapStateToProps(state) {
  return {
    settings: state.settings,
    movies: state.movies
  };
}

function dispatchActionToProps(dispatch) {
  return bindActionCreators({ buyVideo }, dispatch);
}

export default connect(mapStateToProps, dispatchActionToProps) (MovieDetail);