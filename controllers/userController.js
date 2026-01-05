module.exports = function userController(userService) {

    return {
        addUser(req, res) {
            const { name, contact } = req.body;

            userService.addUser(name, contact, (err, result) => {
                if (err) return res.status(400).json(err);

                res.json({
                    message: "User added successfully",
                    id: result.insertId
                });
            });
        },

        deleteUser(req, res) {
            const id = req.params.id;

            userService.removeUser(id, (err) => {
                if (err) return res.status(500).json(err);
                res.json({ message: "Record Deleted successfully!" });
            });
        },

        getUsers(req, res) {
            userService.getAllUsers((err, result) => {
                if (err) return res.status(500).json(err);
                res.json(result);
            });
        },

        updateUser(req, res) {
            const { name, contact } = req.body;
            const id = req.params.id;

            userService.editUser(id, name, contact, (err) => {
                if (err) return res.status(500).json(err);
                res.json({ message: "Record Updated Successfully!" });
            });
        }
    };
};
