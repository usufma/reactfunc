const List=(depart)=>{
    const {departName}=depart
    const result=departName.map((d)=>{
        return(

                <li>{d.name}</li>
              
        )
    })
    return(
        <div className="depart">
            <h1> Departments</h1>
        <ul>
            {result}
        </ul>
        </div>
    )
}
export default List;