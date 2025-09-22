const twilio = require('twilio');
const client = twilio(process.env.AC41269f9f2ab722bb198842c3b185a66d, process.env.ba8e624cdef6c265e44fae5496abd02e);

const sendOTP = async (req, res) => {
  const { to, message } = req.body;
  try {
    const response = await client.messages.create({
      body: message,
      from: process.env.+14026215872,
      to: to
    });
    res.json({ success: true, sid: response.sid });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

module.exports = { sendOTP };
