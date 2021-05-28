import createImageUrl from '../utils/createImageUrl'

const ArticleItem = (props) => {
  const {title, caption, imageUrl, url} = props
  const imageurl = createImageUrl(imageUrl)
  return(
    <a href={url} target='_blank' style={{textDecoration:'none', color:'black', fontFamily:'Inter'}}>
    <div className="article_content_wrapper" style={{cursor:"pointer"}}>
        <img src={imageurl} height="320" width="380" alt="article-image"></img>
        <div className="article_content">
            <p><strong>{title}</strong>< br />{caption}</p>
        </div>
    </div>
    </a>
  )
  }
export default ArticleItem