import React, { Component } from "react";
import "./App.css";

function ChildrenSender(object) {
  if (object.length < 1) return;

  let Childs = object.map(o => {
    if (o.children.length)
      return (
        <li>
          {" "}
          <a href="">{o.title}</a> {ChildrenSender(o.children)}{" "}
        </li>
      );
    else return <li> {o.title}</li>;
  });

  return <ul> {Childs} </ul>;
}

let tree = [
  {
    title: "first",
    children: [
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
          },
          {
            title: "first-child",
            children: []
          },
          {
            title: "first-child",
            children: [
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
                  },
                  {
                    title: "first-child",
                    children: []
                  },
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
  // componentDidMount() {
  //   var tree = document.querySelectorAll("ul.tree a:not(:last-child)");
  //   console.log(tree);
  //   for (var i = 0; i < tree.length; i++) {
  //     tree[i].addEventListener("click", function(e) {
  //       console.log(e.target.innerHTML);
  //       var parent = e.target.parentElement;
  //       var classList = parent.classList;
  //       // console.log(parent, classList);
  //       if (classList.contains("open")) {
  //         classList.remove("open");
  //         var opensubs = parent.querySelectorAll(".open");
  //         console.log(opensubs);
  //         for (var i = 0; i < opensubs.length; i++) {
  //           opensubs[i].classList.remove("open");
  //         }
  //       } else {
  //         classList.add("open");
  //       }
  //     });
  //   }
  // }
  render() {
    let Outer = ChildrenSender(tree);
    return <div className="App">{Outer}</div>;
  }
}

export default App;
