<script>
	import Education from './Education.svelte';
	import Experience from './Experience.svelte';
</script>

<section class="resume" id="resume">
	<div class="container">
		<div class="main__pills">
			<div class="main__pill">
				<img
					class="main__img"
					src="icons/about_icon.png"
					alt="Icono del apartado sobre mi trayectoria laboral y académica"
				/>
				<p class="main__tit">Sobre mí</p>
			</div>
		</div>

		<h2 class="main__h2">
			Experiencia <span class="main__span">&</span> Educación
		</h2>
		<div class="row">
			<div class="col s12 m6">
				<div class="resume__stack">
					<div class="resume__category">
						<h4 class="resume__tit">Experiencia</h4>
						<p class="resume__p">Mi trayectoria profesional</p>
					</div>
					<div class="resume__cards">
						<Experience />
					</div>
				</div>
			</div>
			<div class="col s12 m6">
				<div class="resume__stack">
					<div class="resume__category">
						<h4 class="resume__tit">Educación</h4>
						<p class="resume__p">Mi trayectoria académica</p>
					</div>
					<div class="resume__cards">
						<Education />
					</div>
				</div>
			</div>
		</div>
		<hr class="main__hr" />
	</div>
</section>
