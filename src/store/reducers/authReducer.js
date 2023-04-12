const initialState = {
    data:{},
    status:'',
    msg:'',
    loginSuccess:'',
    token:false,
    loading:false,
    error:''
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
            item.status = action.data.success,
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
            item.error = action.error
            break
        case 'TOKEN':
            item.token = action.token
            break
        case 'clearError':
            item.error = false
        default:
            break
    }
    return item
  };
  export default authReducer;
  