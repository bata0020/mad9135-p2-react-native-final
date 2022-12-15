const upcomingSessions = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?h=400&w=400&cs=tinysrgb",
    tutor: "Jonathan Jones",
    program: "Mobile Application Design and Development",
    date: "Mon, Dec 19",
    schedule: "12/19/2022",
    time: "10:00 AM",
    venue: "Zoom",
    online: true,
    venue: "Zoom",
    link: "link",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=300&w=300&s=707b9c33066bf8808c934c8ab394dff6",
    tutor: "Tara Torch",
    program: "Interactive Media Design",
    date: "Tue, Dec 20",
    schedule: "12/20/2022",
    time: "03:00 PM",
    online: true,
    venue: "Zoom",
    link: "link",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=300&w=300&s=a72ca28288878f8404a795f39642a46f",
    tutor: "Vincent Valdez",
    program: "UX Design",
    date: "Wed, Dec 21",
    schedule: "12/21/2022",
    time: "12:00 PM",
    online: false,
    venue: "T127",
    link: null,
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=400&w=400&cs=tinysrgb",
    tutor: "Cathy Chess",
    program: "Biology and Biotechnology",
    date: "Thu, Dec 29",
    schedule: "12/29/2022",
    time: "09:00 AM",
    online: false,
    venue: "Building E",
    link: null,
  },
];

const pastSessions = [
  {
    id: 5,
    image:
      "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?h=400&w=400&cs=tinysrgb",
    tutor: "Jonathan Jones",
    program: "Mobile Application Design and Development",
    date: "Tue, Oct 11",
    schedule: "10/11/2022",
    time: "10:00 AM",
    venue: "Zoom",
    online: true,
    venue: "Zoom",
    link: "link",
  },
  {
    id: 6,
    image:
      "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?h=400&w=400&cs=tinysrgb",
    tutor: "Jonathan Jones",
    program: "Mobile Application Design and Development",
    date: "Mon, Nov 28",
    schedule: "11/28/2022",
    time: "10:00 AM",
    venue: "Zoom",
    online: true,
    venue: "Zoom",
    link: "link",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=300&w=300&s=a72ca28288878f8404a795f39642a46f",
    tutor: "Vincent Valdez",
    program: "UX Design",
    date: "Thu, Dec 1",
    schedule: "12/1/2022",
    time: "05:00 PM",
    online: false,
    venue: "T127",
    link: null,
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=300&w=300&s=707b9c33066bf8808c934c8ab394dff6",
    tutor: "Tara Torch",
    program: "Interactive Media Design",
    date: "Mon, Nov 14",
    schedule: "11/14/2022",
    time: "03:00 PM",
    online: true,
    venue: "Zoom",
    link: "link",
  },
];

const allTutors = [
  {
    id: 8,
    image:
      "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?h=720&w=720&cs=tinysrgb",
    tutor: "Jonathan Jones",
    program: "Mobile Application Design and Development",
    school: "Algonquin College",
    course: ["MAD9013", "MAD9014", "MAD8010", "MAD9011", "MAD9020", "MAD9021"],
    tag: "madd",
    favorite: false,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=720&w=720&s=707b9c33066bf8808c934c8ab394dff6",
    tutor: "Tara Torch",
    program: "Interactive Media Design",
    school: "Algonquin College",
    course: ["IMD9012", "IMD8090", "IMD6570", "IMD1200", "IMD5009", "IMD9010"],
    tag: "imd",
    favorite: false,
  },
  {
    id: 7,
    image:
      "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?h=720&w=720&cs=tinysrgb",
    tutor: "Brenda Barnes",
    program: "Mobile Application Design and Development",
    school: "Algonquin College",
    course: ["MAD9021", "MAD9022", "MAD9112", "MAD9124", "DSN2100", "ENL6007"],
    tag: "madd",
    favorite: false,
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=400&w=400&cs=tinysrgb",
    tutor: "Cathy Chess",
    program: "Biology and Biotechnology",
    school: "Algonquin College",
    course: ["BIO1000", "BIO2000", "BIO1010", "BIO1020", "BIO3000", "BIO1120"],
    tag: "biology",
    favorite: false,
  },
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?h=400&w=400&cs=tinysrgb",
    tutor: "Diane Douglas",
    program: "Mobile Application Design and Development",
    school: "Algonquin College",
    course: ["MAD9013", "MAD9014", "MAD8010", "MAD9011", "MAD9020", "MAD9021"],
    tag: "madd",
    favorite: false,
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/1405963/pexels-photo-1405963.jpeg?h=400&w=400&cs=tinysrgb",
    tutor: "Harry Holler",
    program: "Defense Against The Dark Arts",
    school: "Hogwarts School",
    course: ["WIZ1001", "WIZ1012", "WIZ1123", "WIZ2312", "MAG1122", "MAG5679"],
    tag: "wiz",
    favorite: true,
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=300&w=300&s=a72ca28288878f8404a795f39642a46f",
    tutor: "Vincent Valdez",
    program: "UX Design",
    school: "Algonquin College",
    course: ["UXD3333", "UXD4455", "UXD1234", "UXD4567", "UXD8789", "ENL6007"],
    tag: "uxd",
    favorite: false,
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?h=400&w=400&cs=tinysrgb",
    tutor: "Randy Reynaldo",
    program: "Mobile Application Design and Development",
    school: "Algonquin College",
    course: ["MAD9021", "MAD9022", "MAD9112", "MAD9124", "DSN2100", "ENL6007"],
    tag: "madd",
    favorite: false,
  },
];

export { upcomingSessions, pastSessions, allTutors };
