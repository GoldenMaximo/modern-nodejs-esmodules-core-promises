import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const resHandler = async (req, res, next) => {
    try {
        const data = await fs.readFile('my-page.html', 'utf8');
        res.send(data);
    } catch (err) {
        console.log(err);
    }

    // res.sendFile(join(__dirname, 'my-page.html'));
};

export default resHandler;