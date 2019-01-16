import React, { Component } from 'react';

class AdminTableItem extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <tr>
        <td className='left_side'>{this.props.name}</td>
          <td className="">
            <span className={this.props.status === "OK" ? 'circle' : 'circle red'}>
              {this.props.status}
            </span>
          </td>
          <td className="bold">View |Edit</td>
          <td className='right_side'>
            <span className="blue-link">Go</span>
        </td>
      </tr>
    );
  }
}

export default AdminTableItem;