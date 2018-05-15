INSERT INTO authors (auth_FN, auth_LN, auth_user_name, auth_email, auth_password, createdAt, updatedAt)
VALUES ("John", "Duh", "forumr4dweebs", "nope@nope.nope", "p4ssw0rd", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
INSERT INTO subjects (subj_title, subj_desc, createdAt, updatedAt)
VALUES ("Vidya Games", "Pew Pew", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),("Music", "Wub Wub", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
("Cooking", "Om Nom", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());
INSERT INTO posts (post_title, post_body, post_vote, subj_id, auth_id, createdAt, updatedAt)
VALUES ("Games are for Weebs", "Losers, lolololol", 0, 1, 1, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());