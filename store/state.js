const state = {
  advanceStatus: {
    employeeRequested: 1,
    ownerRequested: 3,
    transferToSap: 5,
    cancelled: 7,
    deleted: 9,
    tansferError: 11
  },
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
  employee: null,
  createAdvance: {
    amount: 100,
    amountPercentage: '0'
  },
  advanceRequest: {
    data: [],
    selected: {},
    disableAmount: false,
    modal: {
      edit: false,
      create: false
    }
  },
  advanceList: {
    data: [],
    checkedRows: []
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
      perPage: 10,
      checkable: false,
      isHoverable: true,
      isStriped: true,
      isLoading: true
    }
  }
}

export default state
