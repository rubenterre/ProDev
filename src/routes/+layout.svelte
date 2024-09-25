<script>
import '@materializecss/materialize/dist/css/materialize.min.css';
import '@materializecss/materialize/dist/js/materialize.min.js';

    import '../styles/style.scss'

    onMount(() => {
  M.AutoInit();
});

    import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<Header/>
<slot></slot>
<Footer/>

