function Login(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');    

  return (
    <Card
      bgcolor="dark"
      txtcolor="warning"
      header="Login"
      status={status}
      body={show ? 
        <LoginForm setShow={setShow} setStatus={setStatus}/> :
        <LoginMsg setShow={setShow} setStatus={setStatus}/>}
    />
  ) 
}

function LoginMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>
        Authenticate again
    </button>
  </>);
}

const firebaseConfig = {
  apiKey: "AIzaSyB5arCkmiPySMCQwchNb15dZfNyr6Jok9o",
  authDomain: "badbankfinalfinal.firebaseapp.com",
  databaseURL: "https://badbankfinalfinal-default-rtdb.firebaseio.com",
  projectId: "badbankfinalfinal",
  storageBucket: "badbankfinalfinal.appspot.com",
  messagingSenderId: "970030544687",
  appId: "1:970030544687:web:85e622f9abf722131493da"
};

// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}


//get elements
const email     = document.getElementById('email')
const password  = document.getElementById('password')
const login     = document.getElementById('login')
const signup    = document.getElementById('signup')
const logout    = document.getElementById('logout')
const loginMsg  = document.getElementById('loginMsg')
const routeMsg  = document.getElementById('routeMsg')


function LoginForm(props){
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  
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

  function handle(){
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, password)

    console.log('two')
    props.setStatus('')
    props.setShow(false)

    promise.catch(e => {
      props.setStatus('Login Failure!')
    })
  }


  //   if (!user) {
  //     console.log('one')      
  //     props.setStatus('fail!')      
  //     return;      
  //   }
  //   if (user.password == password) {
  //     console.log('two')            
  //     props.setStatus('');
  //     props.setShow(false);
  //     return;      
  //   }
  //   console.log('three')          
  //   props.setStatus('fail!');        
    


  return (<>

    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    Password<br/>
    <input type="password" 
      className="form-control" 
      placeholder="Enter password" 
      value={password} 
      onChange={e => setPassword(e.currentTarget.value)}/><br/>

    <button type="submit" className="btn btn-light" onClick={handle}>Login</button>
   
  </>);
}