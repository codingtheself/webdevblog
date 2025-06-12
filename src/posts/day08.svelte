<script lang="ts">
    import Header from "../lib/Header.svelte";
    import Contentbox from "../lib/Contentbox.svelte";
    import Footer from "../lib/Footer.svelte";

    import Image from "../lib/Image.svelte";

    const subTitle = "Trying to do Something";
    const title = "Day 08: Got Overwhelmed + learning TailwindCSS";

    const back_url = "/posts/day07";
    const next_url = "/";

</script>

<Header {title}>
    <Contentbox {subTitle}>

        <ul>
          <li>I have been taking two days of Rest as I was with other things</li>
          <li>trying to learn and use <a href="https://vuejs.org/">Vue.JS</a> before trying <b>ReactJS</b></li>
          <li>I also got some problem with <i>GitHub Page</i> and selecting my <code>/dist</code> folder and not my <code>/root</code> folder.</li>
        </ul>

      <br>

        <Footer {back_url} {next_url} />
    </Contentbox>
</Header>