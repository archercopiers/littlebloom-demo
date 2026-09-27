// Fictional presentation data. Each sidebar module has its own relevant records.
export const modules = {
  Infants: {
    description: 'Bottle feedings, naps, diapers and daily care summaries.'
  },
  Children: {
    description: 'Child profiles, age groups, guardians and enrollment status.',
    columns: ['Child', 'Age group', 'Classroom', 'Guardian', 'Enrollment'],
    rows: [
      ['Emma Torres', 'Infant', 'Baby Bunnies', 'Maria Torres', 'Active'],
      ['Liam Carter', 'Toddler', 'Tiny Tigers', 'Jordan Carter', 'Active'],
      ['Ava Martinez', 'Preschool', 'Happy Hippos', 'Elena Martinez', 'Active'],
      ['Noah Kim', 'Preschool', 'Happy Hippos', 'Daniel Kim', 'Active'],
      ['Isabella Garcia', 'School Age', 'Brave Bears', 'Ana Garcia', 'Active'],
      ['Mateo Flores', 'Toddler', 'Tiny Tigers', 'Rosa Flores', 'Active']
    ]
  },
  Enrollment: {
    description: 'Applications, waitlist and enrollment packets.',
    columns: ['Applicant', 'Age group', 'Requested start', 'Packet', 'Status'],
    rows: [
      ['Sofia Perez', 'Infant', 'Oct 5', 'Complete', 'Approved'],
      ['Ethan Hall', 'Infant', 'Oct 12', 'Missing immunization', 'Pending'],
      ['Camila Rivera', 'Toddler', 'Oct 19', 'Complete', 'Waitlist'],
      ['Oliver Brooks', 'Preschool', 'Nov 2', 'In progress', 'Review'],
      ['Maya Lopez', 'School Age', 'Nov 9', 'Complete', 'Waitlist']
    ]
  },
  Attendance: {
    description: 'Today’s check-ins, absences and pickup activity.',
    columns: ['Child', 'Classroom', 'Check-in', 'Check-out', 'Status'],
    rows: [
      ['Emma Torres', 'Baby Bunnies', '7:48 AM', '—', 'Present'],
      ['Liam Carter', 'Tiny Tigers', '8:12 AM', '—', 'Present'],
      ['Ava Martinez', 'Happy Hippos', '—', '—', 'Absent'],
      ['Noah Kim', 'Happy Hippos', '8:35 AM', '—', 'Present'],
      ['Isabella Garcia', 'Brave Bears', '9:05 AM', '—', 'Late']
    ]
  },
  Classrooms: {
    description: 'Room rosters, capacity and staff coverage.',
    columns: ['Classroom', 'Age group', 'Enrolled', 'Capacity', 'Lead teacher'],
    rows: [
      ['Baby Bunnies', 'Infants', '6', '8', 'Olivia Reed'],
      ['Tiny Tigers', 'Toddlers', '14', '16', 'Mia Patel'],
      ['Happy Hippos', 'Preschool', '18', '20', 'Grace Chen'],
      ['Brave Bears', 'School Age', '16', '20', 'Lucas Brown']
    ]
  },
  Staff: {
    description: 'Staff schedules, classroom assignments and credentials.',
    columns: ['Staff member', 'Role', 'Classroom', 'Shift', 'Credential'],
    rows: [
      ['Olivia Reed', 'Lead teacher', 'Baby Bunnies', '7:00 AM–3:00 PM', 'Current'],
      ['Mia Patel', 'Lead teacher', 'Tiny Tigers', '8:00 AM–4:00 PM', 'Current'],
      ['Grace Chen', 'Lead teacher', 'Happy Hippos', '8:30 AM–5:00 PM', 'Current'],
      ['Lucas Brown', 'Teacher', 'Brave Bears', '9:00 AM–5:30 PM', 'Renewal soon']
    ]
  },
  'Parents & Contacts': {
    description: 'Guardians, family contacts and authorized pickup.',
    columns: ['Guardian', 'Child', 'Relationship', 'Phone', 'Pickup'],
    rows: [
      ['Maria Torres', 'Emma Torres', 'Mother', '(956) 555-0101', 'Authorized'],
      ['Jordan Carter', 'Liam Carter', 'Parent', '(956) 555-0102', 'Authorized'],
      ['Elena Martinez', 'Ava Martinez', 'Mother', '(956) 555-0103', 'Authorized'],
      ['Daniel Kim', 'Noah Kim', 'Father', '(956) 555-0104', 'Authorized']
    ]
  },
  'Billing & Invoicing': {
    description: 'Tuition plans, invoices, payments, aging and balances.',
    columns: ['Invoice', 'Family', 'Tuition period', 'Due date', 'Balance'],
    rows: [
      ['LB-1041', 'Carter family', 'Sep 2026', 'Sep 30', '$240'],
      ['LB-1042', 'Kim family', 'Sep 2026', 'Sep 30', '$475'],
      ['LB-1043', 'Flores family', 'Sep 2026', 'Oct 1', '$125'],
      ['LB-1044', 'Torres family', 'Sep 2026', 'Paid', '$0'],
      ['LB-1045', 'Garcia family', 'Sep 2026', 'Paid', '$0']
    ]
  },
  'Meals & Nutrition': {
    description: 'Meal plans, allergies, servings and nutrition logs.',
    columns: ['Meal', 'Time', 'Classrooms', 'Servings', 'Dietary note'],
    rows: [
      ['Breakfast', '8:15 AM', 'All rooms', '78', 'Dairy-free option'],
      ['Morning snack', '10:00 AM', 'Toddlers & Preschool', '44', 'Nut-free'],
      ['Lunch', '11:45 AM', 'All rooms', '85', 'Vegetarian option'],
      ['Afternoon snack', '3:00 PM', 'All rooms', '82', 'Allergy review']
    ]
  },
  'Learning & Activities': {
    description: 'Classroom activities, lesson plans and milestones.',
    columns: ['Activity', 'Classroom', 'Time', 'Focus', 'Status'],
    rows: [
      ['Sensory shapes', 'Baby Bunnies', '9:30 AM', 'Exploration', 'Completed'],
      ['Story circle', 'Tiny Tigers', '10:15 AM', 'Language', 'Completed'],
      ['Garden colors', 'Happy Hippos', '1:00 PM', 'Science', 'Scheduled'],
      ['Reading buddies', 'Brave Bears', '3:30 PM', 'Literacy', 'Scheduled']
    ]
  },
  'Health & Medical': {
    description: 'Immunizations, allergies, medications and medical alerts.',
    columns: ['Child', 'Record', 'Detail', 'Review date', 'Status'],
    rows: [
      ['Emma Torres', 'Immunization', 'Updated record requested', 'Oct 3', 'Incomplete'],
      ['Liam Carter', 'Allergy', 'Dairy sensitivity', 'Current', 'On file'],
      ['Ava Martinez', 'Medication', 'Parent authorization', 'Oct 8', 'Review'],
      ['Noah Kim', 'Immunization', 'Current', 'Jan 15', 'Complete']
    ]
  },
  Reports: {
    description: 'Owner analytics for enrollment, revenue, attendance and compliance.',
    columns: ['Report', 'Period', 'Key measure', 'Value', 'Updated'],
    rows: [
      ['Enrollment overview', 'This month', 'Enrolled children', '96', 'Today'],
      ['Attendance summary', 'Today', 'Present', '85 / 96', 'Today'],
      ['Tuition collection', 'This month', 'Collected', '$28,450', 'Today'],
      ['Open balances', 'This month', 'Outstanding', '$6,320', 'Today'],
      ['Compliance checklist', 'This week', 'Items to review', '2', 'Today']
    ]
  },
  Messages: {
    description: 'Simulated parent and staff communication center.',
    columns: ['From', 'Topic', 'Related to', 'Received', 'Status'],
    rows: [
      ['Maria Torres', 'Pickup change', 'Emma Torres', '9:18 AM', 'Unread'],
      ['Olivia Reed', 'Infant room update', 'Baby Bunnies', '10:07 AM', 'Read'],
      ['Elena Martinez', 'Absence notice', 'Ava Martinez', '8:02 AM', 'Read'],
      ['Mia Patel', 'Supply reminder', 'Tiny Tigers', 'Yesterday', 'Read']
    ]
  },
  Settings: {
    description: 'Demo location, roles and daycare configuration.',
    columns: ['Setting', 'Current value', 'Area', 'Access', 'Status'],
    rows: [
      ['Center', 'LittleBloom Learning Center', 'Organization', 'Director', 'Configured'],
      ['Location', 'Main Campus', 'Locations', 'Director', 'Configured'],
      ['Director role', 'Sofia Ramirez', 'Permissions', 'Director', 'Demo'],
      ['Notifications', 'Sample alerts', 'Preferences', 'Director', 'Demo']
    ]
  }
};
