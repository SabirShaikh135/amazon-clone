export const initialState={
    basket:[],
    user:null,
   
};

export const getbasketTotal =(basket)=>
basket?.reduce((amount,item)=>item.price+amount,0);

const reducer=(state,action)=>{
    console.log(action);
    switch(action.type){

        case 'Set_User':
            return {
                ...state,
                user: action.user,
            }

        case 'Add_to_Basket':
            return {
                ...state,
                basket:[...state.basket,action.item]
            }
           

        case 'Remove_from_Basket':
            let newbasket= [...state.basket];
            const index= state.basket.findIndex((basketitem)=> basketitem.id === action.id);
            if(index >=0){
                newbasket.splice(index,1)
                
            }
            else{
                console.warn(
                    `Cant remove product (id:${action.id}) as its not basket `
                )
            }
            return {...state ,basket: newbasket}
            

            default:
                return state;
    }
}

export default reducer;