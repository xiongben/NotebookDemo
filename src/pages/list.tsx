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
import {useState, useContext, useEffect} from "react";
import {NoteContext,UPDATE_COLOR} from './../reduxComponent/list';


function ListPage({navigation}:any) {
    const [itemDataArr,setItemDataArr] = useState([1,2,3,4,5])
    let {state}:any = useContext(NoteContext);
    console.log(state)

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

// const ShowColor =(props:any)=>{
//     let colordata = useContext(NoteContext);
//     return (
//         <Text>color: {(colordata as any).color}</Text>
//     )
// }
//
// const ColorButtons = (props:any) =>{
//     const noteContext = useContext(NoteContext)
//     const dispatch = (noteContext as any).dispatch
//
//     function _pressfn(data:string){
//         console.log("====dianji=====")
//         dispatch({type:UPDATE_COLOR,color:data})
//     }
//     return (
//         <View>
//             <Button title="red color" onPress={()=>_pressfn("red")}></Button>
//             <Button title="blue color" onPress={()=>_pressfn("blue")}></Button>
//         </View>
//     )
// }

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'pink',
        width: '100%',
        height: '100%',
    },



});


export default ListScreen
