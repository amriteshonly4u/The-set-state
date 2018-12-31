import React, { Component } from "react";
import {
  StyleSheet,
  ProgressBarAndroid ,
  View,
  ScrollView, 
} from "react-native";
import {  Header, List, ListItem, Left, Right, Thumbnail,Container, Spinner, Button, Text,Content, Card, CardItem, Row, StyleProvider} from 'native-base';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

let log = "";
let cout = 0 ;
export default class HomeScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      renderCoponentFlag: false,
      done1:"3",
      done2:"3",
      done3:"3",
      status:"ues",
      sentCount:0,
      receiveCount:0,
      showTheThing:false,
      textAreaText:"",
      ipDataSend:"12",
      ipDataReci:"0",
    }
  }
  componentDidMount() {
    setTimeout(() => {this.setState({renderCoponentFlag: true})}, 0);
  }
  

  doThis = (countPerson) =>{
    
    // var loginLink = "https://www.dreamindiadream.com/AndroidApp_Handler/Account-login.ashx";
    // var loginDataCuteiii = "txtPasswordSU=tubelight143&txtUserID=D27088&";
    // var loginDataMe = "txtPasswordSU=myangel143&txtUserID=D48293&";
    // var loginDataMom = "txtPasswordSU=Rag1234&txtUserID=D58951&";
    var submitAdd = "https://www.dreamindiadream.com/AndroidApp_Handler/Save-Promotional-Task.ashx?Account-ID=";
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
    var This = this;
    var i = 0 ;
    var j = 0 ;
    var userID = submitID[countPerson];
    //submitID.forEach(function(userID){
        addClickedID.forEach(function(addID){
          i+= 1;
          //console.log("executing 30/"+i);
          var sentCount = This.state.sentCount+1;
          var receiveCount = This.state.receiveCount+1;
          var text = This.state.textAreaText +"executing 120/"+i+"\n";
          log += text;
          console.log("id:"+userID+"---"+addID.addID+" ("+addID.addNO+") "+"-->executing 60/"+i);
          //now sending request 
          cout++;
          console.log("pure count:"+cout);
          // console.log()
          var data = addID.addID;
          var xhr = new XMLHttpRequest();
          xhr.withCredentials = true;
          
          xhr.addEventListener("readystatechange", function () {
            ////console.log("ready stae"+this.readyState);
            if (this.readyState === 4) {
              This.setState({
                textAreaText:<Text></Text>,
              })
              log += this.responseText+"\n";
              if(
                  this.responseText == '{"Success":false,"Message":"already clicked","detail":"20","aid":null}' ||
                  this.responseText.includes("true")
              ){
                console.log("Receving 60/"+(j+1));
                j+=1;
                console.log(this.responseText);
                if(j==20){
                  
                  if(countPerson+1 == 1){
                    This.setState({
                      done1:"1"
                    });
                  }
                  if(countPerson+1 == 2){
                    This.setState({
                      done2:"1"
                    });
                  }
                  if(countPerson+1 == 3){
                    This.setState({
                      done3:"1"
                    });
                  }
                  //console.log("Person done "+(countPerson+1));
                  //console.log(countPerson<3);
                  This.setState({
                    receiveCount:This.state.receiveCount+20,
                  });
                  //now call request for 2nd person
                  if(countPerson<2)
                    This.doThis(countPerson+1);
                  else
                    alert("Task Complete");
                }
              }
            }
          });
          
          xhr.open("POST", "https://www.dreamindiadream.com/AndroidApp_Handler/Save-Promotional-Task.ashx?Account-ID="+userID);
          xhr.onerror = function () {
            console.log("** An error occurred during the transaction");
            if(countPerson+1 == 1){
              This.setState({
                done1:"2",
              });
            }
            if(countPerson+1 == 1){
              This.setState({
                done2:"2"
              });
            }
            if(countPerson+1 == 1){
              This.setState({
                done3:"2"
              });
            }
            
          };
          xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
          xhr.send(data);
          
          //console.log("resulet :"+This.state.sentCount+":"+sentCount+ "::"+This.state.receiveCount+"::"+receiveCount);
          
        });  
    //});
    This.setState({
      sentCount:This.state.sentCount+20,
    })

  }
  callAfterOneSec = () =>{
    setInterval(() => {this.setState({textAreaText: log})}, 3000);
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
      This.doXMLHTTP(data.link,data.data,This);      
    });
  }
  doXMLHTTP = (link,data,This) =>{
      var data = data;
      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.addEventListener("readystatechange", function () {
        ////console.log("ready stae"+this.readyState);
        if (this.readyState === 4) {
          //console.log("ip done");
          //console.log(this.responseText);
          This.setState({
            textAreaText:<Text>{}</Text>,
          })
          log += this.responseText+"\n";

          This.setState({
            ipDataReci:(parseInt(This.state.ipDataReci)+1),
          })
        }
      });

      xhr.open("POST", link);
      xhr.onerror = function () {
        //console.log("** An error occurred during the transaction");
      };
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.send(data);
  }
  render() {
  
    const {renderCoponentFlag} = this.state;

    if(renderCoponentFlag){
    

      return(
        <Container>
          <Content>
            <Card>
              <CardItem>
                  <Button bordered dark onPress={()=>{
                       this.setState({
                         showTheThing:true
                       }); 
                       if(this.state.showTheThing){
                         this.setState({
                          done1:"3",
                          done2:"3",
                          done3:"3",
                          status:"ues",
                          sentCount:0,
                          receiveCount:0,
                          showTheThing:false,
                          textAreaText:"",
                          ipDataSend:"12",
                          ipDataReci:"0",
                         })
                       }
                       log = "";
                       this.doIpStuff();
                       this.doThis(0)
                       this.callAfterOneSec();
                  }}>
                    <Text>Start</Text>
                  </Button>
                  <View style={styles.containerProgress}>
                    <ProgressBarAndroid
                      styleAttr="Horizontal"
                      indeterminate={false}
                      progress={(this.state.sentCount+this.state.receiveCount)/120}
                      color="#2196F3"
                    />
                    <View style={{flexDirection:"row",alignContent:"space-between"}}>
                        <Text style={{flex:1}}>{this.state.sentCount+this.state.receiveCount}/120</Text>
                        <Text style={{flex:1}}>{parseInt((this.state.sentCount+this.state.receiveCount)/120)*100} %</Text>
                        <Text style={{flex:1}}>{this.state.sentCount}</Text>
                        <Text style={{flex:1}}>{this.state.receiveCount}</Text>
                        <Text style={{flex:1}}>{this.state.ipDataReci}/{this.state.ipDataSend}</Text>
                    </View>


                  </View>
              </CardItem>
            </Card>
            
            <Card>
            <ListItem>
                <Left>
                  <Text>cutieee</Text>
                </Left>
                <Right>
                { 
                  this.state.showTheThing && 
                  <Status status={this.state.done1}/>
                } 
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <Text>Cuteiii</Text>
                </Left>
                <Right>
                { 
                  this.state.showTheThing && 
                  <Status status={this.state.done2}/>
                } 
                </Right>
              </ListItem>
              <ListItem>
                <Left>
                  <Text>mom</Text>
                </Left>
                <Right>
                { 
                  this.state.showTheThing && 
                  <Status status={this.state.done3}/>
                } 
                </Right>
              </ListItem>
            </Card>
            <Card>
                <CardItem>
                  <View style={{backgroundColor:'#000000'}}>
                    <Text style={{color:'#00fd00'}} >{this.state.textAreaText}</Text>                
                  </View>
                </CardItem>
            </Card>
          </Content>
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
class Status extends Component{
  constructor(props){
    super(props);
    //console.log(this.props.status);
    
    this.state = {
     
    }
  }
  render(){
    ////console.log("icon:"+this.props.status);
    if(this.props.status == "1"){
      return(
        <Icon name="check" style={{color:'#5fd64b', fontSize:30, fontWeight:800}}/>
      );
    }
    else if(this.props.status == "2"){
      return(
        <Icon name="wifi-strength-off" style={{color:'#f40101', fontSize:30, fontWeight:800}}/>
      );
    }else if(this.props.status == "3") {
      return(
        <Spinner color = "blue"/>
      );
    }else{
      return(
        <Icon name="alert" style={{color:'#f40101', fontSize:30, fontWeight:800}}/>        
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
  },
  containerProgress:{
    flex: 1,
    justifyContent: "space-evenly",
    padding: 10
  }
});