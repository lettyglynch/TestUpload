var args = arguments[0] || {};

function doOpen(e){
	var actionBar = e.source.activity.actionBar;

	//up window
	//http://docs.appcelerator.com/titanium/latest/#!/guide/Android_Action_Bar-section-36735509_AndroidActionBar-OtherActionBarFeatures

	if (actionBar) {
		actionBar.displayHomeAsUp = true;
		actionBar.onHomeIconItemSelected = function() {
			e.source.close();
		};

		e.source.activity.invalidateOptionsMenu();
	}	
mail.addEventListener('click', function(e) {
 
 var emailDialog = Titanium.UI.createEmailDialog();
 
    if (!emailDialog.isSupported()) {
        Ti.UI.createAlertDialog({
            title:'Error',
            message:'Email not available on this device.'
        }).show();
        return;
    }
 
    emailDialog.setSubject("Subject" );
    emailDialog.setToRecipients(['TeamAirCIDM4385@gmail.com']);
    emailDialog.setMessageBody("textField6");
    emailDialog.setHtml(false);
   
 
   emailDialog.addEventListener('complete',function(e){
            if (e.result == emailDialog.SENT){
                if (Ti.Platform.osname != 'android'){
                        alert("message was sent");
                }
            }else{
                alert("message was not sent. " );
            }
    });
}


$.contact.open();

