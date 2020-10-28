import * as React from 'react';


import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Button,
    Image,
    Pressable,
} from 'react-native';
import {useState, useContext, useEffect} from "react";
import {NoteContext,UPDATE_COLOR} from './../reduxComponent/list';
import { useNavigation } from '@react-navigation/native';


function OrderItem(props:any) {
    let {data} = props;
    let {state,dispatch}:any = useContext(NoteContext);
    const navigation = useNavigation();

    function _pressfn(){
        console.log("====dianji=====")
    }

    function _editNote(id:number){
        navigation.navigate('Detail',{screen: 'DetailPage',params:{type:'edit',id:id}})
    }

  return(
      <View style={styles.infoItem} >
          <Pressable onPress={()=>_pressfn()}>
              {
                  state.showChooseIcon?
                      (
                          <View style={styles.iconArea}>
                              <Image style={styles.icon1} source={require('./../assets/img/nomark_icon.png')}/>
                          </View>
                      ):null
              }
          </Pressable>

          <View style={styles.itemContent}>
              <Pressable onPress={()=>_editNote(data.id)}>
                <Text style={styles.itemContentText} numberOfLines={2}>{data.text}</Text>
              </Pressable>
          </View>

      </View>
  )
}




const styles = StyleSheet.create({

    infoItem:{
        width: '100%',
        height: 80,
        backgroundColor: 'yellow',
        borderStyle: 'solid',borderBottomWidth:1,
        borderBottomColor: '#333',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    iconArea:{
        width: 40,
        height: 40,
    },
    icon1:{
        width: 40,
        height: 40,
    },
    itemContent:{
        width: '70%',
        height: 60,
        // backgroundColor: 'blue',
        justifyContent: 'space-around',
    },
    itemContentText:{

    }

});



export default OrderItem
