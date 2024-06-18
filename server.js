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

app.get('/connect-everyone', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'connect-everyone.html'))
})

app.get('/connect-favourite', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'connect-favourite.html'))
})

app.get('/connect-archived', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'connect-archived.html'))
})

app.get('/circle-activity', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'circle-activity.html'))
})


app.get('/circle-admirers', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'circle-admirers.html'))
})

app.get('/circle-favourites', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'circle-favourites.html'))
})

app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'profile.html'))
})


app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'profile.html'))
})

app.get('/account-you', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'account-you.html'))
})

app.get('/account-profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'account-profile.html'))
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
