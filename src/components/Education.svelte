<script>

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
        "description":"Formación que te prepara para desarrollar documentos y componentes de software que constituyan aplicaciones informáticas."
    },
    {
        "icon": "icons/afundacion.svg",
        "name": "FP GM PREIMPRESIÓN DIGITAL",
        "institution": "Colegio Hogar Afundación",
        "date": "2015 - 2017",
        "description":"Aprendizaje profundo de las herramientas de diseño gráfico: Adobe Creative Cloud"
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
        "description":"Con las orientaciones en Historia Antigua, Historia Medieval y Arqueología"
    }
]
</script>


<sectior class="resume">
	<div class="row">
		<div class="col s12">
			<div class="resume__cards">
				{#each educacion as item}
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
                                    <h3 class="resume__name">
										{item.institution}
									</h3>
									<p class="resume__h3">
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
