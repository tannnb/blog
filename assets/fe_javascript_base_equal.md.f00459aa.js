import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.6a483339.js";const u=JSON.parse('{"title":"== 和 ===区别","description":"","frontmatter":{},"headers":[],"relativePath":"fe/javascript/base_equal.md","lastUpdated":1699973902000}'),p={name:"fe/javascript/base_equal.md"},e=l(`<h1 id="和-区别" tabindex="-1">== 和 ===区别 <a class="header-anchor" href="#和-区别" aria-label="Permalink to &quot;== 和 ===区别&quot;">​</a></h1><h2 id="一、等于操作符-不严格相等" tabindex="-1">一、等于操作符(不严格相等) <a class="header-anchor" href="#一、等于操作符-不严格相等" aria-label="Permalink to &quot;一、等于操作符(不严格相等)&quot;">​</a></h2><p>等于操作符用两个等于号 == 表示，在比较中会先进行类型转换，再确定操作数是否相等，如若相等返回 true</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 1.任一操作数是布尔值，则将其转换为数值再比较是否相等</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> (</span><span style="color:#FF9CAC;">true</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">==</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2.如果一个操作数是字符串，另一个操作数是数值，则尝试将字符串转换为数值，再比较是否相等</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> (</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">==</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 3.如果一个是对象，另一个操作数不是，则调用对象的valueOf()方法取得其原始值，再根据前面的规则进行比较</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#82AAFF;">valueOf</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> (obj </span><span style="color:#89DDFF;">==</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 4. null和undefined相等</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> (</span><span style="color:#89DDFF;">null</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">==</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">undefined</span><span style="color:#BABED8;"> )</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 5. 如果有任一操作数是 NaN ，则相等操作符返回 false</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> (</span><span style="color:#89DDFF;">NaN</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">==</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">NaN</span><span style="color:#BABED8;"> )</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 6. 如果两个操作数都是对象，则比较它们是不是同一个对象。如果两个操作数都指向同一个对象，则相等操作符返回true</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> obj1 </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">李雷</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> obj2 </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">韩梅梅</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> (obj1 </span><span style="color:#89DDFF;">==</span><span style="color:#BABED8;"> obj2 )</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// false</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="二、全等操作符-严格相等" tabindex="-1">二、全等操作符(严格相等) <a class="header-anchor" href="#二、全等操作符-严格相等" aria-label="Permalink to &quot;二、全等操作符(严格相等)&quot;">​</a></h2><p>全等操作符由 3 个等于号 === 表示，只有两个操作数在不转换的前提下相等才返回 true。即类型相同，值也相同</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> (</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">===</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// false，不相等，因为数据类型不同</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 注：undefined 和 null 与自身严格相等</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> result1 </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> (</span><span style="color:#89DDFF;">null</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">===</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">null</span><span style="color:#BABED8;">)  </span><span style="color:#676E95;font-style:italic;">//true</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> result2 </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> (</span><span style="color:#89DDFF;">undefined</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">===</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">undefined</span><span style="color:#BABED8;">)  </span><span style="color:#676E95;font-style:italic;">//true</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="三、小结" tabindex="-1">三、小结 <a class="header-anchor" href="#三、小结" aria-label="Permalink to &quot;三、小结&quot;">​</a></h2><ul><li><p>严格相等:左右两边不仅值要相等，类型也要相等，例如<code>&#39;1&#39;===1</code>的结果是<code>false</code>，因为一边是<code>string</code>，另一边是<code>number</code></p></li><li><p>不严格相等:</p><ul><li>两边的类型是否相同，相同的话就比较值的大小，例如<code>1==2</code>，返回<code>false</code></li><li>类型不相同会进行类型转换</li><li>判断的是否是<code>null</code>和<code>undefined</code>，是的话就返回<code>true</code></li><li>判断的类型是否是<code>String</code>和<code>Number</code>，是的话，把<code>String</code>类型转换成<code>Number</code>，再进行比较</li><li>判断其中一方是否是<code>Boolean</code>，是的话就把<code>Boolean</code>转换成<code>Number</code>，再进行比较</li><li>如果其中一方为<code>Object</code>，且另一方为<code>String</code>、<code>Number</code>或者<code>Symbol</code>，会将<code>Object</code>转换成原始类型后，再进行比较</li></ul></li></ul>`,9),o=[e];function t(c,r,y,i,D,F){return n(),a("div",null,o)}const d=s(p,[["render",t]]);export{u as __pageData,d as default};