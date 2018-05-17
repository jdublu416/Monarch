INSERT INTO
    authors (
        auth_FN,
        auth_LN,
        auth_user_name,
        auth_email,
        auth_password,
        createdAt,
        updatedAt,
        auth_id
    )
VALUES
    (
        "John",
        "Duh",
        "forumr4dweebs",
        "nope@nope.nope",
        "p4ssw0rd",
        CURRENT_TIMESTAMP(),
        CURRENT_TIMESTAMP(),
        1
    );
INSERT INTO
    subjects (
        subj_title,
        subj_desc,
        createdAt,
        updatedAt,
        subj_id
    )
VALUES
    (
        "Vidya Games",
        "Pew Pew",
        CURRENT_TIMESTAMP(),
        CURRENT_TIMESTAMP(),
        1
    ),
    (
        "Music",
        "Wub Wub",
        CURRENT_TIMESTAMP(),
        CURRENT_TIMESTAMP(),
        2
    ),
    (
        "Cooking",
        "Om Nom",
        CURRENT_TIMESTAMP(),
        CURRENT_TIMESTAMP(),
        3
    );
INSERT INTO
    posts (
        post_title,
        post_body,
        post_vote,
        subj_id,
        auth_id,
        createdAt,
        updatedAt,
        post_id
    )
VALUES
    (
        "Games are for Weebs",
        "Losers, lolololol",
        0,
        1,
        1,
        CURRENT_TIMESTAMP(),
        CURRENT_TIMESTAMP(),
        1
    );