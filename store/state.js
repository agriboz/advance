const state = {
  advanceStatus: {
    employeeRequested: 1,
    ownerRequested: 3,
    transferToSap: 5,
    cancelled: 7,
    deleted: 9,
    transferError: 11
  },
  loading: true,
  canMakeAdvanceRequest: false,
  companies: [],
  advanceStatusList: [],
  employee: {},
  employeeRoles: [],
  createAdvance: {
    amount: 100,
    amountPercentage: '0'
  },
  advanceRequest: {
    data: [],
    selected: {},
    canAdvanceEmployee: false,
    disableAmount: false,
    modal: {
      edit: false,
      create: false
    }
  },
  advanceRequestManager: {
    data: []
  },
  advanceList: {
    data: [],
    checkedRows: []
  },

  ui: {
    menu: [
      {
        id: 1,
        name: 'Avans Taleplerim',
        link: '/',
        icon: 'home',
        visible: true
      },

      {
        id: 3,
        name: 'Bağlı Çalışan İçin Avans',
        link: '/manager',
        icon: 'account',
        visible: false
      },
      {
        id: 4,
        name: 'Avans Talepleri Listele',
        link: '/advance-list',
        icon: 'view-list',
        visible: false
      },
      {
        id: 5,
        name: 'Yönetim',
        link: '/settings',
        icon: 'settings',
        visible: false,
        children: [{
          id: 6,
          name: 'Uygulama Ayarları',
          link: '/settings'
        },
        {
          id: 7,
          name: 'Çözüm Merkezi Bordro Yetkilisi Tanımlama',
          link: 'settings/roles'
        }]

      }
    ],
    openSidebar: false,
    tableOpts: {
      isPaginated: true,
      isPaginationSimple: true,
      defaultSortDirection: 'desc',
      perPage: 10,
      checkable: false,
      isHoverable: true,
      isStriped: true,
      isLoading: true
    }
  }
}

export default state
