import React, { Component } from "react";
import {
  StyleSheet,
  WebView ,
  View,
} from "react-native";
import { Container, Spinner, Button, Text,Content} from 'native-base';
import {createDrawerNavigator,DrawerItems, SafeAreaView,createStackNavigator,NavigationActions } from 'react-navigation';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

let count1 = 0 ;

export default class navigationOptions extends Component {
  constructor(props){
    super(props);
    this.state = {
      renderCoponentFlag: false,
      javascript1:''+
          'document.getElementById("txtUserID").value = "D58951"; '+
          'document.getElementById("txtPasswordSU").value = "Rag1234";'+
          'document.getElementsByClassName("btn-block")[0].click();',
      javascript2:''+
          'document.getElementById("txtUserID").value = "D58951"; '+
          'document.getElementById("txtPasswordSU").value = "Rag1234";'+
          'document.getElementsByClassName("btn-block")[0].click();',
    }
  }
  componentDidMount() {
    setTimeout(() => {this.setState({renderCoponentFlag: true})}, 0);
  }
  onMessage(e)
  {
    // retrieve event data
    var data = e.nativeEvent.data;
    // maybe parse stringified JSON
    try {
      data = JSON.parse(data)
    } catch ( e ) {  }
    
    // check if this message concerns us
    if ( 'object' == typeof data && data.external_url_open ) {
      alert("lsdjksjksklfsljfl");
    }
  }
  stopJavascript(){
    count1+=1;
    console.log(this.state.javascript1);
    console.log(this.state.renderCoponentFlag);

      if(true){
        this.setState({
          javascript1:"abc",
      });
      console.log("time to stop");
    }
    console.log(this.state.javascript1);
    console.log(this.state.renderCoponentFlag);

    console.log(count1);
    

  }
  render() {
    //let jsCode = 'alert("JD")';
    const {renderCoponentFlag} = this.state;
    if(renderCoponentFlag){
      return(
        <Container>
            <Button bordered dark>
              <Text>{count1}/3</Text>
            </Button>
            <WebView
              source={{uri: 'https://www.dreamindiadream.com/login.html'}}
              style={{marginTop: 20}}
              injectedJavaScript={this.state.javascript1}
              onLoad={()=>{
                    count1+=1; 
                    if(count1>=3){
                      this.setState({javascript1:'alert("See");'})
                    } 
                  else{
                    this.setState({javascript1:'window.location = "https://www.dreamindiadream.com/s125R43aQ/Daily-Task-Details.html"; '})
                  }  
                }
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