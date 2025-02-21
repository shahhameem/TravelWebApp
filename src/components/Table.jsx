export const Table = ({ data, page = "#" }) => {
    if (!data || data.length === 0) {
        return <p>No data available.</p>; // Prevents crashes
    }

    const head = Object.keys(data[0]); // Extracts table headers from first row

    return (
        <table className="table table-hover">
            <thead>
                <tr className="table-primary">
                    {head.map((key, index) => (
                        <th key={index}>{key}</th>
                    ))}
                    <th>Operations</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        {Object.values(row).map((item, idx) => (
                            <td key={idx}>{item}</td>
                        ))}
                        <td>
                            <a href={`${page}/${row.id}`}>
                                <button className="btn btn-primary">Select</button>
                            </a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
