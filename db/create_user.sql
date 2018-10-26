insert into helo_users (auth0_id, password, name, profile_picture) 
values
(${auth0_id}, ${password}, ${name}, ${profile_picture})
returning *; 