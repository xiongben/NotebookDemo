import * as React from 'react';


import {
    StyleSheet,
    View,
    Text,
    Image,
    Pressable,
} from 'react-native';
import {useState, useContext, useEffect} from "react";
import {NoteContext, UPDATE_NOTE} from './../reduxComponent/list';
import {useNavigation} from '@react-navigation/native';


function OrderItem(props: any) {
    let {data} = props;
    let {state, dispatch}: any = useContext(NoteContext);
    const navigation = useNavigation();

    let [chooseStatus, setChooseStatus] = useState(false);


    useEffect(() => {
        setChooseStatus(data.chooseStatus)
    }, [data])


    function _editNote(id: number) {
        navigation.navigate('Detail', {screen: 'DetailPage', params: {type: 'edit', id: id}})
    }

    function _changeChooseStatus() {
        if (!chooseStatus) {
            let newNoteList = new Array();
            newNoteList = state.noteList;
            newNoteList.map((item: any) => {
                if (item.id == data.id) {
                    item.chooseStatus = 1;
                }
            });
            dispatch({type: UPDATE_NOTE, newNoteList: newNoteList});
        }
        setChooseStatus(!chooseStatus)
    }

    return (
        <View style={styles.infoItem}>
            {
                state.showChooseIcon ?
                    (
                        <Pressable onPress={() => _changeChooseStatus()}>
                            {chooseStatus ? (
                                <View style={styles.iconArea}>
                                    <Image style={styles.icon1} source={require('./../assets/img/mark_icon.png')}/>
                                </View>
                            ) : (
                                <View style={styles.iconArea}>
                                    <Image style={styles.icon1} source={require('./../assets/img/nomark_icon.png')}/>
                                </View>
                            )}

                        </Pressable>
                    ) : null
            }
            <View style={styles.itemContent}>
                <Pressable onPress={() => _editNote(data.id)}>
                    <Text style={styles.itemContentText} numberOfLines={2}>{data.text}</Text>
                </Pressable>
            </View>
            {
                data.status == 1 ? (
                    <View style={styles.finishArea}>
                        <Text style={styles.finishText}>Done</Text>
                    </View>
                ) : (<View style={styles.finishArea}></View>)
            }

        </View>
    )
}


const styles = StyleSheet.create({

    infoItem: {
        width: '100%',
        height: 80,
        backgroundColor: '#ff9966',
        borderStyle: 'solid', borderBottomWidth: 1,
        borderBottomColor: '#333',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    iconArea: {
        width: 40,
        height: 40,
    },
    icon1: {
        width: 40,
        height: 40,
    },
    itemContent: {
        width: '60%',
        height: 60,
        // backgroundColor: 'blue',
        justifyContent: 'space-around',
    },
    itemContentText: {},
    finishArea: {
        width: 40,
        height: 40,
    },
    finishText: {
        lineHeight: 40,
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
    },

});


export default OrderItem
