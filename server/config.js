module.exports = {
  facebook: {
    clientId: '1537395802982279',
    clientSecret: '28c758a77d1b3d6cf88f9a53fe55d8f1',
    profileFields: ['id', 'displayName', 'photos', 'email'],
    validateUrl: 'https://graph.facebook.com/me'
  },
  google: {
    consumerKey: '113358382259-c09bq5uevjc8rtrm79lg5scpbo84h1le.apps.googleusercontent.com',
    consumerSecret: 'yV2ZiOQ7G8wYFy8qaugAab2i',
    validateUrl: 'https://www.googleapis.com/oauth2/v3/tokeninfo?id_token='
  }
}