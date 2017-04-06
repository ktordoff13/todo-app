import Expo from 'expo';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Navigator } from 'react-native';
import TaskList from './task-list';
import TaskForm from './task-form';


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
      ],
    };
  }

  onAddStarted() {
    this.nav.push({
      name: 'taskform',
    });
  }

  onCancel() {
    console.log('canclled');
    this.nav.pop();
  }

  onAdd(task) {
    console.log('add button wow ', task);
    this.state.todos.push({ task });
    this.setState({ todos: this.state.todos });
    this.nav.pop();
  }

  onDone(todo) {
    console.log('this is done: ', todo.task);
    const filteredTodos =
      this.state.todos.filter((filterTodo) => {
        return filterTodo !== todo;
      });
    this.setState({ todos: filteredTodos });
  }

  renderScene(route, nav) {
    switch (route.name) {
      case 'taskform':
        return (
          <TaskForm
            onAdd={this.onAdd.bind(this)}
            onCancel={this.onCancel.bind(this)}
          />
        );

      default:
        return (
          <TaskList
            onAddStarted={this.onAddStarted.bind(this)}
            onDone={this.onDone.bind(this)}
            todos={this.state.todos}
          />
        );
    }
  }

  configureScene() {
    return Navigator.SceneConfigs.FloatFromBottom;
  }

  render() {
    return (
      <Navigator
        configureScene={this.configureScene}
        initialRoute={{ name: 'TaskList', index: 0 }}
        ref={((nav) => {
          this.nav = nav;
        })}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }
}

Expo.registerRootComponent(main);
