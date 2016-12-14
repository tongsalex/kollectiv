DROP TABLE IF EXISTS songs_mixes;
DROP TABLE IF EXISTS events;
DROP TABLE IF EXISTS blog_posts;
DROP TABLE IF EXISTS artists;

CREATE TABLE artists (
  artist_id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL UNIQUE,
  password VARCHAR NOT NULL,
  first_name VARCHAR,
  last_name VARCHAR,
  bio TEXT,
  email VARCHAR UNIQUE,
  date_created TIMESTAMP DEFAULT CURRENT_DATE
);

CREATE TABLE blog_posts (
  blog_post_id SERIAL PRIMARY KEY,
  title VARCHAR,
  subtitle VARCHAR,
  content TEXT,
  image_url TEXT,
  artist_id INT REFERENCES artists ON DELETE CASCADE,
  date_created TIMESTAMP NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE events (
  event_id SERIAL PRIMARY KEY,
  title VARCHAR,
  description TEXT,
  image_url TEXT,
  artist_id INT REFERENCES artists ON DELETE CASCADE,
  date_created TIMESTAMP NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE songs_mixes (
  song_mix_id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  song_link TEXT NOT NULL,
  artist_id INT REFERENCES artists ON DELETE CASCADE,
  date_created TIMESTAMP NOT NULL DEFAULT CURRENT_DATE
);




