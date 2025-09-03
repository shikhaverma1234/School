# School Directory Project

This project is a simple school directory application built with Next.js and MySQL. It allows users to add school information through a form and display a list of schools in a responsive layout.

## Project Structure

```
school-directory-nextjs
├── pages
│   ├── addSchool.jsx        # Form for adding a new school
│   ├── showSchools.jsx      # Displays the list of schools
│   ├── _app.jsx             # Custom App component for global styles
│   └── api
│       ├── getSchools.js    # API route to fetch schools
│       ├── addSchool.js     # API route to add a new school
│       └── uploadImage.js    # API route to handle image uploads
├── public
│   └── schoolImages         # Folder for storing uploaded school images
├── components
│   ├── SchoolForm.jsx       # Form component for adding a school
│   └── SchoolCard.jsx       # Component to display individual school details
├── lib
│   └── db.js                # Database connection logic
├── styles
│   ├── globals.css          # Global styles for the application
│   └── form.module.css      # Styles specific to the form component
├── sql
│   └── schema.sql           # SQL schema for creating the schools table
├── .env.example              # Template for environment variables
├── package.json              # npm configuration file
├── next.config.js           # Next.js configuration settings
└── README.md                # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd school-directory-nextjs
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Set up the database:**
   - Create a MySQL database and import the schema from `sql/schema.sql`.

4. **Configure environment variables:**
   - Copy `.env.example` to `.env` and fill in your database connection details.

5. **Run the development server:**
   ```
   npm run dev
   ```

6. **Access the application:**
   - Open your browser and navigate to `http://localhost:3000`.

## Features

- **Add School:** Users can add new schools using a responsive form with validation.
- **Show Schools:** Displays a list of schools with their name, address, city, and image in a responsive layout.

## Technologies Used

- Next.js
- React
- MySQL
- react-hook-form
- CSS Modules

## License

This project is licensed under the MIT License.