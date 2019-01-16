import React, { Component } from 'react';

class AdminDashboard extends Component {
    componentDidMount() {
        document.title = "Elevate - Dashboard";
    }
    
    render() {
      return (
        <div className="dashboard-container">
          <h1>Businesses</h1>
            <table className="col-12" >
                    <tr>
                      <th className='left_side'>Name</th>
                      <th className="">Status</th>
                      <th className="">View</th>
                      <th className='right_side'>Business Mode</th>
                    </tr>
                    <tr>
                      <td className='left_side'>Amazon</td>
                      <td className="">
                        <span className='circle'>
                          OK
                        </span>
                      </td>
                      <td className="bold">View |Edit</td>
                      <td className='right_side'>
                          <span className="blue-link">Go</span>
                      </td>
                    </tr>
                    <tr>
                      <td className='left_side'>Apple</td>
                      <td className="">
                            <span className='circle'>
                              OK
                            </span>
                          </td>                                  
                      <td className="bold">View |Edit</td>
                      <td className='right_side'>
                          <span className="blue-link">Go</span>
                      </td>
                    </tr>
                    <tr>
                      <td className='left_side'>Baskin Robins</td>
                      <td className="">
                        <span className='circle'>
                          OK
                        </span>
                      </td>
                      <td className="bold">View |Edit</td>
                      <td className='right_side'>
                          <span className="blue-link">Go</span>
                      </td>
                    </tr>
                    <tr>
                      <td className='left_side'>Microsoft</td>
                      <td className="">
                            <span className='circle red'>
                              BAD
                            </span>
                          </td>
                      <td className="bold">View |Edit</td>
                      <td className='right_side'>
                          <span className="blue-link">Go</span>
                      </td>
                    </tr>
                    <tr>
                      <td className='left_side'>Clorox</td>
                      <td className="">
                        <span className='circle'>
                          OK
                        </span>
                      </td>
                      <td className="bold">View |Edit</td>
                      <td className='right_side'>
                          <span className="blue-link">Go</span>
                      </td>
                    </tr>
                  </table>
                </div>
      );
    }
  }

export default AdminDashboard;