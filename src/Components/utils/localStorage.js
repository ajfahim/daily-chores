const setLocalStorage = (value)=>{
    localStorage.setItem("time",value);
    
}
const getLocalStorage = ()=>{
    return localStorage.getItem("time")
    
}

export {setLocalStorage,getLocalStorage}