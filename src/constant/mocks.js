export const skills = [
  {
    label: "Angular",
    value: "angular",
  },
  {
    label: "CSS",
    value: "css",
  },
  {
    label: ".Net",
    value: ".net",
  },
  {
    label: "HTML",
    value: "html",
  },
  {
    label: "Java",
    value: "java",
  },
  {
    label: "JavaScript",
    value: "javascript",
  },
  {
    label: "Node",
    value: "node",
  },
  {
    label: "React",
    value: "react",
  },
  {
    label: "Vue",
    value: "vue",
  },
]

export const domains = [
  {
    label: 'Front End',
    value: 'front-end'
  },
  {
    label: 'Back End',
    value: 'back-end'
  },
  {
    label: 'Databases',
    value: 'databases'
  },
  {
    label: 'Algorithms',
    value: 'algorithms'
  },
  {
    label: 'Architecture',
    value: 'architecture'
  }
];

export const years = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
]

export const questonaire = [
  {
    title: 'Personal Information',
    description: 'Help us to get to know you by answering the following questions',
    questions: [
      {
        title: 'What is your first name?',
        type: 'text',
        required: true
      },
      {
        title: '... and last name?',
        type: 'text',
        required: true,
      },
      {
        title: 'What is your phone number?',
        type: 'text',
        description: 'Having your phone will help us communicate quicker, especially during scheduling. But we respect your privacy and providing your phone number at this stage is optional'
      },
      {
        title: 'What is your country of residence?',
        type: 'text',
        description: 'Where do you currently live?',
        required: true
      },
      {
        title: '... and what city?',
        type: 'text',
        description: 'Where do you currently live?',
        required: true
      },
      {
        title: 'What is your nationality?',
        type: 'text',
        description: 'What country are you citizen for?',
        required: true,
      }
    ]
  },
  {
    title: 'Experience',
    description: 'Tell us a bit about your professional experience',
    questions: [
      {
        title: 'How many years of relevant experience do you have?',
        description: 'How many years of experience directly relevant to position you are applying for do you have?',
        type: 'select',
        required: true,
        options: years
      },
      {
        title: 'How many years of total professional experience do you have?',
        type: 'select',
        required: true,
        options: years
      },
      {
        title: 'What is domain is your expertise?',
        description: 'Select all that apply',
        type: 'multipleSelect',
        required: 'true',
        options: domains
      },
      {
        title: 'Tell us about your expertise skills',
        description: 'Which of the following skills do you consider expert in?',
        type: 'multipleSelect',
        required: true,
        options: skills
      },
      {
        title: 'Other expert skills',
        description: 'Any other skills your consider expert in? Please add one skill per line',
        type: 'textarea',
      },
      {
        title: 'Are you familiar (but not an expert) in these skills?',
        description: 'Aside from expert skills, do you have some familiarity with the following skill? (please do no select if you selected as expert)',
        type: 'multipleSelect',
        required: true,
        options: skills
      },
      {
        title: 'Any other skills/ capabilities',
        description: 'Are there any other skills or capabilities, aside from what you shared already, that you want us to know about? Feel free to add one per line',
        type: 'textarea'
      }
    ]
  },
  {
    title: 'Web Presence',
    description: 'If you would so kind to share, we would like to learn more about your web presence.',
    questions: [
      {
        title: 'LinkedIn',
        description: 'Do you have linkedIn profile, If so, please enter it below.',
        type: 'text'
      },
      {
        title: 'Facebook',
        description: 'Are you on Facebook? Care to share your profile address?',
        type: 'text'
      },
      {
        title: 'Twitter',
        description: 'Do you tweet? Mind sharing your twitter handle url?',
        type: 'text'
      },
      {
        title: 'Github',
        description: 'As a developer, it is highly valuable if you have and share you Github profile',
        type: 'text'
      },
      {
        title: 'Personal website or blog',
        description: 'Do you have your own website and/or blog? if so, we would love to check it out',
        type: 'text'
      },
      {
        title: 'Any other references?',
        description: 'Do you have any other references you would like to share? Mentions to your work, articles, or any other relevant references you would like to share? Feel free to enter one url per line',
        type: "textarea"
      }
    ]
  }
] 