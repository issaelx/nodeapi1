const { Router } = require("express");

const router =Router()

//npm --v version
//npm install -g @angular/cli instalar angular cli en pc
//ng new angular-todo


router.get('/test',(req ,res) =>{
    const data ={ 'Nombre':'YO',
                    'Sitio' :'rapidito' }
    
            res.json(data);
    } );

    module.exports=router;