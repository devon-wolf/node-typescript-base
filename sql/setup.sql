-- parent folder (/sql) needs to be on the same directory level as /src and /dist in order to be accessible --

DROP TABLE IF EXISTS examples;

CREATE TABLE examples (
	id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	example_name VARCHAR(512) NOT NULL,
	example_body VARCHAR(512) NOT NULL
);
