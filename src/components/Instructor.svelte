
<script>
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
</script>

{#each docencia as instructor}
	<div class="skills__card">
		<img class="skills__skillicon" src={instructor.icon} alt="Icono de {instructor.name}" />
		<p class="skills__name">
			{instructor.name}
		</p>
		<div class="skills__line"></div>
	</div>
{/each}
