export class UserAuthStatus {
   private isAuthenticated: boolean = false

  constructor(){
  }

  getStatus(){
    return this.isAuthenticated
  }

  setStatus(status: boolean){
    this.isAuthenticated = status
  }
}