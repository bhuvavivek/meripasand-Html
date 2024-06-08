const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'src' and 'dist' directories
app.use(express.static(path.join(__dirname, 'src')));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.get('/mypost', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'mypost.html'))
})

app.get('/nearby', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'nearby.html'))
})

app.get('/partnersearch', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'partnersearch.html'))
})

app.get('/partnersearch-filter', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'partnersearch-filter.html'))
})

app.get('/slider', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'slidertest.html'))
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
