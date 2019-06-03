export const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length <= 2) {
    errors.username = 'Must be 3 characters or more'
  }
  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 5) {
    errors.password = 'Must be 5 characters or more'
  }

  if (!values.title_post) {
    errors.title_post = 'Required'
  } else if (values.title_post.length <= 2) {
    errors.title_post = 'Must be 3 characters or more'
  }
  if (!values.post) {
    errors.post = 'Required'
  }
  return errors
}