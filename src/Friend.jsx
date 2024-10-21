export default function Friend( {info} ){
    console.log(info)
    const { name , email} = info
    return (
        <div className="box">
            <h2>Name : {name}</h2>
            <h2>Email : {email}</h2>
        </div>
    )
}