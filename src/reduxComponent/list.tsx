import React,{useReducer} from "react"


export const NoteContext = React.createContext({})

export const UPDATE_COLOR = "UPDATE_COLOR";


let initData = {
    noteList:[
        {
            id:1,
            status: 0,  //0:need to do ;1:have done
            text: "this is a test message",
            chooseStatus: 0, //0:not choosed; 1:choosed
        },
        {
            id:2,
            status: 0,  //0:need to do ;1:have done
            text: "this is a test message",
            chooseStatus: 0, //0:not choosed; 1:choosed
        },
    ],
    showChooseIcon: false,

}

const reducer1 = (state:any,action:any)=>{
    switch (action.type) {
        case UPDATE_COLOR:
            return action.color
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
