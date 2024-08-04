import React from 'react';
import { useLocation } from 'react-router-dom';

function Analyze() {
    const location = useLocation();
        const state = location.state || {};
        console.log('!!!'+state)
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">전달받은 상태</h1>
            <pre className="bg-gray-100 p-4 rounded-lg">
                {JSON.stringify(state, null, 2)}
            </pre>
        </div>
    );
}

export default Analyze;