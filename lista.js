function listar(){
    listaNoticias = localStorage.getItem('listaNoticias')
    if(listaNoticias == null){
        msgError.innerHTML='<font color="white">Nenhuma Notícia Cadastrada</font>'
        return
    }
    const listardados = localStorage.getItem('listaNoticias')
    msgLista.innerHTML = listardados
    
    }