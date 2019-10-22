export const Menus = [
  {
    'name': 'Entity',
    'link': '/admin/admin/entity',
    'icon': 'E',
    'chip': false,
    'open': true,
  },
  {
    'name': 'Branch',
    'link': '/admin/admin/branch',
    'icon': 'B',
    'chip': false,
    'open': true,
  },
  {
    'name': 'Roles',
    'link': '/admin/admin/role',
    'icon': 'R',
    'chip': false,
    'open': true,
  },
  {
    'name': 'Users',
    'link': '/admin/admin/user',
    'icon': 'U',
    'chip': false,
    'open': true,
  },
  {
    'name': 'Billing',
    'icon': 'Billing',
    'link': false,
    'open': false,
    'chip': {'value': 17, 'color': 'accent'},
    'sub': [
      {
        'name': 'Package',
        'link': '/admin/admin/payment',
        'icon': 'P',
        'chip': false,
        'open': false,
      }
    ]
  }
];
