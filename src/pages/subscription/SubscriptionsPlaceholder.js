import React from 'react';

function SubscriptionsPlaceholder() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
            <h1 className="text-4xl font-bold text-gray-700 mb-6">Subscriptions</h1>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg text-center">
                <h2 className="text-2xl font-semibold text-gray-600 mb-4">Subscriptions Placeholder</h2>
                <p className="text-gray-500">
                    This section will display subscription details once available. Stay tuned for updates!
                </p>
            </div>
        </div>
    );
}

export default SubscriptionsPlaceholder;
