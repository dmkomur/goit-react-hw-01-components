import PropTypes from 'prop-types';
import { TableHead, TableWrap} from './Transaction.styled';



export const TransactionHistory = ({ items }) => {
    return <TableWrap>
  <TableHead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </TableHead>
    <tbody>
        {items.map(el => (
           <tr key={el.id}>
           <td>{el.type}</td>
           <td>{el.amount}</td>
           <td>{el.currency}</td>
    </tr>
        ))}
     </tbody>
</TableWrap>
}


TransactionHistory.propTypes = {

  items: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
  })
}