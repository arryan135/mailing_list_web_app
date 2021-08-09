CREATE TABLE users (
  email VARCHAR(255) PRIMARY KEY,
  created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO users (email) VALUES 
("Katie135@yahoo.com"),
("SamJehings@gmail.com");

-- Find the earliest user in the database
SELECT DATE_FORMAT(created_at, '%M %D %Y') AS earliest_date FROM users ORDER BY created_at ASC LIMIT 1;
-- alternative way
SELECT DATE_FORMAT(MIN(created_at), "%M %D %Y") AS earliest_date FROM users;

-- DISPLAY all info about the user with the earliest join date
SELECT 
  email, 
  created_at AS earliest_date 
FROM users 
WHERE created_at = (SELECT created_at FROM users ORDER BY created_at ASC LIMIT 1);
-- alternative date
SELECT * FROM users
WHERE created_at = (SELECT MIN(created_at) FROM users);

-- Find the most popular user join months
SELECT 
  MONTHNAME(created_at) AS month, 
  COUNT(*) AS count
FROM users 
GROUP BY month 
ORDER BY count DESC;

-- Find the number of yahoo users in the database
SELECT COUNT(*) AS yahoo_users FROM users WHERE email LIKE "%@yahoo.com";

-- Calculate Total number of users for each email host
SELECT 
  CASE 
    WHEN email LIKE "%@yahoo.com" THEN "yahoo"
    WHEN email LIKE "%@hotmail.com" THEN "hotmail"
    WHEN email LIKE "%@gmail.com" THEN "gmail"
    ELSE "other"
  END AS provider,
  COUNT(*) as total_users 
FROM users
GROUP BY provider
ORDER BY total_users DESC;
