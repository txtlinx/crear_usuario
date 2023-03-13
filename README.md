# Profile Manager

The profile administration project was born from the need to have a single place where a company user can assign roles and permissions for the different users that need to be created.

# Main functions

In general it has to do with the 4 operations of creating, updating, viewing and deleting roles and/or permissions of a user.

## Getting Started Guide

### Installation Requirements

The following is a list of the minimum tools required:

- NodeJS v16.13.2
- ReactJS v17.02
- NPM
- Visual Studio Code 1.4
- Postman v9.3.1
- AWS CLI v2

### Installation Procedure

To start the project follow the steps below:

- npm Install --force
- npm run start to run the code locally.
- npm run build to build the project.
- npm run lint to run a code audit and see what rules are being broken for typescritp.

# Code Architecture

The following explains the folder structure and which files are relevant and where they are located.

Src/Components: the src folder will contain all of our components and logic, this folder structuring is organized around "Atomic Design" for more information about atomic design see
https://www.uifrommars.com/atomic-design-ventajas

Husky: The husky folder will contain the scripts that Git will run before or after some actions that are performed in the repository, such as creating a new commit or uploading code to a repository.

Eslinttrc: It is a JavaScript file for writing cleaner and more optimal code, under the rules we agree upon as a team.

Tsconfig: The tsconfig file is the file that indicates that you are working with TypeScript. It contains all the working settings for the TypeScript transpiler.

# Docker considerations

To create docker image use:

```
docker build -t profile-manager .
```

After that, to raise the container you need:

```
docker run --name profile-manager-ui -dp 3000:3000 profile-manager
```

for stop and delete container and image

```
docker stop profile-manager-ui
docker rm profile-manager-ui
docker rmi -f profile-manager
```

# Team agreements

- For the moment express will not be used and will be added when we enable nextjs.
- For folder structuring and component creation atomic design will be followed.
- Use context in page (containers) but that does not mean that we can not encapsulate the component and use the context directly.
- For the styling issue it is agreed to use styled-components.
