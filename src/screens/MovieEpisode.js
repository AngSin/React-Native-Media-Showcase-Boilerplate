import React from 'react';
import { View, Image, Text, Dimensions } from 'react-native';
import Video from 'react-native-video';
import styles, { colors } from '../styles/index.style';

const { width, height } = Dimensions.get('window');

export default MovieEpisode = (props) => {
  return (
    <View style={ styles.safeArea }>
      <Video
        source={{ uri: props.navigation.state.params.link }} 
        ref={(ref) => {
          player = ref
        }}                                      // Store reference
        rate={1.0}                              // 0 is paused, 1 is normal.
        volume={1.0}                            // 0 is muted, 1 is normal.
        muted={false}                           // Mutes the audio entirely.
        paused={ false }                          // Pauses playback entirely.
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
        style={{ width, height: height - 200 }} 
      />
    </View>
  );
}