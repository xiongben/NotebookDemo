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
import {Stack} from "../router/router";


function DetailContent(props:any) {
    // console.log(props.data)
    const [value, onChangeText] = React.useState('Useless Placeholder');
    return(
        <SafeAreaView>
            <View>
                <View style={styles.infoItem} >
                    <Image style={styles.icon1} source={require('./../assets/img/mark_icon.png')}/>
                    <View style={styles.itemContent}>
                        <Text style={styles.itemContentText} numberOfLines={2}>{value}</Text>
                    </View>

                </View>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                />
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



export default DetailScreen
