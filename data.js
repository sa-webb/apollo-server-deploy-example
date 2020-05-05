const owner1 = {
  name: 'Austin',
  email: 'austin@example.com',
};

const owner2 = {
  name: 'Drew',
  email: 'drew@example.com',
};

const meta1 = {
  id: 1,
  owner: owner1,
  industry: 'Software Developer',
};

const meta2 = {
  id: 1,
  owner: owner1,
  industry: 'Sales Associate',
};

const education1 = [
  {
    university: 'University of Tennessee',
    degree_type: 'Bachelor of Science',
  },
  { university: 'Harvard University', degree_type: 'MBA' },
];

const education2 = [
  {
    university: 'Michigan University',
    degree_type: 'MBA',
  },
];

const templates = [
  {
    id: 1,
    type: 'template1',
    owner: owner1,
    meta: meta1,
    educations: education1,
  },
  {
    id: 2,
    type: 'template2',
    owner: owner2,
    meta: meta2,
    educations: education2,
  },
];

module.exports = {
  templates,
};
