import React, { Component } from 'react'

import Auxiliary from '../Auxiliary/Auxiliary'

class Layout extends Component {
    render() {
        <Auxiliary>
            <main >{this.props.children}</main>
        </Auxiliary>
    }
}

export default Layout;