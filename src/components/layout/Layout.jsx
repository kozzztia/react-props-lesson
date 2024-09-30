import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./style.module.css";

class Layout extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ul className={styles.layout}> 
                {this.props.children}
            </ul>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.node
}

export default Layout;