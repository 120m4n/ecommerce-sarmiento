import firebase from "firebase";
import 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgvDxmzd37Tojqg65Ev_2RuUDsMB2FZfc",
    authDomain: "catstore-d7b0c.firebaseapp.com",
    projectId: "catstore-d7b0c",
    storageBucket: "catstore-d7b0c.appspot.com",
    messagingSenderId: "874690946816",
    appId: "1:874690946816:web:8f2b3e343f7e9c0471f5e5"
  };

const app = firebase.initializeApp(firebaseConfig);

export function getFirestore() {
    return firebase.firestore(app);
}

export const getItemList = async(idCategoria) => {
  const response = {status:"", items:[]};

  const db = firebase.firestore(app);
  let itemCollection  = null;

  if (!idCategoria){
    itemCollection = db.collection('items');  //<-promise
  } else {
    itemCollection = db.collection('items').where('categoria', '==', idCategoria);//<-promise
  }
  try {
      const querySnapshot = await itemCollection.get();
      response.items = (querySnapshot.docs.map(doc => {
          return {id: doc.id, ...doc.data()}
      }));
      response.status = "success";
  }
  catch(e){
      response.status = "fail";
  }
  return response;

}
//get item by id from firebase collection
export const getItemById = async (id) => {
  const response = {status:"", item: null};
  
  const db = firebase.firestore(app);
  const item = db.collection('items').doc(id);
  try {
    const querySnapshot = await item.get();
    if (!querySnapshot.exists) {
        response.status = 'empty';
    } else {
        response.status = 'success';
        response.item = {id: querySnapshot.id, ...querySnapshot.data()};
    }
  }catch(e){
      response.status = "fail";
  }
  return response; 
}

export const saveOrder = async (order) => {
  let response = {status: "", orderId: ""};

  const db = firebase.firestore(app);

  //todo update order items stock
  
  const ordersCollection = db.collection("orders");
  try {
      const querySnapshot = await ordersCollection.add(order);
      console.log(querySnapshot);
      if (!querySnapshot.id) {
          response.status = 'fail';
      } else {
          response.status = 'success';
          response.orderId = querySnapshot.id;
      }
  }catch(e){
      response.status = 'fail';
  }
  return response;
}