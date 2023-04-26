import{_ as s,o as n,c as a,V as l}from"./chunks/framework.b9206b98.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"record/index.md"}'),p={name:"record/index.md"},t=l(`<h2 id="原型-原型链" tabindex="-1">原型/原型链 <a class="header-anchor" href="#原型-原型链" aria-label="Permalink to &quot;原型/原型链&quot;">​</a></h2><p>参考如下链接： <a href="https://github.com/mqyqingfeng/blog/issues/2" target="_blank" rel="noreferrer">JavaScript深入之从原型到原型链</a></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* </span></span>
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
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// prototype -&gt; 函数的一个属性</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Test</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">Test</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//__proto__ -&gt; 对象(Object)的一个属性</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> test </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Test</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(Test</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">__proto__)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 对象的__proto__保存着该对象的构造函数的prototype</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Test.prototype.__proto__ === Object.prototype)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Function.__proto__ === Function.prototype // true Function.__proto__指向的是它本身的prototype(规定如此)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(test</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">__proto__ </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Test</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype) </span><span style="color:#676E95;font-style:italic;">// true</span></span>
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
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span></code></pre></div>`,3),o=[t];function e(c,r,i,y,_,A){return n(),a("div",null,o)}const f=s(p,[["render",e]]);export{D as __pageData,f as default};
