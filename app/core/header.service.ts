export class HeaderService {
  menus : any[] = [
    {
      displayName:'Home',
      url:'home',
      icon:'home',
    },
    {
      displayName: 'Login',
      url: 'login',
      icon: 'login',
    },
    {
      displayName: 'Book Table',
      url: 'dashboard/restaurants',
      icon: 'login',
    },
    {
      displayName: 'Contact',
      url: 'contact-us',
      icon: 'login',
    },
    {
      displayName: 'Registration',
      url: 'registration',
      icon: 'login',
    }
    

  ]
  getMenus() { return this.menus;}
}
