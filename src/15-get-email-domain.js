/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const reversedEmail = email.split('').reverse().join('');
  const domain = reversedEmail.slice(0, reversedEmail.indexOf('@'));
  return domain.split('').reverse().join('');
}

module.exports = getEmailDomain;
