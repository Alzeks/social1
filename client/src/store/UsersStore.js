import {makeAutoObservable} from 'mobx'

export default class UsersStore{
  constructor(){
this._users = [
      {id: 1, name: 'iphon 12'},
      {id: 2, name: 'iphon 12'},
      {id: 3, name: 'iphon 12'},
      {id: 4, name: 'iphon 12'},
      {id: 5, name: 'iphon 12'},
      {id: 6, name: 'iphon 12'},
  ]
  this._isAuth = false
  this._chatUser = {}
  this._chat2User = {}
  this._mainUser = {}
  this._oneChat = {}
      makeAutoObservable(this)
    }
    setUsers(users){this._users = users}
    setIsAuth(bool){this._isAuth = bool}
    setMainUser(mainUser){this._mainUser = mainUser}
      setChatUser(chatUser){this._chatUser = chatUser}
      setChat2User(chat2User){this._chat2User = chat2User}
      setOneChat(oneChat){this._oneChat = oneChat}
      get users(){return this._users}
      get isAuth(){return this._isAuth}
      get chatUser(){return this._chatUser}
      get chat2User(){return this._chat2User}
      get mainUser(){return this._mainUser}
      get oneChat(){return this._oneChat}
}
