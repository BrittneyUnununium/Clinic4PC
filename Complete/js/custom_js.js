var Basic_Prep = 100;
var Advanced_Prep = 150;
var Advanced_Prep2 = 200;
var Total_Price = 0;

function Price_Range()
{
	var PriceRangeRads = document.getElementsByTagName("PRICERANGE");
	var price_range_txt = null;
	
	for(i = 0; i <= PriceRangeRads.length; i++)
	{
		if(PriceRangeRads[0].checked == true)
		{
			price_range_txt = "Price range $400-$600";
		}
	}
}

function GeneralUse()
{
	var GeneralRads = document.getElementsByTagName("usagetype");
	var GeneralUsage = 1;
	var GamingUsage = 2;
	var VideoUsage = 3;
	var OtherUsage = 4;
	var Selectedopt = 0;
	var other_txt = null;
	
	for(i = 0; i <= GeneralRads.length; i++)
	{
		if(GeneralRads[0].checked == true)
		{
			Selectedopt = GeneralUsage;
		}
		else if(GeneralRads[1].checked == true)
		{
			Selectedopt = GamingUsage;
		}
		else if(GeneralRads[2].checked == true)
		{
			Selectedopt = VideoUsage;
		}
		else if(GeneralRads[3].checked == true)
		{
			Selectedopt = OtherUsage;
		}
	}
}

function HDDUse()
{
	var hddcheck = document.getElementsByTagName("memoryhddssd");
	var type_hdd = 1;
	var type_ssd = 2;
	var drive_type = 0;
	
	for(i = 0; i <= hddcheck.length; i++)
	{
		if(hddcheck[0].checked == true)
		{
			drive_type = type_hdd;
		}
		else if(hddcheck[1].checked == true)
		{
			drive_type = type_ssd;
		}
	}
}

function OpticalDrive()
{
	var optcheck = document.getElementsByTagName("opticaldrive");
	var opt_CD = 1;
	var opt_DVD = 2;
	var opt_Blu = 3;
	var opt_type = 0;
	
	for( i = 0; i <= optcheck.length; i++)
	{
		if(optcheck[0].checked == true)
		{
			opt_type = opt_CD;
		}
		else if(optcheck[1].checked == true)
		{
			opt_type = opt_DVD;
		}
		else if(optcheck[2].checked == true)
		{
			opt_type = opt_Blu;
		}
	}
}

function xCPU()
{
	var cpu_txt = null;
	var cpu_cool_txt = null;
	var cpu_water = document.getElementById("cpucooler");
	var cooler = false;
	
	if(cpu_water.checked == true)
	{
		cooler = true;
	}
	
	if(cpu_txt == null || cpu_txt == "")
	{
		alert("No CPU info filled out");
	}
	else if(cpu_cool_txt == null || cpu_cool_txt == "")
	{
		alert("No CPU cooler info filled out");
	}
}

function xMB()
{
	var mb_txt = null;
	
	if(mb_txt == null || mb_txt == "")
	{
		alert("No Motherboard info filled out");
	}
}

function xRAM()
{
	var ram_txt = null;
	
	if(ram_txt == null || ram_txt == "")
	{
		alert("No RAM info filled out");
	}
}

function xGfxCard()
{
	var gfx_txt = null;
	
	if(gfx_txt == null || gfx_txt == "")
	{
		alert("No graphics card info filled out");
	}
}

function xPSU()
{
	var psu_txt = null;
	
	if(psu_txt == null || psu_txt == "")
	{
		alert("No Power Supply info filled out");
	}
}

function xCase()
{
	var case_txt = null;
	
	if(case_txt == null || case_txt == "")
	{
		alert("No Case info filled out");
	}
}

function AdditionalComp()
{
	var addcheck = document.getElementsByTagName("expansioncardsnetworking");
	var soundcard_checked = false;
	var wired_network = false;
	var wireless_network = false;
	
	var ledfancheck = document.getElementById("LEDFan");
	var ledfan_txt = null;
	var led_case_fan = false;
	
	if(ledfancheck.checked == true)
	{
		led_case_fan = true;
		
		if(ledfan_txt == null || ledfan_txt == "")
		{
			alert("No case LED case fan info filled out");
		}
	}
	
	for(i = 0; i <= addcheck.length; i++)
	{
		if(addcheck[0].checked == true)
		{
			soundcard_checked = true;
		}
		else if(addcheck[1].checked == true)
		{
			wired_network = true;
		}
		else if(addcheck[2].checked == true)
		{
			wireless_network = true;
		}
	}
}

function OS()
{
	var OSCheck = docoument.getElementById("operatingsystem");
	var OSRads = document.getElementsByTagName("operatingsystem");
	var OS_Win = 1;
	var OS_Lin = 2;
	var uOS = 0;
	
	for(i = 0; i <= OSRads.length; i++)
	{
		if(OSRads[0].checked == true)
		{
			uOS = OS_Win;
		}
		else if(OSRads[1].checked == true)
		{
			uOS = OS_Lin;
		}
	}
}

function CheckForm()
{
	var
		name      = form.FullName.value,
		phone     = form.PhoneNumber.value,
		address   = form.PhysicalAddress.value,
		location  = form.Location.value,
		email     = form.EmailAddress.value;
		timeframe = form.ServiceTimeFrame.value;

	if (name      === "") {alert("Full name must be entered.");         return false;} else
	if (phone     === "") {alert("Phone number must be entered.");        return false;} else
	if (email     === "") {alert("Email must be entered.");               return false;} else
	if (address   === "") {alert("Address must be entered.");             return false;} else
	if (location  === "") {alert("City, State, and Zipcode must be entered."); return false;} else
	if (timeframe === "") {alert("Please enter the date and time you\'d like services provided."); return false;} else
}

function CheckEmail(str)
{
	var lastAtPos = str.lastIndexOf('@');
	var lastDosPos = str.lastIndexof('.');
	
	return (lastAtPos < lastDosPos && lastAtPos > 0 && str.indexOf('@@') == -1 && lastDosPos > 2 && (str.length - lastDosPos) > 2);
}

CheckForm();