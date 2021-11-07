const delay = 5000;
const status = confirm(`Atenção, clique em 'OK' e aguarde. O programa irá executar sozinho! A cada ${delay} milissegundos você verá um exemplo diferente de botão.`);

if(status){

    setTimeout(() => {
        buttonChange(buttonExample1)
    }, delay*0);
    
    setTimeout(() => {
        buttonChange(buttonExample2)
    }, delay*1);
    
    setTimeout(() => {
        buttonChange(buttonExample3)
    }, delay*2);
    
    setTimeout(() => {
        buttonChange(buttonExample4)
    }, delay*3);

    setTimeout(() => {
        buttonChange(buttonExample5)
    }, delay*4);

}
else{
    alert("Você deve clicar em 'OK'.");
    document.location.reload(true);
}