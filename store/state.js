const state = {
  settings: {
    key: {
      data: [],
      selected: {},
      updateSelected: {},
      modal: {
        edit: false
      }
    },
    roles: {
      data: [],
      searchEmployee: [],
      selectedEmployee: null
    }
  },
  employee: {},
  createAdvance: {
    amount: 100,
    amountPercentage: '0'
  },
  advanceRequest: {
    data: [],
    disableAmount: false,
    modal: {
      edit: false,
      create: false
    }
  },
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
  }
}

export default state
