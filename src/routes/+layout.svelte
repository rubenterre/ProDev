<script>
	import '../styles/materialize.scss';
	import '../styles/style.scss';

	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<Header />
<slot></slot>
<Footer />
