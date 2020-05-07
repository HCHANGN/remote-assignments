import React from 'react';

class App extends React.Component {
  state={
    welcomeMessage:"Welcome Message",

  }

  toggleWelcome = ()=>{
    this.setState({
      welcomeMessage:"Have a Good Time!",
      navMenuStatus:"toggleMenu"
    })
  }

  toggleMenu = ()=>{
    this.setState({
      navMenuStatus:"navMenu"
    }) 
  }
  closeMenu = ()=>{
    this.setState({
      navMenuStatus:""
    })
  }

  render(){
    return(
      <div className="App">   
          <header>
            <a className="titleLogo">Website Title / Logo</a>
            <img src="Burger_Menu.svg" className="navIcon" onClick={this.toggleMenu}/>
            <ul className={this.state.navMenuStatus}>
              <li className="closeIcon" onClick={this.closeMenu}>X</li>
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
              <li>item 4</li>
            </ul>
            <ul className="underMenu">
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
              <li>item 4</li>
            </ul>
          </header>
          <div className="banner">
            <h2 onClick={this.toggleWelcome}>{this.state.welcomeMessage}</h2>
          </div>
          <h3 className="sectionTitle">Section Title</h3>
          <div className="container">
            <p className="col">Content Box 1</p>
            <p className="col">Content Box 2</p>
            <p className="col">Content Box 3</p>
            <p className="col">Content Box 4</p>
          </div>
          <a className="footer">Call to Action</a>
          <div className="container noShow">
            <p className="col">Content Box 5</p>
            <p className="col">Content Box 6</p>
            <p className="col">Content Box 7</p>
            <p className="col">Content Box 8</p>
          </div>
          <script src="app.js"></script>
      </div>
    )}
}

export default App;
