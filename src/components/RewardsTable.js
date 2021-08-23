import moment from "moment";

function RewardsTable(props) {
	if(!props.rewards.length) {
		return null;
	}
  return (
    <div className="Rewards-Table">
        <table className="table table-bordered">
            <thead>
                <tr class="table-secondary">
                    <th> Transaction Id </th>
                    <th> Transaction Time </th>
                    <th> Total Amount Spent </th>
                    <th> Reward Points </th>
                </tr>
            </thead>
            <tbody>
                {props.rewards.map(reward => (
                    <tr key={reward.id}>
                        <td>{reward.id}</td>
                        <td>{moment(reward.date).format("MM/DD/YYYY")}</td>
                        <td>{reward.total}</td>
                        <td>{reward.points}</td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <th colSpan="3">Total:</th>
                    <td>{props.totalRewards}</td>
                </tr>
            </tfoot>
        </table>
    </div>
  );
}

export default RewardsTable;