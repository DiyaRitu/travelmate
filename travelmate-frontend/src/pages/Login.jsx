// pages/Login.jsx

import React from "react";

const Login = () => {
    return (
        <div className="flex flex-col items-center mt-10">
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <form className="flex flex-col fap-3 w-64">
                <input type="email" placeholder="Enter email" className="border px-3 py-2 rounded" />
                <input type="password" placeholder="Enter password" className="border px-3 py-2 rounded" />
                <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button>
            </form>
        </div>
    );
};

export default Login;