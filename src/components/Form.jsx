import axios from "axios";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const Form = () => {

    const [data, setData] = useState({usernameInput:'', passwordInput:''})

    const [info, setInfo] = useState(false)



    const logare = async (ev) => {
        ev.preventDefault()

if (data.usernameInput.length === 0 || data.passwordInput.length === 0){
    let input_email = document.querySelector('#email')
    let input_password = document.querySelector('#password')

    input_email.setAttribute('style', 'border-bottom: 3px solid red')
    input_email.setAttribute('placeholder', 'Nu aveti introdus nici un userName...!')

    input_password.setAttribute('style', 'background: #F01F1F')
    input_password.setAttribute('placeholder', 'Nu ati introdus nici un password')

}



        try{
            const response = await axios.post('https://dummyjson.com/auth/login', {
                username:`${data.usernameInput}`,
                password:`${data.passwordInput}`
            })

            if (response){
                const user ={
                   firstName: response.data.firstName,
                   lastName: response.data.lastName
                }

                const token_access = {
                    accessToken: response.data.accessToken,
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    image: response.data.image
                }


                localStorage.setItem('Token', JSON.stringify(token_access))

                alert(`Felicitari ${user.firstName} ${user.lastName} vati logat cu succes...!`)

                setInfo(true)

                setData({usernameInput:'', passwordInput:''})

            }

        }

        catch (error){
            console.error(`Sorry asa utilizator nu egzista: ${error}`)
        }

    };



    const navigate = useNavigate()

    useEffect(()=>{
        if (info){
            navigate('/profile')
        }
        else {
            navigate('/')
        }
    }, [info, navigate])


    return (
        <div className="flex justify-center items-center h-screen bg-indigo-600">
            <div className="w-96 p-6 shadow-lg bg-white rounded-md">
                <h1 className="text-3xl bloc text-center font-bold mt-11">Login</h1>
                <hr className="mt-9"/>
                <div className="mt-7">
                    <input type="text" id="email"
                           value={data.usernameInput}
                           onChange={(event)=> setData({...data, usernameInput: event.target.value})}
                           className="w-full text-base px-2 py-1 outline-none border-b-2 border-gray-600"
                           placeholder="Email"/>
                </div>
                <div className="mt-8">
                    <input type="password" id="password"
                           value={data.passwordInput}
                           onChange={(event)=> setData({...data, passwordInput: event.target.value})}
                           className="w-full text-base px-2 py-1 outline-none border-b-2 border-gray-600"
                           placeholder="Password"/>
                </div>
                <div className="mt-9">
                    <button type="button" onClick={logare}
                            className="border-2 border-indigo-700 bg-indigo-700 text-white py-2.5 w-full rounded-xl hover:bg-indigo-600">Login
                    </button>
                </div>
                <p className="font-semibold text-gray-600 text-center mt-11">Forgot <a href="https://www.rabota.md/ro/"
                                                                                       className="text-blue-600 font-semibold">Password</a>?
                </p>
                <p className="font-semibold text-gray-600 text-center mt-2 mb-7">Don't have an account? <a
                    href="https://999.md/ro/" className="text-blue-600 font-semibold">Sign up</a></p>
            </div>
        </div>
    )
}

export default Form;