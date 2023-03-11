function contapalavras()
{
    let t = text.value;
    let arraydotext = t.split(" ");
    let reultadodapesquisa = 0;
    arraydotext.forEach(palavra => {
        if(palavra == buscar.value){
            reultadodapesquisa++;
        }
    });
    alert(reultadodapesquisa > 0 ? (reultadodapesquisa + "palavras").replaceAll() : "não encontramos essa palavra");
    // alert(t.split(" ").length + " palavras")

}