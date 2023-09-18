import React from 'react'
import { Link } from 'react-router-dom'
import Gist from '../Gist'
import { CodeBlock, dracula } from 'react-code-blocks'

const AhoyOptimizationBlog = () => {
  return (
    <div className='container'>
      <h1>Ahoy Optimization</h1>
      <h3>How to's and good practices for keeping Ahoy Events and Visits speedy</h3>
      <hr/>
      <h2>Recap to Ahoy Events and Visits</h2>
      <p>
        Ahoy is a Ruby gem often used in Ruby on Rails applications for tracking events and user visits. It helps you analyze what users do and how they interact with your application. The Ahoy gem essentially allows you to track two types of records:
      </p>
      <ul>
        <li>
          Visits: A visit represents a user session. A new visit is created whenever a user comes to the site after a certain period or from a new location. Visit records typically include information like the user's IP address, geographical location, and user agent, among other details.
        </li>
        <li>
          Events: An event is a specific action taken during a visit. This could be anything from clicking a button to viewing a page. Events are linked to visits and usually contain additional properties that describe the action in more detail.
        </li>
      </ul>
      <p>In a default Rails setup with Ahoy, your database would have two tables, ahoy_visits and ahoy_events. Below is how the schema for these tables might look.</p>
      <Gist id="c92b529be5ff9eea9786c9bdecde5a98" />
      <Gist id="7c7105bf8af97078f95923eb1deb1d8f" />
      <p>In these tables:</p>
      <ul>
        <li>visit_id and user_id in the ahoy_events table are foreign keys that link each event to a visit and user.</li>
        <li>name in the ahoy_events table would be the name of the event ("Clicked Button", "Viewed Page", etc.).</li>
        <li>properties is a JSONB column that allows you to store additional attributes for each event in a flexible JSON format.</li>
      </ul>
      <p>So, now, you've set up Ahoy in your Rails application and you're capturing rich, insightful data on user behavior. That's great—but what happens when the user base grows, and along with it, your Ahoy data tables? As you scale, performance issues may start to creep in, affecting the overall performance of your application.</p>
      <p>This is where Ahoy optimization strategies come into play. If you're committed to maintaining a high-performing application while still leveraging the full power of Ahoy, then the following sections are designed specifically for you. From smart database scaling strategies to application-level improvements and infrastructure tweaks, this read will highlight proven ways to keep your Ahoy Events and Visits as speedy as they are insightful.</p>
      <h2>Optimizing Ahoy at the Application Level</h2>
      <p>Before diving into the deep waters of database optimization and infrastructure scaling, it's often beneficial to start with the codebase itself. This section will guide you through application-level strategies aimed at ensuring that your Ahoy events and visits tracking is efficient right from the start.</p>
      <h3>Rate Limiting</h3>
      <p>What: Implementing controls to restrict the rate of requests from clients.</p>
      <p>Why: To prevent accidental or intentional heavy usage that could bring down the application.</p>
      <p>How: Use middleware like Rack::Attack in your Rails application.</p>
      <h3>Batching</h3>
      <p>What: Writing multiple events to the database in a single transaction.</p>
      <p>Why: Reduces the overall database resources needed for writing.</p>
      <p>How: Use ActiveRecord’s import method or database-specific batch operations.</p>
      <h3>Asynchronous Processing</h3>
      <p>What: Offloading heavy lifting tasks to background jobs.</p>
      <p>Why: Frees up the main thread, improving the overall performance of the application.</p>
      <p>How: Utilize background job frameworks like Sidekiq or Delayed Job.</p>
      <h3>Optimize Queries</h3>
      <p>What: Fine-tuning SQL queries.</p>
      <p>Why: Even minor adjustments can yield substantial performance gains.</p>
      <p>How: Use tools like the bullet gem to identify N+1 queries and other inefficiencies.</p>
      <h2>Optimizing Ahoy at the Database Level</h2>
      <p>Once you've streamlined the application level, the next stop is the database. In a tracking-intensive application, your database can quickly become a bottleneck. This section focuses on strategies specific to optimizing Ahoy events and visits, helping your database keep pace with your growing needs.</p>
      <h3>Optimizing Queries with the Bullet Gem Explained</h3>
      <p>What: Using the Bullet Gem to Find N+1 Queries</p>
      <p>Bullet is a gem that helps you increase your application's performance by reducing the number of queries it makes. It will watch your queries while you develop your application and notify you when you should add eager loading (includes, joins, etc.), when you're using eager loading that isn't necessary, and when you should use counter cache.</p>
      <p>Why: The N+1 Query Problem</p>
      <p>The N+1 query problem occurs when the code retrieves a set of objects and their associated objects individually. For example, if you have a User model and each user has many Ahoy::Events, an N+1 issue would happen if you fetch each Ahoy::Event for each user one by one.</p>
      <p>In simple terms, you make 1 query to retrieve the users (N), and then for each user, you make another query to retrieve their events (+1 for each user). This is highly inefficient and can slow down your application, especially when dealing with tables as heavy as ahoy_events and ahoy_visits.</p>
      <p>How: Implementation and Monitoring</p>
      <p>First, add the Bullet gem to your Gemfile and bundle install.</p>
      <p>
        <CodeBlock
          text='gem "bullet"'
          language='ruby'
          showLineNumbers={true}
          theme={dracula}
        />
      </p>
      <p>Enable Bullet in your config/environments/development.rb.</p>
      <p>
        <CodeBlock
          text='config.after_initialize do
  Bullet.enable = true
  Bullet.alert = true
  Bullet.console = true
  # other Bullet configurations
end'
          language='ruby'
          showLineNumbers={true}
          theme={dracula}
        />
      </p>
      <p>With Bullet enabled, every time you navigate through your application in the development environment, Bullet will alert you whenever it detects an N+1 query, either through a JavaScript alert or by logging it to the console. You can also add more notification channels like emails or Slack.</p>
      <p>Real-world Example with Ahoy</p>
      <p>Let's say we want to find all the events associated with a list of visits:</p>
      <p>
        <CodeBlock
          text='# Before optimization
  visits = Ahoy::Visit.all
  visits.each do |visit|
    events = Ahoy::Event.where(visit_id: visit.id)
      # do something with events
    end'
          language='ruby'
          showLineNumbers={true}
          theme={dracula}
        />
      </p>
      <p>This would result in an N+1 problem. Bullet would notify us about it, and we could optimize it like so:</p>
      <p>
        <CodeBlock
          text='# After optimization
  visits = Ahoy::Visit.includes(:events).all
  visits.each do |visit|
    events = visit.events
    # do something with events
  end
          '
          language='ruby'
          showLineNumbers={true}
          theme={dracula}
        />
      </p>
      <p>This preloads the events for each visit in a single query, eliminating the N+1 issue. By integrating Bullet into your workflow, you can proactively identify and eliminate inefficient queries, making your application, including Ahoy Events and Visits, more efficient and scalable.</p>
      <h3>Sharding</h3>
      <p>What: Breaking up large database tables into smaller, more manageable pieces.</p>
      <p>Why: As your Ahoy events and visits tables grow, queries can become slower. Sharding can help by dividing the large table into smaller, faster, more easily managed tables ('shards').</p>
      <p>How: This often involves partitioning tables based on certain criteria like user ID or time ranges.</p>
      <h3>Separate Databases (Highly Recommended)</h3>
      <p>What: Moving Ahoy-related tables into a separate database instance.</p>
      <p>Why: This isolates Ahoy's load from your main application database, preventing any performance degradation in your primary database.</p>
      <p>How: Utilize Rails' multiple databases feature or third-party solutions to route Ahoy queries to a different database.</p>
      <h3>Separate Databases Explained (Ruby on Rails 6+)</h3>
      <p>When your application grows, maintaining database performance becomes increasingly critical. With tools like Ahoy that gather valuable analytics, the database can quickly become bloated, affecting the entire application's performance. Rails 6+ offers a built-in feature for managing multiple databases, making it easier to separate concerns and enhance performance.</p>
      <p>Here's how to set it up:</p>
      <p>Update Database Configuration: Open your config/database.yml file and configure a separate database for Ahoy:</p>
      <p>
        <CodeBlock
          text='development:
  primary:
    database: my_primary_database
    user: my_database_user
    password: password
    # ... other configurations
  ahoy:
    database: my_ahoy_database
    user: my_ahoy_database_user
    password: ahoy_password
    # ... other configurations
          '
          language='ruby'
          showLineNumbers={true}
          theme={dracula}
        />
      </p>
      <p>Run Migrations for Ahoy Database: Rails 6+ allows you to run migrations for a specific database. Use the following command:</p>
      <p>
        <CodeBlock
          text='rails db:migrate:up DATABASE=ahoy'
          language='ruby'
          showLineNumbers={true}
          theme={dracula}
        />
      </p>
      <p>Update Ahoy Models: In your Ahoy models (Ahoy::Event and Ahoy::Visit), you'll need to specify which database they should connect to. Update the models like so:</p>
      <p>
        <CodeBlock
          text='class Ahoy::Event < ApplicationRecord
  connects_to database: { writing: :ahoy, reading: :ahoy }
  # ... remaining code
end

class Ahoy::Visit < ApplicationRecord
  connects_to database: { writing: :ahoy, reading: :ahoy }
  # ... remaining code
end
        '
          language='ruby'
          showLineNumbers={true}
          theme={dracula}
        />
      </p>
      <p>By implementing these steps, you successfully isolate Ahoy data from your primary application data. This ensures that any heavy read or write operations related to analytics won't interfere with your main application's performance.</p>
      <h3>Data Warehousing</h3>
      <p>What: Transferring older records to a separate system optimized for read-heavy operations.</p>
      <p>Why: This keeps the main database focused on current data, making it faster and more efficient.</p>
      <p>How: Tools like Amazon Redshift or Google BigQuery can be used for this purpose.</p>
      <h3>Archiving and TTL (Time-To-Live)</h3>
      <p>What: Implement an automatic archival strategy for older records or remove them after a certain period.</p>
      <p>Why: Maintains a leaner database by only keeping relevant data.</p>
      <p>How: Use database triggers or scheduled tasks to move or delete old records based on certain conditions.</p>
      <h3>Database Indexing</h3>
      <p>What: Ensuring proper indexes on database tables to improve query performance.</p>
      <p>Why: While indexes can dramatically speed up data retrieval times, they can also slow down write operations. It's crucial to strike a balance.</p>
      <p>How: Evaluate existing indexes and use query analysis tools to identify potential new indexes.</p>
      <h3>Caching</h3>
      <p>What: Using caching to reduce the number of database reads.</p>
      <p>Why: This offloads some of the stress on the database, especially for frequently-read data.</p>
      <p>How: Utilize caching mechanisms like Redis or Memcached for this purpose.</p>
      <h2>Optimizing at the Infrastructure Level</h2>
      <p>The final frontier of performance optimization lies in the underlying infrastructure that hosts your application. In this section, we look at methods to dynamically adapt to varying loads, distribute traffic, and handle data replication, ensuring that your Ahoy tracking capabilities are robust and scalable.</p>
      <h3>Auto-Scaling</h3>
      <p>What: Dynamic resource scaling based on load.</p>
      <p>Why: Adapt to varying loads without manual intervention, thus ensuring high availability and optimized costs.</p>
      <p>How: Cloud-based solutions like AWS Auto Scaling or Kubernetes can help here.</p>
      <h3>Load Balancing</h3>
      <p>What: Distributing incoming database queries across multiple servers.</p>
      <p>Why: Ensures that no single server becomes a bottleneck.</p>
      <p>How: Use load balancers like HAProxy or cloud-based solutions like Amazon RDS.</p>
      <h3>Replication</h3>
      <p>What: Creating copies of the database to offload read queries.</p>
      <p>Why: This separates the read and write loads, allowing the primary database server to focus on write operations.</p>
      <p>How: Use database features like PostgreSQL's streaming replication or third-party tools to manage read replicas.</p>
      <h2>Setting the Stage for Optimized Performance</h2>
      <p>You've just explored the intricate landscape of optimizing Ahoy Events and Visits within a Rails application. While we haven't delved into the step-by-step setup of all these strategies, we've armed you with the knowledge and high-level insights you need to begin thinking critically about your application's performance.</p>
      <p>Optimizing your application is not a one-off task but an ongoing process. The strategies discussed—from application-level tactics like rate limiting and batching to database and infrastructure-level approaches like sharding and load balancing—are conceptual tools to add to your optimization toolkit.</p>
      <p>As you dive into these optimization strategies, you might find yourself curious about how to measure their impact and align them with your broader objectives. If so, don't miss our related article, <Link to="https://harled.ca/blog/achieving_your_goals_through_kpis" target='_blank' role="link">Achieving Your Goals and Finding New Opportunities Using KPIs and Stats</Link>, which will give you actionable insights into tying your optimization efforts back to key performance indicators and objectives.</p>
      <p>Keep in mind that while these best practices are widely applicable, every application has its own set of unique challenges and requirements. The real test comes in adapting and fine-tuning these approaches to meet the specific needs of your application.</p>
      <p>So what's next? Armed with this newfound knowledge, you're well-prepared to delve deeper, whether that's into your own application's code, or into further resources to make these high-level concepts a reality.</p>
    </div>
  )
}

export default AhoyOptimizationBlog