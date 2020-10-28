import * as React from 'react';


import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Image,
    Text,
    TextInput,
    Button,
    Pressable,
} from 'react-native';
import {useState, useContext, useEffect} from "react";
import {NoteContext,SHOW_CHOOSE_ICON} from './../reduxComponent/list';


function Menu(props:any) {
    let {state,dispatch}:any = useContext(NoteContext);
    let [needDoneNum,setNeedDoneNum] = useState(0);

    useEffect(()=>{
        let targetItem = state.noteList.filter((item:any)=>item.status== 0);
        setNeedDoneNum(targetItem.length);

    },[state])

    function _pressfn(){
        console.log("====dianji=====")
    }

    function _showChooseIcon() {
        let newShowChooseIcon = !state.showChooseIcon;
        dispatch({type:SHOW_CHOOSE_ICON,showChooseStatus:newShowChooseIcon})
    }

    function _addNote() {
        let paramsData:object = {
            type: 'add',
        }
        props.nav.navigate('Detail',{screen: 'DetailPage',params:paramsData})
    }

    function _showDoneList() {
        let newShowChooseIcon = !state.showChooseIcon;
        dispatch({type:SHOW_CHOOSE_ICON,showChooseStatus:newShowChooseIcon})
    }

   return(
       <View style={styles.menuBox}>
           <Pressable onPress={()=>_pressfn()}>
               <View style={styles.needTodo}>
                   <Image style={styles.icon1} source={require('./../assets/img/warn_icon.png')}/>
                   <Text style={styles.todoText}> {needDoneNum}</Text>
               </View>
           </Pressable>
           <Pressable onPress={()=>_addNote()}>
               <View style={styles.menuLi}>
                   <Image style={styles.icon1} source={require('./../assets/img/add_icon.png')}/>
               </View>
           </Pressable>
           <Pressable onPress={()=>_showChooseIcon()}>
               <View style={styles.menuLi}>
                   <Image style={styles.icon1} source={require('./../assets/img/list_icon.png')}/>
               </View>
           </Pressable>
           <Pressable onPress={()=>_pressfn()}>
               <View style={styles.menuLi}>
                   <Button
                       title="Go to Details"
                       onPress={() => props.nav.navigate('Detail',{screen: 'DetailPage',params:{type:123}})}
                   />
               </View>
           </Pressable>

       </View>
   )
}


const styles = StyleSheet.create({

    menuBox:{
        width: '100%',
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-around',
        // backgroundColor: 'yellow',

    },
    needTodo:{
        width: 120,
        height: 80,
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuLi:{
        width: 80,
        height: 80,
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon1:{
        width: 40,
        height: 40,
    },
    todoText:{
        fontSize: 18,
        color: '#000',

    }

});


export default Menu
