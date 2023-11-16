const Tableprobs=(probs)=>{
    const {tabledata}=probs
   const sd= tabledata.map((t)=>{
        return(
            <tr>
                <td>{t.departments}</td>
                <td>{t.tname}</td>
                <td>{t.salary}</td>
                <td>{t.experiance}</td>
            </tr>
        )
    })
    return(
        <table>
            <thead>
                <th>Departments</th>
                <th>Name</th>
                <th>salary</th>
                <th>Experience</th>
            </thead>
            <tbody>
                {sd}
            </tbody>
        </table>
    ) }

    export default Tableprobs;