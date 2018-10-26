insert into helo_posts (author_id, title, author_name, author_image) 
values
(${author_id}, ${title}, ${author_name}, ${author_image})
returning *; 