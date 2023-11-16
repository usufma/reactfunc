// import logo from './logo.svg';
import './App.css';
import Welcome from './class1';
import Welcome2 from './welcome';
import List from './list';
import Table from './table';
import Tableprobs from './tablepros';
function App() {
  const depart=[
    {
      name:"Mathemetics"
    },
    {
      name:"physics"
    },{
      name:"chemistry"
    },{
      name:"computer science"
    }
  ]
  const tabledetails=[

    {
      departments:"Science",
      tname:"cita",
      salary:45000,
      experiance:3
    },
    {
      departments:"Arts",
      tname:"rita",
      salary:55000,
      experiance:6
    },
    {
      departments:"Computer Science",
      tname:"katija",
      salary:45000,
      experiance:3
    },
    {
      departments:"IT",
      tname:"Banu",
      salary:75000,
      experiance:3
    }






  ]
  return (
    <div className='container'>
    <div className="App">
      <Welcome/>
      < Welcome2 name = "john"age="25"/>
    </div>
    
    <div className='list'><h2>List with props</h2><List departName={depart} /></div>
    
    <div className='t'><h1>Table</h1><Table/></div>
    
    <div className='tb'><h1>Table with props</h1><Tableprobs tabledata={tabledetails}/></div>
    </div>
  ); 
}

export default App;
