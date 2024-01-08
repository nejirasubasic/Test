import { Page } from '@playwright/test';
class AdactINHotelPage {
    private page: Page; // Add the appropriate type for the page object
  
    constructor(page: any) {
      this.page = page;
    }
  
    async navigateToLoginPage() {
      await this.page.goto('https://adactinhotelapp.com/index.php');
    }
  
    async login(username: string, password: string) {
      await this.page.fill('#username', username);
      await this.page.fill('#password', password);
      await this.page.click('#login');
    }
  
    
  }
  
  export default AdactINHotelPage;