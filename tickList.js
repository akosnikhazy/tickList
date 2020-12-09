/*!
 * 
 * Copyright Ákos Nikházy (nikhazy.akos@gmail.com)
 * Released under the MIT license
 *
 * This little function collection grabs all checkboxes
 * with a predefiened class and converts them to 
 * a todo list, with cookie support.
 *
 */
"use strict"
class tickList 
{
	// do not change them here, use the example.html's example for custom values
	tickIni = {
		cookies:   true,// save decisions in cookies
		cookieExp: 10,  // for this much time (in days)
		cookieName:"tickCookie",// if you do not define this, it will be tickList
		className: "tickList" // if you do not define this, it will be tickList
	};
	
	constructor(
			setup = {
					cookies:   this.tickIni.cookies,    // save decisions in cookies
					cookieExp: this.tickIni.cookieExp,  // for this much time (in days)
					cookieName:this.tickIni.cookieName, // if you do not define this, it will be tickList
					className: this.tickIni.className   // if you do not define this, it will be tickList
			})
	{
	
		this.tickIni.cookies 	= setup.cookies;
		this.tickIni.cookieExp 	= setup.cookieExp;
		this.tickIni.cookieName = setup.cookieName;
		this.tickIni.className 	= setup.className;
		
		this.tickListIni();
		
	}
	
	tickListIni()
	{
		let labelList = document.getElementsByClassName(this.tickIni.className);
		
		for (let i = 0; i < labelList.length; i++) 
		{
			// we can except already ticked checkboxes at ini 
			// for example PHP generates it with the checked attribute
			// if cookies are enabled those will overwrite this
			this.tickListToggleDoneUnDone(labelList[i]);
			
			let children = labelList[i].childNodes;
			
			// Setting up checkbox behaviour
			children[0].addEventListener('click', (event) => 
			{
				
				this.tickListToggleDoneUnDone(labelList[i]);
				
				if(this.tickIni.cookies)
				{
					this.tickListSetCookie(this.tickIni.cookieName + i, 
										   children[0].checked, 
										   this.tickIni.cookieExp);
				}
			});
			
			if(this.tickIni.cookies)
			{
				var tickCookie;
				
				if(tickCookie = this.tickListGetCookie(this.tickIni.cookieName + i))
				{
					
					children[0].checked = (tickCookie === 'true');
					this.tickListToggleDoneUnDone(labelList[i]);
					
				} 
				else 
				{
					this.tickListSetCookie(this.tickIni.cookieName + i, 
					                       children[0].checked, 
										   this.tickIni.cookieExp);
					
				}
			}
		}

	}

	tickListToggleDoneUnDone(e)
	{// toggle class names
		let children = e.childNodes;

		if(children[0].checked)
		{
			
			e.classList.remove("tickListNotDone");
			e.classList.add("tickListDone");
		
		} 
		else 
		{
			
			e.classList.remove("tickListDone");
			e.classList.add("tickListNotDone");
			
		}
		
		
	}
	
	tickListGetCookie(cname) 
	{
		cname = cname + "=";
		
		let c = decodeURIComponent(document.cookie).split(';');
		
		for(let i = 0; i < c.length; i++) 
		{
			
			while (c[i].charAt(0) == ' ') 
			{
				c[i] = c[i].substring(1);
			}
			
			if (c[i].indexOf(cname) == 0) 
			{
				return c[i].substring(cname.length, c[i].length);
			}
			
		}
		
		return false;
	}
	
	tickListSetCookie(cname, cvalue) 
	{
		
		let d = new Date();

		d.setTime(d.getTime() + (this.tickIni.cookieExp*24*60*60*1000));

		document.cookie = cname + "=" + cvalue + ";" + "expires="+ d.toUTCString() + ";path=/";
		
	}
}