import { app } from './app';
const port = process.env.PORT || 3333;
console.log(`Server is running in ${port}`)
app.listen(port);