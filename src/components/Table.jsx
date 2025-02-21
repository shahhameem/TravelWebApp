export const Table = ({ data , page}) => {
    const head = Object.keys(data[0])
    return (
        <table className="table table-hover">
            <thead>
                <tr className="table-primary">
                    {head.map((key, index) =>
                        <th key={index}>{key}</th>
                    )}
                    <th>Operations</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        {Object.values(row).map((item, idx) => {
                            return <td key={idx}>{item}</td>
                        })}
                        <td>
                            <a href={`${page}/${row.id}`}>
                                <input type="submit" value="Select" className="btn btn-primary" />
                            </a>
                        </td>
                    </tr>
                ))}

            </tbody>

        </table>
    )
}
