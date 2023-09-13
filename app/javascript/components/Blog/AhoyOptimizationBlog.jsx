import React from 'react'
import { Link } from 'react-router-dom'
import Gist from '../Gist'

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
      <h2>Optimizing Ahoy at the Database Level</h2>
      <h2>Optimizing at the Infrastructure Level</h2>
      <h2>Setting the Stage for Optimized Performance</h2>
    </div>
  )
}

export default AhoyOptimizationBlog