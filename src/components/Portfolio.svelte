<script>
	const projects = [
		{
			banner: 'images/destino_viquingo_web.webp',
			name: 'Destino Viquingo web',
			description: 'Página web del libro Destino Viquingo.',
			url: 'https://destinoviquingo.rubenterre.com',
			urlcode: 'https://github.com/rubenterre/DestinoViquingoWeb',
			technologies: [
				{
					icon: 'icons/html5_icon_white.svg',
					name: 'HTML'
				},
				{ icon: 'icons/css_icon_white.svg', name: 'CSS' },
				{ icon: 'icons/javascript_icon_white.svg', name: 'JavaScript' },
				{ icon: 'icons/sketch_icon_white.svg', name: 'Sketch' }
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
			banner: 'images/ADM_Comunicaciones_web.webp',
			name: 'ADM Comunicaciones',
			description: 'Página web corporativa y tienda online.',
			url: 'https://admcomunicaciones.com/',
			technologies: [
				{
					icon: 'icons/wordpress_icon_white.svg',
					name: 'Wordpress'
				}
			]
		},
		{
			banner: 'images/GaliciaWeather_app.webp',
			name: 'GaliciaWeather App',
			description: 'App del tiempo con ilustraciones dinámicas',
			url: 'https://www.behance.net/gallery/155847275/Galicia-Weather-App',
			urlcode: '',
			technologies: [
				{
					icon: 'icons/svelte_icon_white.svg',
					name: 'Svelte'
				},
				{ icon: 'icons/sketch_icon_white.svg', name: 'Sketch' }
			]
		}

	];

	const projectsDesign = [
		{
			banner: 'images/Libro_destino_viquingo.webp',
			name: 'Destino Viquingo libro',
			description: 'Maquetación y autoría del libro',
			url: 'https://destinoviquingo.rubenterre.com',
			technologies: [
				{
					icon: 'icons/indesign_icon_white.svg',
					name: 'InDesign'
				},
				{ icon: 'icons/photoshop_icon_white.svg', name: 'Photoshop' },
				{ icon: 'icons/illustrator_icon_white.svg', name: 'Illustrator' }
			]
		},
		{
        banner: "images/MuseoPoboGalego_Concept.webp",
        name: "Museo Pobo Galego",
        description: "Concept da páxina web do Museo do Pobo Galego",
        url: "https://www.behance.net/gallery/92767455/Museo-do-Pobo-Galego-Web-Design-Concept",
        technologies: [
				{
					icon: 'icons/sketch_icon_white.svg',
					name: 'InDesign'
				},
				{ icon: 'icons/photoshop_icon_white.svg', name: 'Photoshop' },
				{ icon: 'icons/illustrator_icon_white.svg', name: 'Illustrator' }
			]
    } 
	]
</script>

<section class="portfolio" id="portfolio">
	<div class="container">
		<div class="row">
			<div class="col s12">
				<div class="main__pills">
					<div class="main__pill">
						<img
							class="main__img"
							src="icons/portfolio_icon.png"
							alt="Icono del apartado sobre mis trabajos y proyectos"
						/>
						<p class="main__tit">Portfolio</p>
					</div>
				</div>
				<h2 class="main__h2">
					Mostrando algunos de mis <span class="main__span">trabajos</span> en desarrollo y diseño web.
				</h2>
				<div class="portfolio__cards">
					<div class="row">
						<div class="col s12 m6">
							{#each projects as item}
								<div class="portfolio__card">
									 <div class="row">
										 <div class="col s12 m12 xl6">
											<div class="portfolio__img">
												<img src={item.banner} alt={item.name} class="portfolio__work" />
											</div>
										</div>
										<div class="col s12 m12 xl6">
											<div class="portfolio__details">
												<h3 class="portfolio__h3">{item.name}</h3>
												<div class="portfolio__pills">
													{#each item.technologies as tech}
														<img class="portfolio__pill" src={tech.icon} alt={tech.name} width="25px" />
													{/each}
												</div>
												<p class="portfolio__description">
													{item.description}
												</p>
												<div class="portfolio__buttons">
													<a class="portfolio__a" href={item.urlcode}>
														<img
															src="icons/brand-github.svg"
															alt="Logo de GitHub"
															class="portfolio__code"
														/>
														<p class="portfolio__url">Código</p>
													</a>
													<a class="portfolio__a portfolio__a--preview" href={item.url}>
														<img
															src="icons/link_symbol-1.png"
															alt="Enlace a la web del proyecto"
															class="portfolio__code"
														/>
														<p class="portfolio__url">Ver</p>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							{/each}
						</div>
						<div class="col s12 m6">
							{#each projectsDesign as item}
							<div class="portfolio__card">
								 <div class="row">
									 <div class="col s12 m12 xl6">
										<div class="portfolio__img">
											<img src={item.banner} alt={item.name} class="portfolio__work" />
										</div>
									</div>
									<div class="col s12 m12 xl6">
										<div class="portfolio__details">
											<h3 class="portfolio__h3">{item.name}</h3>
											<div class="portfolio__pills">
												{#each item.technologies as tech}
													<img class="portfolio__pill" src={tech.icon} alt={tech.name} width="25px" />
												{/each}
											</div>
											<p class="portfolio__description">
												{item.description}
											</p>
											<div class="portfolio__buttons">

												<a class="portfolio__a portfolio__a--preview" href={item.url}>
													<img
														src="icons/link_symbol-1.png"
														alt="Enlace a la web del proyecto"
														class="portfolio__code"
													/>
													<p class="portfolio__url">Ver</p>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						{/each}
						</div>
					</div>

							
				</div>

				<div class="portfolio__more">
					<a href="https://www.behance.net/rubenterre" class="portfolio__a portfolio__a--more"> VER MÁS TRABAJOS </a>
				</div>
			</div>
		</div>
		<hr class="main__hr" />
	</div>
</section>
