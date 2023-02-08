function Withdraw(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

  return (
    <Card
      bgcolor="warning"
      txtcolor="dark"
      header="Withdraw"
      status={status}
      body={show ? 
        <WithdrawForm setShow={setShow} setStatus={setStatus}/> :
        <WithdrawMsg setShow={setShow}/>}
    />
  )
}

function WithdrawMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>
        Withdraw again
    </button>
  </>);
}

function WithdrawForm(props){
  const [email, setEmail]   = React.useState('');
  const [amount, setAmount] = React.useState('');
    

  const firebaseConfig = {
    apiKey: "AIzaSyB5arCkmiPySMCQwchNb15dZfNyr6Jok9o",
    authDomain: "badbankfinalfinal.firebaseapp.com",
    databaseURL: "https://badbankfinalfinal-default-rtdb.firebaseio.com",
    projectId: "badbankfinalfinal",
    storageBucket: "badbankfinalfinal.appspot.com",
    messagingSenderId: "970030544687",
    appId: "1:970030544687:web:85e622f9abf722131493da"
  };
  
  if (firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig)
  }

  function handle(){
    console.log(email,amount)

    firebase.auth().currentUser.getIdToken()
    .then(idToken => {
     console.log(idToken) 
     fetch(`/account/update/${email}/-${amount}`,{
       method: 'GET',
       headers: {
         'Authorization': idToken
       }
     })
     .then(response => response.json())
     .then(data => {
       console.log(data)
       props.setStatus('')
       props.setShow(false)
     }) 
    })
    
  }


  return(<>

    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    Amount<br/>
    <input type="number" 
      className="form-control" 
      placeholder="Enter amount" 
      value={amount} 
      onChange={e => setAmount(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>
        Withdraw
    </button>

  </>);
}
