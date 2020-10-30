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
import {useState, useContext, useEffect} from "react";
import {NoteContext, ADD_NOTE, UPDATE_NOTE, DELETE_NOTE} from './../reduxComponent/list';
import {useNavigation} from '@react-navigation/native';


function DetailContent(props: any) {
    // console.log(props.route)
    const [value, onChangeText] = useState('');
    const [targetItem, setTargetItem]: any = useState({});
    const [routerParams, setRouterParams] = useState(props.route.params);

    let {state, dispatch}: any = useContext(NoteContext);
    const navigation = useNavigation();

    useEffect(() => {
        let type = routerParams.type;
        if (type == 'edit') {
            let targetItem = state.noteList.filter((item: any) => item.id == routerParams.id);
            setTargetItem(targetItem[0]);
            onChangeText(targetItem[0].text);
        }
    }, [])

    function _pressfn() {
        // console.log(value)
    }

    function _saveDetail() {
        let type = routerParams.type;
        let lastId = state.lastId;
        let actionParams: object;
        let newNoteList = new Array();
        newNoteList = state.noteList;
        if (type == 'add') {
            newNoteList.push({
                id: lastId + 1,
                status: 0,  //0:need to do ;1:have done
                text: value,
                chooseStatus: false,
            })
            actionParams = {
                newLastId: lastId + 1,
                newNoteList: newNoteList,
            }
            dispatch({type: ADD_NOTE, itemData: actionParams})
        } else if (type == 'edit') {
            newNoteList.map((item, index) => {
                if (item.id == routerParams.id) {
                    item.text = value;
                }
            });
            dispatch({type: UPDATE_NOTE, newNoteList: newNoteList});
        }
        navigation.navigate('List');
    }

    function _doneDetail() {
        let newNoteList = new Array();
        newNoteList = state.noteList;
        newNoteList.map((item: any) => {
            if (item.id == routerParams.id) {
                item.status = 1;
            }
        });
        dispatch({type: UPDATE_NOTE, newNoteList: newNoteList});
        navigation.navigate('List');
    }

    function _delNote() {
        let newNoteList = new Array();
        newNoteList = state.noteList;
        newNoteList = newNoteList.filter((item: any) => item.id != routerParams.id);
        dispatch({type: DELETE_NOTE, newNoteList: newNoteList});
        navigation.navigate('List');
    }

    return (
        <SafeAreaView>
            <View>
                <View style={styles.detialHead}>
                    {
                        routerParams.type == 'edit' && targetItem.status == 0 ?
                            (
                                <Pressable onPress={() => _doneDetail()}>
                                    <View style={styles.btn}>
                                        <Text style={styles.btnText}>Done</Text>
                                    </View>
                                </Pressable>
                            ) : null
                    }

                    <Pressable onPress={() => _saveDetail()}>
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>Save</Text>
                        </View>
                    </Pressable>
                    {
                        routerParams.type == 'edit' ?
                            (
                                <Pressable onPress={() => _delNote()}>
                                    <View style={styles.btn}>
                                        <Text style={styles.btnText}>Delete</Text>
                                    </View>
                                </Pressable>
                            ) : null
                    }


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


function DetailScreen({navigation, route}: any) {
    // console.log(route)
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="DetailPage"
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

    detialHead: {
        width: '100%',
        height: 90,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    btn: {
        width: 80,
        height: 36,
        borderRadius: 8,
        borderStyle: 'solid', borderWidth: 1, borderColor: '#333',
        // backgroundColor: 'yellow',
    },
    btnText: {
        width: '100%',
        height: 36,
        lineHeight: 36,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
    },
    inputArea: {
        width: '90%',
        height: '85%',
        backgroundColor: 'pink',
        marginLeft: '5%',
    },
    detailText: {
        // height:'100%',
        fontSize: 18,
        lineHeight: 28,
        // 6666
    }
});


export default DetailScreen
