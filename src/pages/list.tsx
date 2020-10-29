import * as React from 'react';


import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Button,
} from 'react-native';



import {Stack} from './../router/router'
import OrderItem from "../component/orderItem";
import Menu from "../component/menu";
import {useState, useContext, useEffect} from "react";
import {NoteContext} from './../reduxComponent/list';


function ListPage({navigation}:any) {
    let {state}:any = useContext(NoteContext);
    const [itemDataArr,setItemDataArr] = useState(state.noteList)
    // console.log("=======list========")
    // console.log(state.noteList)

    useEffect(()=>{
        setItemDataArr(state.noteList);
    },[state])


    function _filterNeedDoneItem() {
         let filterArr = itemDataArr.filter((item:any,index:number)=>{
             return item.status == 0;
         })
        setItemDataArr(filterArr);
    }

      return(
          <SafeAreaView>
              <ScrollView
                  contentInsetAdjustmentBehavior="automatic"
                  style={styles.scrollView}>
                  <Menu nav={navigation} filterfn={_filterNeedDoneItem}/>

                  {itemDataArr.map((item:any,index:number)=>{
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
