DROP TABLE IF EXISTS books;
CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    bookid VARCHAR(255),
    authors VARCHAR(255),
    title VARCHAR(255),
    isbn NUMERIC(13, 0),
    imageurl TEXT,
    description TEXT,
    bookshelf VARCHAR(255)
)