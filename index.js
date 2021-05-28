const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
app.use(cors());
app.use(express.static('public'))
const port = process.env.PORT || 80
app.listen(port, () => {
    console.log(`Server Works !!! At port ${port}`);
});
app.get('/download', (req,res) => {
    const url = req.query.url;

    const fileName = `${Date.now()} - video.mp4`
    res.header('Content-Disposition', `attachment; filename="${fileName}"`);
    ytdl(url, { format: 'mp4' }).pipe(res);
});