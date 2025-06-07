<script lang="ts">
    import Header from "../lib/Header.svelte";
    import Contentbox from "../lib/Contentbox.svelte";
    import Footer from "../lib/Footer.svelte";

    import Image from "../lib/Image.svelte";

    const subTitle = "What's my Goal";
    const title = "Day 02: Styling my Blog";

    const back_url = "/posts/day01";
    const next_url = "/posts/day03";

</script>

<Header {title}>
    <Contentbox {subTitle}>

            <ul>
                <li>Today, my goal is to stylize this blog a little more starting with this navbar.</li>
                <li>I will be externalize my CSS file now in the <code>assets/style.css</code></li>                    
            </ul>

            <br>

            <h3><u>Problems I Faced</u></h3>

            <ul>
                <li>
                    First, Problem I faced was adding the external css file to all the html files using <code>link</code> tag.
                    <br><br>
                    as I was using <i>relative path</i> to specify the path of <code>style.css</code> in the <code>assets/style.css</code>

                    <br><br>
                    But the <i>posts</i> html page was finding the <i>assets</i> folder inside it's <i>posts/</i> folder. And to use <b>absolute path</b> causes problems in my local live server and the GitHub pages which has different url
                </li>
            </ul>

            <br>

           
            <h3><u>What I've Learned</u></h3>

            <ul>
    
                <li>
                    I am trying and exploring <i>Svelte</i>. You can check it out here: <a href="https://svelte.dev/">Svelte</a>
                </li>

                <br>
                <li>
                    I learned about the <pre>&lt;pre>&lt;/pre> tags</pre> and escape characters for html to display the code and html tags as it is without the browser rendering it.
                    <br><br>
                    here are the docs link for it: <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/pre">MDN docs for pre-tags</a>
                </li>

                <br>

                <li>
                    I also learned to use <code>git branch && git checkout -b</code>. Quite important in case I mess something up so I can always revert but still figuring out lot of things in <i>git</i>
                </li>

                <br>

                <li>
                    I did <code>git merge</code> successfully, I have merge the <code>stylize </code> branch to the <code>main </code> branch.
                    <br>
                </li>

                <Image image_src="assets/images/gitmerge.png" image_alt="my terminal output of merging stylize branch with main branch" image_width="800" image_height="350" image_caption="Terminal Output of <code>git merge stylize</code> to main branch" />


                <br>

                <li>
                        Now, I have use the <code>flexbox</code> somehow still not quite sure about the theory behind it but using flexbox with <b>Dev Tools</b> of the browser did the job.
                        <br><br>

                        learning to use the <b>DevTools</b> of the browser is necessary I realized. I can visualize the box models, css properties and it also has in-built color picker.
                        <br><br>

                        Now, if any of you have some ideas on the UI design to make it more beautiful and fast while keeping the design minimalist then, You can suggest me.

                        <br><br>
                        you can look <code>style.css</code> code in my GitHub repo
                        <br>

                        </li>
                </ul>


            <br><br>

            <Footer {back_url} {next_url} />
    </Contentbox>
</Header>



