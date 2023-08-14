import React from 'react'
import Gist from '../Gist'

const RailsTestingBlog = () => {
  return (
    <div className='container'>
      <h1>Rails Testing; The Battle of Factories vs Fixtures when using Rspec</h1>
      <h2>Rspec</h2>
      <p>
        RSpec is a behavior-driven development (BDD) testing framework for the Ruby programming language. BDD emphasizes writing tests in a more natural language style, making it easier to read and understand the test cases. RSpec provides a rich DSL (domain-specific language) to describe the behavior of Ruby code in a readable manner. Its syntax and structure allow developers to write tests that closely resemble regular English, making it easier for non-technical stakeholders to understand the specifications and behaviors of the system.
      </p>
      <p>
        In Rails, RSpec can replace the default Minitest framework, giving developers a more extensive toolset for writing and organizing tests. It integrates well with other testing tools and libraries.
      </p>
      <h2>Fixtures</h2>
      <p>
        Fixtures are a way of populating your testing database with predefined data before tests run. They're provided by Rails by default. Fixtures are defined in YAML files, and Rails will load these files to set up the test database with a known state.
      </p>
      <p>
        For instance, if you have a model User, you might have a fixture file named users.yml:
      </p>
      <Gist id="cba91829eee245951f20fc737e69272f" />
      <p>
        While fixtures provide a quick way to have a consistent test database state, they can be cumbersome when dealing with complex or related data, or when needing to create unique or randomized data for every test.
      </p>
      <p>
        This is because Fixtures provide static test data which can become cumbersome when managing complex model relationships or requiring dynamic, unique, or randomized data for tests. This static nature can lead to challenges in maintenance, especially with evolving application structures and relationships. Tools like FactoryBot offer more flexibility in such scenarios, enabling dynamic data generation and easier handling of model associations.
      </p>
      <h2>Factories</h2>
      <p>

      </p>
    </div>
  )
}

export default RailsTestingBlog