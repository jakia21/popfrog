;if(CloudflareApps.matchPage(CloudflareApps.installs['KFoIcVHszPXG'].URLPatterns)){(function(){'use strict';if(!window.addEventListener)return;var options=CloudflareApps.installs['KFoIcVHszPXG'].options;var element;function updateElement(){element=CloudflareApps.createElement(options.location,element);if(options.shortcode){var appHtml=parseDivFromShortcode(options.shortcode);}else if(!!options.appId){var appHtml=parseDivFromAppId(options.appId)}
if(appHtml){element.innerHTML=appHtml;}
if(window.loadPowr){window.loadPowr();}}
function parseDivFromAppId(appId){return"<div class='powr-popup' id='"+appId+"'></div>"}
function parseDivFromShortcode(shortcode){var name=shortcode.match(/powr-[^\s\]]*/i);var appId=shortcode.match(/id="[^"]*"/i);if(appId==null){appId=shortcode.match(/id='[^']*'/i);}
if(appId==null){appId=shortcode.match(/id=[^\]]*/i);if(appId!=null){appId=appId[0].replace('id=','id="')+'"';}}
if(appId==null){appId='';}
var result='<div class="'+name+'" '+appId+'></div>';return result;}
window.CloudflareApps.installs['KFoIcVHszPXG'].scope={setOptions:function setOptions(nextOptions){options=nextOptions;console.log('Update options',options);updateElement();},};if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',updateElement);}else{updateElement();}
var js,id='powr-js',ref=document.getElementsByTagName('script')[0];if(!document.getElementById(id)){js=document.createElement('script');js.id=id;js.async=true;js.src='https://www.powr.io/powr.js?external-type=cloudflare';ref.parentNode.insertBefore(js,ref);}})();};(function(){try{var link=document.createElement('link');link.rel='stylesheet';link.href='data:text/css;charset=utf-8;base64,Cg==';document.getElementsByTagName('head')[0].appendChild(link);}catch(e){}})();