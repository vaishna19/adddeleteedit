import React, { Component } from 'react';
class Function extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            text: ''
        }
    }
    handleSubmit=(e)=> {
        e.preventDefault();
        this.setState(prevState => ({
            list: prevState.list.concat(this.state.text),
            text: ''
        }))
    }
    handleChange=(e)=> {
        this.setState({
            text: e.target.value
        })
    }
  // handleEdit = (index) => {
  //   return () => {
  //     let get = prompt("enter new data", index.name)
  //     index.id ? index.name = get : index.name = index
  //     this.setState({
  //       change: false
  //     }
  //     )
  //   }
  // }
  editPerson(index) {
		return () => {
			let edit = prompt("enter new data", index.name)
			index.id ? index.name = edit : index.name = index
			this.setState({
				change: false
			}
			)
		}
	}
    removeItem = (index) => {
      const list = this.state.list;
      list.splice(index, 1);
      this.setState({ list });
    }
    render() {
      const { text, list } = this.state;
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input value={text} onChange={e => this.handleChange(e)} />
            <button>submit</button>
            <ol >
              {list.map((item, index) => {
                return (
                  <li key={index}>{item}
                    {/* <button onClick={this.editPerson(person)}>
											edit
                    </button> */}
                    <button onClick={ this.editPerson(index)}>Edit</button>
                    <button onClick={() => this.removeItem(index)}>Delete</button>
                  </li>)
              })}
            </ol>
          </form>
        </div>
      )
    }
  }

export default Function;