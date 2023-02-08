function Balance(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

  return (
    <Card
      bgcolor="dark"
      txtcolor="warning"
      header="Balance"
      status={status}
      body={show ?
        <BalanceForm setShow={setShow} setStatus={setStatus}/> :
        <BalanceMsg setShow={setShow}/>}
    />
  )

}

function BalanceMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>
        Check balance again
    </button>
  </>);
}

function BalanceForm(props){
  const [email, setEmail]   = React.useState('');
  const [balance, setBalance] = React.useState('');  
  
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

    firebase.auth().currentUser.getIdToken()
    .then(idToken => {
      fetch(`/account/${email}`, {
        method: 'GET',
        headers: {
          'Authorization': idToken
        }
      })
    .then(response => response.json())
      .then(data => {
        setBalance(data.balance)
        props.setStatus('Your balance is: ' + data.balance)
        props.setShow(false)
      })
    })
  }


  return (<>

    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>
        Check Balance
    </button>

  </>);
}