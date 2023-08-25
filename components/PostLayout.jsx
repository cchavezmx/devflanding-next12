
export default function PostLayout({ frontmatter, content, menu }) {

  return (
    <main className='content-post'>
      <slide>
        <div id="post_menu" className='slide'>
          {
            Object.entries(menu).map(([key, value]) => {              
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
        <>
          <h1>{frontmatter.title}</h1>          
          <div id="anchor-post" dangerouslySetInnerHTML={{ __html: content }} />
        </>        
      </div>      
    </main>
  )
}