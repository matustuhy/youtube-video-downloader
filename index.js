const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');

const app = express();

const replacements = [[/'/g, ''], [/\|/g, ''], [/'/g, ''], [/\//g, ''], [/\?/g, ''], [/:/g, ''], [/;/g, ''], [/•/g, '']]

app.use(cors());
app.use(express.static('public'))

const port = process.env.PORT || 80

app.listen(port, () => {
    console.log(`Server Works !!! At port ${port}`);
});

app.get('/download', async (req,res) => {
    const url = req.query.url;
    const fileInfo = await ytdl.getInfo(url)

    let fileName = `${fileInfo.videoDetails.title}.mp4`

    replacements.forEach(function(replacement) {
        fileName = fileName.replace(replacement[0], replacement[1]);
    });

    console.log(fileName)

    res.header('Content-Disposition', `attachment; filename="${fileName}"`);
    res.header('Content-Type', "video/mp4");
    res.header('File-Name', fileName);
    ytdl(url, { format: 'mp4' }).pipe(res);
});