const state = {
  openSidebar: false,
  menu: [
    {
      id: 1,
      name: 'Anasayfa',
      link: '/',
      icon: 'home'
    },
    {
      id: 2,
      name: 'Avans Taleplerim',
      link: '/about',
      icon: 'cow'
    },
    {
      id: 3,
      name: 'Bağlı Çalışan İçin Avans',
      link: '/contact',
      icon: 'account'
    },
    {
      id: 4,
      name: 'Avans Talepleri Listele',
      link: '/avanstalep',
      icon: 'view-list'
    },
    {
      id: 5,
      name: 'Yönetim',
      link: '/settings',
      icon: 'settings'
    }
  ],
  ui: {
    tableOpts: {
      isPaginated: true,
      isPaginationSimple: true,
      defaultSortDirection: 'asc',
      perPage: 10
    }
  },
  testData: [
    {
      id: 1,
      first_name: 'Jesse',
      last_name: 'Simmons',
      date: '2016-10-15 13:43:27',
      gender: 'Male'
    },
    {
      id: 2,
      first_name: 'John',
      last_name: 'Jacobs',
      date: '2016-12-15 06:00:53',
      gender: 'Male'
    },
    {
      id: 3,
      first_name: 'Tina',
      last_name: 'Gilbert',
      date: '2016-04-26 06:26:28',
      gender: 'Female'
    },
    {
      id: 4,
      first_name: 'Clarence',
      last_name: 'Flores',
      date: '2016-04-10 10:28:46',
      gender: 'Male'
    },
    {
      id: 5,
      first_name: 'Anne',
      last_name: 'Lee',
      date: '2016-12-06 14:38:38',
      gender: 'Female'
    },
    {
      id: 1,
      first_name: 'Jesse',
      last_name: 'Simmons',
      date: '2016-10-15 13:43:27',
      gender: 'Male'
    },
    {
      id: 2,
      first_name: 'John',
      last_name: 'Jacobs',
      date: '2016-12-15 06:00:53',
      gender: 'Male'
    },
    {
      id: 3,
      first_name: 'Tina',
      last_name: 'Gilbert',
      date: '2016-04-26 06:26:28',
      gender: 'Female'
    },
    {
      id: 4,
      first_name: 'Clarence',
      last_name: 'Flores',
      date: '2016-04-10 10:28:46',
      gender: 'Male'
    },
    {
      id: 5,
      first_name: 'Anne',
      last_name: 'Lee',
      date: '2016-12-06 14:38:38',
      gender: 'Female'
    },
    {
      id: 1,
      first_name: 'Jesse',
      last_name: 'Simmons',
      date: '2016-10-15 13:43:27',
      gender: 'Male'
    },
    {
      id: 2,
      first_name: 'John',
      last_name: 'Jacobs',
      date: '2016-12-15 06:00:53',
      gender: 'Male'
    },
    {
      id: 3,
      first_name: 'Tina',
      last_name: 'Gilbert',
      date: '2016-04-26 06:26:28',
      gender: 'Female'
    },
    {
      id: 4,
      first_name: 'Clarence',
      last_name: 'Flores',
      date: '2016-04-10 10:28:46',
      gender: 'Male'
    },
    {
      id: 5,
      first_name: 'Anne',
      last_name: 'Lee',
      date: '2016-12-06 14:38:38',
      gender: 'Female'
    }
  ]
}

export default state
