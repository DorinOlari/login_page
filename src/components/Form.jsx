import axios from "axios";

const Form = () => {


    const logare = async (ev) => {
        ev.preventDefault()

        const email = document.querySelector('#email').value
        const password = document.querySelector('#password').value

        console.log(email,password)

        try{
            const response = await axios.post('https://dummyjson.com/auth/login', {
                username:`${email}`,
                password:`${password}`
            })

            if (response){
                const user ={
                   firstName: response.data.firstName,
                   lastName: response.data.lastName
                }


                alert(`Felicitari ${user.firstName} ${user.lastName} vati logat cu succes...!`)

            }

        }

        catch (error){
            console.error(`Sorry asa utilizator nu egzista: ${error}`)
        }

    }


    return (
        <div className="flex justify-center items-center h-screen bg-indigo-600">
            <div className="w-96 p-6 shadow-lg bg-white rounded-md">
                <h1 className="text-3xl bloc text-center font-bold mt-11">Login</h1>
                <hr className="mt-9"/>
                <div className="mt-7">
                    <input type="text" id="email"
                           className="w-full text-base px-2 py-1 outline-none border-b-2 border-gray-600"
                           placeholder="Email"/>
                </div>
                <div className="mt-8">
                    <input type="password" id="password"
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