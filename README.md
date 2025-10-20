# 📘 MongoDB Fundamentals - Week 1

This project demonstrates foundational MongoDB concepts — setting up a local database, inserting documents, and performing data queries using Node.js and the MongoDB driver.

## 📂 Project Structure

```
mongodb-data-layer-fundamentals-and-advanced-techniques-Cdasilver29/
│
├── insert_books.js      # Inserts sample data into the database
├── queries.js           # Contains all MongoDB queries
├── README.md            # Documentation and setup guide
└── screenshots/         # Screenshot of MongoDB Compass showing data
```

## ⚙️ Setup Instructions

### 1. Start MongoDB

```bash
mongod
```

Ensure your MongoDB service is running locally (default URL: `mongodb://127.0.0.1:27017`).

### 2. Navigate to your project folder

```bash
cd mongodb-data-layer-fundamentals-and-advanced-techniques-Cdasilver29
```

### 3. Run the insertion script

```bash
node insert_books.js
```

This will create a database named `plp_bookstore` and populate it with sample book records.

### 4. Run queries

```bash
node queries.js
```

The results of your queries will be printed in the terminal.

### 5. Check in MongoDB Compass

- Connect to `mongodb://localhost:27017`
- Open the `plp_bookstore` database
- View the `books` collection to confirm your data was inserted

## 🧠 Concepts Covered

- MongoDB database and collection creation
- Document insertion using Node.js
- Querying and filtering data
- Sorting, projection, and condition-based retrieval
- Using mongosh and Compass to explore data

## 🔍 Queries Overview (queries.js)

Your `queries.js` script includes examples of common MongoDB operations:

| # | Query Description | MongoDB Command |
|---|---|---|
| 1 | Retrieve all books | `db.books.find()` |
| 2 | Find all books in stock | `db.books.find({ in_stock: true })` |
| 3 | Find books by genre (e.g., Fiction) | `db.books.find({ genre: "Fiction" })` |
| 4 | Find books published after 1950 | `db.books.find({ published_year: { $gt: 1950 } })` |
| 5 | Find books cheaper than $10 | `db.books.find({ price: { $lt: 10 } })` |
| 6 | Find books by a specific author | `db.books.find({ author: "George Orwell" })` |
| 7 | Sort books by published year (newest first) | `db.books.find().sort({ published_year: -1 })` |
| 8 | Retrieve only title and author fields | `db.books.find({}, { title: 1, author: 1, _id: 0 })` |
| 9 | Count total books in the collection | `db.books.countDocuments()` |
| 10 | Find books not in stock | `db.books.find({ in_stock: false })` |

## 🖼️ Screenshot

A screenshot from MongoDB Compass showing:

- `plp_bookstore` database
- `books` collection with sample documents

Saved in: `/screenshots/mongodb_compass.png`

## 🧑‍💻 Author

**Name:** Calvine Dasilver Mugunda  
**GitHub:** [https://github.com/Cdasilver29](https://github.com/Cdasilver29)