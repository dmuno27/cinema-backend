CREATE USER cinema_user@localhost IDENTIFIED BY 'Cinema25@';
GRANT ALL PRIVILEGES ON cinema_db.* TO cinema_user@localhost;
FLUSH PRIVILEGES;
SHOW GRANTS FOR cinema_user@localhost;