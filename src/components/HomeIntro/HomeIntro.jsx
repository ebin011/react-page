import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupDropdown,
  Input,
  Button
 } from 'reactstrap';
 import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

import IntroImg from '../../assets/images/home_intro.jpg';
import './HomeIntro.css';

class HomeIntro extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (

        <div className="home_card">
           <img top className="home_img_card" src={IntroImg} alt="Card image cap" />
           <div className="home_img_over">
             <h1 >Lorem Ipsum</h1>
             <p>In publishing and graphic design, lorem ipsum is a filler text or greeking commonly used to demonstrate the textual elements of a graphic document or visual presentation.</p>
                 <InputGroup className="home_input_group">
                    <Dropdown className="home_dropdown form-control " isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                     <DropdownToggle
                       tag="span"
                       onClick={this.toggle}
                       data-toggle="dropdown"
                       aria-expanded={this.state.dropdownOpen}
                       caret
                     >
                      Dropdown
                     </DropdownToggle>
                     <DropdownMenu>
                       <div onClick={this.toggle}>dropdown item1</div>
                       <div onClick={this.toggle}>dropdown item2</div>
                       <div onClick={this.toggle}>dropdown item3</div>
                       <div onClick={this.toggle}>dropdown item4</div>
                     </DropdownMenu>
                   </Dropdown>
                    <Input placeholder="Select Option1" />
                    <Input placeholder="Select Option2" />
                    <InputGroupAddon addonType="append"><Button className="home_btn">SEARCH</Button></InputGroupAddon>
              </InputGroup>
            </div>
      </div>

    );
  }
}

export default HomeIntro;
