import Expo from 'expo';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaskList from './task-list';


class main extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      todos: [
        {
          task: 'Learn react native',
        },
        {
          task: 'Learn redux',
        },
        {
          task: 'Hi Bubs',
        },
      ],
    };
  }

onAddStarted() {
console.log('on add started');
}

  render() {
    return (
      <View>
        <TaskList 
        onAddStarted={this.onAddStarted.bind(this)}
        todos={this.state.todos}
        />
      </View>
    );
  }
}

Expo.registerRootComponent(main);
