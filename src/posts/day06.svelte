<script lang="ts">
    import Header from "../lib/Header.svelte";
    import Contentbox from "../lib/Contentbox.svelte";
    import Footer from "../lib/Footer.svelte";

    import Image from "../lib/Image.svelte";

    const subTitle = "What's my Goal";
    const title = "Day 06: Finally Integrated Svelte Library in my Blog";

    const back_url = "/posts/day05";
    const next_url = "/";

</script>

<Header {title}>
    <Contentbox {subTitle}>

        <ul>
          <li>Completely Rewrite my Blog using Svelte Library</li>
          <li>Solve the image loading issue in Svelte</li>
          <li>Practice some C coding exercises on <a href="https://exercism.org/tracks/c">exercism C Track</a></li>
        </ul>

         <br>

      <h3><u>Problems I Faced</u></h3>

        <ul>

          <li>
            Well, I was able to use svelte in my blog but it actually created a <b>Single-Page Static Site</b>. I don't know if it's a good thing or not.
          </li>

          <br>

          <li>
            I came to know that I am really bad at <b>String manipulation</b> or handling especially in C while doing some exercises on exercism.org
          </li>

          <br>

          <li>
            Also, as I was writing lots of routes for my currently 6 blog posts, I realized that the code was getting messy.
          </li>
        </ul>

        <Image image_src="assets/images/day06-too-many-routes.png" image_alt="my router.js file in VS Code, it is getting messier" image_width="800" image_height="500" image_caption="my router.js file is getting messier, How can I fix this?" />

      <br>

       <h3><u>What I've Learned</u></h3>

        <ul>
          <li>
            I learned a lot about my weakness while trying to solve some coding exercises under a timer.
          </li>

          <br>

          <li>
            I also fixed the image loading problem as I asked <a href="https://www.linkedin.com/in/csm-csm-49a014349/">csm</a>. 
            <br><br>
            It was simple to fix as I just had to move the <code>assets</code> folder from <code>src/</code> to <code>public/</code> folder.
          </li>
          <br>

          <li>
            Now, Hopefully build this <i>svelte</i> page and then, push the files in the <code>dist/</code> folder to GitHub and everything works fine.
          </li>
        </ul>


        <Footer {back_url} {next_url} />
    </Contentbox>
</Header>