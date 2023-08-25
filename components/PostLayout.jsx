'use client'
import { useState, useEffect } from 'react'
import mardownItAttrs from 'markdown-it-attrs'
import md from 'markdown-it';
import path from 'path'

export default function PostLayout({ frontmatter, content, menuOptions }) {
  const [isClient, setIsClient] = useState(false)
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

  const middleware = ( content ) => md().use(mardownItAttrs, {  
    leftDelimiter: '{',
    rightDelimiter: '}',
    allowedAttributes: [] 
  })
  .use(imageInterceptPlugin)  
  .render(content)


  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <main className='content-post'>
      <slide>
        <div id="post_menu" className='slide'>
          {
            Object.entries(menuOptions).map(([key, value]) => {              
              return (
                <div key={key} className='slide-item'>
                  <h5>{value[0].tags}</h5>
                  <ul>
                    {
                      value.map((item) => {
                        return (
                          <li key={item.slug}>
                            <a href={`/post/${item.slug}`}>{item.metaTitle}</a>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              )
            })
          }
        </div>              
      </slide>
      <div id="post">
        {isClient && (
          <>
            <h1>{frontmatter.title}</h1>          
            <div id="anchor-post" dangerouslySetInnerHTML={{ __html: middleware(content) }} />
          </>
        )}

        {
          !isClient && (
            <main className='loading_post'>
              <h1>Cargando contenido...</h1>
            </main>
          )
        }
      </div>      
    </main>
  )
}