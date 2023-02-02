DROP TABLE IF EXISTS comments;
CREATE TABLE comments (
  id integer primary key autoincrement, 
  author text not null, 
  body text not null, 
  post_slug text not null
);

CREATE INDEX idx_comments_post_id ON comments (post_slug);

INSERT INTO comments (author, body, post_slug) VALUES ("Gift", "Wow! Lovely Venue and Incredible Audience", "first-post");