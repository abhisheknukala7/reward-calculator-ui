import { useEffect } from 'react';

function CustomerSelection(props) {
  // set default values
  const { customers, yearList, monthList, setSelectedCustomer, setSelectedYear, setSelectedMonth, fetchTotalPoints } = props;

  useEffect(() => {
    if (customers.length && yearList.length && monthList.length) {
      setSelectedCustomer(customers[0]?.id);
      setSelectedYear(yearList[0]?.id);
      setSelectedMonth(monthList[0]?.id);
    }
  }, [customers, yearList, monthList, setSelectedCustomer, setSelectedYear, setSelectedMonth]);

  return (
    <form className="Customer-Selection row">
      <div className="col form-group">
        <label htmlFor="customerList">Select Customer</label>
        <select id="customerList" className="form-control" onChange={(e) => setSelectedCustomer(e.target.value)}>
          {customers.map(customer => (
            <option key={customer.id} value={customer.id}>{customer.name}</option>
          ))}
        </select>
      </div>
      <div className="col form-group">
        <label htmlFor="yearList">Select Year</label>
        <select id="yearList" className="form-control" onChange={(e) => setSelectedYear(e.target.value)}>
          {yearList.map(year => (
            <option key={year.id} value={year.id}>{year.value}</option>
          ))}
        </select>
      </div>
      <div className="col form-group">
        <label htmlFor="monthList">Select Month</label>
        <select id="monthList" className="form-control" onChange={(e) => setSelectedMonth(e.target.value)}>
          {monthList.map(month => (
            <option key={month.id} value={month.id}>{month.value}</option>
          ))}
        </select>
      </div>
      <div className="col form-group d-flex align-items-end">
        <button type="button" className="btn btn-success" onClick={fetchTotalPoints}>Fetch Reward Points</button>
      </div>
    </form>
  );
}

export default CustomerSelection;