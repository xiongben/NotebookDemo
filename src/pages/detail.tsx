import * as React from 'react';


import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    Button,
    Pressable, Image,
} from 'react-native';
import {Stack} from "../router/router";


function DetailContent(props:any) {
    // console.log(props.data)
    const [value, onChangeText] = React.useState('Useless Placeholder');
    function _pressfn(){
        console.log(value)
    }
    return(
        <SafeAreaView>
            <View>
                <View style={styles.detialHead} >
                    <Pressable onPress={()=>_pressfn()}>
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>Done</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={()=>_pressfn()}>
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>Save</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={()=>_pressfn()}>
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>Delete</Text>
                        </View>
                    </Pressable>

                </View>
                <View style={styles.inputArea}>
                    <TextInput
                        style={styles.detailText}
                        multiline={true}
                        autoFocus={true}
                        onChangeText={text => onChangeText(text)}
                        value={value}
                    />
                </View>

            </View>
        </SafeAreaView>
    )
}


function DetailScreen() {
    return (
        <Stack.Navigator >
            <Stack.Screen
                name="Home"
                component={DetailContent}
                options={{
                    title: 'detail Page',
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

    detialHead:{
        width: '100%',
        height: 90,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    btn:{
        width: 80,
        height: 36,
        borderRadius: 8,
        borderStyle: 'solid',borderWidth:1,borderColor:'#333',
        // backgroundColor: 'yellow',
    },
    btnText:{
        width:'100%',
        height: 36,
        lineHeight: 36,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
    },
    inputArea:{
        width: '90%',
        height: '85%',
        backgroundColor: 'pink',
        marginLeft: '5%',
    },
    detailText:{
        // height:'100%',
        fontSize: 18,
        lineHeight: 28,
        backgroundColor: '#367'
    }
});



export default DetailScreen
