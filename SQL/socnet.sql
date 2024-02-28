CREATE TABLE IF NOT EXISTS friendships (
    user_id INT NOT NULL,
    friend_id INT NOT NULL,
    since_date DATE NOT NULL,
    PRIMARY KEY (user_id, friend_id)
);

CREATE INDEX IF NOT EXISTS ix_friendships_user_id ON friendships (user_id);
CREATE INDEX IF NOT EXISTS ix_friendships_friend_id ON friendships (friend_id);