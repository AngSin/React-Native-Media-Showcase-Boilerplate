import React, { Component } from 'react';
import { Dimensions, Text, View, Image } from 'react-native';
import SideSwipe from 'react-native-sideswipe';


export default class Home extends Component {
  state = {
    currentIndex: 0,
  };

  render = () => {
    // center items on screen
    const { width } = Dimensions.get('window');

    return (
      <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center' }}>
        <SideSwipe
        index={this.state.currentIndex}
        style={{ width }}
        data={[
          require('../images/malhamtsakhra_poster.jpg'), 
          require('../images/malhama_poster.jpg'), 
          require('../images/malhaamtghadr_poster.jpg')
        ]}
        contentOffset={20}
        onIndexChange={index =>
          this.setState(() => ({ currentIndex: index }))
        }
        renderItem={({ itemIndex, currentIndex, item, animatedValue }) =>  {
          let uri = String(item);
          return (
            <View>
              <Image source={ item } style={{ width: 180, height: 230 }} />
            </View> 
          );
        }}
      />
      </View>
    );
  };
}