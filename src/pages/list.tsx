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



import {Stack} from './../router/router'
import OrderItem from "../component/orderItem";
import Menu from "../component/menu";
import {useState, useContext, useEffect} from "react";
import {NoteContext,UPDATE_COLOR} from './../reduxComponent/list';


function ListPage({navigation}:any) {
    const [itemDataArr,setItemDataArr] = useState([1,2,3,4,5])
    let {state}:any = useContext(NoteContext);
    console.log("=======list========")
    console.log(state.noteList)

    useEffect(()=>{

    },[])

      return(
          <SafeAreaView>
              <ScrollView
                  contentInsetAdjustmentBehavior="automatic"
                  style={styles.scrollView}>
                  <Menu nav={navigation}/>

                  {(state.noteList as Array<object>).map((item,index)=>{
                      return(
                          <OrderItem data={item} key={index} />
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
