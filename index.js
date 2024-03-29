const fs = require('fs');
const xml2js = require('xml2js');
const parser = new xml2js.Parser();
const dateArg = process.argv[2];

if (!dateArg) {
    console.error('Будь ласка, введіть дату як аргумент.');
    process.exit(1);
}

fs.readFile('meetings.xml', (err, data) => {
    if (err) throw err;

    parser.parseString(data, (err, result) => {
        if (err) throw err;

        const meetings = result.Meetings.Meeting.filter(m => m.$.date === dateArg);
        let html = `<html>
<head><title>Meetings on ${dateArg}</title></head>
<body>
    <h2>Meetings for ${dateArg}</h2>
    <ul>`;

        meetings.forEach(meeting => {
            html += `<li>Time: ${meeting.$.time}, With: ${meeting.With}, Place: ${meeting.Place}</li>`;
        });

        html += `</ul>
</body>
</html>`;

        fs.writeFile(`meetings_for_${dateArg.replace(/-/g, '_')}.html`, html, (err) => {
            if (err) throw err;
            console.log(`Файл meetings_for_${dateArg.replace(/-/g, '_')}.html було успішно створено!`);
        });
    });
});
