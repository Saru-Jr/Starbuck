const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());
app.use(express.json());

const users = [];

app.get('/api/check-auth', (req, res) => {
    const userId = req.cookies.userId;
    const user = users.find(u => u.id === userId);

    req.json({
        isLoggedIn: !!user,
        hasAccount: user.some(u => u.email === req.cookie.email),
    });
});

app.get('/api/singin', (req, res) => {
    const {email, password} = req.body;
    const user = {id: Date.now().toString(), email, password};
    users.push(user);
    res.cookie('userId', user.id);
    res.cookie('email', user.email);
    res.json({success: true});
});

app.get('/api/login', (req, res) => {
    const {email, password} = req.body;
    const user = user.find(u => u.email === email && u.password === password);
    if (user) {
        res.cookie('userId', user.id);
        res.json({success: true});
    } else {
        res.status(401).json({success: false, message: 'Identification incorrects'});
    }
});

app.listen(3000, () => {
    console.log('Serveur demarre sur http://localhost:3000');
});