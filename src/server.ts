import app from './lib/app';
import { PORT } from './lib/config/constants';

app.listen(PORT, () => {
	console.log('Started on 7890');
});