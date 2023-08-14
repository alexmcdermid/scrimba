import React from 'react'
import { Link } from 'react-router-dom'
import Jumbotron from '../Jumbotron'
import BackButton from '../BackButton'

const Blog = () => {
  const blogs = [["rails-testing", "Rails Testing; The Battle of Factories vs Fixtures when using Rspec"]]

  return (
    <Jumbotron>
      <h1 className="display-4">Blog</h1>
      <p className="lead">
        A place to store some blog posts
      </p>
      <div className="d-flex gap-2">
        {blogs.map((blog, index) => {
          return (
            <Link
              key={index}
              to={`/blog/${blog[0]}`}
              className="btn btn-primary"
              role="button"
            >
              {blog[1]}
            </Link>
          )
          })}
        <BackButton />
      </div>
      </Jumbotron>
  )
}

export default Blog