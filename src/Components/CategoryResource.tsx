import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { CatState, IProductObject } from '../Models/Interfaces';

class CategoryResource extends React.Component<any, CatState> {
  constructor(props: any) {
    super(props);
    this.state = {
      products: [],
      fetching: true,
    };
  }

  async fetchProducts(path: String) {
    try {
      let results = await axios.get(
        `https://fakestoreapi.com/products/category/${path}`
      );

      this.setState({
        ...this.state,
        products: results.data,
        fetching: false,
      });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.fetchProducts(this.props.path);
  }

  render() {
    return this.props.render(this.state);
  }
}

export default CategoryResource;
