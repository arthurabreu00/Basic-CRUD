class User{

    constructor(){
        
    }


    static getDataAjax(){
            var ajax = new XMLHttpRequest();
            ajax.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
               User.listAll(JSON.parse(this.response));
              }
            };
            ajax.open("GET", '/users', true);
            ajax.send();
          return ajax;
    }

    static listAll(dataObject){

        

        dataObject.forEach(data =>{
            let tr = document.createElement('tr');
            tr.dataset.id = data.id_cli;
            tr.innerHTML = 
            `<td scope="row"> ${data.id_cli} </td>
            <td> ${data.nome_cli} </td>
            <td> ${data.sobrenome_cli} </td>
            <td> ${data.email_cli} </td>
            <td> ${data.idade} </td>
            <td> 
                <span class="btn btn-danger btn-remove" data-id=${data.id_cli}> <i class="fas fa-trash-alt"></i> </span> 
            </td>
            <td> 
                <span class="btn btn-primary btn-att" data-id= ${data.id_cli}> <i class="fas fa-pencil-alt"></i> </span> 
            </td>`;

            document.querySelector('tbody').appendChild(tr);
        });

    }
}
