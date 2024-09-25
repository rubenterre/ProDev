<script>
	const desarrollo = [
		{
			icon: 'icons/html5_icon.svg',
			name: 'HTML'
		},
		{
			icon: 'icons/css_icon.svg',
			name: 'CSS'
		},
		{
			icon: 'icons/javascript_icon.svg',
			name: 'JavaScript'
		},
		{
			icon: 'icons/sass_icon.svg',
			name: 'SASS'
		},
		{
			icon: 'icons/svelte_icon.svg',
			name: 'Svelte'
		},
		{
			icon: 'icons/vite_icon.svg',
			name: 'ViteJS'
		},
		{
			icon: 'icons/bootstrap_icon.svg',
			name: 'Bootstrap'
		},
		{
			icon: 'icons/firebase_icon.svg',
			name: 'Firebase'
		},
		{
			icon: 'icons/wordpress_icon.svg',
			name: 'Wordpress'
		},
		{
			icon: 'icons/github_icon.svg',
			name: 'GitHub'
		}
	];
</script>

{#each desarrollo as developer}
	<div class="skills__card">
		<img class="skills__skillicon" src={developer.icon} alt="Icono de {developer.name}" />
		<p class="skills__name">
			{developer.name}
		</p>
		<div class="skills__line"></div>
	</div>
{/each}
