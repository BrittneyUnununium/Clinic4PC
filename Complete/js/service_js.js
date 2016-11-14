//Prices
var CompClean_InStore = 19.99;
var VirusSpyRem_Online = 39.99;
var VirusSpyRem_InStore = 49.99;
var VirusSpyRem_InHome = 79.99;
var CompTuneUp_Online = 39.99;
var CompTuneUp_InStore = 49.99;
var CompTuneUp_InHome = 59.99;
var HardwareOSUp_InStore = 29.99;
var HardInterNoPreB_InStore = 49.99;
var HardInterNoPreB_InHome = 79.99;
var HardInterPreB_InStore = 39.99;
var HardInterPreB_InHome = 79.99;
var HardExterPreB_InStore = 19.99;
var HardExterPreB_InHome = 49.99;
var OSIn_InStore = 39.99;
var OSIn_InHome = 79.99;
var DataBackup_Online = 19.99;
var DataBackup_InStore = 39.99;
var DataBackup_InHome = 79.99;
var CompSet_InHome = 79.99;
var CompDefSet_Online = 29.99;
var CompDefSet_InStore = 39.99;
var CompDefSet_InHome = 59.99;
var SoftIn_Online = 19.99;
var SoftIn_InStore = 19.99;
var SoftIn_InHome = 49.99;
var Prnt_Online = 19.99;
var Prnt_InHome = 49.99;
var Total_Price = 0;

function CompClean()
{
	var CompCleanCheck = document.getElementById("CC");
	var CompCleanRad = document.getElementById("COMPUTERCLEANING");

	if(CompCleanCheck.checked == true && CompCleanRad.checked == true)
	{
		Total_Price += CompClean_InStore;
	}
	else if(CompCleanCheck.checked == false)
	{
		Total_Price -= CompClean_InStore;
		CompCleanRad.checked = false;
	}
}

function VirusSpyRem()
{
	var VirusSpyRemCheck = document.getElementById("VSR");
	var VirusSpyRemRads = document.getElementsByTagName("VIRUSSPYWAREREMOVAL");

	for(i = 0; i <= VirusSpyRemRads.length; i++)
	{
		if(VirusSpyRemCheck.checked == true && VirusSpyRemRads[0].checked == true)
		{
			Total_Price += VirusSpyRem_Online;
		}
		else if(VirusSpyRemCheck.checked == true && VirusSpyRemRads[1].checked == true)
		{
			Total_Price += VirusSpyRem_InStore;
		}

		else if(VirusSpyRemCheck.checked == true && VirusSpyRemRads[2].checked == true)
		{
			Total_Price += VirusSpyRem_InHome;
		}

		if(VirusSpyRemCheck.checked == false && VirusSpyRemRads[0].checked == true)
		{
			Total_Price -= VirusSpyRem_Online;
			VirusSpyRemRads[0].checked = false;
		}
		else if(VirusSpyRemCheck.checked == false && VirusSpyRemRads[1].checked == true)
		{
			Total_Price -= VirusSpyRem_InStore;
			VirusSpyRemRads[1].checked = false;
		}
		else if(VirusSpyRemCheck.checked == false && VirusSpyRemRads[2].checked == true)
		{
			Total_Price -= VirusSpyRem_InHome;
			VirusSpyRemRads[1].checked = false;
		}
	}
}

function CompTuneUp()
{
	var CompTuneUpCheck = document.getElementById("CTU");
	var CompTuneUpRads = document.getElementsByTagName("COMPUTERTUNE-UP");

	for(i = 0; i <= CompTuneUpRads.length; i++)
	{
		if(CompTuneUpCheck.checked == true && CompTuneUpRads[0].checked == true)
		{
			Total_Price += CompTuneUp_Online;
		}
		else if(CompTuneUpCheck.checked == true && CompTuneUpRads[1].checked == true)
		{
			Total_Price += CompTuneUp_InStore;
		}
		else if(CompTuneUpCheck.checked == true && CompTuneUpRads[2].checked == true)
		{
			Total_Price += CompTuneUp_InHome;
		}

		if(CompTuneUpCheck.checked == false && CompTuneUpRads[0].checked == true)
		{
			Total_Price -= CompTuneUp_Online;
			CompTuneUpRads[0].checked = false;
		}
		else if(CompTuneUpCheck.checked == false && CompTuneUpRads[1].checked == true)
		{
			Total_Price -= CompTuneUp_InStore;
			CompTuneUpRads[1].checked = false;
		}
		else if(CompTuneUpCheck.checked == false && CompTuneUpRads[2].checked == true)
		{
			Total_Price -= CompTuneUp_InHome;
			CompTuneUpRads[1].checked = false;
		}
	}
}

function HardwareOSUp()
{
	var HardwareOSUpCheck = document.getElementById("HOSU");
	var HardwareOSUpRads = document.getElementsByTagName("HARDWAREOPERATINGSYSTEMUPDATEOPTIMIZATION");

	if(HardwareOSUpCheck.checked == true && HardwareOSUpRad.checked == true)
	{
		Total_Price += HardwareOSUp_InStore;
	}
	else if(HardwareOSUpCheck.checked == false)
	{
		Total_Price -= HardwareOSUp_InStore;
		HardwareOSUpRad.checked = false;
	}
}

function HardwareInternalNotPreBought()
{
	var HardInterNoPreBCheck = document.getElementById("HINPB_I");
	var HardInterNoPreBRads = document.getElementsByTagName("HARDWAREINSTALLATION/REPLACEMENTinternalnotpre-bought");

	for(i = 0; i <= HardInterNoPreBRads.length; i++)
	{
		if(HardInterNoPreBCheck.checked == true && HardInterNoPreBRads[0].checked == true)
		{
			Total_Price += HardInterNoPreB_InStore;
		}
		else if(HardInterNoPreBCheck.checked == true && HardInterNoPreBRads[1].checked == true)
		{
			Total_Price += HardInterNoPreB_InHome;
		}

		if(HardInterNoPreBCheck.checked == false && HardInterNoPreBRads[0].checked == true)
		{
			Total_Price -= HardInterNoPreB_InStore;
			HardInterNoPreBRads[0].checked = false;
		}
		else if(HardInterNoPreBCheck.checked == false && HardInterNoPreBRads[1].checked == true)
		{
			Total_Price -= HardInterNoPreB_InHome;
			HardInterNoPreBRads[1].checked = false;
		}
	}
}

function HardwareInternalPreBought()
{
	var HardInterPreBCheck = document.getElementById("HIPB_I");
	var HardInterPreBRads = document.getElementsByTagName("HARDWAREINSTALLATION/REPLACEMENTinternalpre-bought");

	for(i = 0; i <= HardInterPreBRads.length; i++)
	{
		if(HardInterPreBCheck.checked == true && HardInterPreBRads[0].checked == true)
		{
			Total_Price += HardInterPreB_InStore;
		}
		else if(HardInterPreBCheck.checked == true && HardInterPreBRads[1].checked == true)
		{
			Total_Price += HardInterPreB_InHome;
		}

		if(HardInterPreBCheck.checked == false && HardInterPreBRads[0].checked == true)
		{
			Total_Price -= HardInterPreB_InStore;
			HardInterPreBRads[0].checked = false;
		}
		else if(HardInterPreBCheck.checked == false && HardInterPreBRads[1].checked == true)
		{
			Total_Price -= HardInterPreB_InHome;
			HardInterPreBRads[1].checked = false;
		}
	}
}

function HardwareExternalPreBought()
{
	var HardExterPreBCheck = document.getElementById("HIPB_E");
	var HardExterPreBRads = document.getElementsByTagName("HARDWAREINSTALLTIONexternal");

	for(i = 0; i <= HardExterPreBRads.length; i++)
	{
		if(HardExterPreBCheck.checked == true && HardExterPreBRads[0].checked == true)
		{
			Total_Price += HardExterPreB_InStore;
		}
		else if(HardExterPreBCheck.checked == true && HardExterPreBRads[1].checked == true)
		{
			Total_Price += HardExterPreB_InHome;
		}

		if(HardExterPreBCheck.checked == false && HardExterPreBRads[0].checked == true)
		{
			Total_Price -= HardExterPreB_InStore;
			HardExterPreBRads[0].checked = false;
		}
		else if(HardExterPreBCheck.checked == false && HardExterPreBRads[1].checked == true)
		{
			Total_Price -= HardExterPreB_InHome;
			HardExterPreBRads[1].checked = false;
		}
	}
}

function OSInstall()
{
	var OSInCheck = document.getElementById("OSI");
	var OSInRads = document.getElementsByTagName("OPERATINGSYSTEMINSTALL");

	for(i = 0; i <= OSInRads.length; i++)
	{
		if(OSInCheck.checked == true && OSInRads[0].checked == true)
		{
			Total_Price += OSIn_InStore;
		}
		else if(OSInCheck.checked == true && OSInRads[1].checked == true)
		{
			Total_Price += OSIn_InHome;
		}

		if(OSInCheck.checked == false && OSInRads[0].checked == true)
		{
			Total_Price -= OSIn_InStore;
			OSInRads[0].checked = false;
		}
		else if(OSInCheck.checked == false && OSInRads[1].checked == true)
		{
			Total_Price -= OSIn_InHome;
			OSInRads[1].checked = false;
		}
	}
}

function DataBackup()
{
	var DataBackupCheck = document.getElementById("DBT");
	var DataBackupRads = document.getElementsByTagName("DATABACKUPORTRANSFER");

	for(i = 0; i <= DataBackupRads.length; i++)
	{
		if(DataBackupCheck.checked == true && DataBackupRads[0].checked == true)
		{
			Total_Price += DataBackup_Online;
		}
		else if(DataBackupCheck.checked == true && DataBackupRads[1].checked == true)
		{
			Total_Price += DataBackup_InStore;
		}
		else if(DataBackupCheck.checked == true && DataBackupRads[2].checked == true)
		{
			Total_Price += DataBackup_InHome;
		}

		if(DataBackupCheck.checked == false && DataBackupRads[0].checked == true)
		{
			Total_Price -= DataBackup_Online;
			DataBackupRads[0].checked = false;
		}
		else if(DataBackup.checked == false && DataBackupRads[1].checked == true)
		{
			Total_Price -= DataBackup_InStore;
			DataBackupRads[1].checked = false;
		}
		else if(DataBackup.checked == false && DataBackupRads[2].checked == true)
		{
			Total_Price -= DataBackup_InHome;
			DataBackupRads[1].checked = false;
		}
	}
}

function CompSetup()
{
	var CompSetCheck = document.getElementById("CS");
	var CompSetRads = document.getElementsByTagName("COMPUTERSETUP");

	if(CompSetCheck.checked == true && CompSetRad.checked == true)
	{
		Total_Price += CompSet_InHome;
	}
	else if(CompSetCheck.checked == false && CompSetRad.checked == true)
	{
		Total_Price -= CompSet_InHome;
		CompSetRad.checked = false;
	}
}

function CompDefenseSetup()
{
	var CompDefSetCheck = document.getElementById("CDS");
	var CompDefSetRads = document.getElementsByTagName("COMPUTERDEFENSESETUP");
	
	for(i = 0; i <= CompDefSetRads.length; i++)
	{
		if(CompDefSetCheck.checked == true && CompDefSetRads[0].checked == true)
		{
			Total_Price += CompDefSet_Online;
		}
		else if(CompDefSetCheck.checked == true && CompDefSetRads[1].checked == true)
		{
			Total_Price += CompDefSet_InStore;
		}
		else if(CompDefSetCheck.checked == true && CompDefSetRads[2].checked == true)
		{
			Total_Price += CompDefSet_InHome;
		}

		if(CompDefSetCheck.checked == false && CompDefSetRads[0].checked == true)
		{
			Total_Price -= CompDefSet_Online;
			CompDefSetRads[0].checked = false;
		}
		else if(CompDefSetCheck.checked == false && CompDefSetRads[1].checked == true)
		{
			Total_Price -= CompDefSet_InStore;
			CompDefSetRads[1].checked = false;
		}
		else if(CompDefSetCheck.checked == false && CompDefSetRads[2].checked == true)
		{
			Total_Price -= CompDefSet_InHome;
			CompDefSetRads[1].checked = false;
		}
	}
}

function SoftwareInstall()
{
	var SoftInCheck = document.getElementById("SIS");
	var SoftInCheckRads = document.getElementsByTagName("SOFTWAREINSTALL&SETUP");

	for(i = 0; i <= SoftInCheckRads.length; i++)
	{
		if(SoftInCheck.checked == true && SoftInCheckRads[0].checked == true)
		{
			Total_Price += SoftIn_Online;
		}
		else if(SoftInCheck.checked == true && SoftInCheckRads[1].checked == true)
		{
			Total_Price += SoftIn_InStore;
		}
		else if(SoftInCheck.checked == true && SoftInCheckRads[2].checked == true)
		{
			Total_Price += SoftIn_InHome;
		}

		if(SoftInCheck.checked == false && SoftInCheckRads[0].checked == true)
		{
			Total_Price -= SoftIn_Online;
			SoftInCheckRads[0].checked = false;
		}
		else if(SoftInCheck.checked == false && SoftInCheckRads[1].checked == true)
		{
			Total_Price -= SoftIn_InStore;
			SoftInCheckRads[1].checked = false;
		}
		else if(SoftInCheck.checked == false && SoftInCheckRads[2].checked == true)
		{
			Total_Price -= SoftIn_InHome;
			SoftInCheckRads[2].checked = false;
		}
	}
}

function PrinterSetup()
{
	var PrntCheck = document.getElementById("PRNT");
	var PrntRads = document.getElementsByTagName("PRINTERSETUP");

	for(i = 0; i <= PrntRads.length; i++)
	{
		if(PrntCheck.checked == true && PrntRads[0].checked == true)
		{
			Total_Price += Prnt_Online;
		}
		else if(PrntCheck.checked == true && PrntRads[1].checked == true)
		{
			Total_Price += Prnt_InHome;
		}

		if(PrntCheck.checked == false && PrntRads[0].checked == true)
		{
			Total_Price -= Prnt_Online;
			PrntRads[0].checked = false;
		}
		else if(PrntCheck.checked == false && PrntRads[1].checked == true)
		{
			Total_Price -= Prnt_InHome;
			PrntRads[1].checked = false;
		}
	}
}

function CheckForm(form)
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

//CheckForm();