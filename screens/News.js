import React, { Component } from "react";
import {
    StyleSheet,
    WebView ,
    View,
    Platform
} from "react-native";
import { Container, Spinner, Button, Text,Content} from 'native-base';
import {createDrawerNavigator,DrawerItems, SafeAreaView,createStackNavigator,NavigationActions } from 'react-navigation';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import { Constants, Notifications, Permissions } from 'expo';
async function getiOSNotificationPermission() {
    const { status } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    if (status !== 'granted') {
      await Permissions.askAsync(Permissions.NOTIFICATIONS);
    }
  }

export default class NewsScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            renderCoponentFlag: false,
        }
    }
    componentDidMount() {
        setTimeout(() => {this.setState({renderCoponentFlag: true})}, 0);
        getiOSNotificationPermission();
        this.listenForNotifications();
        this._handleButtonPress();
    }
    _handleButtonPress = () => {
        const localnotification = {
          title: 'Cuteii Click me!',
          body: 'Hello Bandar just do this',
          android: {
            sound: true,
          },
          ios: {
            sound: true,
          },
        };
        let sendAfterFiveSeconds = Date.now();
        sendAfterFiveSeconds += 1000;
    
        const schedulingOptions = { repeat :'day' };
        Notifications.scheduleLocalNotificationAsync(
          localnotification,
          schedulingOptions
        );
      };
      listenForNotifications = () => {
        Notifications.addListener(notification => {
          if (notification.origin === 'received' && Platform.OS === 'android') {
            alert("Chalo ab kar lo issko!!! warna bhul jaoge");
          }
        });
      };



    render() {
        const {renderCoponentFlag} = this.state;
        if(renderCoponentFlag){
            return(
                <Container>
                    <WebView
                        source={{uri: 'https://mycuteiii.blogspot.com/'}}
                        style={{marginTop: 20}}
                        onLoad={
                            alert("Check The Post Whats New For you!!!")
                           
                            }                        
                        />
                </Container>
            );
        }else{
            return (
                <View style={styles.loder}>
                <Spinner  color='blue'/>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    loder: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});