import React, { Component } from 'react';
import AdminTableItem from './AdminTableItem'

let MockupData = [
  {name: "Amazon", status: "OK"}, //data could contain edit url and enter portal url
  {name: "Apple", status: "OK"},
  {name: "Baskin Robins", status: "OK"},
  {name: "Microsoft", status: "BAD"},
  {name: "Clorox", status: "OK"},
  {name: "1234", status: "BAD"},
]

class AdminDashboard extends Component {
    constructor(props) {
      super(props);
      this.state = {
        businessEntries: MockupData,
      }
    }

    componentDidMount() {
        document.title = "Elevate - Dashboard";
        // this.setState({
        //   businessEntries: MockupData
        // })
        console.log(this.state.businessEntries);
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
                    { this.state.businessEntries.map((businessEntry, index) => {
                        return (
                          <AdminTableItem 
                            name={businessEntry.name}
                            status={businessEntry.status}
                            key={"businessEntry"+index}
                          />
                        )
                      })
                    }
                  </table>
                </div>
      );
    }
  }

export default AdminDashboard;