const users = []; // temporary storage

const signup = (req, res) => {
  const { email, password } = req.body;
  users.push({ email, password });
  res.status(201).json({ message: 'User registered successfully' });
};

const login = (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if(user) return res.json({ message: 'Login successful' });
  return res.status(401).json({ message: 'Invalid credentials' });
};

module.exports = { signup, login };
