import React from "react"
import BookCard from "./bookCard"

const BookList = ({books}) => {

  return (
    <div>
      <h2 className="sr-only">Recent Books</h2>
      <div className="row book-card-list">
        {
          books.map(({node}) => {
            if (node.frontmatter.orderOnPage === 1 || node.frontmatter.orderOnPage === 2) {
              return (
                <BookCard key={node.id} cover={node.fields.cover} book={node.frontmatter} />
              )
            } else {
              return null
            }
          })
        }
      </div>
    </div>
  )
}

export default BookList
