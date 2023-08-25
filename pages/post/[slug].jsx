import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import md from 'markdown-it';
import markdownItAttrs  from 'markdown-it-attrs';
import PostLayout from '../../components/PostLayout';

const postsDirectory = 'public/documentacion_curso/'


export async function getStaticPaths() {
  const files = fs.readdirSync(postsDirectory);  
  
  const exclude = [".git", "css", "index.html", "ima"]
  const validPaths = []
  files.forEach((fileName) => {
    if (!exclude.includes(fileName)) {      
      validPaths.push({
        params: {
          slug: fileName.replace('.md', ''),
        },
      });
    }          
  });

  return {
    paths: validPaths,
    fallback: false,
  };

}

export async function getStaticProps(props) {
  const { params: { slug } } = props
  const filenames = fs.readdirSync(postsDirectory);  

  const resolveTitles = (filename) => {        
    const slug = filename.replace(/\.md$/, '')    
    const exclude = [".git", "css", "index.html", "ima"]

    if (!exclude.includes(slug)) {      
      const title = fs.readFileSync(path.resolve(postsDirectory, filename), 'utf8')
      const { data } = matter(title)      
      if (data.metaTitle) {        
        return { ...data, slug }
      }      
    }
  }

  const menu = await Promise.resolve(filenames.map(resolveTitles))
  .then((data) => {
      const menu = data.filter((item) => item !== undefined)
      .reduce((gpo, post) => {    
        const { tags } = post        
          gpo[tags] = gpo[tags] || []
          gpo[tags].push(post)
          return gpo    
      }, {})

      return [...Object.values(menu)]
  })  

  console.log(menu)
  
  if (slug) {
    const fileName = fs.readFileSync(`${postsDirectory}${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
      props: {
        frontmatter,
        content,
        menu
      },
    };
  }
}

export default function PostPage(params) {
  const { frontmatter, content, menu } = params;
  console.log(menu)
  
  const imageInterceptPlugin = (md) => {
    const defaultRender = md.renderer.rules.image;
  
    md.renderer.rules.image = (tokens, idx, options, env, self) => {      
      const token = tokens[idx]

      token.attrs.push(['class', 'img-fluid'])            
      const src = token.attrs[token.attrIndex('src')][1]       

      const newSrc = path.join("/documentacion_curso/", src)        
      token.attrs[token.attrIndex('src')][1] = newSrc      
      return `<div class="imagen-post-container">${defaultRender(tokens, idx, options, env, self)}</div>`
    }
  }

  const mdMiddleWare = (contnent) => md().use(markdownItAttrs, {
    // optional, these are default options
    leftDelimiter: '{',
    rightDelimiter: '}',
    allowedAttributes: []  // empty array = all attributes are allowed
  })
  .use(imageInterceptPlugin)
  .render(contnent);

  return (
    <main>
      <PostLayout 
        frontmatter={frontmatter} 
        content={mdMiddleWare(content)} 
        menu={menu}
      />
    </main>
  );
}