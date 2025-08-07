//pages/Register.jsx

import React from "react";

const Register = () => {
    return (
        <div className="flex flex-col items-center mt-10">
            <h2 className="text-2xl font-semibold mb-4">Register</h2>
            <form className="flex flex-col gap-3 w-64">
                <input type="text" placeholder="Enter Name" className="border px-3 py-2 rounded" />
                <input type="email" placeholder="Enter email" className="border px-3 py-2 rounded" />
                <input type="password" placeholder="Enter password" className="border px-3 py-2 rounded" />
                <button className="bg-green-600 text-white py-2 rounded hover:bg-green-700">Register</button>
            </form>
        </div>
    );
};

export default Register;