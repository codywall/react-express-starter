const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstNme: 'Cody', lastName: 'Wall'},
        {id: 2, firstNme: 'Lloyd', lastName: 'Christmas'},
        {id: 3, firstNme: 'Harry', lastName: 'Dunne'},
    ]

    res.json(customers);
})

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));