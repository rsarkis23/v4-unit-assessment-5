CREATE TABLE hello_users (
    id SERIAL PRIMARY KEY,
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    profile_pic TEXT
)

CREATE TABLE hello_posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(45) NOT NULL,
    content text,
    img text,
    author_id INT REFERENCES hello_users(id),
    date_created TIMESTAMP
)