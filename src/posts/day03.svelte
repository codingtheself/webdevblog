<script lang="ts">
    import Header from "../lib/Header.svelte";
    import Contentbox from "../lib/Contentbox.svelte";
    import Footer from "../lib/Footer.svelte";

    import Image from "../lib/Image.svelte";

    const subTitle = "What's my Goal";
    const title = "Day 03: Trying Svelte and Routing";

    const back_url = "/posts/day02";
    const next_url = "/posts/day04";

</script>

<Header {title}>
    <Contentbox {subTitle}>

        <ul>
          <li>
            I want to integrate <i>Svelte</i> into my existing blog structure. As suggested by <b><a href="https://dev.to/csm18">@csm</a></b> in my previous post.
            <br><br>
            <Image image_src="assets/images/csm-comment.png" image_alt="csm-comment suggesting to use svelte" image_width="630" image_height="300" image_caption="dev.to/csm18 comment" />
          </li>
          <br>
          <li>to modularize my HTML pages using Svelte components.</li>
          <li>Try out client-side routing using <code>svelte-spa-router</code>.</li>
        </ul>
        
        <br>

         <h3><u>Problems I Faced</u></h3>

        <ul>
          <li>
            First, I created the <i>svelte project using Vite</i> by running this code:<br>
            <br><code>bun create vite svelteapp --template svelte</code>            
            <br><br>
            
            And then, copy the pages like <code>index.html</code>, <code>about.html</code>, <code>posts.html</code> to the <code>public/</code> folder
            <br><br>

            I managed to break some parts of repetitive code into separate <code>.svelte</code> files and it worked fine. Though there was still lot of repetition like all the individual post html pages.
            <br>

            <Image image_src="assets/images/tryingtoimplsvelte.png" image_alt="VS Code inside which I am coding my App.svelte file" image_width="650" image_height="450"image_caption="writing App.svelte" />
          </li>

          <br>

          <li>
            Then, I faced <b>a major problem of <i>Routing</i></b>, I thought of doing the client-side routing to route my pages using the <code>svelte-spa-router</code> package
            <br><br>

            I added the package by: <code>bun add svelte-spa-router</code>

            <br><br>
            but Even after setting it up, I couldn't see anything in the browser — probably due to incorrect base path or missing hash in the URL.
            <br>
            Still working on making it render the correct component on navigation.
          </li>

          <br>
        </ul>

        <Image image_src="assets/images/tryingsparouter.png" image_alt="VS Code and Vite running and Me trying to implement svelte-spa-router but it is not working" image_width="680" image_height="450" image_caption="Trying to implement svelte-spa-router" />
        <br>

         <h3><u>What I've Learned</u></h3>

        <ul>
          <li>
            Learned about Svelte through it's <a href="https://svelte.dev/docs/svelte/">Svelte Docs</a>. And it is really nice and provides a lightweight alternative to <i>ReactJS</i>
          </li>

          <br>

          <li>
            I also learned that you can open <i>live server</i> from any directory to host your files and html by using <code>npm</code> or <code>bun</code>
            <br>
            <br>

            for bun, run: <code>bunx live-server</code>, it will install some necessary things into your <i>~/.bun/install/cache/</i>
            <br><br>
            for npm, run: <code>npm install -g live-server</code>, this will install the <i>live-server</i> tool globally and you can use it by running <code>live-server</code>
          </li>

          <br>

          <li>
            I also explored how to break my HTML structure into reusable components — like <code>Navbar.svelte</code>, <code>Post.svelte</code>, etc. Though I know it is sub-optimal as I still didn't modularize the individual html post pages
          </li>

          <br>

          <li>
            Slowly getting comfortable with Vite + Bun combo for faster builds and dev server.
          </li>
        </ul>


        <Footer {back_url} {next_url} />
    </Contentbox>
</Header>



