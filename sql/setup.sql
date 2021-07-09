-- parent folder (/sql) needs to be on the same directory level as /src and /dist in order to be accessible --

DROP TABLE IF EXISTS users;

CREATE TABLE tests (
	id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	test_name VARCHAR(512) NOT NULL,
	test_body VARCHAR(512) NOT NULL
);
