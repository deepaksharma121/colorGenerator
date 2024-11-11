import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      colorList: [],
      copiedColorIndex: null,
      searchInput: "",
      matchingColors: [],
    };
  }

  componentDidMount(){
    this.generateColorPalette();
  }

  generateColorPalette = () => {
    const maxColorBoxes = 21;
    const colorList = [];

    for(let i = 0; i < maxColorBoxes; i++){
      const randomHexColor = `#${Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, "0")}`;
      colorList.push(randomHexColor);
    }
    this.setState({colorList,copiedColorIndex:null});
  };

  copyColorToClipboard = (hexValue,index) => {
    navigator.clipboard.writeText(hexValue).then(() => {
      this.setState({copiedColorIndex: index});
    })
    .catch(() => {
      alert("Failed to copy color to clipboard.");
    });
  };

  handleSearchChange = (e) => {
    const searchInput = e.target.value.toLowerCase();
    const colorMapping = {
      red: ["#FF0000", "#FF6347", "#FF7F50", "#FFA07A", "#FFB6C1"],
      green: ["#00FF00", "#32CD32", "#90EE90", "#008000", "#006400"],
      blue: ["#0000FF", "#1E90FF", "#87CEFA", "#ADD8E6", "#0000CD"],
      yellow: ["#FFFF00", "#FFFFE0", "#FFD700", "#FFDAB9", "#F5DEB3"],
      orange: ["#FFA500", "#FF8C00", "#FF7F24", "#FFA54F", "#FF8C69"],
      purple: ["#800080", "#800080", "#800080", "#800080", "#800080"],
      pink: ["#FFC0CB", "#FFB5C5", "#FFA54F", "#FF69B4", "#FF1493"],
      gray: ["#808080", "#A9A9A9", "#D3D3D3", "#C0C0C0", "#808080"],
      black: ["#000000", "#000000", "#000000", "#000000", "#000000"],
      white: ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"],
      brown:["#A52A2A", "#A52A2A", "#A52A2A", "#A52A2A", "#A52A2A"],
      cyan: ["#00FFFF", "#00FFFF", "#00FFFF", "#00FFFF", "#00FFFF"],
      magenta: ["#FF00FF", "#FF00FF", "#FF00FF", "#FF00FF", "#FF00FF"],
      lime: ["#00FF00", "#00FF00", "#00FF00", "#00FF00", "#00FF00"],
      teal: ["#008080", "#008080", "#008080", "#008080", "#008080"],
      navy: ["#000080", "#000080", "#000080", "#000080", "#000080"],
      aqua: ["#00FFFF", "#00FFFF", "#00FFFF", "#00FFFF", "#00FFFF"],
      fuchsia: ["#FF00FF", "#FF00FF", "#FF00FF", "#FF00FF", "#FF00FF"],
      silver: ["#C0C0C0", "#C0C0C0", "#C0C0C0", "#C0C0C0", "#C0C0C0"],
      maroon: ["#800000", "#800000", "#800000", "#800000", "#800000"],
      gold: ["#FFD700", "#FFD700", "#FFD700", "#FFD700", "#FFD700"],
      olive: ["#808000", "#808000", "#808000", "#808000", "#808000"],
      orangeRed: ["#FF4500", "#FF4500", "#FF4500", "#FF4500", "#FF4500"],
      salmon: ["#FA8072", "#FA8072", "#FA8072", "#FA8072", "#FA8072"],
      darkGray: ["#A9A9A9", "#A9A9A9", "#A9A9A9", "#A9A9A9", "#A9A9A9"],
      lightGray: ["#D3D3D3", "#D3D3D3", "#D3D3D3", "#D3D3D3", "#D3D3D3"],
      darkBlue: ["#00008B", "#00008B", "#00008B", "#00008B", "#00008B"],
      lightBlue: ["#ADD8E6", "#ADD8E6", "#ADD8E6", "#ADD8E6", "#ADD8E6"],
      darkGreen: ["#006400", "#006400", "#006400", "#006400", "#006400"],
      lightGreen: ["#90EE90", "#90EE90", "#90EE90", "#90EE90", "#90EE90"],
      darkCyan: ["#008B8B", "#008B8B", "#008B8B", "#008B8B", "#008B8B"],
      lightCyan: ["#4169E1", "#4169E1", "#4169E1", "#4169E1", "#4169E1"],
      darkRed: ["#8B0000", "#8B0000", "#8B0000", "#8B0000", "#8B0000"],
      lightRed: ["#FF0000", "#FF0000", "#FF0000", "#FF0000", "#FF0000"],
      darkMagenta: ["#8B008B", "#8B008B", "#8B008B", "#8B008B", "#8B008B"],
      lightMagenta: ["#FF00FF", "#FF00FF", "#FF00FF", "#FF00FF", "#FF00FF"],
      darkYellow: ["#9B30FF", "#9B30FF", "#9B30FF", "#9B30FF", "#9B30FF"],
      lightYellow: ["#FFFF00", "#FFFF00", "#FFFF00", "#FFFF00", "#FFFF00"],
      darkGold: ["#008000", "#008000", "#008000", "#008000", "#008000"],
      lightGold: ["#FFD700", "#FFD700", "#FFD700", "#FFD700", "#FFD700"],
      darkOrange: ["#FF8C00", "#FF8C00", "#FF8C00", "#FF8C00", "#FF8C00"],
      lightOrange: ["#FFA500", "#FFA500", "#FFA500", "#FFA500", "#FFA500"],
      darkPink: ["#FFC0CB", "#FFB5C5", "#FFA54F", "#FF69B4", "#FF1493"],
      lightPink: ["#FFC0CB", "#FFB5C5", "#FFA54F", "#FF69B4", "#FF1493"],
      darkGrey: ["#A9A9A9", "#A9A9A9", "#A9A9A9", "#A9A9A9", "#A9A9A9"],
      lightGrey: ["#D3D3D3", "#D3D3D3", "#D3D3D3", "#D3D3D3", "#D3D3D3"],
      darkViolet: ["#9400D3", "#9400D3", "#9400D3", "#9400D3", "#9400D3"],
      lightViolet: ["#9370DB", "#9370DB", "#9370DB", "#9370DB", "#9370DB"],
      darkBrown: ["#A52A2A", "#A52A2A", "#A52A2A", "#A52A2A", "#A52A2A"],
      lightBrown: ["#D2691E", "#D2691E", "#D2691E", "#D2691E", "#D2691E"],
      darkPurple: ["#800080", "#800080", "#800080", "#800080", "#800080"],
      lightPurple: ["#800080", "#800080", "#800080", "#800080", "#800080"],
      darkTeal: ["#008080", "#008080", "#008080", "#008080", "#008080"],
      lightTeal: ["#008080", "#008080", "#008080", "#008080", "#008080"],
      burgundy: ["#eeeeee","#abc8e2","#670f29","#311400","#ffffff"],
      notwash: ["#d2d2d2","#973030","#12421d","#973030","#67323b"],
      indigo: ["#eeeeee","#ed5b2c","#221a35","#361f1c","#aaaaaa"],
      rayman: ["#ebdb85","#f7c99b","#543f88","#ee4e64","#f7cc67"],
      unsure: ["#f2d9b5","#e5b260","#494748","#c76155","#f876d3"],
      letshavefun: ["#504b86","#dab5d2","#7cd0ea","#758cd8","#151533"],
      buzzpro: ["#387879","#b4bfc0","#826276","#332a35","#6d644f"],
      gamer: ["#f8f9fa","#f8f9fa","#f8f9fa","#f8f9fa","#f8f9fa"],
      legendaryidol: ["#d26ec1","#f6def1","#4f3686","#3f1e46","#c5267e"],
      pinkfloyd: ["#f8f9fa","#f8f9fa","#f8f9fa","#f8f9fa","#f8f9fa"],
      kendricklamar: ["#f8f9fa","#f8f9fa","#f8f9fa","#f8f9fa","#f8f9fa"],
      comeon: ["#9574b0","#efd7ea","#2c214f","#e19ecd","#602d58"],
      fizzarolli: ["#b93b58","#b6ffd6","#d9ff5a","#6ad4ca","#f0486f"],
      redneck: ["#f8f9fa","#f8f9fa","#f8f9fa","#f8f9fa","#f8f9fa"],
      dancin: ["#f8f9fa","#f8f9fa","#f8f9fa","#f8f9fa","#f8f9fa"],
      asmodeus: ["#d8ff52","#e32332","#242166","#46ceed","#67fff3"],
      rosie: ["#782828","#b24447","#7d424f","#e1d5d7","#e9546c"],
      sonic: ["#c71585","#f8f9fa","#2b1d30","#5d2543","#c71585"],
      wolf: ["#f8f9fa","#f8f9fa","#f8f9fa","#f8f9fa","#f8f9fa"],
      
    };

    const matchingColors = colorMapping[searchInput] || [];
    this.setState({searchInput,matchingColors});
  };

  render(){
    const filteredColorList = this.state.matchingColors.length > 0 ? this.state.matchingColors:this.state.colorList;

    function homepage() {
      return window.location = '/';
    };

    return(
      <div id='first-container'>
        <img onClick={homepage} src="../Color Palette Generator-logo/cover.png" alt='Color Palette Generator'/>
        <div className="search-container">
          <input type='text' className='search-input' placeholder='Search for a color' value={this.state.searchInput} onChange={this.handleSearchChange} />
        </div>

        <ul className='container'>
          {filteredColorList.map((hexValue,index) => (
            <li className='color' key={index} onClick={() => this.copyColorToClipboard(hexValue,index)}>
              <div className='rect-box' style={{background:hexValue}}></div>
              <span className='hex-value'>{hexValue}{this.state.copiedColorIndex === index && (<p className='copied-message'>Copied</p>)}</span>
            </li>
          ))}
        </ul>

        <button className='refresh-btn' onClick={this.generateColorPalette}>Refresh Color Palette</button>
        <footer>
          Copyright &copy; 2022 Color Palette Generator. All rights reserved. Deepak Sharma.
        </footer>
      </div>
    );
  }
}

export default App;

