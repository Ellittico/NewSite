const fs = require('fs')
email = "prova@knev.it"
pass=1234;
        const content = `
        <?xml version="1.0" encoding="UTF-8"?>
        <?xml-model href="userInfo.dtd" type="application/xml-dtd"?>
        <user>
            <email>`+ email + `</email>
            <password>` + pass + `</password>
        </user>`;

    fs.writeFile('Exchange.xml', content, 'utf8', (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('File scritto con successo.');
    });