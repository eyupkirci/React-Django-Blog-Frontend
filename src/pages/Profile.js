import React, { 
    // useState, 
    useEffect } from 'react'
// import { useSelector } from 'react-redux' 
import axios from 'axios'


const Profile = () => {

    // const isLogin = useSelector(state => state.loginReducer);
    // const [currentUser, setCurrentUser] = useState([])
    // const currentUser = useSelector(state => state.loginReducer)

    useEffect(() => {
        handleFetch()
    })

    async function handleFetch(){
        return new Promise( async (resolve, reject) => {

            const { data } = await axios("http://127.0.0.1:8000/accounts/auth/user/")
            resolve (data)
        })

        // await axios.get("http://127.0.0.1:8000/accounts/auth/user/",{headers:{'Content-Type': 'application/json'}})
        // .then( response => console.log(response.data))   
    }



    return (
        <div>
            <button onClick={handleFetch}>User</button>
            {/* <p>{currentUser}</p> */}


            
        </div>
    )
}

export default Profile
