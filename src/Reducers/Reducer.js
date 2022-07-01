const apiData= (state=[],action)=>
{
  switch(action.type){
    case 'ITEMS' : return action.payload
    default : return state
  }
}
export default apiData;