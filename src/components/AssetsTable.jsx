import {Table} from 'antd'
import {useCryptoContext} from "../context/CryptoContext";
import {capitalize} from "../utils";


export default function AssetsTable() {

    const {assets} = useCryptoContext();

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            showSorterTooltip: { target: 'full-header' },
            filters: [],
            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: (value, record) => record.name.indexOf(value) === 0,
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ['descend'],
        },
        {
            title: 'Price, $',
            dataIndex: 'price',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.age - b.age,
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            filters: [],
            onFilter: (value, record) => record.address.indexOf(value) === 0,
        },
        {
            title: 'Total',
            dataIndex: 'total',
            filters: [],
            onFilter: (value, record) => record.address.indexOf(value) === 0,
        },
    ];
    const data = assets.map((asset) => {
        return{
            key: asset.id,
            name: capitalize(asset.id),
            price: asset.price,
            amount: asset.amount,
            total: asset.totalAmount,
        }
    });

    return(
        <div style={{
            maxHeight: '100px'
        }}>
        <Table
            style={{
                maxHeight: '20px'
            }}
            pagination={false}
            columns={columns}
            dataSource={data}
            showSorterTooltip={{ target: 'sorter-icon' }}
        />
        </div>
    )

}