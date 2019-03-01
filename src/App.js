import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faBed,
    faChild,
    faMale,
    faUsers as faUser,
    faPlusCircle as faPlus,
    faMinusCircle as faMinus
} from '@fortawesome/free-solid-svg-icons'
import './App.css';
import RoomsView from './components/rooms';
const roomValues = {
    maxRoom: 5,
    maxPersonInRoom: 4,
    minAdultPersonInRoom: 1,
    minRooms: 1
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rooms: 1,
            adults: 1,
            children: 0
        }
    }

    componentDidMount() {
        // this.onIncRooms()
    }

    //dynamically changing state values
    changeStates(stateName, stateValue) {
        this.setState({[stateName]: stateValue})
    }

    //when room get increments
    onIncRooms() {
        let roomCount = this.state.rooms;
        let adultCount = this.state.adults;
        if (roomCount < roomValues.maxRoom) {

            roomCount += 1;

            if (roomCount > adultCount) {
                adultCount += 1;

                this.changeStates('adults', adultCount);

            }
            this.changeStates('rooms', roomCount);

        } else {}
    }

    //when room get decrements
    onDecRooms() {
        let roomCount = this.state.rooms;
        let adultCount = this.state.adults;
        let children = this.state.children;

        if (roomCount > roomValues.minRooms) {

            roomCount -= 1;
            let TotalAdults = roomCount * roomValues.maxPersonInRoom;
            let maxPersons = adultCount + children;
            if (maxPersons > TotalAdults) {
                let newchild = (TotalAdults - adultCount) > 0
                    ? TotalAdults - adultCount
                    : 0;
                if (newchild > 0) {

                    //  console.log(newchild);

                    this.changeStates('children', newchild);

                } else {
                    this.changeStates('adults', TotalAdults);
                    this.changeStates('children', 0)
                };

            }

            this.changeStates('rooms', roomCount);

        } else {}

        // console.log(this.state.rooms +'hh'+ this.state.adults)
    }

    //when room get increments
    onIncAdults() {
        let adults = this.state.adults;

        let rooms = this.state.rooms;

        let children = this.state.children;

        if (rooms > 0) {

            let TotalAdults = rooms * roomValues.maxPersonInRoom;
            let maxPersons = adults + children;
            if (maxPersons < TotalAdults) {
                adults += 1;
                this.changeStates('adults', adults);
            } else {}
        }

    }

    //when room get increments
    onDecAdults() {
        let adultCount = this.state.adults;

        let rooms = this.state.rooms;

        if (rooms > 0) {
            // let TotalAdults=rooms * roomValues.maxPersonInRoom;

            if (rooms < adultCount) {
                adultCount -= 1;
                this.changeStates('adults', adultCount);
            } else {}
        }

    }

    //when room get increments
    onIncChild() {
        let children = this.state.children;
        let adults = this.state.adults;
        let rooms = this.state.rooms;

        if (rooms > 0) {

            let TotalAdults = rooms * roomValues.maxPersonInRoom;

            if (adults > 0) {
                let maxPersons = adults + children;

                if (maxPersons < TotalAdults) {
                    children += 1;
                    this.changeStates('children', children);
                } else {}
            }
        }
    }

    onDecChild() {
        let adultCount = this.state.children;

        let rooms = this.state.rooms;

        if (rooms > 0) {
            // let TotalAdults=rooms * roomValues.maxPersonInRoom;

            if (adultCount > 0) {
                adultCount -= 1;
                this.changeStates('children', adultCount);
            } else {}
        }

    }

    render() {
        return (
            <div className="App">
                <div>

                    <div className="headerText row">
                        <div className="iconStyle">
                            <FontAwesomeIcon icon={faUser}/>
                        </div>
                        <div className="mymargin">Choose number of
                            <strong
                                style={{
                                marginLeft: 4
                            }}>
                                people</strong>
                        </div>
                    </div>

                    <div className="container">
                        <RoomsView
                            valueText={'ROOMS'}
                            value={this.state.rooms}
                            onClickInc={() => this.onIncRooms()}
                            onClickDec={() => this.onDecRooms()}
                            iconName={faBed}></RoomsView>

                        <RoomsView
                            valueText={'ADULTS'}
                            value={this.state.adults}
                            onClickInc={() => this.onIncAdults()}
                            onClickDec={() => this.onDecAdults()}
                            iconName={faMale}></RoomsView>

                        <RoomsView
                            valueText={'CHILDREN'}
                            value={this.state.children}
                            onClickInc={() => this.onIncChild()}
                            onClickDec={() => this.onDecChild()}
                            iconName={faChild}></RoomsView>

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
