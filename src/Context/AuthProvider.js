import React,{useState} from "react"
import AuthContext from "./AuthContext"
function AuthProvider(props){
    const [userLogin,setUserLogin] = useState(localStorage.getItem("login")||false)
    const [userInfo,setUserInfo] = useState(JSON.parse(localStorage.getItem("userInfo"))||{})
    const loginUser = (userInfo)=>{
        getInfo()
        setUserLogin(true)
        localStorage.setItem("login",true)
        setUserInfo(userInfo)
        localStorage.setItem("userInfo",JSON.stringify(userInfo))
    }
    const logoutUser = ()=>{
        setUserLogin(false)
        localStorage.removeItem("login")
        localStorage.removeItem("userInfo")
    }
    const getInfo = ()=>{

    }
    return(
        <AuthContext.Provider
            value={{
                userLogin,
                loginUser,
                logoutUser,
                userInfo
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider