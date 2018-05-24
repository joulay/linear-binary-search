import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          input: 0,
          linearCount: null,
          binaryCount: null,
          data: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 
            40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 
            93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 
            91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 
            38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 
            87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5],
        }
      }
    
      linear = (event) => {
        event.preventDefault();
        let count = 0;

        for (let i=0; i<this.state.data.length; i++) {
            if (this.state.data[i] == this.state.input) {
                return this.setState({linearCount: count});
            }
            count++;
        }
        return this.setState({linearCount: 'Not in list'});
      }
        
      
    
      binary = (data, input, start=0, end=this.state.data.length, count = 0) => {
        input=parseInt(this.state.input, 10);
        data = this.state.data.sort((a, b) => a-b);
    
        if (start > end) {
            return 'not in list';
        }
    
        const index = Math.floor((start + end) / 2);
        const item = data[index];
        
        if (item == input) {
            return count;
        }
        else if (item < input) {
          count ++;
            return this.binary(data, input, index + 1, end, count);
        }
        else if (item > input) {
          count ++
            return this.binary(data, input, start, index - 1, count);
        }
      }
    
      onChange = (e) => {
        this.setState({
          input: e.target.value
        })
      }
    
      onClick = (e) => {
        e.preventDefault();
        this.setState({
          binaryCount: this.binary()
        })
      }
    
      render(){
        return (
          <div>
              <label>Search</label>
            <form>
              <input type="text" onChange={e => this.onChange(e)} />
             
              <button onClick={this.linear}>Linear</button>
              
              <button onClick={e => this.onClick(e)}>Binary</button>
            </form>
            <div>
              <p>{this.state.linearCount}</p>
              <p>{this.state.binaryCount}</p>
            </div>
          </div>
        )
      }
    
    }