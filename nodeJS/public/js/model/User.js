class User{

    constructor(){
        this.data = User.getDataAjax();
        console.log('User Direto',User.getDataAjax()); 
        console.log('User Data',this.data);
    }

    // static get data(){
    //     return this.data;
    // }

    // static set data(value){
    //     this.data = value;
    // }


    static getDataAjax(){
        let httpRequest = new XMLHttpRequest();
        let url = '/users'; 

        httpRequest.open("GET", url);
        httpRequest.responseType = "json";
        httpRequest.addEventListener("readystatechange", ()=> {
        if (httpRequest.readyState == 4){
            if (httpRequest.status == 200){
                }
            }
        });

        httpRequest.send(); 

        return httpRequest;

    }
}