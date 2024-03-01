interface FooterContentTypes {
  FooterConstant: {
    [key: string]: string[];
  };
}
export const FooterConstant: FooterContentTypes['FooterConstant'] = {
  Todo: ['About Todo', "We're hiring", 'Contact us'],
  Resource: ['Support center', 'Tutorial', 'Blog', 'press Kit'],
  Integration: [
    'Slack',
    'Microsoft Team',
    'Zoom',
    'Whatsapp',
    'Gmail',
    'Calender',
  ],
  Use_Cases: [
    'Project Management',
    'Marketing',
    'Sales & CRM',
    'Remote Work',
    'Design & Creative',
  ],
  Template: [
    'Sprint planning',
    'Agile management',
    'Content calendar',
    'Budget',
    'Event Management',
    'Inventory tracking',
  ],
};
