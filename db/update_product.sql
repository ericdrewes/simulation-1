UPDATE products SET name= $2 WHERE id = $1;

UPDATE products SET price = $3 WHERE id = $1;
--  Look into making item dynamic if this doenst work.