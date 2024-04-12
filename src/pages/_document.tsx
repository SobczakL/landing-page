import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta property="og:title" content="Lucas Sobczak Portfolio" />
                <meta property="og:description" content="Welcome to my portfolio! I'm Lucas Sobczak, a versatile developer with expertise in full-stack development. Dive into my collection of projects to explore the breadth of my skills and experience. From dynamic full-stack applications to intricate low-level programming projects, each entry demonstrates my ability to tackle diverse challenges and deliver high-quality solutions. Whether you're seeking a developer for your next web application, a collaborator on a cutting-edge software project, or simply interested in exploring innovative technology, I invite you to explore my portfolio and discover the depth of my capabilities." />
                <meta property="og:image" content="images/headshot.png" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
