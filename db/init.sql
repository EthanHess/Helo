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
    author_name int not null, 
    author_image text not null
); 
