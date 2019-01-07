class CrudController{

    constructor(){
        User.getDataAjax();
    }

    addEventListenerAll(escope, events = [], fn = function(){} ){

        events.forEach(e =>{
            escope.addEventListener(e,fn);
        });

    }


}