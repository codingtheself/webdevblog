<script lang="ts">
    import Header from "../lib/Header.svelte";
    import Contentbox from "../lib/Contentbox.svelte";
    import Footer from "../lib/Footer.svelte";

    import Image from "../lib/Image.svelte";

    const subTitle = "What's my Goal";
    const title = "Day 05: Rewriting Svelte and Image Problem";

    const back_url = "/posts/day04";
    const next_url = "/posts/day06";

</script>

<Header {title}>
    <Contentbox {subTitle}>

        <ul>
          <li>Start rewriting some parts of my original HTML blog using Svelte.</li>
          <li>Make reusable Svelte components like <code>Navbar</code>, <code>ContentBox</code>, <code>Header</code>, <code>Footer</code>.</li>
          <li>Try building a small CLI tool in JavaScript that converts Markdown files into HTML.</li>
        </ul>

         <br>

      <h3><u>Problems I Faced</u></h3>

        <ul>

          <li>
            I started rewriting my this original HTML blog to integrate <b><a href="https://svelte.dev/docs/svelte/overview">Svelte</a></b>. But got stuck while trying to add images.
            <br><br>
            For some reason, the image paths aren't rendering correctly in the generated HTML. Need to debug that soon.
          </li>

          <br>

          <li>
            Another thing: I can navigate between pages using <code>use:link</code> on anchor tags, but directly visiting URLs like <code>/post/day05</code> doesn't render the right page (404).
            <br><br>
            Maybe it's something with hash-based routing or the Vite server setup. Will dive deeper tomorrow.
          </li>
        </ul>

      <br>

       <h3><u>What I've Learned</u></h3>

        <ul>
          <li>
            Creating small, reusable components in Svelte using <code>&lt;slot /&gt;</code>
          </li>

          <br>

          <li>
            Started creating a Markdown-To-HTML converter in NodeJS to help me write blog posts by only writing markdown and it will generate the appropriate HTML file which I can use.
          </li>
          <br>

          <li>
            CLI tools feel fun to build. Even if it's just parsing markdown and printing HTML — seeing the result instantly is awesome.
          </li>
        </ul>

        <Image image_src="assets/images/day05-svelte-modularity-routing.png" image_alt="VS Code and me rewriting the original blog using Svelte" image_width="700vw" image_height="470vh" image_caption="Rewriting and creating components for svelte" />

        <Image image_src="assets/images/day05-svelte-conditionals.png" image_alt="trying svelte to render html for each item in the array" image_width="700vw" image_height="470vh" image_caption="trying svelte to render html for each item in the array" />


        <Footer {back_url} {next_url} />
    </Contentbox>
</Header>



