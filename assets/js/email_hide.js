// Email.js version 5
var tld_ = new Array()
tld_[0] = "com";
var topDom_ = 13;
var a_ = "@";
var d_ = ".";

function mail(name, dom, tl)
{
	var s = e(name,dom,tl);
	document.write(s);
}
function mail2(display)
{
	document.write(display);
}
function e(name, dom, tl)
{
	var s = name+a_;
	if (tl!=-2)
	{
		s+= dom;
		if (tl>=0)
			s+= d_+tld_[tl];
	}
	else
		s+= swapper(dom);
	return s;
}
function swapper(d)
{
	var s = "";
	for (var i=0; i<d.length; i+=2)
		if (i+1==d.length)
			s+= d.charAt(i)
		else
			s+= d.charAt(i+1)+d.charAt(i);
	return s.replace(/\?/g,'.');
}