# React + TypeScript + Vite

# Getting Started

## : Start your Application

```bash
# using npm
npm i
npm run dev
```

## Notes

-   Add routing to login and help page.
-   In the Components folders created Layouts, Pages and Screens that could be re used.
-   Semantic ui Buttons, Form, FormField, Message were used
-   Use classnames to be able to add additional styles if needed.
-   In LoginPage used useSearchParams to identify what screen to use and toggle with Link's to change screen.
-   Responsive
-   Two states 'loginData' and 'error' are passed as props along with some handlers(changeHandler and submitHandler).
    -   changeHandler to update the states.
    -   submitHandler to submit a request to an end point.
-   Used vite.config.ts because is straight out of the box to be ready to used.
-   Just used the neccesary components from semantic ui to not create from scratch components and just overide some of the with aditional styling.
