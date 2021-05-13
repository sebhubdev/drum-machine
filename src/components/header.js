const tech=[
    'React.js',
    'Redux.js',
    'Javascript ES6',
    'Jquery',
    'Html5',
    'Css3'
]



const Header=()=>{
    return (
      <header id="header">
          <h1>Drum Machine - piano</h1>
          <div id="tech">
                {
                    tech.map((item,key)=>{
                        return <span key={key}>{item}</span>
                    })
                }
          </div>
      
      </header>
    );
  }
  
  export default Header;