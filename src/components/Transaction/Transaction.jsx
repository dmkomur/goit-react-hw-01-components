import PropTypes from 'prop-types';
// import { Friend, Indicator} from './FriendListItem.styled';



export const TransactionHistory = ({ items }) => {
    console.log(items);
    return <table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

        <tbody>
            
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>
}
