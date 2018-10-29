// @flow

import React, { Component } from 'react';
import { Header, Item, Input, Icon, Button, Text } from 'native-base';

type Props = {
  onChange: (searchString: string) => void
};

type State = {
  searchText: string
};

export default class SearchBar extends Component<Props, State> {
  state = {
    searchText: ''
  };

  handleChangeSearch = (searchText: string): void => {
    const { onChange } = this.props;

    this.setState({ searchText });

    onChange(searchText);
  };

  render() {
    return (
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input
            onChangeText={this.handleChangeSearch}
            placeholder="Search Institutions"
          />
          <Icon name="ios-medkit-outline" />
        </Item>
        <Button transparent>
          <Text />
        </Button>
      </Header>
    );
  }
}
