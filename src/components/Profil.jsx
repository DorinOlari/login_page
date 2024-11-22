const Profil = () => {

    const token = JSON.parse(localStorage.getItem('Token'))

    return(
        <>
            <div style={{display:'flex', justifyContent:'center'}}>
                <img src={token.image} className="object-center" alt="image"/>
            </div>
            <h1 className="text-center text-6xl font-extrabold">{`This is ${token.firstName} ${token.lastName}  profile...!`}</h1>
        </>
    )
}

export default Profil;