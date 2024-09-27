import { c as create_ssr_component, d as each, f as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="home" id="home" data-svelte-h="svelte-1ia3elv"><div class="container"><div class="home__h1">Hola, Soy <br> <span class="home__span">Rubén Terré</span></div> <div class="home__pills"><div class="home__pill"><h4 class="home__h4">Desarrollador web</h4></div> <div class="home__pill"><h4 class="home__h4">Diseñador gráfico</h4></div> <div class="home__pill"><h4 class="home__h4">Docente</h4></div></div> <div class="home__description"><p class="home__p">Como <span class="main__span">desarrollador web</span>, me especializo en ofrecer soluciones digitales personalizadas. Como
		<span class="main__span">diseñador gráfico</span>, puedo crear experiencias visuales a medida. Como <span class="main__span">educador</span>, comparto mi pasión
		y conocimiento para formar a futuros profesionales.,<br> Explora mis proyectos y descubre cómo puedo
		ayudarte a llevar tus ideas al siguiente nivel. ¡Construyamos juntos!</p></div> <hr class="main__hr"></div></section>`;
});
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="about" id="about" data-svelte-h="svelte-4x8w8a"><div class="container"><div class="row"><div class="col s12 m6"><div class="about__portrait"><img class="about__img" src="images/RubenTerre.webp" alt="Imagen de Rubén Terré" width="100%"></div></div> <div class="col s12 m6"><div class="about__details"><div class="main__details--about"><div class="main__pill"><img class="main__img" src="icons/about_icon.svg" alt="Icono del apartado sobre mí"> <p class="main__tit">Sobre mí</p></div></div> <h3 class="about__h3">Soy un <span class="about__span">desarrollador web</span>,
						<span class="about__span">diseñador gráfico</span>
						e <span class="about__span">docente</span> apasionado, con un gran ojo para los detalles
						y una pasión por crear sitios web visualmente impactantes y altamente funcionales.</h3> <div class="about__mail"><div class="about__icon"><img src="icons/badge_icon.svg" alt="Nombre y apellidos" class="about__iconmail"></div> <div class="about__textmail"><p class="about__label">Nombre y apellidos</p> <p class="about__email">Rubén Arturo Terré Lameiro</p></div></div> <div class="about__mail "><div class="about__icon"><img src="icons/location_icon.svg" alt="Localización" class="about__iconmail--location"></div> <div class="about__textmail"><p class="about__label">Localización</p> <p class="about__email">Santiago de Compostela</p></div></div>  <div class="about__mail"><a href="emailto:info@rubenterre.com"><div class="about__icon"><img src="icons/email_icon.svg" alt="Correo electrónico" class="about__iconmail"></div></a> <div class="about__textmail"><p class="about__label">Email</p> <a href="emailto:info@rubenterre.com" class="about__email">info[arroba]rubenterre.com</a></div></div> <a href="Ruben_Arturo_Terre_Lameiro_CV2024.pdf" download class="about__button"><img class="about__imgcv" src="/icons/download.svg" alt="Icono de descargar currículum vitae"> <p class="about__download">DESCARGAR CV</p></a></div></div></div> <hr class="main__hr"></div></section>`;
});
const Developer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const desarrollo = [
    {
      icon: "icons/html5_icon.svg",
      name: "HTML"
    },
    { icon: "icons/css_icon.svg", name: "CSS" },
    {
      icon: "icons/javascript_icon.svg",
      name: "JavaScript"
    },
    {
      icon: "icons/sass_icon.svg",
      name: "SASS"
    },
    {
      icon: "icons/svelte_icon.svg",
      name: "Svelte"
    },
    {
      icon: "icons/vite_icon.svg",
      name: "ViteJS"
    },
    {
      icon: "icons/bootstrap_icon.svg",
      name: "Bootstrap"
    },
    {
      icon: "icons/firebase_icon.svg",
      name: "Firebase"
    },
    {
      icon: "icons/wordpress_icon.svg",
      name: "Wordpress"
    },
    {
      icon: "icons/github_icon.svg",
      name: "GitHub"
    }
  ];
  return `${each(desarrollo, (developer) => {
    return `<div class="skills__card"><img class="skills__skillicon"${add_attribute("src", developer.icon, 0)} alt="${"Icono de " + escape(developer.name, true)}"> <p class="skills__name">${escape(developer.name)}</p> <div class="skills__line"></div> </div>`;
  })}`;
});
const Designer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const design = [
    {
      "icon": "icons/indesign_icon.svg",
      "name": "InDesign"
    },
    {
      "icon": "icons/photoshop_icon.svg",
      "name": "Photoshop"
    },
    {
      "icon": "icons/illustrator_icon.svg",
      "name": "Illustrator"
    },
    {
      "icon": "icons/after-effects_icon.svg",
      "name": "After Effects"
    },
    {
      "icon": "icons/sketch_dark_icon.svg",
      "name": "Sketch"
    },
    {
      "icon": "icons/figma_icon.svg",
      "name": "Figma"
    }
  ];
  return `${each(design, (designer) => {
    return `<div class="skills__card"><img class="skills__skillicon"${add_attribute("src", designer.icon, 0)} alt="${"Icono de " + escape(designer.name, true)}"> <p class="skills__name">${escape(designer.name)}</p> <div class="skills__line"></div> </div>`;
  })}`;
});
const Instructor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const docencia = [
    {
      "icon": "icons/prezi_icon.svg",
      "name": "Prezi"
    },
    {
      "icon": "icons/quizizz_icon.svg",
      "name": "Quizizz"
    },
    {
      "icon": "icons/moodle_icon.svg",
      "name": "Moodle"
    },
    {
      "icon": "icons/classroom_icon.svg",
      "name": "Classroom"
    }
  ];
  return `${each(docencia, (instructor) => {
    return `<div class="skills__card"><img class="skills__skillicon"${add_attribute("src", instructor.icon, 0)} alt="${"Icono de " + escape(instructor.name, true)}"> <p class="skills__name">${escape(instructor.name)}</p> <div class="skills__line"></div> </div>`;
  })}`;
});
const Skills = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="skills" id="skills"><div class="container"><div class="row"><div class="col s12"><div class="main__pills" data-svelte-h="svelte-1udrnzu"><div class="main__pill"><img class="main__img" src="icons/skills_icon.svg" alt="Icono del apartado sobre mis habilidades"> <p class="main__tit">Habilidades</p></div></div> <h2 class="main__h2" data-svelte-h="svelte-9hfspw">Algunas de mis <span class="main__span">habilidades</span> más destacadas.</h2> <div class="skills__category" data-svelte-h="svelte-1lpt2q8"><h4 class="skills__tit">Desarrollo web</h4> <p class="skills__p">Disfruto con el desarrollo Front-End</p></div> <div class="skills__cards">${validate_component(Developer, "Developer").$$render($$result, {}, {}, {})}</div> <div class="skills__category" data-svelte-h="svelte-rhehry"><h4 class="skills__tit">Diseño gráfico</h4> <p class="skills__p">El diseño UI/UX son mis preferidos</p></div> <div class="skills__cards">${validate_component(Designer, "Designer").$$render($$result, {}, {}, {})}</div> <div class="skills__category" data-svelte-h="svelte-u4ytv6"><h4 class="skills__tit">Docente</h4> <p class="skills__p">Estoy especializado en docencia de desarrollo web.</p></div> <div class="skills__cards">${validate_component(Instructor, "Instructor").$$render($$result, {}, {}, {})}</div></div></div> <hr class="main__hr"></div></section>`;
});
const Education = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const educacion = [
    {
      "icon": "icons/forga_white.svg",
      "name": "CERT. PROF. DOCENCIA DE LA FP PARA EL EMPLEO",
      "institution": "FORGA Santiago",
      "date": "2023-2024",
      "description": "Acreditación oficial para la impartición de certificados de profesionalidad."
    },
    {
      "icon": "icons/cec.svg",
      "name": "CERT. PROF. DESARROLLO DE APLICACIONES CON TECNOLOGÍAS WEB",
      "institution": "Confederación de empresarios de Coruña",
      "date": "2020",
      "description": "Formación que te prepara para desarrollar documentos y componentes de software que constituyan aplicaciones informáticas."
    },
    {
      "icon": "icons/afundacion.svg",
      "name": "FP GM PREIMPRESIÓN DIGITAL",
      "institution": "Colegio Hogar Afundación",
      "date": "2015 - 2017",
      "description": "Aprendizaje profundo de las herramientas de diseño gráfico: Adobe Creative Cloud"
    },
    /*     {
          "icon": "icons/USC-Logo2.svg",
          "name": "EXPERTO UNIV. EN GESTIÓN CULTURAL",
          "institution": "Universidade de Santiago de Compostela",
          "date": "2014 - 2015",
          "description":"Conocimientos en gestión y desarrollo de iniciativas culturales"
      }, */
    /*     {
          "icon": "icons/USC-Logo2.svg",
          "name": "MASTER OFICIAL ESTUDOS MEDIEVAIS EUROPEOS",
          "institution": "Universidade de Santiago de Compostela",
          "date": "2012 - 2013",
          "description":"Estudios universitarios en filología, historia del arte e historia medieval europea."
      }, */
    {
      "icon": "icons/USC-Logo2.svg",
      "name": "LICENCIATURA EN HISTORIA",
      "institution": "Universidade de Santiago de Compostela",
      "date": "2006 - 2012",
      "description": "Con las orientaciones en Historia Antigua, Historia Medieval y Arqueología"
    }
  ];
  return `<sectior class="resume"><div class="row"><div class="col s12"><div class="resume__cards">${each(educacion, (item) => {
    return `<div class="resume__card"><div class="row"><div class="col s12"><div class="resume__detail"><div class="resume__pill"><h4 class="resume__h4">${escape(item.date)} </h4></div> <div class="resume__logo"><img class="resume__img"${add_attribute("src", item.icon, 0)}${add_attribute("alt", item.name, 0)}${add_attribute("width", item.width, 0)}></div> <h3 class="resume__name">${escape(item.institution)}</h3> <p class="resume__h3">${escape(item.name)}</p> <p class="resume__description">${escape(item.description)} </p></div> </div></div> </div>`;
  })}</div></div></div></sectior>`;
});
const Experience = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const experiencia = [
    /* 		{
    	icon: 'icons/ap-logo-blanco-medium-1.svg',
              width: '60px',
    	name: 'Grupo Academia Postal',
    	profession: 'Profesor titular',
    	date: '2024',
    	description:
    		'Docencia de certificados de profesionalidad relacionados con desarrollo web y IT de sistemas microinformáticos.'
    }, */
    {
      icon: "icons/gri_logo.svg",
      width: "60px",
      name: "Gabinete de recolocación industrial",
      profession: "Profesor titular",
      date: "2024",
      description: "Docencia de cursos relacionados con el desarrollo web y contenidos digitales"
    },
    {
      icon: "icons/ap-logo-blanco-medium-1.svg",
      width: "60px",
      name: "Grupo Academia Postal",
      profession: "Profesor titular",
      date: "2023-2024",
      description: "Docencia de certificados de profesionalidad relacionados con desarrollo web y IT de sistemas microinformáticos."
    },
    /* 		{
    	icon: 'icons/RT_logo.svg',
              width: '40px',
    	name: 'Freelance',
    	profession: 'Desarrollador front-end',
    	date: '2022-2023',
    	description: 'Desarrollo, mantenimiento y actualización de páginas web corporativas, blogs…'
    }, */
    {
      icon: "icons/ADM-500x133_blanco.svg",
      width: "100px",
      name: "ADM Comunicaciones",
      profession: "Desarrollador & diseñador",
      date: "2018-2019",
      description: "Diseñador gráfico y maquetador web. Creación de web de empresa y papelería publicitaria y corporativa."
    },
    {
      icon: "icons/INVBIT_LOGOTIPO.svg",
      width: "50px",
      name: "INVBIT",
      profession: "Diseñador gráfico & maquetador",
      date: "2017 - 2018",
      description: "Diseñador gráfico y maquetador web. Creación de páginas web y e-commerce (Wordpress...)."
    }
  ];
  return `<sectior class="resume"><div class="row"><div class="col s12"><div class="resume__cards">${each(experiencia, (item) => {
    return `<div class="resume__card"><div class="row"><div class="col s12"><div class="resume__detail"><div class="resume__pill"><h4 class="resume__h4">${escape(item.date)} </h4></div> <div class="resume__logo"><img class="resume__img"${add_attribute("src", item.icon, 0)}${add_attribute("alt", item.name, 0)}${add_attribute("width", item.width, 0)}></div> <h3 class="resume__h3">${escape(item.profession)}</h3> <p class="resume__name">${escape(item.name)}</p> <p class="resume__description">${escape(item.description)} </p></div> </div></div> </div>`;
  })}</div></div></div></sectior>`;
});
const Resume = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="resume" id="resume"><div class="container"><div class="main__pills" data-svelte-h="svelte-pbfpzs"><div class="main__pill"><img class="main__img" src="icons/education-experience_icon.svg" alt="Icono del apartado sobre mi trayectoria laboral y académica"> <p class="main__tit">Experiencia &amp; Educación</p></div></div> <h2 class="main__h2" data-svelte-h="svelte-ms4osi">Experiencia <span class="main__span">&amp;</span> Educación</h2> <div class="row"><div class="col s12 m6"><div class="resume__stack"><div class="resume__category" data-svelte-h="svelte-1qn46k0"><h4 class="resume__tit">Experiencia</h4> <p class="resume__p">Mi trayectoria profesional</p></div> <div class="resume__cards">${validate_component(Experience, "Experience").$$render($$result, {}, {}, {})}</div></div></div> <div class="col s12 m6"><div class="resume__stack"><div class="resume__category" data-svelte-h="svelte-1xyt11a"><h4 class="resume__tit">Educación</h4> <p class="resume__p">Mi trayectoria académica</p></div> <div class="resume__cards">${validate_component(Education, "Education").$$render($$result, {}, {}, {})}</div></div></div></div> <hr class="main__hr"></div></section>`;
});
const Portfolio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const projects = [
    {
      banner: "images/destino_viquingo_web.webp",
      name: "Destino Viquingo web",
      description: "Página web del libro Destino Viquingo.",
      url: "https://destinoviquingo.rubenterre.com",
      urlcode: "https://github.com/rubenterre/DestinoViquingoWeb",
      technologies: [
        {
          icon: "icons/html5_icon_white.svg",
          name: "HTML"
        },
        {
          icon: "icons/css_icon_white.svg",
          name: "CSS"
        },
        {
          icon: "icons/javascript_icon_white.svg",
          name: "JavaScript"
        },
        {
          icon: "icons/sketch_icon_white.svg",
          name: "Sketch"
        }
      ]
    },
    /*     {
          "banner": "images/projects/SoloHistoria.png",
          "name": "SoloHistoria App",
          "description": "Aplicación para aprender historia medieval.",
          "url": "https://www.behance.net/gallery/97500747/SoloHistoria-App-Learning-history",
          "technologies": "<img class=\"proyectos__icon\"  src=\"icons/skills/html5_icon.svg\" alt=\"HTML\" width=\"20px\"> <img class=\"proyectos__icon\" src=\"icons/skills/css_icon.svg\" alt=\"CSS\" width=\"20px\"> <img class=\"proyectos__icon\" src=\"icons/skills/javascript_icon.svg\" alt=\"JavaScript\" width=\"20px\"> <img class=\"proyectos__icon\" src=\"icons/skills/sketch_dark_icon.svg\" alt=\"Sketch\" width=\"20px\">"
      }, */
    {
      banner: "images/ADM_Comunicaciones_web.webp",
      name: "ADM Comunicaciones",
      description: "Página web corporativa y tienda online.",
      url: "https://admcomunicaciones.com/",
      technologies: [
        {
          icon: "icons/wordpress_icon_white.svg",
          name: "Wordpress"
        }
      ]
    },
    {
      banner: "images/GaliciaWeather_app.webp",
      name: "GaliciaWeather App",
      description: "App del tiempo con ilustraciones dinámicas",
      url: "https://www.behance.net/gallery/155847275/Galicia-Weather-App",
      urlcode: "",
      technologies: [
        {
          icon: "icons/svelte_icon_white.svg",
          name: "Svelte"
        },
        {
          icon: "icons/sketch_icon_white.svg",
          name: "Sketch"
        }
      ]
    }
  ];
  const projectsDesign = [
    {
      banner: "images/Libro_destino_viquingo.webp",
      name: "Destino Viquingo libro",
      description: "Maquetación y autoría del libro",
      url: "https://destinoviquingo.rubenterre.com",
      technologies: [
        {
          icon: "icons/indesign_icon_white.svg",
          name: "InDesign"
        },
        {
          icon: "icons/photoshop_icon_white.svg",
          name: "Photoshop"
        },
        {
          icon: "icons/illustrator_icon_white.svg",
          name: "Illustrator"
        }
      ]
    },
    {
      banner: "images/MuseoPoboGalego_Concept.webp",
      name: "Museo Pobo Galego",
      description: "Concept da páxina web do Museo do Pobo Galego",
      url: "https://www.behance.net/gallery/92767455/Museo-do-Pobo-Galego-Web-Design-Concept",
      technologies: [
        {
          icon: "icons/sketch_icon_white.svg",
          name: "InDesign"
        },
        {
          icon: "icons/photoshop_icon_white.svg",
          name: "Photoshop"
        },
        {
          icon: "icons/illustrator_icon_white.svg",
          name: "Illustrator"
        }
      ]
    }
  ];
  return `<section class="portfolio" id="portfolio"><div class="container"><div class="row"><div class="col s12"><div class="main__pills" data-svelte-h="svelte-zz6wa2"><div class="main__pill"><img class="main__img" src="icons/portfolio_icon.svg" alt="Icono del apartado sobre mis trabajos y proyectos"> <p class="main__tit">Portfolio</p></div></div> <h2 class="main__h2" data-svelte-h="svelte-1pv2u0i">Mostrando algunos de mis <span class="main__span">trabajos</span> en desarrollo y diseño web.</h2> <div class="portfolio__cards"><div class="row"><div class="col s12 m6">${each(projects, (item) => {
    return `<div class="portfolio__card"><div class="row"><div class="col s12 m12 xl6"><div class="portfolio__img"><img${add_attribute("src", item.banner, 0)}${add_attribute("alt", item.name, 0)} class="portfolio__work"> </div></div> <div class="col s12 m12 xl6"><div class="portfolio__details"><h3 class="portfolio__h3">${escape(item.name)}</h3> <div class="portfolio__pills">${each(item.technologies, (tech) => {
      return `<img class="portfolio__pill"${add_attribute("src", tech.icon, 0)}${add_attribute("alt", tech.name, 0)} width="25px">`;
    })}</div> <p class="portfolio__description">${escape(item.description)}</p> <div class="portfolio__buttons"><a class="portfolio__a"${add_attribute("href", item.urlcode, 0)}><img src="icons/brand-github.svg" alt="Logo de GitHub" class="portfolio__code"> <p class="portfolio__url" data-svelte-h="svelte-x6nxit">Código</p></a> <a class="portfolio__a portfolio__a--preview"${add_attribute("href", item.url, 0)}><img src="icons/link_symbol-1.png" alt="Enlace a la web del proyecto" class="portfolio__code"> <p class="portfolio__url" data-svelte-h="svelte-y0z8cl">Ver</p></a> </div></div> </div></div> </div>`;
  })}</div> <div class="col s12 m6">${each(projectsDesign, (item) => {
    return `<div class="portfolio__card"><div class="row"><div class="col s12 m12 xl6"><div class="portfolio__img"><img${add_attribute("src", item.banner, 0)}${add_attribute("alt", item.name, 0)} class="portfolio__work"> </div></div> <div class="col s12 m12 xl6"><div class="portfolio__details"><h3 class="portfolio__h3">${escape(item.name)}</h3> <div class="portfolio__pills">${each(item.technologies, (tech) => {
      return `<img class="portfolio__pill"${add_attribute("src", tech.icon, 0)}${add_attribute("alt", tech.name, 0)} width="25px">`;
    })}</div> <p class="portfolio__description">${escape(item.description)}</p> <div class="portfolio__buttons"><a class="portfolio__a portfolio__a--preview"${add_attribute("href", item.url, 0)}><img src="icons/link_symbol-1.png" alt="Enlace a la web del proyecto" class="portfolio__code"> <p class="portfolio__url" data-svelte-h="svelte-y0z8cl">Ver</p></a> </div></div> </div></div> </div>`;
  })}</div></div></div> <div class="portfolio__more" data-svelte-h="svelte-hcogpi"><a href="https://www.behance.net/rubenterre" class="portfolio__a portfolio__a--more">VER MÁS TRABAJOS</a></div></div></div> <hr class="main__hr"></div></section>`;
});
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="contact" id="contact" data-svelte-h="svelte-5kyxea"><div class="container"><div class="row"><div class="col s12"><div class="main__pills"><div class="main__pill"><img class="main__img" src="icons/contact_icon.svg" alt="Icono del apartado de contacto"> <p class="main__tit">Contacto</p></div></div> <h2 class="main__h2">¡Estamos en <span class="main__span">contacto</span>!</h2> <div class="contact__buttons"><a href="mailto:info@rubenterre.com" class="contact__button"><div class="contact__img"><img src="icons/email_icon.svg" alt="" height="50px" class="contact__icon"></div> <p class="contact__label">Email</p> <p class="contact__p">info[arroba]rubenterre.com</p></a> <a target="_blank" href="https://maps.app.goo.gl/LCEdfnkkvvrVwUEW7" class="contact__button"><div class="contact__img"><img src="icons/location_icon.svg" alt="" height="50px" class="contact__icon"></div> <p class="contact__label">Localización</p> <p class="contact__p">Santiago de Compostela</p></a></div> <div class="contact__socials"><h2 class="main__h2 contact__h2">No dudes en ponerte en contacto para consultas o colaboraciones. Puedes encontrar más de
						mi trabajo y actualizaciones en mis <span class="main__span">redes sociales.</span></h2> <div class="contact__hub"><a target="_blank" href="https://www.linkedin.com/in/rubenterrelameiro" class="contact__social"><img src="icons/linkedin_box.svg" alt="Enlace a perfil de Linkedin"></a> <a target="_blank" href="https://www.behance.net/rubenterre" class="contact__social"><img src="icons/behance_box.svg" alt="Enlace a perfil de Behance"></a> <a target="_blank" href="https://github.com/rubenterre" class="contact__social"><img src="icons/github_box.svg" alt="Enlace a perfil de Github"></a> <a target="_blank" href="https://www.instagram.com/rubenterre.studiodesign/" class="contact__social"><img src="icons/instagram_box.svg" alt="Enlace a perfil de Instagram"></a></div></div></div></div></div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Home, "Home").$$render($$result, {}, {}, {})} ${validate_component(About, "About").$$render($$result, {}, {}, {})} ${validate_component(Skills, "Skills").$$render($$result, {}, {}, {})} ${validate_component(Resume, "Resume").$$render($$result, {}, {}, {})} ${validate_component(Portfolio, "Portfolio").$$render($$result, {}, {}, {})} ${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
