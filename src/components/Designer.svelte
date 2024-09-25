<script>
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
</script>

{#each design as designer}
	<div class="skills__card">
		<img class="skills__skillicon" src={designer.icon} alt="Icono de {designer.name}" />
		<p class="skills__name">
			{designer.name}
		</p>
		<div class="skills__line"></div>
	</div>
{/each}
