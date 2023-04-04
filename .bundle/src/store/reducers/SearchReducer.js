

export const initialState = {
  loading: false,
  data:[],
  input:'',
  length:'',
  Data1:[],
  bal:'',
};

const SearchReducer = (state = initialState, action) => {
  let item = {...state};
  switch (action.type) {
    case 'StartAction':
      item.loading = true 
      break
    case 'successGetData':
      if(Array.isArray(action.data)){
        item.Data1 = action.data
        item.length = action.data.length 
        item.data = action.data.slice(0,20)
      }
      else {
        item.Data1 = Object.values(action.data).reverse();
        item.length =Object.values(action.data).length
        item.data =  Object.values(action.data).reverse().slice(0,20)
      }
      item.loading = false
      item.input = action.input
      item.bal = action.bal
      break
    case 'Next20' :
      item.data = item.Data1.slice(20*action.data,20*(action.data+1))
      break
    case 'lastData':
      item.data = item.Data1.slice(0,20)
      break
    case 'ErrorGetData':
        item.loading = false
        break
    default:
      break;
  }
  return item;
};
export default SearchReducer;
