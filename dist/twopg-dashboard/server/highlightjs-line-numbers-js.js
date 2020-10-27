exports.ids=[2],exports.modules={gPJM:function(module,exports){!function(w,d){"use strict";var BREAK_LINE_REGEXP=/\r\n|\r|\n/g;function documentReady(options){try{var blocks=d.querySelectorAll("code.hljs,code.nohighlight");for(var i in blocks)blocks.hasOwnProperty(i)&&lineNumbersBlock(blocks[i],options)}catch(e){w.console.error("LineNumbers error: ",e)}}function lineNumbersBlock(element,options){"object"==typeof element&&function async(func){w.setTimeout(func,0)}((function(){element.innerHTML=lineNumbersInternal(element,options)}))}function lineNumbersInternal(element,options){var firstLineIndex=(options=options||{singleLine:!1}).singleLine?0:1;return function duplicateMultilineNodes(element){var nodes=element.childNodes;for(var node in nodes)if(nodes.hasOwnProperty(node)){var child=nodes[node];(child.textContent.trim().match(BREAK_LINE_REGEXP)||[]).length>0&&(child.childNodes.length>0?duplicateMultilineNodes(child):duplicateMultilineNode(child.parentNode))}}(element),function addLineNumbersBlockFor(inputHtml,firstLineIndex){var lines=getLines(inputHtml);""===lines[lines.length-1].trim()&&lines.pop();if(lines.length>firstLineIndex){for(var html="",i=0,l=lines.length;i<l;i++)html+=format('<tr><td class="{0} {1}" {3}="{5}"><div class="{2}" {3}="{5}"></div></td><td class="{0} {4}" {3}="{5}">{6}</td></tr>',["hljs-ln-line","hljs-ln-numbers","hljs-ln-n","data-line-number","hljs-ln-code",i+1,lines[i].length>0?lines[i]:" "]);return format('<table class="{0}">{1}</table>',["hljs-ln",html])}return inputHtml}(element.innerHTML,firstLineIndex)}function duplicateMultilineNode(element){var className=element.className;if(/hljs-/.test(className)){for(var lines=getLines(element.innerHTML),i=0,result="";i<lines.length;i++){result+=format('<span class="{0}">{1}</span>\n',[className,lines[i].length>0?lines[i]:" "])}element.innerHTML=result.trim()}}function getLines(text){return 0===text.length?[]:text.split(BREAK_LINE_REGEXP)}function format(format,args){return format.replace(/\{(\d+)\}/g,(function(m,n){return args[n]?args[n]:m}))}w.hljs?(w.hljs.initLineNumbersOnLoad=function initLineNumbersOnLoad(options){"interactive"===d.readyState||"complete"===d.readyState?documentReady(options):w.addEventListener("DOMContentLoaded",(function(){documentReady(options)}))},w.hljs.lineNumbersBlock=lineNumbersBlock,w.hljs.lineNumbersValue=function lineNumbersValue(value,options){if("string"!=typeof value)return;var element=document.createElement("code");return element.innerHTML=value,lineNumbersInternal(element,options)},function addStyles(){var css=d.createElement("style");css.type="text/css",css.innerHTML=format(".{0}{border-collapse:collapse}.{0} td{padding:0}.{1}:before{content:attr({2})}",["hljs-ln","hljs-ln-n","data-line-number"]),d.getElementsByTagName("head")[0].appendChild(css)}()):w.console.error("highlight.js not detected!"),document.addEventListener("copy",(function(e){var selectionText,selection=window.getSelection();(function isHljsLnCodeDescendant(domElt){for(var curElt=domElt;curElt;){if(curElt.className&&-1!==curElt.className.indexOf("hljs-ln-code"))return!0;curElt=curElt.parentNode}return!1})(selection.anchorNode)&&(selectionText=-1!==window.navigator.userAgent.indexOf("Edge")?function edgeGetSelectedCodeLines(selection){for(var selectionText=selection.toString(),tdAnchor=selection.anchorNode;"TD"!==tdAnchor.nodeName;)tdAnchor=tdAnchor.parentNode;for(var tdFocus=selection.focusNode;"TD"!==tdFocus.nodeName;)tdFocus=tdFocus.parentNode;var firstLineNumber=parseInt(tdAnchor.dataset.lineNumber),lastLineNumber=parseInt(tdFocus.dataset.lineNumber);if(firstLineNumber!=lastLineNumber){var firstLineText=tdAnchor.textContent,lastLineText=tdFocus.textContent;if(firstLineNumber>lastLineNumber){var tmp=firstLineNumber;firstLineNumber=lastLineNumber,lastLineNumber=tmp,tmp=firstLineText,firstLineText=lastLineText,lastLineText=tmp}for(;0!==selectionText.indexOf(firstLineText);)firstLineText=firstLineText.slice(1);for(;-1===selectionText.lastIndexOf(lastLineText);)lastLineText=lastLineText.slice(0,-1);for(var selectedText=firstLineText,hljsLnTable=function getHljsLnTable(hljsLnDomElt){for(var curElt=hljsLnDomElt;"TABLE"!==curElt.nodeName;)curElt=curElt.parentNode;return curElt}(tdAnchor),i=firstLineNumber+1;i<lastLineNumber;++i){var codeLineSel=format('.{0}[{1}="{2}"]',["hljs-ln-code","data-line-number",i]);selectedText+="\n"+hljsLnTable.querySelector(codeLineSel).textContent}return selectedText+="\n"+lastLineText}return selectionText}(selection):selection.toString(),e.clipboardData.setData("text/plain",selectionText),e.preventDefault())}))}(window,document)}};