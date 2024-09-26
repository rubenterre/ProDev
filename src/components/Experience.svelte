<script>
	const experiencia = [
		{
			icon: 'icons/gri_logo.svg',
            width: '60px',
			name: 'Gabinete de recolocación industrial',
			profession: 'Profesor titular',
			date: '2024',
			description: 'Docencia de cursos relacionados con el desarrollo web y contenidos digitales'
		},
		{
			icon: 'icons/ap-logo-blanco-medium-1.svg',
            width: '60px',
			name: 'Grupo Academia Postal',
			profession: 'Profesor titular',
			date: '2023-2024',
			description:
				'Docencia de certificados de profesionalidad relacionados con desarrollo web y IT de sistemas microinformáticos.'
		},
		{
			icon: 'icons/RT_logo.svg',
            width: '40px',
			name: 'Freelance',
			profession: 'Desarrollador front-end',
			date: '2022-2023',
			description: 'Desarrollo, mantenimiento y actualización de páginas web corporativas, blogs…'
		},
		{
			icon: 'icons/ADM-500x133_blanco.svg',
            width: '100px',
			name: 'ADM Comunicaciones',
			profession: 'Desarrollador & diseñador',
			date: '2018-2019',
			description:
				'Diseñador gráfico y maquetador web. Creación de web de empresa y papelería publicitaria y corporativa.'
		},
		{
			icon: 'icons/INVBIT_LOGOTIPO.svg',
            width: '50px',
			name: 'INVBIT',
			profession: 'Diseñador gráfico & maquetador',
			date: '2017 - 2018',
			description:
				'Diseñador gráfico y maquetador web. Creación de páginas web y e-commerce (Wordpress...).'
		}
	];
</script>

<sectior class="resume">
	<div class="row">
		<div class="col s12">
			<div class="resume__cards">
				{#each experiencia as item}
					<div class="resume__card">
						<div class="row">
                            <div class="col s12">
							
								<div class="resume__detail">
									<div class="resume__pill">
										<h4 class="resume__h4">
											{item.date}
										</h4>
									</div>
                                    <div class="resume__logo">
                                        <img class="resume__img" src={item.icon} alt={item.name} width="{item.width}" />
                                    </div>
                                
									<h3 class="resume__h3">
										{item.profession}
									</h3>
									<p class="resume__name">
										{item.name}
									</p>
									<p class="resume__description">
										{item.description}
									</p>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</sectior>
