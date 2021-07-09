-- parent folder (/sql) needs to be on the same directory level as /src and /dist in order to be accessible --

DROP TABLE IF EXISTS users;

CREATE TABLE users (
	id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	email VARCHAR(512) NOT NULL,
	hash VARCHAR(512) NOT NULL
);
