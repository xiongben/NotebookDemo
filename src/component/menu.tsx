import * as React from 'react';


import {
    StyleSheet,
    View,
    Image,
    Text,
    Button,
    Pressable,
    Animated,
} from 'react-native';
import {useState, useContext, useEffect, useRef} from "react";
import {NoteContext, SHOW_CHOOSE_ICON, UPDATE_NOTE} from './../reduxComponent/list';


function Menu(props: any) {
    let {state, dispatch}: any = useContext(NoteContext);
    let [needDoneNum, setNeedDoneNum] = useState(0);

    useEffect(() => {
        let targetItem = state.noteList.filter((item: any) => item.status == 0);
        setNeedDoneNum(targetItem.length);

    }, [state])

    function _pressfn() {
        props.filterfn();
    }

    function _showChooseIcon() {
        let newShowChooseIcon = !state.showChooseIcon;
        if (!newShowChooseIcon) {
            let newNoteList = new Array();
            newNoteList = state.noteList;
            newNoteList.map((item, index) => {
                item.chooseStatus = 0;
            })
            dispatch({type: UPDATE_NOTE, newNoteList: newNoteList});
        }
        dispatch({type: SHOW_CHOOSE_ICON, showChooseStatus: newShowChooseIcon})
    }

    function _addNote() {
        let paramsData: object = {
            type: 'add',
        }
        props.nav.navigate('Detail', {screen: 'DetailPage', params: paramsData})
    }

    function _delChoosefn() {
        let newNoteList = new Array();
        newNoteList = state.noteList;
        newNoteList = newNoteList.filter((item, index) => {
            return item.chooseStatus == 0;
        })
        console.log(newNoteList);
        dispatch({type: UPDATE_NOTE, newNoteList: newNoteList});

    }


    return (
        <FadeInView>
            <View style={styles.menuBox}>

                {
                    !state.showChooseIcon ?
                        (
                            <Pressable onPress={() => _pressfn()}>
                                <View style={styles.needTodo}>
                                    <Image style={styles.icon1} source={require('./../assets/img/warn_icon.png')}/>
                                    <Text style={styles.todoText}> {needDoneNum}</Text>
                                </View>
                            </Pressable>
                        ) : null
                }
                {
                    !state.showChooseIcon ?
                        (
                            <Pressable onPress={() => _addNote()}>
                                <View style={styles.menuLi}>
                                    <Image style={styles.icon1} source={require('./../assets/img/add_icon.png')}/>
                                </View>
                            </Pressable>
                        ) : null
                }

                {
                    state.showChooseIcon ?
                        (
                            <Pressable onPress={() => _delChoosefn()}>
                                <View style={styles.menuLi}>
                                    <Image style={styles.icon1} source={require('./../assets/img/delete_icon.png')}/>
                                </View>
                            </Pressable>
                        ) : null
                }
                <Pressable onPress={() => _showChooseIcon()}>
                    <View style={styles.menuLi}>
                        <Image style={styles.icon1} source={require('./../assets/img/list_icon.png')}/>
                    </View>
                </Pressable>
            </View>
        </FadeInView>
    )
}

const FadeInView = (props: any) => {
    const fadeAnim = useRef(new Animated.Value(0)).current  // 透明度初始值设为0

    React.useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                useNativeDriver: false,
                toValue: 1,
                duration: 3000
            }
        ).start();
    }, [fadeAnim])

    return (
        <Animated.View
            style={{
                ...props.style,
                opacity: fadeAnim,
            }}
        >
            {props.children}
        </Animated.View>
    );
}


const styles = StyleSheet.create({

    menuBox: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-around',
        // backgroundColor: 'yellow',

    },
    needTodo: {
        width: 120,
        height: 80,
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuLi: {
        width: 80,
        height: 80,
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon1: {
        width: 40,
        height: 40,
    },
    todoText: {
        fontSize: 18,
        color: '#000',

    }

});


export default Menu
