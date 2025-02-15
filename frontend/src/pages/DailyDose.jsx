import { useState } from "react";

const DailyDose = () => {
    const [doses, setDoses] = useState([
        { id: 1, name: "Paracetamol", time: "08:00 AM", status: "Pending" },
        { id: 2, name: "Amoxicillin", time: "02:00 PM", status: "Pending" },
        { id: 3, name: "Vitamin D", time: "08:00 PM", status: "Pending" }
    ]);

    const markAsTaken = (id) => {
        setDoses(doses.map(dose => 
            dose.id === id ? { ...dose, status: "Taken" } : dose
        ));
    };

    return (
        <div className='flex flex-col bg-white rounded-lg p-6 shadow-md w-full md:w-2/3 lg:w-1/2 m-auto'>
            <h2 className='text-2xl font-semibold text-center mb-4'>My Daily Dose</h2>
            <div className='flex flex-col gap-4'>
                {doses.map(dose => (
                    <div key={dose.id} className='flex justify-between items-center bg-gray-100 p-4 rounded-lg'>
                        <div>
                            <p className='text-lg font-medium'>{dose.name}</p>
                            <p className='text-sm text-gray-600'>Time: {dose.time}</p>
                        </div>
                        <button 
                            className={`px-4 py-2 rounded-md text-white ${dose.status === "Taken" ? "bg-green-500" : "bg-blue-500 hover:bg-blue-600"}`} 
                            onClick={() => markAsTaken(dose.id)}
                            disabled={dose.status === "Taken"}
                        >
                            {dose.status === "Taken" ? "Taken" : "Mark as Taken"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DailyDose;
