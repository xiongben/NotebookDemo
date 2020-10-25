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
} from 'react-native';


function Menu(props:any) {
   return(
       <View style={styles.menuBox}>
           <View style={styles.needTodo}>
               <Image style={styles.icon1} source={require('./../assets/img/warn_icon.png')}/>
               <Text style={styles.todoText}> 9999</Text>
           </View>
           <View style={styles.menuLi}>
               <Image style={styles.icon1} source={require('./../assets/img/add_icon.png')}/>
           </View>
           <View style={styles.menuLi}>
               <Image style={styles.icon1} source={require('./../assets/img/list_icon.png')}/>
           </View>
           <View style={styles.menuLi}>
               <Button
                   title="Go to Details"
                   onPress={() => props.nav.navigate('Detail')}
               />
           </View>
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
