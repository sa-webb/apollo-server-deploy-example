const { gql } = require('apollo-server');

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type Owner {
    name: String
    email: String
  }

  type Template {
    id: Int
    type: String
    owner: Owner
    meta: Meta
    educations: [Education]
    experiences: [Experience]
    skills: [Skill]
  }

  type Meta {
    id: Int
    owner: Owner
    template: Template
    industry: String
  }

  type Education {
    id: Int
    university: String
    degree_type: String
  }

  type Experience {
    id: Int
    company: String
    title: String
  }

  type Skill {
    id: Int
    skill: String
    duration: String
  }

  type Query {
    templates: [Template]
  }
`;

module.exports = {
  typeDefs
}