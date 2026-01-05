module.exports = function userRepository(db) {

    return {
        create(name, contact, callback) {
            const sql = 'INSERT INTO users (name, contact) VALUES (?, ?)';
            db.query(sql, [name, contact], callback);
        },

        deleteById(id, callback) {
            const sql = 'DELETE FROM users WHERE id = ?';
            db.query(sql, [id], callback);
        },

        findAll(callback) {
            const sql = 'SELECT * FROM users';
            db.query(sql, callback);
        },

        updateById(id, name, contact, callback) {
            const sql = 'UPDATE users SET name = ?, contact = ? WHERE id = ?';
            db.query(sql, [name, contact, id], callback);
        }
    };
};