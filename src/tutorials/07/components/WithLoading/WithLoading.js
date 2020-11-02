import React, { Component } from 'react';
import './WithLoading.css';

export default function WithLoading(ListComponent) {
  return class WithLoading extends Component {
    state = {
      isLoading: true,
      posters: [],
    };

    constructor(props) {
      super(props);
      const { load, ...otherProps } = props;
      this.loader = load;
      this.otherProps = otherProps;
    }

    componentDidMount() {
      this.loader().then((data) => {
        this.setState({
          isLoading: false,
          posters: data,
        });
      });
    }

    render() {
      if (this.state.isLoading) {
        return <p className="loading">Loading something</p>;
      }

      return (
        <ListComponent posters={this.state.posters} {...this.otherProps} />
      );
    }
  };
}
