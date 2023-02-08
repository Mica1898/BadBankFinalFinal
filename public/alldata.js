function AllData(){
  const [data, setData] = React.useState('')

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB5arCkmiPySMCQwchNb15dZfNyr6Jok9o",
    authDomain: "badbankfinalfinal.firebaseapp.com",
    databaseURL: "https://badbankfinalfinal-default-rtdb.firebaseio.com",
    projectId: "badbankfinalfinal",
    storageBucket: "badbankfinalfinal.appspot.com",
    messagingSenderId: "970030544687",
    appId: "1:970030544687:web:85e622f9abf722131493da"
    };
  
    if(firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig)
    }

  React.useEffect(() => {
    // fetch all acounts from API
    // fetch('/account/all')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     setData(JSON.stringify(data.name))
    //   })

      firebase.auth().currentUser.getIdToken()
    .then(idToken => {
     console.log(idToken) 
     fetch('/account/all',{
       method: 'GET',
       headers: {
         'Authorization': idToken
       }
     })
     .then(response => response.json())
     .then(data => {
      console.log(data);
      setData(JSON.stringify(data))
     }) 
    })
  }, [])



  return (
    <>
    <h5>All Data in Store</h5>
    {data}
    </>
  );
}
