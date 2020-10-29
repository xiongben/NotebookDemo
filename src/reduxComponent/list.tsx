import React,{useReducer} from "react"


export const NoteContext = React.createContext({})

export const UPDATE_COLOR = "UPDATE_COLOR";
export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const UPDATE_NOTE = "UPDATE_NOTE";
export const SHOW_CHOOSE_ICON = "SHOW_CHOOSE_ICON";


let initData = {
    noteList:[
        {
            id:1,
            status: 0,  //0:need to do ;1:have done
            text: "this is a test message",
            chooseStatus: false,
        },
        {
            id:2,
            status: 0,  //0:need to do ;1:have done
            text: "this is a test message",
            chooseStatus: false,
        },
    ],
    showChooseIcon: false,
    lastId: 3,
}

const reducer1 = (state:any,action:any)=>{

    switch (action.type) {
        case UPDATE_COLOR:
            return action.color
        case ADD_NOTE:
            return Object.assign({},state,{
                noteList: action.itemData.newNoteList,
                lastId: action.itemData.newLastId,
            })
        case DELETE_NOTE:
            return Object.assign({},state,{
                noteList: action.newNoteList
            })
        case UPDATE_NOTE:
            return Object.assign({},state,{
                noteList: action.newNoteList
            })
        case SHOW_CHOOSE_ICON:
            return Object.assign({},state,{
                showChooseIcon: action.showChooseStatus
            })
        default:
            return state
    }
}

export const ListReduxComponent = (props:any) =>{
    const [state,dispatch] = useReducer(reducer1,initData)
    return (
        <NoteContext.Provider value={{state,dispatch}}>
            {props.children}
        </NoteContext.Provider>
    )
}
