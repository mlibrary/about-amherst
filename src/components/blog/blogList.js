import React from "react"
import BlogCard from "./blogCard"

const BlogList = ({blog, cardStyle}) => {
  return (
    <section className="blog-card-list">
      <h1>Blog</h1>
    {
      blog.map(({node}) => {
        return <BlogCard key={node.id} singleBlog={node} cardStyle={cardStyle}/>
      })
    }
    </section>
  )
}

export default BlogList
