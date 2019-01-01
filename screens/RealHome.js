import React, { Component } from "react";
import {
    StyleSheet,
    WebView ,
    View,
} from "react-native";
import { Container, Spinner, Button, Text,Content, Header, Card, CardItem, Row} from 'native-base';
import {createDrawerNavigator,DrawerItems, SafeAreaView,createStackNavigator,NavigationActions } from 'react-navigation';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

export default class RealHome extends Component {
    constructor(props){
        super(props);
        this.state = {
            renderCoponentFlag: false,
            alreadyClicked:"0",
            savedClicked:"0",
        }
    }
    componentDidMount() {
        setTimeout(() => {this.setState({renderCoponentFlag: true})}, 0);
    }
    startSending = () =>{
        var totalSendSuccessCount = 0 ;
        var alreadyClicked = 0;
        var savedClicked = 0;
        This = this;
        var submitID = [
        
            "RDQ4Mjkz",//ritika
            "RDU4OTUx",//mom
            "RDI3MDg4",//me
          ];
        var addClickedID = [
          {addID:"AdsId=Y2EtYXBwLXB1Yi0zOTk1OTYwNjc0NzEwOTkyLzcyMTczNDM3MjQ= &",addNO:"1"},
          {addID:"AdsId=Y2EtYXBwLXB1Yi0zOTk1OTYwNjc0NzEwOTkyLzU1NDkwMzg4MzY= &",addNO:"2"},
          {addID:"AdsId=Y2EtYXBwLXB1Yi0zOTk1OTYwNjc0NzEwOTkyLzk0NTUzOTMyMDU= &",addNO:"3"},
          {addID:"AdsId=Y2EtYXBwLXB1Yi0zOTk1OTYwNjc0NzEwOTkyLzYxODUxNDc4Njk= &",addNO:"4"},
          {addID:"AdsId=Y2EtYXBwLXB1Yi0zOTk1OTYwNjc0NzEwOTkyLzUyMDU4NDg5MzA= &",addNO:"5"},
          {addID:"AdsId=Y2EtYXBwLXB1Yi0zOTk1OTYwNjc0NzEwOTkyLzgzMTg2NzI0MDI= &",addNO:"6"},
          {addID:"AdsId=Y2EtYXBwLXB1Yi0zOTk1OTYwNjc0NzEwOTkyLzkwODEwODk3Mzg= &",addNO:"7"},
          {addID:"AdsId=Y2EtYXBwLXB1Yi0zOTk1OTYwNjc0NzEwOTkyLzU0MTExMjIyNDM= &",addNO:"8"},
          {addID:"AdsId=Y2EtYXBwLXB1Yi0zOTk1OTYwNjc0NzEwOTkyLzYyNjMzNTQ3MDg= &",addNO:"9"},
          {addID:"AdsId=Y2EtYXBwLXB1Yi0zOTk1OTYwNjc0NzEwOTkyLzM4NTA2Mjg1NjI= &",addNO:"10"},
    
          {addID:"AdsId=Y2EtYXBwLXB1Yi01OTc4NTg5ODg2NTI3NjU2LzI1OTg2MDg2ODI= &",addNO:"11"},
          {addID:"AdsId=Y2EtYXBwLXB1Yi01OTc4NTg5ODg2NTI3NjU2Lzk1Nzg5NTAwMDY= &",addNO:"12"},
          {addID:"AdsId=Y2EtYXBwLXB1Yi01OTc4NTg5ODg2NTI3NjU2LzM5NjQ2MDMxOTY= &",addNO:"13"},
          {addID:"AdsId=Y2EtYXBwLXB1Yi01OTc4NTg5ODg2NTI3NjU2LzYyMzU1NDMzMTc= &",addNO:"14"},
          {addID:"AdsId=Y2EtYXBwLXB1Yi01OTc4NTg5ODg2NTI3NjU2LzU4NTYyNjkzNjE= &",addNO:"15"},
          {addID:"AdsId=Y2EtYXBwLXB1Yi01OTc4NTg5ODg2NTI3NjU2LzM4MzE3OTkzMDI= &",addNO:"16"},
          {addID:"AdsId=Y2EtYXBwLXB1Yi01OTc4NTg5ODg2NTI3NjU2LzY4ODAwODU3MzQ= &",addNO:"17"},
          {addID:"AdsId=Y2EtYXBwLXB1Yi01OTc4NTg5ODg2NTI3NjU2LzE2NTU2NzkyMTU= &",addNO:"18"},
          {addID:"AdsId=Y2EtYXBwLXB1Yi01OTc4NTg5ODg2NTI3NjU2LzUzNjUzMTQ3NzU= &",addNO:"19"},
          {addID:"AdsId=Y2EtYXBwLXB1Yi01OTc4NTg5ODg2NTI3NjU2LzEyNTg5NTI0MTg= &",addNO:"20"},
        ];
        for(var i = 0 ; i<2 ; i ++){
            submitID.forEach(function(userID){
                addClickedID.forEach(function(addID){
    
                    var data = addID.addID;
                    var xhr = new XMLHttpRequest();
                    xhr.withCredentials = true;
                    xhr.addEventListener("readystatechange", function () {
                        if (this.readyState === 4) { 
                            totalSendSuccessCount+=1;
                            if(this.responseText.includes("already"))
                                    alreadyClicked+=1;
                            if(this.responseText.includes("Saved"))
                                    savedClicked+=1;
                            This.setState({
                                alreadyClicked:alreadyClicked,
                                savedClicked:savedClicked,
                            });
                            // console.log(this.responseText,"-----------------:"+totalSendSuccessCount+" alredy:"+alreadyClicked+" saved:"+savedClicked);
                        }
                    });
                    xhr.open("POST", "https://www.dreamindiadream.com/AndroidApp_Handler/Save-Promotional-Task.ashx?Account-ID="+userID);
                    // xhr.onerror = function () {  return(0);   };
                    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                    xhr.send(data);
                  }); 
            })
                
        }
        

    }

    doIpStuff = () =>{
        var arrIP = [
          {data:"ImeiNo=354175089718334&txtLoginip=fe80::26f:64ff:fefa:9498%wlan0&txtRegion=&txtCountry=&txtCity=&",link:"https://www.dreamindiadream.com/AndroidApp_Handler/IpdetailsSave.ashx?Account-ID=RDI3MDg4"},
          {data:"ImeiNo=358265012769474&txtLoginip=fe80::6f:64ff:fefa:9498%p2p0&txtRegion=&txtCountry=&txtCity=&",link:"https://www.dreamindiadream.com/AndroidApp_Handler/IpdetailsSave.ashx?Account-ID=RDQ4Mjkz"},
          {data:"ImeiNo=358265017789550&txtLoginip=fe80::6f:64ff:fefa:9498%p2p0&txtRegion=&txtCountry=&txtCity=&",link:"https://www.dreamindiadream.com/AndroidApp_Handler/IpdetailsSave.ashx?Account-ID=RDU4OTUx"},
    
          {data:"UnitTyp=Interstitial&",link:"https://www.dreamindiadream.com/AndroidApp_Handler/Get-Ads-Unit-Id.ashx?Account-ID=RDI3MDg4"},
          {data:"UnitTyp=Interstitial&",link:"https://www.dreamindiadream.com/AndroidApp_Handler/Get-Ads-Unit-Id.ashx?Account-ID=RDQ4Mjkz"},
          {data:"UnitTyp=Interstitial&",link:"https://www.dreamindiadream.com/AndroidApp_Handler/Get-Ads-Unit-Id.ashx?Account-ID=RDU4OTUx"},
    
          {data:"IMEINo=354175089718334&AdsType=Interstitial&IPAddr=fe80::26f:64ff:fefa:9498%wlan0&",link:"https://www.dreamindiadream.com/AndroidApp_Handler/SaveTodayAdsTask.ashx?Account-ID=RDI3MDg4"},
          {data:"IMEINo=358265012769474&AdsType=Interstitial&IPAddr=fe80::6f:64ff:fefa:9498%p2p0&",link:"https://www.dreamindiadream.com/AndroidApp_Handler/SaveTodayAdsTask.ashx?Account-ID=RDQ4Mjkz"},
          {data:"IMEINo=358265017789550&AdsType=Interstitial&IPAddr=fe80::6f:64ff:fefa:9498%p2p0&",link:"https://www.dreamindiadream.com/AndroidApp_Handler/SaveTodayAdsTask.ashx?Account-ID=RDU4OTUx"},
    
          {data:"Appversion=26&",link:"https://www.dreamindiadream.com/AndroidApp_Handler/MemAppVersionCheck.ashx?Account-ID=D27088"},
          {data:"Appversion=26&",link:"https://www.dreamindiadream.com/AndroidApp_Handler/MemAppVersionCheck.ashx?Account-ID=D48293"},
          {data:"Appversion=26&",link:"https://www.dreamindiadream.com/AndroidApp_Handler/MemAppVersionCheck.ashx?Account-ID=D58951"},
        ];
        var This = this;    
        arrIP.forEach(function(data){
          This.doXMLHTTP(data.link,data.data);      
        });
    }
    doXMLHTTP = (link,data) =>{
        var data = data;
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {  console.log("doing ip stuff");  }
        });
        xhr.open("POST", link);
        xhr.onerror = function () {};
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(data);
    }
    render() {
        const {renderCoponentFlag} = this.state;
        if(renderCoponentFlag){
            return(
                <Container>
                        <Button bordered dark onPress={() => {
                            this.doIpStuff();
                            this.startSending();
                        }}>
                            <Text>Start</Text>
                        </Button>
                        <Card>
                            <CardItem>
                                <Text style={{fontSize:25,fontWeight:'800'}}>This Round Clicked:{this.state.savedClicked}</Text>
                            </CardItem>
                            <CardItem>
                                <Text style={{fontSize:25,fontWeight:'800'}} >Already Clicked:{this.state.alreadyClicked}</Text>
                            </CardItem>
                            
                        </Card>
                        <WebView
                            source={{uri: 'https://mycuteiii.blogspot.com/'}}
                            style={{marginTop: 20}}
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