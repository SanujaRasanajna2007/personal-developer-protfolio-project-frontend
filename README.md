# Personal Web Developer Portfolio

A responsive, high-performance personal portfolio web application for presenting the technical competencies, educational background, and real-world projects of a Junior Web Developer. The site also provides direct communication channels for employers, clients, and technical collaborators.

## Technologies Used

- **Framework:** Next.js with the App Router
- **Library:** React
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment and hosting:** Vercel or other cloud platforms

## Prerequisites

Before setting up the project, install the following:

- Node.js 18.0.0 or higher
- npm 9.x or higher, pnpm, or yarn
- A modern web browser with JavaScript enabled

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SanujaRasanajna2007/personal-developer-protfolio-project-frontend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd personal-developer-protfolio-project-frontend
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

## Running the Project

Start the development server with hot reloading:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Available Commands

| Command         | Description                                                 |
| --------------- | ----------------------------------------------------------- |
| `npm run dev`   | Starts the local development server with hot reloading.     |
| `npm run build` | Builds the production-ready application bundle.             |
| `npm run start` | Starts the production server after a successful build.      |
| `npm run lint`  | Runs ESLint to identify code quality and structural issues. |

## Assumptions and Limitations

### Environment Assumptions

- The host system provides a properly configured Node.js 18 or later runtime.
- The application is accessed through a modern version of Chrome, Edge, Firefox, or Safari.
- JavaScript is enabled in the browser.

### Current Limitations

- Contact form submissions require an active backend integration and its credentials, such as Web3Forms, Resend, or a configured Next.js API route. Store local configuration in `.env.local`.

## Deployment

The application can be deployed using [Vercel](https://vercel.com) or another cloud platform that supports Next.js applications. Configure all required environment variables in the deployment provider before publishing the application.
