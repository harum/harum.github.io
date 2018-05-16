---
title: "Vue.js Parent-Child Components Communication"
date: "2018-04-22"
---


### Component Communication
Vue component is a reusable Vue instance. We build up our web app using these
components. Often we end up with creating many components. The common way to
organize these many components is to make tree nested components.

These component need to communicate with each other. There are several component communication strategies in Vue.js. We can use parent-child communication, global event bus, and Vuex. They can be used according to problem that we want to solve.

This post only talk about parent-child component communication strategy.

### How Parent-Child Communication Work
In parent-child component communication, a good component is one that
reusable and independent from its parent. To make a reusable and independent
one,
we should follow best practices in parent-child communication, such as:
  -  Parent component do not have direct access to the children such as via
     `this.$children`
  -  Parent component communicate to its children via `prop`
  -  Child component do not have props that explicitly making assumptions about
     its parent. For example props `isProfilePage` to know if the component is inside a profile
     page.
  -  Child component do not have direct access to the parent such as via
     `this.$parent`
  -  Child component can call `props` `callback` `function`
  -  Child component can emit events to its parent using built-in `$emit` `method`
  -  Child component do not change data that is passed via `props`

When we do not follow these best practices, we will end up with components that is
tightly coupled with one another. It will be hard for us to use the components
in other circumstances.

When create a component, it better to think like creating a custom HTML
elements. Our component should be like `<form>`, `<canvas>`, `<select>`, or other HTML elements, that can receive props, emits events to communicate, encapsulate their logic and can be used in any place in our web page.


### Benefit of Using Parent-Child Communication
Parent-child communication has some benefit, such as:
-  A powerful way of communicating between components __without introducing any
   dependency or limitations__. For example not dependent to centralized store as if we use Vuex
-  Component can be __reusable__ if we follow best practices
-  Component can be __independent__ if we follow best practices

### Trade Off of Using Parent-Child Communication
Although it sufficient for most cases, but there are some cases that require
more effort to solve with parent-child communication, such as:
-  Need to pass props to deeply nested child component
-  One component need to affect another component that locate in another section
   of component tree


### Conclusion
Not every component should use parent child communication. We must use suitable approach and
strategy to fit our app. Ask again about our decision before make the
component. Is it necessary to use global event bus for this component? Is it necessary to use flux approach and use Vuex for this components? Is using parent-child is sufficient for this component?

Try to measure what we get from using one strategy and what we
must trade for that. Make sure our approach and effort is necessary for our app development.
