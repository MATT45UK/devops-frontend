module.exports = {
    validate: (token, callback) => {
        fetch('http://localhost:3001/auth', {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.email_verified) {
                    callback(null, { data, res: true })
                } else {
                    callback(data.status, { data: null, res: false })
                }
            });
    }
}