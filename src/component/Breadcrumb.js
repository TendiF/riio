import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';


class Breadcrumb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [
        { name: 'Destination', link: '/destination' },
        { name: 'Recipient', link: '/contact' },
        { name: 'Payment', link: '/payment' },
        { name: 'Finish', link: '/thanks' },
      ],
    };
  }


  render() {
    const items = [];

    for (const [i, v] of this.state.menus.entries()) {
      if(i < this.props.step){
        items.push(
          <div>
            <div>
              <Link to={v.link}>{v.name}</Link>
            </div>
            <div>
              {i !== this.state.menus.length - 1 && i !== this.props.step - 1
                && <IoIosArrowForward />
              }
            </div>
          </div>
        );
      }
    }
    return (
      <div>
        <div className="breadcrumb">
          {items}
        </div>
      </div>
    );
  }
}

export default Breadcrumb;
