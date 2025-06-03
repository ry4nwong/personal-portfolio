## Overview

QuickBooks Desktop users often faced a slow, unreliable migration experience when switching to QuickBooks Online, resulting in lower conversion rates and delayed onboarding. To address this, I contributed to the development of a new migration interface that significantly improved UI load times through component-level memoization, and built a backend service to accurately persist each user’s migration progress across multiple databases.

These efforts led to a smoother transition process for over 1.5 million users and supported faster, more reliable feature releases.

## Key Contributions

- Improved customer conversion and shortened time-to-value by 30% by delivering a migration component using **React**, **Redux**, and **Typescript** to enable faster UI response times for clients switching from QuickBooks Desktop to Online.
- Developed a **Spring Boot** microservice to accelerate migration state tracking across **MySQL** and **MongoDB** databases, reducing debugging effort by 40% and enabling faster release cycles for onboarding features used by 1.5M+ clients.
- Reduced customer-facing bugs by 22% in pre-release Canary environments by designing proactive **JUnit 5** test cases to ensure data persistence for tax liability reports, successfully improving release reliability for future iterations.
- Partnered with product and engineering teams to translate business goals into technical sprints using **Jira**, maintaining daily meetings to support timely delivery of migration features tied to key financial initiatives.
