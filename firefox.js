var webdriver = require('selenium-webdriver');

  var driver = new webdriver.Builder().forBrowser('firefox').build();
 
    driver.get('http://10.0.2.15:1101');		//url of your page

    // checking for Traig Dashboard homepage by using Title of page

    /* driver.wait(check_title);

    function check_title(){

    	var promice = driver.getTitle().then (function(title)  {

    		if(title == 'React App'){

    			console.log('success ---');
    			return true;
    		}
    		else{

    			console.log('fail ---');
    		}
    	});
    	return promice;
    }

*/

// checking for Traig Dashboard homepage by using URL of page

	driver.wait(check_homepage);

	function check_homepage()
	{
		var url = driver.getCurrentUrl().then (function(url) {

			if (url == 'http://10.0.2.15:1101/#/') 		//url of home page
			{
				console.log('successfully opening Traig Dashboard page');
				return true;
			}
			else
			{
				console.log('fail to open Traig Dashboard page');
				return false;
			}
		});
		return url;
	}

	driver.executeScript('window.scrollTo(1000,0);');	//for scrolling page to right-side

	driver.findElement( {xpath : '/html/body/div/div/div/header/div/a/button'}).click();	
							//xpath of log button

	driver.wait(check_log_button_url);


	function check_log_button_url()
	{
		var url = driver.getCurrentUrl().then (function(url) {

			if (url == 'http://10.0.2.15:1101/#/loadconf') 		
			//url of page after clicking log button
			{
				console.log('successfully clicking on log button');
				return true;
			}
			else
			{
				console.log('fail to click on log button');
				return false;
			}
		});
		return url;
	}
