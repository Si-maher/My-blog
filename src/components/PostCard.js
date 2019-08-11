// Functional component
// Responsible for rendering from each individual post
import React from "react"
import Image from "gatsby-image"
import Styles from "../css/postcard.module.css"
import { Link } from "gatsby"

const PostCard = ({ post }) => {
  console.log(post)

  const { title, date, author, slug } = post.frontmatter
  const img = post.frontmatter.image.childImageSharp.fluid
  return (
    <article className={Styles.card}>
      <div className={Styles.image}>
        <Image fluid={img} />
      </div>
      <div className={Styles.info}>
        <div>
          <h2>{title}</h2>
          <h6>
            <span>by {author}</span>
            <span>{date}</span>
          </h6>
          <p>{post.excerpt}</p>
          <Link to={slug} className={Styles.link}>
            Read More
          </Link>
        </div>
      </div>
    </article>
  )
}

export default PostCard
