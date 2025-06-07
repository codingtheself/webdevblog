<script lang="ts">
    import Header from "../lib/Header.svelte";
    import Contentbox from "../lib/Contentbox.svelte";
    import Footer from "../lib/Footer.svelte";

    import Image from "../lib/Image.svelte";

    const subTitle = "What's my Goal";
    const title = "Day 01: The Starting of Web Dev"

    const image_src = "assets/images/day01-image.png";

    const back_url = "/about";
    const next_url = "/posts/day02";

</script>

<Header {title}>
    <Contentbox {subTitle}>
        <p>
                My Goal is here is to <i>learn web development</i> and I was stuck in the <b>Tutorial Hell</b> for too long. I am frustated that I have joined lots of courses, watched lots of YouTube videos and also created lots of websites using HTML, CSS, Javascript and even PHP. <br>
                
                <br>
                But still when it comes to creating actual worthwhile project or full-fledged website I didn't created any till now. So, here is the challenge I took on myself.<br>

                <br>
                Where I will be learning again the web development (right now many things have come like MERN stack and Django and many more But I will starting from scratch).<br>
                
                <br>
                And <b>whatever I learn, I will document it on my blog which I will be creating as I go and learn more.</b>

                <br>
                <br>
                And that's why I setup this <i>GitHub Page</i> to host my blog which is right now just plain HTML and minimum CSS (inline).

                <br>
                <br>

                And by the end of this challenge maybe on <b>Day 101</b> I will have transformed this entire site into a full-fledged blog site using the modern tech stack like <i>MERN Stack</i><br>

                <br>
            </p>

            <h3><u>Come, JOIN ME!</u></h3>

            <p>
                If you are also learning Web Development or Aspiring to be a Full-Stack Web developer then, Join me on this journey by hitting me up on my social media handles: </p>

                <ul>
                    <li><a href="https://x.com/coding_theself">Twitter -> @Coding_TheSelf</a></li>
                    <li><a href="https://www.linkedin.com/in/sourav-yadav-self/">LinkedIn -> sourav-yadav-self</a></li>
                    <li><a href="https://dev.to/coding_self">Dev.To -> coding_self</a></li>
                </ul>

                <br>

                Or, if you suggest some other social media where this collaboration would be easier then, sure give the suggestion on my Twitter or LinkedIn (since, this site does not have the Comment functionality YET!)

                <br><br>

                And if you are a Senior Dev or just someone who is more experienced or just enthusiastic about teaching others, helping others or wanting to code on a cool project then, also <b>HIT me UP!</b>

                <br><br>

                Until Then, See you!
                <br>
                - Sourav Yadav
                <br><br>    
           
            <hr>
            <h3><u>Challenges I faced today</u></h3>

            Well, I realized how convenient <i>templating</i> things make. Like I had to create multiple HTML files but there was lot of overlap as there was many codes which are just repeating and I want them to repeat.

            <br><br>
            Like the navbar above, I want it to remain the same or consistent and so I have to copy the entire thing again and again to every HTML page. Unlike in php where I can just do <code>include();</code> and that's it.

            <br><br>

            and so, the first thing I will try to find is if I can do <b>templating in plain HTML</b>.

            <br><br>

            Second, I realized that if I update my website and thought of using a database for my posts then, how will I do that? It is all HTML file where I am just writing my post.

            <br><br>

            I would have to parse the HTML file to extract the content of the blog post and then, maybe convert it to <i>MarkDown Files</i> and then, I can save it on the database. Yeah that seems like a good idea.

            <h3><u>What I created and Learned so Far</u></h3>

            <p>
                Well, You are already looking what I have created so far within maybe <b>2.5+ hour</b> of work.
            
                <br><br>

                here is the image below of my code editor, editing this HTML page:
                <br><br>

                <Image {image_src} image_alt="my VS code editor where I am editing this HTML post page" image_width="600" image_height="450" image_caption="VS Code editor, where I am editing this HTML post page"/>


            </p>

            <br>

            <ul>
                <li>The first thing I learned is that: <i>MDN web docs</i> are very good and useful. They are great and I have used it for reference and I would suggest you to learn how to read and use these docs. <br>
                    here, try to find what you want know: <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">MDN Web Docs HTML</a>
                </li>

                <br>

                <li>I have only used little bit of CSS inline in the HTML tags directly instead of using external CSS file right now. As I go and this blog becomes large, I will be needing it soon</li>

                <br>

                <li>I have also created a <i>assets</i> folder where I can place my images I will be using and also css files would go there. You can go ahead and check the code in my <a href="https://github.com/codingtheself/webdevblog">GitHub repo</a></li>

                <br>

                <li>Another Great Resource is: <i><a href="https://www.freecodecamp.org/learn/full-stack-developer/">FreeCodeCamp</a></i></li>
            </ul>

            <br><br>

            <Footer {back_url} {next_url} />

    </Contentbox>
</Header>



