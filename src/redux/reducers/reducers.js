import * as types from "../action/actionType"
const cart=[]

const handleCart=(state=cart,action)=>{
    const product=action.payload;
    switch(action.type){
        case "ADDITEM":
            //check if the product is already exits ;
            const exits=state.find((x)=>x.id===product.id)
            if(exits){
                return state.map((x)=>
                    x.id===product.id? {...x,qty:x.qty+1}:x
                )
            }else{
                const product=action.payload
                return [...state,{...product,qty:1}]
                
            }
            break;

            case "DELITEM":
                const exits1=state.find((x)=>x.id===product.id)
            if(exits1.qty==1){
                return state.filter((x)=>x.id !== exits1.id)
            }else{
                return state.map((x)=>
                    x.id===product.id? {...x,qty:x.qty-1}:x
                );
            }
            break;
        default:
            return state
            break
    }
}

// Register part 
const intialState={
loading :false,
currentUser:null,
error:false
}

const userReducer=(state=intialState,action)=>{
        switch(action.type){
            case types.REGISTER_START:
                return {
                    ...state,
                    loading:true,
                }
            case types.REGISTER_SUCCESS:
                 return {
                        ...state,
                        loading:false,
                        currentUser:action.payload
                    }
                case types.REGISTER_FAIL:
                return {
                    ...state,
                    loading:false,
                    error:action.payload
                }
            default:
            return state
        }
}
export {handleCart,userReducer}