<script lang="ts">
    import Navbar from "./Navbar.svelte";
    import Contentbox from "./Contentbox.svelte";
    export let title: string;
</script>

<Navbar />

<main id="Home" style="font-size: large;">
  <h1 style="text-align: center;">{title}</h1>
  <hr>

  <slot />
</main>