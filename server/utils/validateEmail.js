const validateEmail = (email) => {
  return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email)
}

module.exports = validateEmail;