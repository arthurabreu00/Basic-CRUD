(function(){
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            if(document.querySelector('tbody')) listAll(JSON.parse(this.response));
            // else if(document.querySelector('form-update')) User.listUser(JSON.parse(this.response));
            }
        };
        ajax.open("GET",'/users', true);
        ajax.send();
})();

function listAll(dataObject){


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
            <form method="get" action="/users/delete/${data.id_cli}">
                <button type="submit" class="btn btn-danger btn-remove"> <i class="fas fa-trash-alt"></i> </button> 
            </form>
        </td>
        <td> 
            <form method="get" action="/update/${data.id_cli}">
                <button type="submit" class="btn btn-primary btn-remove" > <i class="fas fa-pencil-alt
                "></i> </button> 
            </form>
        </td>`;

        if(document.querySelector('tbody')) document.querySelector('tbody').appendChild(tr);
    });

}

