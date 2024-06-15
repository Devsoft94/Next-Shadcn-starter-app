# Next.js & Shadcn Starter Template

## Introduction

The Next.js Shadcn starter template is a powerful starting point for building modern web applications with Next.js, a popular React framework. Developed by Shadcn, this template combines Next.js with a sleek and customizable design, making it ideal for developers looking to create stylish and responsive web applications quickly.

## Folder Structure and Its Purpose

-   **public:** Contains all necessary images and icons.
-   **app:** This folder is crucial for routing. Any folder inside this directory creates a route. If the folder name is wrapped in braces, it won't create a route; instead, it will create a grouping. The layout page is shared among all child routes. Every folder must contain a page named `page.tsx`.
-   **components:** This folder contains all custom components used to compose a page. The components are further divided into:
    -   **Blocks:** Contains complete sections of components, such as a header section, a footer section, etc.
    -   **Custom-UI:** Contains customized UI components.
    -   **Theme:** Contains components required for theme-mode switching.
    -   **ui:** Contains all atomic-level components used to compose component blocks.
-   **config:** Contains configuration files for the project.
-   **hooks:** Contains custom hooks.
-   **lib:** Contains fonts and other useful helper functions.
-   **services:** Contains backend API services.
-   **style:** Contains global stylesheets. This folder includes a `variables.css` file; you can modify this file to customize theme colors.
-   **utils:** Contains reusable and shared functions.
-   **_.eslintrc.json_**
-   **_.gitignore_**
-   **_components.json_**
-   **_next.config.mjs_**
-   **_package-lock.json_**
-   **_package.json_**
-   **_tailwind.config.ts_**
-   **_tsconfig.json_**

## Guide for Composing Layout Columns

In `@/components/ui/layout-boxes.tsx`, the `layout-boxes` file contains `Container`, `Row`, `Column`, `HGroup`, and `VGroup` components.

-   **Container:** Creates a flex container that determines the responsive width of the web page according to the viewport.
-   **Row:** To create responsive columns, wrap columns inside a row. **The horizontal negative margin of the row must be equal to the horizontal padding of the container.**
-   **Column:** Two essential class names are `breakPoint:w-1/[Column_Number]` and `p-[x]`. The width class determines the number of columns in the respective breakpoint, and the padding class determines the gap between columns. **The gap between columns = padding/2.**
-   **HGroup:** A flex-box used to group items horizontally (default).
-   **VGroup:** A flex-box used to group items vertically.

```jsx
<Container>
    <Row>
        <Column className='md:w-1/x p-x'>Column 01</Column>
        <Column className='md:w-1/x p-x'>Column 02</Column>
    </Row>
</Container>
```

-   **v-group :** will create a flex box use to group flex items horizontally (Default).
-   **group :** will create a flex box use to group flex items Vertically.

> Use `justify-[*]` To control the position along main(x) axis, `content-[*]` to control the vertical position along cross-axis(y) if wrap enables or `items-[*]`

## How to use this?

1. Clone the repository
2. Edit & Update `package.json` file according to project need
3. Run the command in terminal `npm install`
4. Run the command in terminal `npx shadcn-ui@latest add` to get the available component's list
5. To select the component use `Space Bar`
6. Run the command in terminal `npm run dev` to start the development server
7. Congratulation! you are ready to go.
