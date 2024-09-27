<script>
    import Developer from "./Developer.svelte";
    import Designer from "./Designer.svelte";
    import Instructor from "./Instructor.svelte";
 </script>
 
 <section class="skills" id="skills">
     <div class="container">
         <div class="row">
             <div class="col s12">
                <div class="main__pills">

                 <div class="main__pill">
                     <img class="main__img" src="icons/skills_icon.svg" alt="Icono del apartado sobre mis habilidades" />
                     <p class="main__tit">Habilidades</p>
                 </div>
                </div>
                 <h2 class="main__h2">
                     Algunas de mis <span class="main__span">habilidades</span> más destacadas.
                 </h2>
                 <div class="skills__category">
                     <h4 class="skills__tit">
                         Desarrollo web
                     </h4>
                     <p class="skills__p">
                         Disfruto con el desarrollo Front-End
                     </p>
                 </div>
                 <div class="skills__cards">
                    <Developer/>
                 </div>
                 <div class="skills__category">
                     <h4 class="skills__tit">
                         Diseño gráfico
                     </h4>
                     <p class="skills__p">
                         El diseño UI/UX son mis preferidos
                     </p>
                 </div>
                 <div class="skills__cards">
                     <Designer/>
                 </div>
                 <div class="skills__category">
                     <h4 class="skills__tit">
                         Docente
                     </h4>
                     <p class="skills__p">
                         Estoy especializado en docencia de desarrollo web.
                     </p>
                 </div>
                 <div class="skills__cards">
                        <Instructor/>
                 </div>
             </div>
         </div>
         <hr class="main__hr">
     </div>
 </section>