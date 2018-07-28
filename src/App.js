import React, { Component } from "react";
import "./App.css";

let tree = [
  {
    title: "first",
    children: [
      {
        title: "first-child",
        children: [
          {
            title: "first-child",
            children: [
              {
                title: "first-child",
                children: [
                  {
                    title: "first-child",
                    children: [
                      {
                        title: "first-child",
                        children: []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        title: "first-child",
        children: [
          {
            title: "first-child",
            children: []
          },
          {
            title: "first-child",
            children: []
          }
        ]
      },
      {
        title: "first-child",
        children: []
      }
    ]
  },
  {
    title: "second",
    children: [
      {
        title: "second-child",
        children: [
          {
            title: "damn-child",
            children: []
          },
          {
            title: "damn-child2",
            children: []
          },
          {
            title: "damn-child3",
            children: []
          }
        ]
      }
    ]
  }
];

class App extends Component {
  ChildrenSender(object) {
    if (object.length < 1) return;
    let Childs = object.map(o => {
      if (o.children.length)
        return (
          <li key={o.title + Math.random()}>
            {" "}
            <a href="" onClick={e => this.handleClick(e)}>
              {o.title}
            </a>{" "}
            {this.ChildrenSender(o.children)}{" "}
          </li>
        );
      else
        return (
          <li class="inner" key={o.title + Math.random()}>
            {" "}
            {o.title}
          </li>
        );
    });

    return <ul> {Childs} </ul>;
  }

  handleClick(e) {
    e.preventDefault();
    var parent = e.target.parentElement;
    var classList = parent.classList;
    if (classList.contains("open")) {
      classList.remove("open");
      var opensubs = parent.querySelectorAll(".open");
      for (var i = 0; i < opensubs.length; i++) {
        opensubs[i].classList.remove("open");
      }
    } else {
      classList.add("open");
    }
  }

  render() {
    let Outer = <div className="tree"> {this.ChildrenSender(tree)} </div>;
    return <div className="App">{Outer}</div>;
  }
}

export default App;
