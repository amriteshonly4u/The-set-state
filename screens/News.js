import React, { Component } from "react";
import {
    StyleSheet,
    WebView ,
    View,
} from "react-native";
import { Container, Spinner, Button, Text,Content} from 'native-base';
import {createDrawerNavigator,DrawerItems, SafeAreaView,createStackNavigator,NavigationActions } from 'react-navigation';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

export default class NewsScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            renderCoponentFlag: false,
        }
    }
    componentDidMount() {
        setTimeout(() => {this.setState({renderCoponentFlag: true})}, 0);
    }

    render() {
        const {renderCoponentFlag} = this.state;
        if(renderCoponentFlag){
            return(
                <Container>
                    <WebView
                        source={{uri: 'https://mycuteiii.blogspot.com/'}}
                        style={{marginTop: 20}}
                        onLoad={alert("Check The Post Whats New For you!!!")}                        
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