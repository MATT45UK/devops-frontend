module.exports = {
    validate: (token, callback) => {
        fetch('http://localhost:3001/auth', {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(response => {
                if (response.status === 200) {
                    callback(null, true)
                } else {
                    callback(response.status, false)
                }
            });
    }
}