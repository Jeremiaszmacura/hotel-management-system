export const EXPENSE_LIST_COLUMNS = [
    {
        Header: 'Id',
        accessor: 'id',
        width: "20px"
    },
    {
        Header: 'Nazwa',
        accessor: 'name',
        width: "250px"
    },
    {
        Header: 'Koszt całkowity',
        accessor: 'totalCost',
        width: "150px",
        Cell: ({value}) => {
            return value + " zł"
        }
    },
    {
        Header: 'Wpłacono',
        accessor: 'paidIn',
        width: "100px",
        Cell: ({value}) => {
            return value + " zł"
        }
    },
    {
        Header: 'Do zapłaty',
        accessor: 'toPay',
        width: "100px",
        Cell: ({value}) => {
            return value + " zł"
        }
    }
]