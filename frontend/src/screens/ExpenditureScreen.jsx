import React, { useState } from 'react';

const ExpenditureScreen = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    moneySpent: '',
    currency: '€', // Default to Euro
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to the server
    console.log(formData);
  };

  return (
    <div>
      <h1>Expenditure Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date of Expenditure:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="moneySpent">Money Spent:</label>
          <input
            type="number"
            id="moneySpent"
            name="moneySpent"
            value={formData.moneySpent}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="currency">Currency:</label>
          <select
            id="currency"
            name="currency"
            value={formData.currency}
            onChange={handleChange}
            className="form-control"
          >
            <option value="€">Euro (€)</option>
            <option value="$">Dollar ($)</option>
            <option value="₹">Rupees (₹)</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExpenditureScreen;
