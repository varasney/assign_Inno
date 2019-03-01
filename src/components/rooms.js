// export default Rooms =(props)=>{     return(         <div>hi</div>     ) }

import React, {Component} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faBed,
    faChild,
    faMale,
    faUsers as faUser,
    faPlusCircle as faPlus,
    faMinusCircle as faMinus
} from '@fortawesome/free-solid-svg-icons'
export default class Rooms extends Component {
    render() {
        let extraStyle = (this.props.valueText == 'CHILDREN')
            ? 'noBorder'
            : null;

        return (

            <div className={`block ${extraStyle}`}>
                <div className="mainText">
                    <div className="iconStyle">
                        <FontAwesomeIcon icon={this.props.iconName}/>
                    </div>
                    <div className="mymargin">{this.props.valueText}</div>
                </div>
                <div className="row">
                    <div className="mymargin2" onClick={() => this.props.onClickDec()}>
                        <span className="cursor">
                            <FontAwesomeIcon color={'#2d63a0'} size="lg" icon={faMinus}/></span>
                    </div>
                    <div className="mymargin2 fixWidth">{this.props.value}</div>
                    <div className="mymargin2" onClick={() => this.props.onClickInc()}>
                        <span className="cursor">
                            <FontAwesomeIcon color={'#c7585d'} size="lg" icon={faPlus}/></span>
                    </div>
                </div>
            </div>
        )
    }
}