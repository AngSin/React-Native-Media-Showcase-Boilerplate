import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native'
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { setSettingsVisibility, toggleArabic } from  '../actions/settings_actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const SettingsPanel = (props) => {
	toggleSettings = () => {
		!props.settings.visibility && props.setSettingsVisibility(true);
		props.settings.visibility && props.setSettingsVisibility(false);
	}
	return (
		<TouchableOpacity style={{ alignSelf: 'flex-start' }} onPress={ toggleSettings }>
				{ props.settings.visibility ? 
					<View style={{ backgroundColor: 'white', padding: 10, alignSelf: 'flex-end', marginTop: 14 }}>
						<TouchableOpacity 
							onPress={ () => { props.screenProps.cancelSettingsVisibility(); props.toggleArabic(); }}
							style={{ borderBottomColor: 'rgb(180,180,180)', borderBottomWidth: 1, paddingBottom: 4, paddingLeft: 4 }}
						>
							<Text 
								style={{ fontSize: 20 }}
							>
								{ props.settings.isArabic ?	'English' : 'عربى' }
							</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={ () => { props.screenProps.cancelSettingsVisibility(); props.navigation.navigate('settings'); }} style={{ paddingTop: 4 }}>
							<Text style={{ fontSize: 20 }}>
								Settings
							</Text>
						</TouchableOpacity>
					</View> 
						: 
					<EntypoIcon 
						name={ 'dots-three-vertical' } 
						color={ 'white' } size={ 25 }
						style={{ alignSelf: 'flex-end' }}
					/>
				}
			</TouchableOpacity>
		);
}

function mapStateToProps(state) {
	return {
		settings: state.settings
	}
}

function dispatchActionToProps(dispatch) {
  return bindActionCreators({ setSettingsVisibility, toggleArabic }, dispatch);
}

export default connect (mapStateToProps, dispatchActionToProps)(SettingsPanel)