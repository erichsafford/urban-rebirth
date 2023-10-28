# Urban Rebirth Organization Webpage
Author: Erich Gaul

This project was created for a fictional urban renewal group called Urban Rebirth.  The site layout was inspired by [Mercy Corps](mercycorps.org).

### Technologies Used
- Figma
- HTML
- CSS
- React
    - Custom client-side routing
    - Reusable componenets
    - Conditional rendering
- Git
- Markdown documentation/readme

### Project Goals
- Create a fully fleshed-out site for a fictional organization
- Utilize React components to reduce code duplication and improve efficiency of implementation
- Utilize React hooks such as useState for dynamically changing pages
- Implement React Router for client-side routing
- Dynamic layout for different sized devices
- Accessability considered (alt text, symantic HTML, focus vs. hover, contrast, etc.)

### Asthetic Goals
- Simple and polished look
- Clear branding/theming throughout multiple subpages
    - Consistent font choice and styling
    - Use of bold red bars to lead the eye through the page
    - Consistent header and footer sections
- The imaginary organization is urban-based and has a professional, yet youthful culture.
    - Bold red color
    - Sharp corners
    - Minimal and subtle effects (hover on nav links, donate button)
    - Bold and modern typeface

### Project Highlights
- Used pseudo-elements for a cohesive "red bar" look throughout (landing page, who we are, how to help, and where we work).  Vertical bars (where used) are absolutely positioned so they look correct on different sized screens.
- The "Our Work" page has six services to learn more about.  Each icon is clickable, which updates the small blurb and updates the photo switcher to relevant photos for the selected service.
- The "How to Help" page has options for volunteering and donating.  Hovering over each button will cause the blurb to change (onMouseEnter).  The donate button also features another nice hover feature, leading the client to the "donate now" button with a growing dotted line.
- Clicking through to the donate page (either from the header or the How to Help page) navigates to a dummy donation page.  The "one-time/monthly" slider was custom created with a nice animation.

### Challenges and Reflections
Using Figma to design the website before opening the editor was a tremendous help.  It allowed me to hone in on a design theme for the site as a whole, which translated to a very cohesive design.  Although the site is simple, it is polished and has subtle UI touches that bring it a professional feeling.

Organization of my project files and breaking components out into seperate files was a process that went through several iterations.  Originally the header that is used throughout needed to be tweaked so that the layout stayed consistent, but this was solved by creating a generalized component and then strategically inserting it into each page for a unified look (I even opted to have the scroll bar enabled on all pages to prevent the header from popping back and forth).  The styling for each component was also broken out into seperate files as the original grew to be unmanagable.  This is another practice I will continue on future projects.

The client-side routing was relatively straight-forward and simple to implement.  It takes advantage of the "popstate" event in the history API that is fired by the browser's "back" and "forward" buttons.  This allows for the history to be correctly maintained and for the behavior of the buttons to remain intact while still minimizing network calls during navigation.  This routing strategy worked incredibly well and I will definitely use it in future projects.

The interconnected state on the "Our Work" page was the most difficult feature to implement.  I wanted the photo switcher to remain a consistent size, but rotate through a different set of photos depending on the service that is currently selected.  This was able to be accomplished with a simple useState setup.  I initially thought I would need to use the useReducer hook for managing the six service options, but this turned out to be unneccessary as nothing overly complex was changing.

### Conclusion
Overall, I am pleased with the outcome of this project.  It creates a professional, clean, and cohesive site for a fictional not-for-profit organization.  I gained new insights into how to better structure a project from start to finish, how to organize my thoughts and ideas, and I was able to pull together many different skills and concepts I have learned in my web development studies into one package.  Thank you for taking the time to poke around!