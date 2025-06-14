<script lang="ts">
    import Header from "../lib/Header.svelte";
    import Contentbox from "../lib/Contentbox.svelte";
    import Footer from "../lib/Footer.svelte";

    import Image from "../lib/Image.svelte";

    const subTitle = "Went Back to basics";
    
    const title = "Day 09: Doing CSS layout Design + learned some ReactJS";

    const back_url = "/posts/day08";
    const next_url = "/";

</script>

<Header {title}>
    <Contentbox {subTitle}>

        <ul>
          <li>Today, I went back to basics and tried to design a rough scratch and then, write the code and make the website repsonsive</li>
          <li>This video helped me a lot: <a href="https://www.youtube.com/watch?v=l04dDYW-QaI">https://www.youtube.com/watch?v=l04dDYW-QaI</a></li>
          <li>Also, I tried to tinker with some ReactJS and now I am getting hang of the basics of how it works</li>
          <br>

        </ul>
          <Image image_src="assets/images/day09-design.png" image_alt="designing the basic layout in excalidraw" image_width="800" image_height="500" image_caption="rough design in excalidraw" />
          <Image image_src="assets/images/day09-website.png" image_alt="the website I built with HTML and CSS following the design" image_width="800" image_height="500" image_caption="Can suggest me good color themes" />

      <br>
        <Footer {back_url} {next_url} />
    </Contentbox>
</Header>