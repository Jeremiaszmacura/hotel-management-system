export const GUEST_LIST_COLUMNS = [
    {
        Header: 'Id',
        accessor: 'id',
        width: "20px"
    },
    {
        Header: 'Imię i nazwisko',
        accessor: 'name',
        width: "250px"
    },
    {
        Header: 'Miejscowość',
        accessor: 'place',
        width: "250px"
    },
    {
        Header: 'Status',
        accessor: 'status',
        width: "150px"
    },
    {
        Header: 'Zniżka',
        accessor: 'discount',
        width: "60px",
        Cell: ({value}) => {
            if(value && value > 0) {
                return value * 100 + "%"
            } else {
                return null
            }
        }
    },
    {
        Header: 'Dodatkowe informacje',
        accessor: 'description',
        width: "300px"
    }
]