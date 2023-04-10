const initialState = {
    data:{},
    status:'',
    msg:'',
    loginSuccess:'',
    token:false,
    loading:false
  };
  
  const authReducer =(state = initialState, action) => {
    let item = {...state}
    switch (action.type) {
      case 'successCreateWallet':
        item.loading = false
        item.data = action.data
        break;
        case 'startAuth':
            item.loading = true
        break
        case 'successRecoveryPassword':
            item.loading = false
            item.status = action.data.status,
            item.msg = action.data.msg
            break
        case 'SuccessLogin':
            item.loading = false
            item.loginSuccess = action.data.success,
            item.token = action.data.token_auth
            break
        case 'clearRegisterData':
            item.data = {}
            break
        case 'clearRecover':
            item.status = '',
            item.msg = ''
        case 'errorAuth':
            item.loading = false
            console.log(action.error)
            break
        case 'TOKEN':
            console.log(action.token,'sss')
            item.token = action.token
            break
        default:
            break
    }
    return item
  };
  export default authReducer;
  