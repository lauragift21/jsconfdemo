DROP TABLE IF EXISTS comments;
CREATE TABLE comments (
  id integer primary key autoincrement, 
  author text not null, 
  body text not null
);

-- INSERT INTO comments (author, body) VALUES ("Gift", "Wow! Lovely Venue and Incredible Audience");