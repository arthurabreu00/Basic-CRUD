class CrudController{

    constructor(){
        this.getDataAjax();
        this.initEvents();
        this.listAll();
        this._User = new User();
        this.data = User.getDataAjax();
    }

    getDataAjax(){


    }

    initEvents(){
        this.addEventListenerAll(document.querySelector('body'),['load','change','mouseover'],fn=>{

            console.log(this.data.response);

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