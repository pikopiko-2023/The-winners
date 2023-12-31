export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('wins').del()

  // Inserts seed entries
  await knex('wins').insert([
    {
      id: 1,
      name: 'Mark',
      title: 'First React App',
      win: 'Successfully created my first React app and deployed it on Netlify.',
      date: '2023-08-15',
      type: 'Dev',
    },
    {
      id: 2,
      name: 'Hope',
      title: 'Effective Communication',
      win: 'Presented a project update and nobody fell asleep this time. I call that a win!',
      date: '2023-08-25',
      type: 'Human Skills',
    },
    {
      id: 3,
      name: 'Laura',
      title: 'Database Normalisation',
      win: 'Normalised a database schema and now it’s having an identity crisis.',
      date: '2023-09-01',
      type: 'Dev',
    },
    {
      id: 4,
      name: 'Jayde',
      title: 'Team Collaboration',
      win: 'We resolved a critical bug together and only cried twice.',
      date: '2023-09-10',
      type: 'Human Skills',
    },
    {
      id: 5,
      name: 'Rich',
      title: 'Balanced Family and Sprint',
      win: 'Despite my children being unwell, I managed to complete the sprint successfully.',
      date: '2023-09-30',
      type: 'Life',
    },
    {
      id: 6,
      name: 'Mark',
      title: 'API Integration',
      win: 'Integrated a third-party API, and now our app can talk to strangers on the internet.',
      date: '2023-09-25',
      type: 'Dev',
    },
    {
      id: 7,
      name: 'Laura',
      title: 'Conflict Resolution',
      win: 'Turned a heated debate over tabs versus spaces into a new coffee break tradition.',
      date: '2023-09-20',
      type: 'Human Skills',
    },
    {
      id: 8,
      name: 'Hope',
      title: 'Health Management',
      win: 'Kept up with exercise routine, project deadlines, and my new talent of tripping over nothing.',
      date: '2023-10-05',
      type: 'Life',
    },
    {
      id: 9,
      name: 'Mark',
      title: 'Backend Optimization',
      win: 'Optimized the backend code and now it runs faster than my attempt at jogging.',
      date: '2023-10-10',
      type: 'Dev',
    },
    {
      id: 10,
      name: 'Hope',
      title: 'Mentorship',
      win: 'Mentored a junior developer who now believes rubber duck debugging is a formal part of the process.',
      date: '2023-10-10',
      type: 'Human Skills',
    },
    {
      id: 11,
      name: 'Laura',
      title: 'Time Management',
      win: 'Effectively juggled family, work, and study commitments over the semester.',
      date: '2023-10-15',
      type: 'Life',
    },
    {
      id: 12,
      name: 'Rich',
      title: 'Unit Testing Mastery',
      win: 'Wrote comprehensive unit tests and now the code is having an existential crisis when it sees a bug.',
      date: '2023-10-20',
      type: 'Dev',
    },
    {
      id: 13,
      name: 'Jayde',
      title: 'Leadership',
      win: 'Led a sprint planning session and only got called a ‘Scrum Lord’ twice.',
      date: '2023-10-20',
      type: 'Human Skills',
    },
    {
      id: 14,
      name: 'Jayde',
      title: 'Community Engagement',
      win: 'Volunteered at a local charity event and learned that coding bugs are less daunting than real bugs.',
      date: '2023-10-25',
      type: 'Life',
    },
    {
      id: 15,
      name: 'Laura',
      title: 'Resilience Under Pressure',
      win: 'Handled a personal emergency without it affecting the project. The coffee machine breaking down was a different story.',
      date: '2023-11-05',
      type: 'Life',
    },
  ])
}