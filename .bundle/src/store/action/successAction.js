export const SuccesGetSliderData = (data) =>{
    return {
        type:'SuccesGetSliderData',
        data
    }
}

export const SuccesGetEthereum = (data) =>{
    return {
        type:'SuccesGetEthereum',
        data
    }
}

export const SuccesGetTron = (data) =>{
    return {
        type:'SuccesGetTron',
        data
    }
}
export const SuccesGetBitcoin = (data) =>{
    return {
        type:'SuccesGetBitcoin',
        data
    }
}

export const successGetData = (data,input,bal) =>{
    return {
        type:'successGetData',
        data,
        input,
        bal,
    }
}