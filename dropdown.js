/*
This code resides at: "http://www.TheLittleEngineers.org/js/dropdown.js". This code was originally written in 1996 as part of the
Binary Systems of Alabama Website. The code remained "lost" for a couple of decades, until found on an old 20MB Seagate MFM hard drive
that had been used with a Tandy Radio Shack TRS-80 Color Computer 3 and the Burke & Burke CoCo XT-RTC interface. Back then, I used the
Color Computer 3 and Telewriter-128 to code my webpages, mainly for the sake of nostalgia. I then transferred them via RS232 serial with
a null modem cable to my WinTel machine for further processing. This code is being released under a Creative Commons Attribution-ShareAlike
4.0 International (CC BY-SA 4.0) License by: Robert "The R.A.T." Allen Turner, on 30 March 2019, In Memory of my Father: Robert Embry Turner,
1945-2019. Rest In Peace Dad - I LOVE YOU.

Example usage:
Place the following within the <head></head> tags:
<script src="http://www.TheLittleEngineers.org/js/dropdown.js"></script>
Use the following code to call the function:
<center>
	<font font="" size="+2" color="#FFFFFF">Fellow Traveller - Where Would You Like To Visit?</font>
		<form><select name="urlchoice" size="1">
			<option value="http://www.TheLittleEngineers.org" selected="selected">The Little Engineers Homepage</option>
				<option value="http://www.TinCansAndDuctTape.com">The TinCansAndDuctTape.com Homepage.</option>
					<option value="http://tcadt.com">The TCADT.com Homepage.</option>
						<option value="http://www.TheLittleEngineers.org/pages/cookies/cookies.htm">What are cookies anyway?</option>
					<option value="http://www.TheLittleEngineers.org/pages/privacy/privacy.htm">Let's keep things private, shall we?</option>
				<option value="http://www.TheLittleEngineers.org/pages/privacy/privacy.html">Let's keep things private, but readable, shall we?</option>
			</select>
		<input value="Let's Go" onclick="dropdownurl(this.form)" type="button">
	</form>
</center>
Note that you should alter the FONT, COLOR and SIZE attributes to better suit your own webpage.
*/ 
// Begin Code.
<!-- JavaScript For Drop Down URL Selection -->
function dropdownurl(form){location.href = form.urlchoice.options[form.urlchoice.selectedIndex].value;}
// End Code.
// http://www.TheLittleEngineers.org/
// Note that the above example links directly to "dropdown.js" on The Little Engineers' website. This is perfectly acceptable, however, it may be a
// better idea to upload the "dropdown.js" script to your own website and link to it from there, thus guaranteeing that if The Little Engineers
// should ever go offline, the script will remain available to any of your webpages that might depend upon it.
//
// License: <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">Creative Commons Attribution-ShareAlike 4.0 International</a> <a href="https:/creativecommons.org/licenses/by-sa/4.0/legalcode" target="_blank">(CC BY-SA 4.0)</a>.
//
// -EOF-
