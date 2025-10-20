// queries.js
// MongoDB CRUD operations for plp_bookstore

// 1. Find all books in a specific genre
db.books.find({ genre: "Fiction" }).pretty()

// 2. Find books published after a certain year
db.books.find({ published_year: { $gt: 1950 } }).pretty()

// 3. Find books by a specific author
db.books.find({ author: "George Orwell" }).pretty()

// 4. Update the price of a specific book
db.books.updateOne(
  { title: "The Alchemist" },
  { $set: { price: 13.99 } }
)

// 5. Delete a book by its title
db.books.deleteOne({ title: "Moby Dick" })

// ================================
// MongoDB Advanced Queries
// ================================

// 1. Find books that are both in stock and published after 2010
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }
}).pretty()

// 2. Use projection to return only title, author, and price
db.books.find(
  {},
  { title: 1, author: 1, price: 1, _id: 0 }
).pretty()

// 3. Sort books by price (ascending)
db.books.find().sort({ price: 1 }).pretty()

// 4. Sort books by price (descending)
db.books.find().sort({ price: -1 }).pretty()

// 5. Implement pagination (5 books per page)

// Page 1
db.books.find().skip(0).limit(5).pretty()

// Page 2
db.books.find().skip(5).limit(5).pretty()

/*✅ Explanation:

  1. $gt means “greater than.”

  2. projection { title: 1, author: 1, price: 1, _id: 0 } shows only those fields.

  3. .sort({ price: 1 }) sorts ascending, .sort({ price: -1 }) descending.

  4. .skip() and .limit() combine to simulate pagination. */


// ================================
// Task 4: Aggregation Pipelines
// ================================

// 1. Calculate the average price of books by genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" }
    }
  }
])

// 2. Find the author with the most books
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      totalBooks: { $sum: 1 }
    }
  },
  {
    $sort: { totalBooks: -1 }
  },
  {
    $limit: 1
  }
])

// 3. Group books by publication decade and count them
db.books.aggregate([
  {
    $addFields: {
      decade: {
        $concat: [
          { $toString: { $multiply: [ { $floor: { $divide: ["$published_year", 10] } }, 10 ] } },
          "s"
        ]
      }
    }
  },
  {
    $group: {
      _id: "$decade",
      totalBooks: { $sum: 1 }
    }
  },
  {
    $sort: { _id: 1 }
  }
])

/*✅ Explanation of aggregation pipeline:

1. $group collects documents by a field (like genre) and performs calculations.

2. $avg and $sum compute averages or counts.

3. $sort and $limit let you find “the top” author.

4. $addFields + $concat helps create a “decade” label like 1930s or 1950s. */

// ================================
// Task 5: Indexing
// ================================

// 1. Create an index on the "author" field to speed up author-based searches
db.books.createIndex({ author: 1 })

// 2. Create a compound index on "genre" and "price" for queries that filter by both
db.books.createIndex({ genre: 1, price: -1 })

// 3. Check existing indexes
db.books.getIndexes()
