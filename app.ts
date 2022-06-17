// enum statusMassage{
//     sacses='s',
//     proces=123,
//     inline

// }
// const chek={

//     masssage:'complit',
//     statusMassage:statusMassage.sacses
// }
// if(chek.statusMassage===123){

// }
// function exam (status:statusMassage){

// }
// exam(123  )
// function rec(){
//     return 12
// }
// rec()
// enum exd {
//     admin=23,
//     close
// }
//  function test (x: {admin:number}){

//  }
//  test(exd
//NEVER @@@

// type paymant = 'refoung'|'pay'|'catch'

// function reject (only:paymant){
//     switch(only){
//         case 'refoung':
//             break;
//         case'pay':
//         break;
//         case 'catch':
//             break
//         default:
//             const _:never = only
//             throw new Error('нет такого');
            


//     }
// }
// interface user{
//     name:string
// }
// function getUser(){
//     if(Math.random()<5){
//         return null
//     }else{
//         return{
//             name:'вася'
//         }as user
//     }
// }


//  if(getUser){
//      const asdas = getUser.name

//  }

//Привидения типа !!!
//  interface Name{
//      user:string
//      email:string,
//      logname:string
//  }
//  const names:Name= {
//      user:'алекс',
//      email:'kohno@gmail.com',
//      logname:'shakal'
//  }
//  interface admin {
//      user:string
//      surname:string

//  }
// //  const Admin:admin={
// //      ...names,
// //        surname:'sd'   // нельзя так делать приводить типи 
    
// //  }

//  function userAdmins(names:Name):admin{ //правильно
//      return{
//         user:names.user,
//         surname:'sf'

       
//      }
//  }
//TYPE GUARD !!!!
// function number(x:string|number){
//     if(cls(x)){
//         console.log(x)
        
//     }else{
//         console.log(x)

//     }
//     x
// }
// function cls(id:string|number):id is string{
//     return typeof id ==='string'
// }
//!!class
//  class user{
//      name:string
// constructor(name:string){
//     this.name=name
// }

//  }
//  const User = new user('васлий')
 
//  console.log(user.name)

//  User.name ='петя'
//  console.log(user.name)

// class fucks{
//     role:Number
// }
// const b = new fucks
// b.role = 2
//class конструктор !!!!
//  class user{
//       name:string
//       age:number
//  constructor()
//  constructor(name:string)
//  constructor (age:number)
//  constructor(ageorName?:string|number ){
//     if(ageorName == 'string'){
//         this.name=ageorName

//     }else if (ageorName=='string'){
//         typeof ageorName==='number'
//     }


 
//  }

//   }
// const User = new user('васлий')
// const user2 = new user()
// const user3 = new user(12)
//методы class !!!
// enum PaymentStatus{
//     holdesm,
//     proces,
//     revers
// }
//  class paymants{
//      id:number
//      satus:PaymentStatus=PaymentStatus.proces
//      creat :Date =new Date()
//      update:Date
//      constructor(id:number){
//          this.id=id
     
        
//      }
//      getpaymentDate ():number{
//         return new Date().getTime()- this.creat.getTime()
//      }
//    unHoldpaymant(){
//        if(this.satus==PaymentStatus.holdesm){
//        throw new Error ('ошибка')
//        }
//        this.satus=PaymentStatus.proces
//        this.update =new Date()
//     }
   

    
//  }
 

//  const  ayments = new paymants(1)
//  const timePayment = PaymentStatus
    
    //  class user{
    //      skils:string[] 
    //      addskils (skils:string)
    //      addskils (skil:string[])

    //      addskils(skilsOrskil:string|string[]){
    //     if(typeof skilsOrskil=='string'){
    //     this.skils.push(skilsOrskil)
    //     }else{
    //         this.skils.concat(skilsOrskil)
    //     }
    //      }

    //  }
    //  new user().addskils(['asd'])
    //!!!get - set 
    // class user{
    //     login:string
    //     pasword:string
    //     set _login(l:string){
    //         this.login='userName'+l

    //     }
    //   get _login(){ //возращаэ в set 
    //       return    
    //   }
    //    async getPasword(p:string){
           

    //    }
    // }
    // const User = new user()
    // User.login 


    
    //!!!!040 Implements реализация 
    // interface Ipaybla {
    //     pay (paymant:string):void
    //     pays?:string
    // }
    // interface delet{
    //     delet():void
    // }
    // class user implements Ipaybla,delet{
    //     delet(): void {
    //         throw new Error("Method not implemented.")
    //     }
    //     pay(paymant: string): void {
    //         throw new Error("Method not implemented.")
    //     }
    //     pays?: string

    // }
    //!!!041 Extends





//   type paymentStatus = 'new '|'paid'
//      class paymant {
//          id:number
//          status:paymentStatus
//          constructor(id:number){
//              this.id=id
//          }
//          pay(){
//                 this.status="paid"
//          }
//      }
//      class Paymant extends paymant{
//          database:number
//          paidAction : any
//          constructor(){
//              const id =123
//              super(id)
//          }

//          override pay (){
//              this.paidAction=Date
//          }
//      }
//      new Paymant().pay




//043 Композиция против наследования
// class user{
//     name:string
//     constructor (name:string){
//         this.name=name
//     }

// }
// class User extends Array<user>{
//     searchbyId(name:string){
//         return this.filter(u=>u.name===name )

//     }
// }


// class USer2{
//     user:user
//     User:User
//     constructor (user:user,User:User){
//         this.User=User
//         this.user=user
//     }
// }
// 044 Видимость свойств



// class user{
//     private user:string
//     public name:number
//     protected car:number
//     #price :number
//     set model (User:string){
//         this.user = 'm'
//         this.#price=12

//      }
//      get model (){
//         return this.user

//     }
//      publics(m:string){
//          this.user ='m'
//          return this.user

//      }
// }
// new user().name



//045 test5
// class product {
//     constructor(
//         public id:number,
//         public tittel:string,
//         public price :number
//     ){

//     }
// }
// class deliveri {
//     constructor(  date:Date){
        
//     }
// }
// class deliveri2 extends deliveri{
//     constructor(extend:Date,home:string){
//         super(extend)
     
//     }
// }
// class deliveri3 extends deliveri{
//     constructor(shopId,home:string){
//         super(new Date())
     
//     }
// }
// type deliveriOption=deliveri2|deliveri3
// class cart {
//     private prducts :product[]=[]
//     private deliveri :deliveri2|deliveri3
    
//     addpoduct(product:product){
//         this.prducts.push(product)

//     }
//     deletProduct(prductId:number): void{
//         this.prducts=this.prducts.filter(p=>p.id !==prductId)

 
//     }
//     getsum():number{
//         return this.prducts
//         .map((p:product)=>p.price)
//         .reduce((p1:number,p2:number)=>p1+p2)
//     }
//     setDeliver (deliveri:deliveriOption):void{
//         this.deliveri=deliveri


//     }
//     chetkOut(){
//         if(this.prducts.length==0){
//             throw new Error('нету 0 продуктов в корзне')

//         }
//         if(!this.deliveri){
//             throw new Error('не указа способ доставки')

//         }
//         return{sucsec:true}
//     }
// }
// class user{
//     static user:string
//     public users:string
// }
// new user().users



//кокстк this !!!
// class paymant {
//     private date:Date= new Date
//      getDate(this:paymant){//1 вариант
//         return this.date
//      }
//      getDateArow =()=>{//2 вариант
//         this.date
//      }
// } 
// const p =new paymant()


// const user={
//     id:1,
//     PaymantDate :p.getDate.bind(p ),
//     paymantarow:p.getDateArow
// }
// console.log(user.paymantarow)
// class paymants extends paymant{
//     save(){
//        return super.getDate()// правильно обращения 
//        //  return super.  getDateArow ошибка  
//        //return this.  getDateArow все окей  
//     }
// }



//048 Типизация this 
// class user{
//     name:string
//     setName(name:string):this{
//         this.name =name
//         return this
//     } 
//     isAdmin():this is User2{
//         return this instanceof User2

//     }
// }
// class User2 extends user{
//     read:string[]
// }
// const User =new user().setName('вася')
// const ro= new User2().setName('sd')
// let users: user|User2 = new user()



//049 Абстрактные классы
// abstract class Cos {
//     abstract handle(reqs:any):void
//     hendles(req:any){
//         console.log('statrt')
//         this.handle( req  ) 
//         this.hendles(req)
//      }
//  }
// class user extends Cos {
//      handle(req:any):void{
    
//     }
// }
// const c= new user()
// c.hendles
//тест абстрак 
abstract class logger{
    abstract logs (masssage:string ):void
    printDate(date:Date){
        this.logs=(Date.toString)
      

    }

}
class chek extends logger{
  logs(masssage: string): void {
      
  } 
  logWhit(masssage:string){
    this.printDate(new Date)
    this.logs(masssage)

  }
}