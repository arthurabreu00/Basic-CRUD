class CrudController{

    constructor(){
        User.getDataAjax();
        this.initEvents();
    }
    addEventListenerAll(escope, events = [], fn = function(){}){

        events.forEach(e =>{
            escope.addEventListener(e,fn);
        });

    }





}