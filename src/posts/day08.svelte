<script lang="ts">
    import Header from "../lib/Header.svelte";
    import Contentbox from "../lib/Contentbox.svelte";
    import Footer from "../lib/Footer.svelte";

    import Image from "../lib/Image.svelte";

    const subTitle = "Trying to do Something";
    
    const title = "Day 08: Got Overwhelmed + learning TailwindCSS";

    const back_url = "/posts/day07";
    const next_url = "/posts/day09";

</script>

<Header {title}>
    <Contentbox {subTitle}>

        <ul>
          <li>there is too many things going on all at the same time so got overwhelmed and thought of going back to some basics one by one.</li>
          <li>So, I am trying to create beautiful looking and also responsive websites with <a href="https://tailwindcss.com/">TailwindCSS</a></li>
          <br>

        </ul>
          <Image image_src="assets/images/day08-tailwindcss.png" image_alt="my attempt to start start coding with tailwindcss and make a login page" image_width="800" image_height="500" image_caption="my attempt to start code and build a Login Page, learning quite a lot" />
      <br>
        <Footer {back_url} {next_url} />
    </Contentbox>
</Header>