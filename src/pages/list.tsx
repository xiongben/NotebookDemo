import * as React from 'react';


import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    Button,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Stack} from './../router/router'
import OrderItem from "../component/orderItem";
import Menu from "../component/menu";
import {useState} from "react";


function ListPage({navigation}:any) {
    const [itemDataArr,setItemDataArr] = useState([1,2,3,4,5,6,7,8,9,10,11,12])

  return(
      <SafeAreaView>
          <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={styles.scrollView}>
              <Menu nav={navigation}/>
              {itemDataArr.map((item,index)=>{
                  return(
                      <OrderItem data={item} key={index}/>
                  )
              })}
          </ScrollView>

      </SafeAreaView>
  )
}

function ListScreen() {
    return (
        <Stack.Navigator >
            <Stack.Screen
                name="Home"
                component={ListPage}
                options={{
                    title: 'My home',
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerRight: () => (
                        <Button
                            onPress={() => console.log('This is a button!')}
                            title="Info"
                            color="#00cc00"
                        />),
                }}
            />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'pink',
        width: '100%',
        height: '100%',
    },



});


export default ListScreen
