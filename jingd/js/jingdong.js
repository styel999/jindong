// JavaScript Document
function zuo(){
		var zuo=document.getElementsByClassName('zuo')[0];
		var tab=document.getElementsByClassName('tabCont');
		var List=document.getElementsByClassName('tabList')[0];
		var tem=document.getElementsByClassName('tabItem');
		var ali=List.getElementsByTagName('li');
		var m=0;
		var mover=null;
		for(var i=0;i<tem.length;i++){
			ali[i].index=i;
			ali[i].onclick=function(){
				m=this.index;
				for(var j=0;j<tem.length;j++){
					ali[j].className='';
					tem[j].style.display='none';
				}
				this.className='ac';
				tem[this.index].style.display='block';
			}
			ali[i].onmouseover=function(){
					clearInterval(mover);
					m=this.index;
					for (var i=0;i<tem.length;i++){
						ali[i].className='';
						tem[i].style.display='none';
					};
						tem[this.index].style.display='block';
						ali[this.index].className='ac';			
				}
		/*	ali[i].onmouseout=function(){
					move();
				}
			tem[i].onmouseover=function(){
					clearInterval(mover);
				}
			tem[i].onmouseout=function(){
					move();
				}*/
		}
	/*	function suibian(m){
				for (var j=0;j<tem.length;j++){
					ali[j].className='';
					tem[j].style.display='none';
					};
					tem[m].style.display='block';
					ali[m].className='ac';			
					};
		function move(){
				mover=setInterval(function(){
					suibian(m);
					 m++;
					 if(m>=tem.length){
						 m=0;
						}
					},800)
				};
			move();	*/
}
function fangda(tabItem,tabi,img){
	var tem=tabItem;
	var kuang=tem.getElementsByTagName('span')[0];
	var tabi=tabi;
	var oimg=tabi.getElementsByClassName(img);
		tem.onmouseover=function(){
			tabi.style.display=kuang.style.display='block';
			}
		tem.onmouseout=function(){
			tabi.style.display=kuang.style.display='';
			}
		
		tem.onmousemove=function(ev){
			var oEv=ev || event;
			var l=oEv.clientX-tem.offsetLeft-kuang.offsetWidth/2;
			//console.log(oEv.clientY-tem.offsetTop-kuang.offsetHeight/2)
			var t=oEv.clientY+document.body.scrollTop-tem.offsetTop-kuang.offsetHeight/2;
			if(l>=tem.offsetWidth-kuang.offsetWidth){
				l=tem.offsetWidth-kuang.offsetWidth;
			}
			if(l<0){
				l=0
			}
			if(t>=tem.offsetHeight-kuang.offsetHeight){
				t=tem.offsetHeight-kuang.offsetHeight;
			}
			if(t<0){t=0}
			kuang.style.left=l+'px';
			kuang.style.top=t+'px';
			
			var t_tare=t/(tem.offsetHeight-kuang.offsetHeight);
			var l_tare=l/(tem.offsetWidth-kuang.offsetWidth);
			//console.log((oimg.offsetWidth-tem.offsetWidth)*t_tare)
			for(var i=0;i<oimg.length;i++){
				oimg[i].style.left=-(oimg[i].offsetWidth-tabi.offsetWidth)*l_tare+'px';
				oimg[i].style.top=-(oimg[i].offsetHeight-tabi.offsetHeight)*t_tare+'px';
			}
		}
}

function jilu(ul){
	var ul=ul;
	var oli=ul.getElementsByTagName('li');
	for(var i=0;i<oli.length;i++){
			oli[i].index=i;
			oli[i].onclick=function(){
				m=this.index;
				for(var j=0;j<oli.length;j++){
					oli[j].className='';
				}
				this.className='ab';
			}
	}
}

function jia(){
	var jia=document.getElementsByClassName('jia')[0];
	var input=jia.getElementsByTagName('input')[0];
	var btn=jia.getElementsByTagName('a');
	var n=1;
	btn[0].onclick=function(){
		n++;
		input.value=n;
		}
	btn[1].onclick=function(){
		n--;
		if(n<1)n=1;
		input.value=n;
		}	
}
function dianji(tem){
		var zuo=document.getElementsByClassName('two_inner')[0];
		var tab=document.getElementsByClassName('two_shang');
		var List=zuo.getElementsByTagName('ul')[0];
		var tem=tem;
		var ali=List.getElementsByTagName('li');
		var m=0;
		var mover=null;
		for(var i=0;i<tem.length;i++){
			ali[i].index=i;
			ali[i].onclick=function(){
				m=this.index;
				for(var j=0;j<tem.length;j++){
					ali[j].className='';
					tem[j].style.display='none';
				}
				this.className='aa';
				tem[this.index].style.display='block';
			}
			ali[i].onclick=function(){
					clearInterval(mover);
					m=this.index;
					for (var i=0;i<tem.length;i++){
						ali[i].className='';
						tem[i].style.display='none';
					};
						tem[this.index].style.display='block';
						ali[this.index].className='aa';			
				}
		}
}

function lunbo(){
	var oDiv=document.getElementsByClassName('one-zhong')[0];
		var aBtn=oDiv.getElementsByTagName('ol')[0].children;
		var oUl=oDiv.getElementsByTagName('ul')[0];
		var aLi=oUl.children;
		aLi[0].style.opacity=1;
		
		var m=0;
		var pBtn=document.getElementById('prevBtn');
		var nBtn=document.getElementById('nextBtn');
		
		
		var n=0;//当前显示图片索引
		
			
		//添加点击事件
		for(var i=0; i<aBtn.length; i++){
			aBtn[i].index=i;//发拍照
			aBtn[i].onclick=function(){
				
				if(n!=this.index){
					slideItem(n,this.index);
					n=this.index;
					changeAc();
				}						
			};
		};
		
		pBtn.onclick=function(){
			if(n<1){
				n=aLi.length;
				slideItem(0,aLi.length-1);
			}else{
				slideItem(n,n-1);
			};
			n--;
			changeAc();
			
		}
	
		nBtn.onclick=function(){
			n++;
			if(n>aLi.length-1){
				n=0;
				slideItem(aLi.length-1,0);
			}else{
				slideItem(n-1,n);
			};
			changeAc();
			
		};
		function slideItem(a,b){
			aLi[a].style.display='block';
			aLi[a].style.opacity=1;;
			
			aLi[b].style.display='block';
			aLi[b].style.opacity=0;
			
			move(aLi[a],'opacity',0,1000);
			move(aLi[b],'opacity',100,1000,function(){
				aLi[a].style.display='none';
			});
		};
		
	
		function changeAc(){
			for(var j=0; j<aBtn.length; j++){
				aBtn[j].className='';
			};
			aBtn[n].className='ac';
		}
}

function xuanxiang(){
		var oMenu=document.getElementById('taobaoMenu');
		
		var aLi=oMenu.getElementsByTagName('li');
		var oMenuCont=document.getElementById('menuCont');
		//console.log(oMenuCont)
		var aDl=oMenuCont.getElementsByClassName('xuanxiang');
		var leave_menu=null;//离开右侧 回到左侧
		
		//删除所有li上的ac
		function del_li_ac(){
			for(var i=0; i<aLi.length; i++){
				aLi[i].className="";
			};
		}
		
		
		for(var i=0; i<aLi.length; i++){
			aLi[i].index=i;//发牌照
			
			aLi[i].onmouseover=function(){
				clearTimeout(leave_menu);
				oMenuCont.style.display="block";
				del_li_ac();//删除所有li上的ac  
				this.className="ac";//自己增加ac
				
				
				//显示相对应的内容(就是选项卡的原理)
				for(var i=0; i<aDl.length; i++){
					aDl[i].style.display="none";
				};
				aDl[this.index].style.display="block";
			};
			
			aLi[i].onmouseout=function(){
				clearTimeout(leave_menu);
				leave_menu=setTimeout(function(){
					oMenuCont.style.display="none";
					del_li_ac();//删除所有li上的ac  
				},200)
			};
		};
		
		oMenuCont.onmouseover=function(ev){
			clearTimeout(leave_menu);
			this.style.display="block";
			
			var oEv=ev||window.event;
			var oEl=oEv.relatedTarget||oEv.fromElement;  
			if( isChild(this,oEl) ){//如果离开的元素还是自己
				return;
			}
		};
		
		
		oMenuCont.onmouseout=function(ev){
			var oEv=ev||window.event;
			var oEl=oEv.relatedTarget||oEv.toElement;
			if(! isChild(this,oEl) ){
				del_li_ac();//删除所有li上的ac  
				this.style.display="none";
				return;
			}
		};
		
		
		
		//判断子集	
		function isChild(oParent,obj){
			while(obj){
				if(obj==oParent) return true;
				obj=obj.parentNode;	
			}	
			// 不是我的子级
			return false;
		}
	
}

function xuanxiangka(zuo,omenuCont,tem,id){
		var zuo=zuo
		var oMenuCont=omenuCont;
		var tem=tem;
		var List=document.getElementById(id);
		var a=document.getElementsByClassName('af');
		var ali=List.getElementsByTagName('li');
		var m=0;
		var mover=null;
		for(var i=0;i<tem.length;i++){
			ali[i].index=i;
			ali[i].onclick=function(){
				m=this.index;
				for(var j=0;j<tem.length;j++){
					ali[j].className='';
					tem[j].style.display='none';
				}
				this.className='ab';
				a.className='af';
				tem[this.index].style.display='block';
			}
			ali[i].onmouseover=function(){
					clearInterval(mover);
					m=this.index;
					for (var i=0;i<tem.length;i++){
						ali[i].className='';
						a.className='';
						tem[i].style.display='none';
					};
						tem[this.index].style.display='block';
						ali[this.index].className='ab';	
							
				}
		}
/*		var oMenu=zuo;
		
		var aLi=oMenu.getElementsByTagName('li');
		var oMenuCont=document.getElementsByClassName('fivex')[0];
		//console.log(oMenuCont)
		var aDl=oMenuCont.getElementsByClassName('xuanxiangka');
		var a=document.getElementsByClassName('af');
		var leave_menu=null;//离开右侧 回到左侧
		var m=0;
		//删除所有li上的ac
		function del_li_ac(){
			for(var i=0; i<aLi.length; i++){
				aLi[i].className="";
			};
		}
		
		
		for(var i=0; i<aLi.length; i++){
			aLi[i].index=i;//发牌照
			
			aLi[i].onmouseover=function(){
				clearTimeout(leave_menu);
				oMenuCont.style.display="block";
				del_li_ac();//删除所有li上的ac  
				this.className="ad";//自己增加ac
				a.className='af';
				this.index=m;
				//显示相对应的内容(就是选项卡的原理)
				for(var i=0; i<aDl.length; i++){
					aDl[i].style.display="none";
				};
				aDl[this.index].style.display="block";
			};
			
			aLi[i].onmouseout=function(){
				clearTimeout(leave_menu);
				leave_menu=setTimeout(function(){
					oMenuCont.style.display="none";
					del_li_ac();//删除所有li上的ac  
				},200)
			};
		};
		
		oMenuCont.onmouseover=function(ev){
			clearTimeout(leave_menu);
			this.style.display="block";
			
			var oEv=ev||window.event;
			var oEl=oEv.relatedTarget||oEv.fromElement;  
			if( isChild(this,oEl) ){//如果离开的元素还是自己
				return;
			}
		};
		
		
		oMenuCont.onmouseout=function(ev){
			var oEv=ev||window.event;
			var oEl=oEv.relatedTarget||oEv.toElement;
			if(! isChild(this,oEl) ){
				del_li_ac();//删除所有li上的ac  
				this.style.display="none";
				return;
			}
		};
		
		
		
		//判断子集	
		function isChild(oParent,obj){
			while(obj){
				if(obj==oParent) return true;
				obj=obj.parentNode;	
			}	
			// 不是我的子级
			return false;
		}*/
}
	
function lou(){
	
	var LocationFloorList=getByClass(document,'LocationFloorList')[0];
	var aLi=LocationFloorList.getElementsByTagName('li');
	var aFloor=getByClass(document,'floor');
	
	var arr=[];
		
	//-------------------------------------------------
		
	for(var i=0; i<aFloor.length; i++){
		var json={};
		json.name='f'+i;
		json.offsetTop=aFloor[i].offsetTop;
		arr.push(json);
	};
	
	window.onscroll=function(){
		//显示楼层编号-------------------------------------------------
		var scrolltop=document.documentElement.scrollTop || document.body.scrollTop;
		if(scrolltop>1500){
			LocationFloorList.style.display='block';
		}else{
			LocationFloorList.style.display='none';
		};
		
		// 根据楼层滚动位置，定位编号------------------------------------------------
		var screenHeight=document.documentElement.offsetHeight || document.body.Height;
		var last_arr=[];
		for(var j=0; j<arr.length; j++){
			if(arr[j].offsetTop<scrolltop+400){
				last_arr.push(arr[j].name);
			}
		};
		var li_index=last_arr[last_arr.length-1].substr(1,2);

		for(var l=0; l<aFloor.length; l++){
			aLi[l].className='';
		};
		aLi[li_index].className='ac';
	};
	
	//点击编号，跳转到相对楼层-----------------------------------------------
	for(var i=0; i<aFloor.length; i++){
		aLi[i].index=i;
		aLi[i].onclick=function(){
			var start=document.documentElement.scrollTop || document.body.scrollTop;
			var end=arr[this.index].offsetTop;
			move(start,end)
		}
	};
	//move-------------------------------------------------------
	var timer;
	function move(start,end){
		var dis=end-start;
		var count=parseInt(1500/30);
		var n=0;
		clearInterval(timer);
		timer=setInterval(function(){
			n++;
			var a=1-n/count;
			var step_dis=start+dis*(1-a*a*a*a);
			window.scrollTo(0,step_dis);
			if(n==count){
				clearInterval(timer);
			};
		},30)
	};
	
	function getByClass(oParent,cls){
		var arr=[]; //容器
		if(document.getElementsByClassName) return oParent.getElementsByClassName(cls);
		else{
			var aEl=oParent.getElementsByTagName('*');//所有标签
			for(var i=0;i<aEl.length;i++){
				if(aEl[i].className.indexOf(cls)!=-1) arr.push(aEl[i]);//向数组中添加
			}
		return arr;
		}
	};

}
