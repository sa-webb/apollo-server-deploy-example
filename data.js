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

const experience1 = [
  {
    id: 1,
    company: 'Facebook',
    title: 'Software Engineer',
  },
  { id: 2, company: 'Google', title: 'Web Developer' },
];

const experience2 = [
  {
    id: 1,
    company: 'Michigan University',
    title: 'MBA',
  },
];

const skill1 = [
  {
    id: 1,
    skill: 'Microsoft Teams',
    duration: 'Three years',
  },
  { id: 2, skill: 'Microsoft Excel', duration: 'Five year' },
  { id: 3, skill: 'Web development', },
  { id: 4, skill: 'Data modeling', duration: 'One year' },
];

const skill2 = [
  { id: 1, skill: 'Software engineering', duration: 'Six years' },
  { id: 2, skill: 'Javascript', duration: 'One year' },
];

const templates = [
  {
    id: 1,
    type: 'template1',
    owner: owner1,
    meta: meta1,
    educations: education1,
    experiences: experience1,
    skills: skill1
  },
  {
    id: 2,
    type: 'template2',
    owner: owner2,
    meta: meta2,
    educations: education2,
    experiences: experience2,
    skills: skill2
  },
];

module.exports = {
  templates,
};
