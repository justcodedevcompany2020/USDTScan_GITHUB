export const ErrorGetData = () => {
    return {
        type:'ErrorGetData'
    }
}
export const errorAuth = (error) => {
    return {
        type:'errorAuth',
        error
    }
}