import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.6a483339.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"fe/javascript/index.md","lastUpdated":1699973902000}'),p={name:"fe/javascript/index.md"},e=l(`<h2 id="原型-原型链" tabindex="-1">原型/原型链 <a class="header-anchor" href="#原型-原型链" aria-label="Permalink to &quot;原型/原型链&quot;">​</a></h2><p>参考如下链接： <a href="https://github.com/mqyqingfeng/blog/issues/2" target="_blank" rel="noreferrer">JavaScript深入之从原型到原型链</a></p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">对应名称</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">prototype: 原型</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">__proto__: 原型链(原型连接点) / 隐示原型</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">从属关系:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">prototype -&gt; 函数的一个属性: 对象{}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">__proto__ -&gt; 对象(Object)的一个属性: 对象{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">原型和原型链组成的链条，是怎么组成的？</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">对象的__proto__保存着该对象的构造函数的prototype</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// prototype -&gt; 函数的一个属性</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Test</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(</span><span style="color:#FFCB6B;">Test</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">prototype)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//__proto__ -&gt; 对象(Object)的一个属性</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> test </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">new</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">Test</span><span style="color:#BABED8;">()</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(Test</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">__proto__)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 对象的__proto__保存着该对象的构造函数的prototype</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Test.prototype.__proto__ === Object.prototype)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Function.__proto__ === Function.prototype // true Function.__proto__指向的是它本身的prototype(规定如此)</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(test</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">__proto__ </span><span style="color:#89DDFF;">===</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Test</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">prototype) </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 以一个对象为基准，以__proto__为连接的这条链条，一直到Object.prototype为止的这个链，我们叫做原型链</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  test {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    a:1,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    __proto__: Test.prototype = {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      b:2,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      __proto__: Object.prototype = {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        c:3,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        __proto__:null // 已经到顶层了，__proto__已经没有指向了</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">  }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span><span style="color:#BABED8;">  </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div>`,3),t=[e];function o(c,r,i,y,b,_){return n(),a("div",null,t)}const E=s(p,[["render",o]]);export{m as __pageData,E as default};
