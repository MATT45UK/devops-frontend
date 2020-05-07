module.exports = {
    validate: (token, callback) => {
        fetch('http://localhost:3001/auth', {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.email_verified) {
                    console.log('email')
                    callback(false, data)
                } else {
                    callback(true, null)
                }
            })
            .catch(() => {
                console.log('auth error')
                callback(true, null)
            });
    }
}