let defautlState = {
    selectedItems:{items:[],restaurantName:''}
}


let cartReducer = (state = defautlState ,action) =>{
    switch (action.type) {
        case "ADD_TO_CART":{
            let newState = {...state}
            newState.selectedItems = {
                items:[...newState.selectedItems.items , action.payload],
                restaurantName:action.payload.restaurantName
            }
            console.log('😂',newState)
            return newState
        }
        case "DELETE_ITEM":{
            let newstate = {...state}
            newstate.selectedItems = {
                items:newstate.selectedItems.items.filter(item=>item.name !== action.payload)
            }
            console.log(newstate,'😐')
            return newstate
        }
        case "CLEAR_CART":{
            let newstate = {...state}
            newstate.selectedItems = {
                items:[],
                restaurantName:''
            }
            return newstate
        }
        default:
            return state
    }
}


export default cartReducer