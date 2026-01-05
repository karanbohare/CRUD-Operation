module.exports = function userService(userRepository) {

    return {
        addUser(name, contact, callback) {
            // business validation example
            if (!name || !contact) {
                return callback({ message: 'Name and contact are required' });
            }

            userRepository.create(name, contact, callback);
        },

        removeUser(id, callback) {
            userRepository.deleteById(id, callback);
        },

        getAllUsers(callback) {
            userRepository.findAll(callback);
        },

        editUser(id, name, contact, callback) {
            userRepository.updateById(id, name, contact, callback);
        }
    };
};