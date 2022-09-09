let titulo = document.querySelector ('#titulo')
let data = document.querySelector('#data')
let comentario = document.querySelector('#comentario')

function cadastrar(){
let listaNoticias=localStorage.getItem('listaNoticias')
let linha = `<tr>`
    linha += `<td>${titulo.value}</td>`
    linha += `<td>${data.value}</td>`
    linha += `<td>${comentario.value}</td>`
    linha += `</tr>`
if(listaNoticias == null){
    listaNoticias = linha
}else{
    listaNoticias += linha
}
localStorage.setItem('listaNoticias',listaNoticias)
msgSucesso.innerHTML='<strong><font color="white">Cadastro com sucesso</font></strong>'
setTimeout(()=> {
    document.location.reload(true)
}, 2000);

}