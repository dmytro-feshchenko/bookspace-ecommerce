# Bookspace Ecommerce Shared Components Library

## Description

This is a common components library hosted on [Bit.dev](https://bit.dev). We use latest [Bit v15: Harmony (now in open beta)](https://harmony-docs.bit.dev/) version.
Those components hosted on [Bit.dev Cloud Server](https://bit.dev) and consumed by both Dashboard (`../dashboard`) and Storefront (`../storefront`) clients.

## Quick start:

To get started straight away run `bit start` and open [localhost:3000](http://localhost:3000). It may take a while to build the first time you run this command as it is building the whole User Interface for your development environment.

```bash
bit start
```

## Commands:

Add new components:

```bash
bit create react-component ui/button     # TypeScript
bit create react-component-js ui/button  # JavaScript
```

We do have Hot Reload for already created components. But we need to recompile bit after adding new component 
to properly track it.

```bash
bit compile
bit start
```

Show all info about component (including the env, the files and the dependencies):

```bash
bit show ui/button
```

## What's included

- **workspace.jsonc**

This is the main configuration file of your bit workspace. Here you can modify the workspace name and icon as well as default directory and scope. It is where dependencies are found when you install anything. It is also where you register aspects, bit extensions as well as apply the environments for your components. This workspace has been setup so that all components use the React env. However you can create other components and apply other envs to them such as node, html, angular and aspect envs.

- **.bitmap**

This is an auto-generated file and includes the mapping of your components. There is one component included here. In order to remove this component you can run the following command.


- **Demo Components**

A folder (unless the --empty flag was used) containing demo components are included in this workspace. These components are used to demonstrate the different features of Bit. If you would like to remove these components you can run the following command.

```jsx
bit remove "ui/*" --delete files
```

This removes the components from the bitmap as well as removes the files.
