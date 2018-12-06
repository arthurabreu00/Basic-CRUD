class CrudController{
    constructor(){
        
        
        this.listChieldFiles = document.querySelector("#insert");
        this.events();
        this.connectFirebase();
        this.getEmails();
        this.deleteNode();
    }

    events(){
        document.querySelector(".btn-success").addEventListener('click',()=>{
            let json = {
                'emails':document.querySelector('.add').value
            }
             this.getFireBaseRef().push().set(json);
        });

        document.querySelector(".btn-primary").addEventListener('click',()=>{
            this.attNode();
            document.querySelector(".btn-success").classList.add('d-none');
        })

        document.querySelector(".btn-danger").addEventListener('click',()=>{
            this.attNode();

        })


    }

    attNode(){
        this.getFireBaseRef().on('value',snaphot =>{

            let keyUser = document.querySelector('.att-id').value;
            let dataUser =  document.querySelector('.att-email').value

            snaphot.forEach(item =>{
                let key = item.key;
                let data = item.val();

                if(keyUser == key){
                    data.emails = dataUser;
                }

               
            });
        });

        document.querySelector(".btn-success").classList.remove('d-none');

    }

    deleteNode(){

     
    }

    connectFirebase(){
        var config = {
            apiKey: "AIzaSyBSxEUXnskWdzio1lLUCJCCw9TjBDXt4Ac",
            authDomain: "institutobhfuturo-e1db7.firebaseapp.com",
            databaseURL: "https://institutobhfuturo-e1db7.firebaseio.com",
            projectId: "institutobhfuturo-e1db7",
            storageBucket: "institutobhfuturo-e1db7.appspot.com",
            messagingSenderId: "347747402155"
          };
          firebase.initializeApp(config);
    }

    getFireBaseRef(){
        return firebase.database().ref('emails');
    }

    getEmails(){
        this.getFireBaseRef().on('value',snaphot =>{

            this.listChieldFiles.innerHTML = "";

            snaphot.forEach(item =>{
                let key = item.key;
                let data = item.val();

                this.listChieldFiles.appendChild(this.getHTMLchield(data,key));
            })
        })
    }

    getHTMLchield(data,key){

        let tr = document.createElement('tr');

        tr.dataset.key = key;

        tr.innerHTML = `        <th scope="row">${key}</th>
        <td>${data.emails}</td>
`

        return tr;

    }


    
}