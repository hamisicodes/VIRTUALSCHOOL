const initialstate = {
    user:null
  }
  
const authReducer = (state,action) =>{
    switch (action.type){
      case "SET_USER":
        return{
          ...state,
          user:action.user
        }
    }
  }

export { initialstate, authReducer  }