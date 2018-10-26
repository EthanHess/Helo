create table if not exists helo_users ( 
    id serial primary key, 
    auth0_id text not null, 
    password text not null,
    name text not null, 
    profile_picture text not null 
); 

create table if not exists helo_posts (
    id serial primary key, 
    author_id int references helo_users (id), 
    title text not null, 
    author_name text not null, 
    author_image text not null
); 

-- JOIN EXAMPLE
-- SELECT helo_posts.author_id, helo_users.auth0_id, helo_posts.title, helo_users.profile_picture
-- FROM helo_posts
-- INNER JOIN helo_users ON helo_posts.author_id=helo_users.auth0_id;