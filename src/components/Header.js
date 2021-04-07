import React from 'react';

class Header extends React.Component {
    
    enterKey = (e) => {
        if (e.key === "Enter") {
          this.props.onAddBtn()
        }
      }
    render() {
        return (
            <div className="input">
                <h1 className="title">My to do list</h1>
                <div className="button">
                    <input className="myInput" type="text" placeholder="Write Your plans..." value={this.props.todoName} onChange={this.props.handleChange} onKeyDown={this.enterKey} />
                    <button className="click" onClick={this.props.onAddBtn}>Add</button>
                </div>
                <div className="searchButton">
                    <input className="myInput" type="text" placeholder="Search..." value = {this.props.searchedName} onChange={this.props.searchChange}/>
                    <button className="click" onClick={this.props.onSearchBtn}>Search</button>
                </div>

            </div>
        )
    }
}


export default Header;