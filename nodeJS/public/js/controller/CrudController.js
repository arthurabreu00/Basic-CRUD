class CrudController{

    constructor(){
        this.getDataAjax();
        this.initEvents();
        this.listAll();
        this._User = new User();
        this.data = User.getDataAjax();
        // console.log('CRUD',this.data.response[1]);
    }

    getDataAjax(){


    }

    initEvents(){
        this.addEventListenerAll(document.querySelector('body'),['load','change'],fn=>{

            console.log(User.getDataAjax());

        });
    }

    addEventListenerAll(escope, events = [], fn = function(){} ){

        events.forEach(e =>{
            escope.addEventListener(e,fn);
        });

    }


    listAll(){
        

        // document.querySelector('.table') += `
        // `;
    }





}