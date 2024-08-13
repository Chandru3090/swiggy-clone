import React from 'react';

const TransactionTypeIndicator = ({ transactionType }) => {
    return (
        <span
            className={`p-1 rounded text-white text-sm capitalize  ${transactionType === 'INCOME' ? 'bg-green-600' : 'bg-red-600'
                }`}
        >{transactionType}</span>
    );
};

export default TransactionTypeIndicator;
