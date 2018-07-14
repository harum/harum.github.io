webpackJsonp([18348787556569],{384:function(e,n){e.exports={data:{markdownRemark:{html:'<h3>Component Communication</h3>\n<p>Vue component is a reusable Vue instance. We build up our web app using these\ncomponents. Often we end up with creating many components. The common way to\norganize these many components is to make tree nested components.</p>\n<p>These component need to communicate with each other. There are several component communication strategies in Vue.js. We can use parent-child communication, global event bus, and Vuex. They can be used according to problem that we want to solve.</p>\n<p>This post only talk about parent-child component communication strategy.</p>\n<h3>How Parent-Child Communication Work</h3>\n<p>In parent-child component communication, a good component is one that\nreusable and independent from its parent. To make a reusable and independent\none,\nwe should follow best practices in parent-child communication, such as:</p>\n<ul>\n<li>Parent component do not have direct access to the children such as via\n<code class="language-text">this.$children</code></li>\n<li>Parent component communicate to its children via <code class="language-text">prop</code></li>\n<li>Child component do not have props that explicitly making assumptions about\nits parent. For example props <code class="language-text">isProfilePage</code> to know if the component is inside a profile\npage.</li>\n<li>Child component do not have direct access to the parent such as via\n<code class="language-text">this.$parent</code></li>\n<li>Child component can call <code class="language-text">props</code> <code class="language-text">callback</code> <code class="language-text">function</code></li>\n<li>Child component can emit events to its parent using built-in <code class="language-text">$emit</code> <code class="language-text">method</code></li>\n<li>Child component do not change data that is passed via <code class="language-text">props</code></li>\n</ul>\n<p>When we do not follow these best practices, we will end up with components that is\ntightly coupled with one another. It will be hard for us to use the components\nin other circumstances.</p>\n<p>When create a component, it better to think like creating a custom HTML\nelements. Our component should be like <code class="language-text">&lt;form&gt;</code>, <code class="language-text">&lt;canvas&gt;</code>, <code class="language-text">&lt;select&gt;</code>, or other HTML elements, that can receive props, emits events to communicate, encapsulate their logic and can be used in any place in our web page.</p>\n<h3>Benefit of Using Parent-Child Communication</h3>\n<p>Parent-child communication has some benefit, such as:</p>\n<ul>\n<li>A powerful way of communicating between components <strong>without introducing any\ndependency or limitations</strong>. For example not dependent to centralized store as if we use Vuex</li>\n<li>Component can be <strong>reusable</strong> if we follow best practices</li>\n<li>Component can be <strong>independent</strong> if we follow best practices</li>\n</ul>\n<h3>Trade Off of Using Parent-Child Communication</h3>\n<p>Although it sufficient for most cases, but there are some cases that require\nmore effort to solve with parent-child communication, such as:</p>\n<ul>\n<li>Need to pass props to deeply nested child component</li>\n<li>One component need to affect another component that locate in another section\nof component tree</li>\n</ul>\n<h3>Conclusion</h3>\n<p>Not every component should use parent child communication. We must use suitable approach and\nstrategy to fit our app. Ask again about our decision before make the\ncomponent. Is it necessary to use global event bus for this component? Is it necessary to use flux approach and use Vuex for this components? Is using parent-child is sufficient for this component?</p>\n<p>Try to measure what we get from using one strategy and what we\nmust trade for that. Make sure our approach and effort is necessary for our app development.</p>',frontmatter:{title:"Vue.js Parent-Child Components Communication",date:"22 April, 2018"},timeToRead:2}},pathContext:{slug:"/vue-parent-child-component/"}}}});
//# sourceMappingURL=path---vue-parent-child-component-7eb418c48943b78e990a.js.map