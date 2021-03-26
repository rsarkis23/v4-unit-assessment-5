const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')
        const { username, password } = req.body

        try {
            const [userRes] = await db.user.find_user_by_username(username)

            if (!userRes) {
                const salt = bcrypt.genSaltSync(10)
                const hash = bcrypt.hashSync(password, salt)

            }

        } catch (err) {
            console.log(err)
            return res.sendStatus(500)
        }
    },
    login: async (req, res) => {
        const db = req.app.get('db')
        const { username, password } = req.body

        try {
            const [userRes] = await db.user.find_user_by_username(username)

            if (userRes) {
                if (bcrypt.compareSync(password, userInfo.password)) {
                    req.session.user = { ...{ id: userRes.id, username: userReso.username, profile_pic: userRes.profile_pic } };
                    return res.status(200).send(req.session.user);
                } else {
                    return res.status(400).send('Incorrect username and/or password');
                }
            } else {
                return res.status(400).send('Incorrect username and/or password')
            }
        } catch (err) {
            console.log(err);
            return res.Status(500);
        }
    }
}