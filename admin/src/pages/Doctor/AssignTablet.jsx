import React, { useState } from "react";

const AssignTablet = ({ patientName }) => {
  const [tabletEntries, setTabletEntries] = useState([{ tabletName: "", schedule: "" }]);
  const [assignedTablets, setAssignedTablets] = useState([]);

  const handleAddTablet = () => {
    setTabletEntries([...tabletEntries, { tabletName: "", schedule: "" }]);
  };

  const handleChange = (index, field, value) => {
    const newEntries = [...tabletEntries];
    newEntries[index][field] = value;
    setTabletEntries(newEntries);
  };

  const handleAssign = () => {
    const validEntries = tabletEntries.filter(entry => entry.tabletName.trim() && entry.schedule.trim());

    if (validEntries.length > 0) {
      setAssignedTablets([...assignedTablets, ...validEntries]);
      setTabletEntries([{ tabletName: "", schedule: "" }]); // Reset input fields
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Assign Tablets to {patientName}</h2>
      
      <div className="mb-4">
        {tabletEntries.map((entry, index) => (
          <div key={index} className="mb-2 flex gap-2">
            <input
              type="text"
              placeholder="Tablet Name"
              value={entry.tabletName}
              onChange={(e) => handleChange(index, "tabletName", e.target.value)}
              className="p-2 border rounded w-1/2"
            />
            <input
              type="text"
              placeholder="Schedule (e.g., Morning, Evening)"
              value={entry.schedule}
              onChange={(e) => handleChange(index, "schedule", e.target.value)}
              className="p-2 border rounded w-1/2"
            />
          </div>
        ))}
        <button
          onClick={handleAddTablet}
          className="px-4 py-2 bg-primary text-white rounded hover:bg-green-600 mb-2"
        >
          + Add Another Tablet
        </button>
        <br />
        <button
          onClick={handleAssign}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Assign Tablets
        </button>
      </div>

      <div>
        <h3 className="text-lg font-semibold mt-4">Assigned Tablets</h3>
        {assignedTablets.length === 0 ? (
          <p className="text-gray-500">No tablets assigned yet.</p>
        ) : (
          <ul className="mt-2 p-4 bg-white rounded shadow">
            {assignedTablets.map((item, index) => (
              <li key={index} className="p-2 border-b">
                {item.tabletName} - {item.schedule}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AssignTablet;
