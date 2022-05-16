function retornar_navbar()
{
    var menu_texto = ``;
    
    return menu_texto;
    
}

function retornar_rodape()
{
    var menu_footer = `<footer class=\"bg-light text-center text-white\">
    
    <div class=\"text-center p-3\" style=\"background-color: rgba(0, 0, 0, 0.9); bottom:0;\">
      © 2021 Copyright:
      <a class=\"text-white\" href=\"#\">Mitsusada Umetani</a>
    </div>

  </footer>`;
  
return menu_footer;
    
}

        
function alerta_informacao(titulo, texto)
{

   Swal.fire(
   titulo,
   texto,
   'info'
  );

}
