import React from 'react';
import axios from 'axios';

const PaymentButton = () => {
    const handlePayment = async () => {
        // Call backend to create an order
        const { data: order } = await axios.post('http://localhost:5000/create-order', {
            amount: 500, // Amount in rupees
            currency: 'INR',
        });

        // Options for Razorpay checkout
        const options = {
            key: 'rzp_test_5XhKGpSXFOwnLs', // Replace with your Key ID
            amount: order.amount,
            currency: order.currency,
            name: 'Sensation Software Solutions',
            description: 'Test Transaction',
            order_id: order.id,
            handler: function (response) {
                console.log('Payment successful!', response);
                // Handle successful payment here (e.g., save to database, update UI)
            },
            prefill: {
                name: 'John Doe',
                email: 'john@example.com',
                contact: '9999999999',
            },
            notes: {
                address: 'Razorpay Corporate Office',
            },
            theme: {
                color: '#F37254',
            },
        };

        // Initialize and open Razorpay checkout
        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    return (
        <button onClick={handlePayment}>Pay Now</button>
    );
};

export default PaymentButton;
