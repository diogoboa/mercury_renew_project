function retornar_navbar()
{

    var menu_texto = `<nav id=\"nav_bar_completa\" class=\"navbar navbar-expand-md\">
                              <a class=\"navbar-brand pb-2\" href=\"#\">Centro de Mídias - Castilho</a>
                              <button class=\"navbar-toggler custom-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">
                                  <span class=\"navbar-toggler-icon\"></span>
                              </button>
                              <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">
                                  <ul class=\"navbar-nav\">
                                      <li class=\"nav-item\">
                                          <a class=\"nav-link\" href=\"index.html\">Página inicial</a>
                                      </li>
                                      <li class=\"nav-item dropdown\">
                                          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> Salas </a>
                                          <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">
                                              <li>
                                                  <a class=\"dropdown-item\" href=\"laboratorio_01.html\">Laboratório de Informática</a>
                                              </li>
                                              <li>
                                                  <a class=\"dropdown-item\" href=\"laboratorio_02.html\">Laboratório de Robótica</a>
                                              </li>
                                              <li>
                                                  <a class=\"dropdown-item\" href=\"laboratorio_03.html\">Laboratório de Mídia</a>
                                              </li>
                                          </ul>
                                      </li>
                                      <li class=\"nav-item dropdown\">
                                          <a class=\"nav-link dropdown-toggle\"  id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Cursos</a>
                                          <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">
                                              <li>
                                                  <a class=\"dropdown-item\" href=\"/cursos/fundamentos_da_informática.html\">Fundamentos da Informática</a>
                                              </li>
                                              <li>
                                                  <a class=\"dropdown-item\" href=\"/cursos/estetica.html\">Estética</a>
                                              </li>
                                          </ul>
                                      </li>
                                      <li class=\"nav-item\">
                                          <a class=\"nav-link\" href=\"inscricoes.html\">Inscrições</a>
                                      </li>
                                      <li class=\"nav-item\">
                                          <a class=\"nav-link\" href=\"contato.html\">Contato</a>
                                      </li>
                                      <li class=\"nav-item\">
                                          <a class=\"nav-link\" href=\"noticias.html\">Notícias</a>
                                      </li>
                                      <li class=\"nav-item\">
                                          <a class=\"nav-link\" onclick=\"alerta_informacao('Estamos em manutenção','Essa página ficará pronta em breve.')\">Parceiros</a>
                                      </li>
                                      <li class=\"nav-item\">
                                          <a class=\"nav-link\" href=\"FAQ.html\">FAQ</a>
                                      </li>
                                  </ul>
                              </div>
                          </nav>`;
    
    return menu_texto;
    
}

function retornar_rodape()
{
    var menu_footer = `<footer class=\"footer text-center\">
                               <div class=\"container\">
                                   <div class=\"row\">


                                       <div class=\"col-lg-4 mb-5 mb-lg-0\">
                                           <img   src=\"imagens/projeto/prefeitura_de_castilho.jpg\" width=\"255px\" height=\"100px\"/>
                                       </div>

                                       <div class=\"col-lg-4 mb-5 mb-lg-0\">
                                           <img   src=\"imagens/projeto/comerc_logo.png\" width=\"255px\" height=\"85px\"/>
                                       </div>

                                       <div class=\"col-lg-4 mb-5 mb-lg-0\">
                                           <img   src=\"imagens/projeto/mercury_logo.jpg\" width=\"255px\" height=\"85px\"/>
                                       </div>



                                       <hr style=\"margin-top: 40px;\">

                                       <div class=\"col-lg-6 mb-5 mb-lg-0\">
                                           <h4 class=\"text-uppercase mb-4\">Siga-nos</h4>
                                           <a class=\"btn btn-outline-light btn-social mx-1\" href=\"https://www.linkedin.com/company/mercury-renew/\"><i class=\"fab fa-fw fa-linkedin-in\"></i></a>
                                       </div>

                                       <div class=\"col-lg-6 mb-5 mb-lg-0\">
                                           <h4 class=\"text-uppercase mb-4\">Castilho - SP</h4>
                                           <p class=\"lead mb-0\">
                                               Via Ac. R. Antônio Viêira de Brito, 716-1432, 16920-000
                                               </br>CIEC
                                           </p>
                                       </div>

                                   </div>
                               </div>
                           </footer>

                           <div class=\"copyright py-4 text-center text-white\">
                               <div class=\"container\"><small>Copyright &copy; Boaventura Softwares: 27.596.397/0001-82</br>Software Desenvolvido por Diogo Boaventura</small></div>
                               <img src='https://www.counter12.com/img-4xz5743b5Zyaya75-3.gif' border='0' alt='contador' style=\"visibility: hidden; display: none\">
                       		<img class=\"contador_acessos\" src='https://contador.s12.com.br/img-zAdbCAZ6D7Abwc63-27.gif' border='0' alt='counter free'>
                           </div>`;
  
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
