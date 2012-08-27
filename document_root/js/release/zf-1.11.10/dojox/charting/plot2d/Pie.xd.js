/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


dojo._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.charting.plot2d.Pie"],["require","dojox.charting.Element"],["require","dojox.charting.axis2d.common"],["require","dojox.charting.plot2d.common"],["require","dojox.lang.functional"],["require","dojox.gfx"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.charting.plot2d.Pie"]){_4._hasResource["dojox.charting.plot2d.Pie"]=true;_4.provide("dojox.charting.plot2d.Pie");_4.require("dojox.charting.Element");_4.require("dojox.charting.axis2d.common");_4.require("dojox.charting.plot2d.common");_4.require("dojox.lang.functional");_4.require("dojox.gfx");(function(){var df=_6.lang.functional,du=_6.lang.utils,dc=_6.charting.plot2d.common,da=_6.charting.axis2d.common,g=_6.gfx;_4.declare("dojox.charting.plot2d.Pie",_6.charting.Element,{defaultParams:{labels:true,ticks:false,fixed:true,precision:1,labelOffset:20,labelStyle:"default",htmlLabels:true},optionalParams:{font:"",fontColor:"",radius:0},constructor:function(_7,_8){this.opt=_4.clone(this.defaultParams);du.updateWithObject(this.opt,_8);du.updateWithPattern(this.opt,_8,this.optionalParams);this.run=null;this.dyn=[];},destroy:function(){this.resetEvents();this.inherited(arguments);},clear:function(){this.dirty=true;this.dyn=[];this.run=null;return this;},setAxis:function(_9){return this;},addSeries:function(_a){this.run=_a;return this;},calculateAxes:function(_b){return this;},getRequiredColors:function(){return this.run?this.run.data.length:0;},plotEvent:function(o){},connect:function(_c,_d){this.dirty=true;return _4.connect(this,"plotEvent",_c,_d);},events:function(){var ls=this.plotEvent._listeners;if(!ls||!ls.length){return false;}for(var i in ls){if(!(i in Array.prototype)){return true;}}return false;},resetEvents:function(){this.plotEvent({type:"onplotreset",plot:this});},_connectEvents:function(_e,o){_e.connect("onmouseover",this,function(e){o.type="onmouseover";o.event=e;this.plotEvent(o);});_e.connect("onmouseout",this,function(e){o.type="onmouseout";o.event=e;this.plotEvent(o);});_e.connect("onclick",this,function(e){o.type="onclick";o.event=e;this.plotEvent(o);});},render:function(_f,_10){if(!this.dirty){return this;}this.dirty=false;this.cleanGroup();var s=this.group,_11,t=this.chart.theme;this.resetEvents();if(!this.run||!this.run.data.length){return this;}var rx=(_f.width-_10.l-_10.r)/2,ry=(_f.height-_10.t-_10.b)/2,r=Math.min(rx,ry),_12="font" in this.opt?this.opt.font:t.axis.font,_13=_12?g.normalizedLength(g.splitFontString(_12).size):0,_14="fontColor" in this.opt?this.opt.fontColor:t.axis.fontColor,_15=0,_16,_17,_18,_19,_1a,_1b,run=this.run.data,_1c=this.events();if(typeof run[0]=="number"){_17=df.map(run,"Math.max(x, 0)");if(df.every(_17,"<= 0")){return this;}_18=df.map(_17,"/this",df.foldl(_17,"+",0));if(this.opt.labels){_19=_4.map(_18,function(x){return x>0?this._getLabel(x*100)+"%":"";},this);}}else{_17=df.map(run,"Math.max(x.y, 0)");if(df.every(_17,"<= 0")){return this;}_18=df.map(_17,"/this",df.foldl(_17,"+",0));if(this.opt.labels){_19=_4.map(_18,function(x,i){if(x<=0){return "";}var v=run[i];return "text" in v?v.text:this._getLabel(x*100)+"%";},this);}}if(this.opt.labels){_1a=df.foldl1(df.map(_19,function(_1d){return _6.gfx._base._getTextBox(_1d,{font:_12}).w;},this),"Math.max(a, b)")/2;if(this.opt.labelOffset<0){r=Math.min(rx-2*_1a,ry-_13)+this.opt.labelOffset;}_1b=r-this.opt.labelOffset;}if("radius" in this.opt){r=this.opt.radius;_1b=r-this.opt.labelOffset;}var _1e={cx:_10.l+rx,cy:_10.t+ry,r:r};this.dyn=[];_4.some(_18,function(_1f,i){if(_1f<=0){return false;}var v=run[i];if(_1f>=1){var _20,_21,_22;if(typeof v=="object"){_20="color" in v?v.color:new _4.Color(t.next("color"));_21="fill" in v?v.fill:dc.augmentFill(t.series.fill,_20);_22="stroke" in v?v.stroke:dc.augmentStroke(t.series.stroke,_20);}else{_20=new _4.Color(t.next("color"));_21=dc.augmentFill(t.series.fill,_20);_22=dc.augmentStroke(t.series.stroke,_20);}var _23=s.createCircle(_1e).setFill(_21).setStroke(_22);this.dyn.push({color:_20,fill:_21,stroke:_22});if(_1c){var o={element:"slice",index:i,run:this.run,plot:this,shape:_23,x:i,y:typeof v=="number"?v:v.y,cx:_1e.cx,cy:_1e.cy,cr:r};this._connectEvents(_23,o);}return true;}var end=_15+_1f*2*Math.PI;if(i+1==_18.length){end=2*Math.PI;}var _24=end-_15,x1=_1e.cx+r*Math.cos(_15),y1=_1e.cy+r*Math.sin(_15),x2=_1e.cx+r*Math.cos(end),y2=_1e.cy+r*Math.sin(end);var _20,_21,_22;if(typeof v=="object"){_20="color" in v?v.color:new _4.Color(t.next("color"));_21="fill" in v?v.fill:dc.augmentFill(t.series.fill,_20);_22="stroke" in v?v.stroke:dc.augmentStroke(t.series.stroke,_20);}else{_20=new _4.Color(t.next("color"));_21=dc.augmentFill(t.series.fill,_20);_22=dc.augmentStroke(t.series.stroke,_20);}var _23=s.createPath({}).moveTo(_1e.cx,_1e.cy).lineTo(x1,y1).arcTo(r,r,0,_24>Math.PI,true,x2,y2).lineTo(_1e.cx,_1e.cy).closePath().setFill(_21).setStroke(_22);this.dyn.push({color:_20,fill:_21,stroke:_22});if(_1c){var o={element:"slice",index:i,run:this.run,plot:this,shape:_23,x:i,y:typeof v=="number"?v:v.y,cx:_1e.cx,cy:_1e.cy,cr:r};this._connectEvents(_23,o);}_15=end;return false;},this);if(this.opt.labels){_15=0;_4.some(_18,function(_25,i){if(_25<=0){return false;}if(_25>=1){var v=run[i],_26=da.createText[this.opt.htmlLabels&&_6.gfx.renderer!="vml"?"html":"gfx"](this.chart,s,_1e.cx,_1e.cy+_13/2,"middle",_19[i],_12,(typeof v=="object"&&"fontColor" in v)?v.fontColor:_14);if(this.opt.htmlLabels){this.htmlElements.push(_26);}return true;}var end=_15+_25*2*Math.PI,v=run[i];if(i+1==_18.length){end=2*Math.PI;}var _27=(_15+end)/2,x=_1e.cx+_1b*Math.cos(_27),y=_1e.cy+_1b*Math.sin(_27)+_13/2;var _26=da.createText[this.opt.htmlLabels&&_6.gfx.renderer!="vml"?"html":"gfx"](this.chart,s,x,y,"middle",_19[i],_12,(typeof v=="object"&&"fontColor" in v)?v.fontColor:_14);if(this.opt.htmlLabels){this.htmlElements.push(_26);}_15=end;return false;},this);}return this;},_getLabel:function(_28){return this.opt.fixed?_28.toFixed(this.opt.precision):_28.toString();}});})();}}};});