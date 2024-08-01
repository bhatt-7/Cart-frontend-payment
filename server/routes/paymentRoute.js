// // Import required packages
// const Razorpay = require('razorpay');
// const express = require('express');
// const app = express();

// // Initialize Razorpay instance
// const razorpay = new Razorpay({
//     key_id: 'YOUR_KEY_ID',         // Replace with your Key ID
//     key_secret: 'YOUR_KEY_SECRET', // Replace with your Key Secret
// });

// // Create an order route
// app.post('/create-order', async (req, res) => {
//     const { amount, currency } = req.body;
//     const options = {
//         amount: amount * 100, // Amount in smallest unit (e.g., paise)
//         currency,
//     };

//     try {
//         const order = await razorpay.orders.create(options);
//         res.json(order);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
