import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import markdownItAttrs  from 'markdown-it-attrs';
const postsDirectory = 'public/documentacion_curso/'


export async function getStaticPaths() {
  const files = fs.readdirSync(postsDirectory);
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {

  const exclude = [".git", "css", "index.html", "ima"]

  if (!exclude.includes(slug)) {
    const fileName = fs.readFileSync(`${postsDirectory}${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
      props: {
        frontmatter,
        content,
      },
    };
  }
}

export default function PostPage({ frontmatter, content }) {

  const mdMiddleWare = (contnent) => md().use(markdownItAttrs, {
    // optional, these are default options
    leftDelimiter: '{',
    rightDelimiter: '}',
    allowedAttributes: []  // empty array = all attributes are allowed
  }).render(contnent);

  return (
    <div className='prose mx-2 md:text-font-base'>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: mdMiddleWare(content) }} />
    </div>
  );
}