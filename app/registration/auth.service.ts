import * as Firebase from 'firebase';
import { Observable } from 'rxjs';
import { from } from 'rxjs/observable/from';
import { UserDetail } from '../models/user-detail.model';

export interface AuthService {
  
  userSignup(email, password): Observable<any>;
  userSignin(email, password): Observable<any>;
    getToken();
    getUserDetail();
    reloadTokenAndUserDetail();
    logout();

      
}
export class AuthServiceImp implements AuthService {
  Token: "token";
  USER_DETAIL: "userdetail";
    private token: string;
    private userDetail: UserDetail;

    userSignup(email: any, password: any): Observable<any>
    {
    return this.signUpWith(email, password);
    }

    userSignin(email: any, password: any): Observable<any> {
    return this.SigninWith(email, password);
      }

    private signUpWith(email, password): Observable<any> {
        return from(Firebase.auth().createUserWithEmailAndPassword(email, password))
  }

    private SigninWith(email, password): Observable<any> {
    let currentUser: Firebase.User = Firebase.auth().currentUser;
    console.log("urrent user is ", currentUser.email)
    console.log("urrent user is ", currentUser.displayName)
    
    return from(Firebase.auth().signInWithEmailAndPassword(email, password))
    }
    private storeUserInfo(user: Firebase.User) {
      console.log(user)
      from(user.getIdToken(true)).subscribe(
                 data =>{
                console.log(data)
     this.token = data;
                this.storeValueInLocalStorage(this.Token, data);
            },
            error=>{
                console.log(error)
            }

          )

          this.createUserDetail(user)
  
      }

      private createUserDetail(user: Firebase.User){
          let userDetail : UserDetail = new UserDetail();
          userDetail.displayName = user.displayName;
          userDetail.emailId = user.email;
          userDetail.emailVerified = user.emailVerified;
          userDetail.phone = user.phoneNumber
     userDetail.photoURL = user.photoURL
       this.userDetail = userDetail;
          this.storeValueInLocalStorage(this.USER_DETAIL, JSON.stringify(userDetail));
}



    storeValueInLocalStorage(key: string, value: string){
          localStorage.setItem(key, value);
      }

      getValueFromLocalStorage(key){
          return localStorage.getItem(key)
        }

      removeValueFromLocalStorage(key){
          localStorage.removeItem(key)
        }

      getToken(){
          console.log("getToken ", this.token)
            return this.token;
      }
    getUserDetail(){
          console.log("getUserDetail ", this.userDetail)
            return this.userDetail;
     }

      reloadTokenAndUserDetail(){
          //this.storeUserInfo(Firebase.auth().currentUser);
            this.token = this.getValueFromLocalStorage(this.Token)
       this.userDetail = JSON.parse(this.getValueFromLocalStorage(this.USER_DETAIL))
            }

      logout(){
        Firebase.auth().signOut();
        this.removeValueFromLocalStorage(this.Token)
        this.removeValueFromLocalStorage(this.USER_DETAIL)
      }


  signInWithGoogle() {
  }
}
