export const ErrorGetData = () => {
    return {
        type:'ErrorGetData'
    }
}
export const errorAuth = (error) => {
    console.log('error')
    return {
        type:'errorAuth',
        error
    }
}