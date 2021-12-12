import express = require('express')
import { main } from '../services/Async_Await/Async_Await';
let router = express.Router();

router.get('/', [async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    let result = await main(req.query['string'] as string).catch(next);
    res.status(200).send(result);
}]);
export default router;  