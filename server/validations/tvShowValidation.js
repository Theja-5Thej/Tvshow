const yup = require('yup');

const tvShowSchema = yup.object({
  title: yup.string().required(),
  type: yup.string().oneOf(['Movie', 'TV Show']).required(),
  director: yup.string().required(),
  budget: yup.number().required(),
  location: yup.string().required(),
  duration: yup.string().required(),
  year: yup.number().min(1900).max(new Date().getFullYear()).required(),
  description: yup.string(),
  posterUrl: yup.string().url()
});

module.exports = { tvShowSchema };
