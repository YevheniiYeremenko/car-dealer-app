# Car Dealer App

This is a Next.js application that allows users to filter vehicles by make and model year, and view the results on a separate page. The application fetches data from the NHTSA API and displays vehicle models based on user selection.

## Getting Started
### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or newer)
- **npm** or **yarn**

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/car-dealer-app.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd car-dealer-app
   ```

3. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The app will be running at [http://localhost:3000](http://localhost:3000).

### Building for Production

1. **Build the app**:

   ```bash
   npm run build
   # or
   yarn build
   ```

   This will generate an optimized build of the application in the `.next` directory.

2. **Start the production server**:

   ```bash
   npm run start
   # or
   yarn start
   ```

## Features

- Users can filter vehicles by **make** and **model year**.
- Displays vehicle models based on the selected make and year.
- Uses Tailwind CSS for responsive and modern UI styling.
- Implements `Suspense` for improved loading states.
- Error handling for failed data fetching.

![alt text](https://snipboard.io/Ri24Kk.jpg)
![alt text](https://snipboard.io/0KuWL3.jpg)

## Technologies

- **Next.js**: A React framework for building server-side rendered applications.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for designing the UI.
- **NHTSA API**: Public API used to fetch vehicle data.

## Architecture Overview

The app consists of two main pages:

1. **Filter Page (Home Page)**: 
   - Users can select the vehicle make and model year from dropdowns.
   - Once both are selected, the "Next" button becomes active and navigates to the result page.

2. **Result Page**: 
   - Displays a list of vehicle models based on the selected make and model year.
   - Fetches data from the NHTSA API.
   - Uses React's `Suspense` to show a loading spinner while data is being fetched.

### Folder Structure

```bash
.
├── app
│   ├── layout.js         # Global layout file
│   ├── page.js           # Filter page (Home page)
│   └── result
│       └── [makeId]
│           └── [year]
│               └── page.js  # Result page
├── components
│   └── LoadingSpinner.js  # Component for showing loading animation
├── public
├── styles
│   └── globals.css        # Global styles
├── .env.local             # Environment variables (if needed)
├── .eslintrc.js           # ESLint configuration
├── .prettierrc            # Prettier configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── README.md              # Project documentation
