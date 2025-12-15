const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const paisesRoutes = require('./routers/paises.routes');
app.use('/api/paises', paisesRoutes);

//app.use('/api/cantones', require('./routers/cantones.routes'));

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})