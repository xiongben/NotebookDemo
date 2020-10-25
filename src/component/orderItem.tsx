import * as React from 'react';


import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    Button, Image,
} from 'react-native';


function OrderItem(props:any) {
    // console.log(props.data)
  return(
      <View style={styles.infoItem} >
          <Image style={styles.icon1} source={require('./../assets/img/mark_icon.png')}/>
          <View style={styles.itemContent}>
              <Text style={styles.itemContentText} numberOfLines={2}>一月又一月</Text>
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
