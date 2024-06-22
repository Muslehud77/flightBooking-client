# Flight Booking Project

This is a basic flight booking project where you can search for and book flights. The project uses the ShadCN UI library for the frontend. This README file provides instructions on how to set up the project.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js (v14 or higher)
- npm (v6 or higher)

## Getting Started

Follow these steps to set up and run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/Muslehud77/flightBooking-client.git
cd flightBooking-client
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up the environment variables

Create a `.env.local` file in the root directory of the project and add the following content:

```
BASE_URL=https://example.com/api
```

Replace `https://example.com/api` with the appropriate API endpoint you intend to use.

### 4. Run the development server

```bash
npm run dev
```

This will start the development server and you can access the project at `http://localhost:5173/`.

### 5. Build the project

To build the project for production, run:

```bash
npm run build
```

### 6. Preview the build

To preview the production build locally, run:

```bash
npm run preview
```

### 7. Lint the code

To lint the code and check for errors, run:

```bash
npm run lint
```

## Project Structure

- `src/`: Contains the source code of the project.
- `public/`: Contains static assets.
- `.env.local`: Environment variables file.

## Scripts

- `dev`: Starts the development server using Vite.
- `build`: Builds the project for production.
- `lint`: Lints the code using ESLint.
- `preview`: Previews the production build.



---

Feel free to reach out if you have any questions or need further assistance. Happy coding!