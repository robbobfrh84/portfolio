# tobob.earth
Welcome to the source code repository for [tobob.earth](http://tobob.earth)!

This project uses GAS UP ⛽️ 🚀
- Open source repository link: https://github.com/robbobfrh84/gas-up

### Where is this site getting data from?
This portfolio, by default, uses the data from the hardcoded `js/gsheet.js` file. HOWEVER, you can set this webpage to directly call from the connected Google Sheet(link below) by adding a search query to the url. In the following examples, the hash `#showcase` has been added as the condition won't be called until that page is. Also, they search query must come before the hash, or It'll break the page trigger.

Get data from **default** (set in `js/main.js` by var `_searchObject` }
- http://tobob.earth#showcase

Get data from **Google Sheet** directly
- https://tobob.earth?data=gsheet#showcase

Get data from hardcoded **json** (`gsheet.js`)
- https://tobob.earth?data=json#showcase
- Note: This may also just be the default url.

### What to update the json data
You'll need to do some hardcoded steps here.
- Visit the google sheet below
- Open the **Extentions** tab and find the **GAS UP** option
- Select: **Get static JSON** and **gsheet.js**
- Now just replace the `js/gsheet.js` file with your new file, that's it!

NOTE: this step may not be required if you've set the data to come directly from the Google Sheet! Or you are targeting the `gsheet` by default!

### GAS Up Google Sheet
Link: https://docs.google.com/spreadsheets/d/1h7AQcnPrSPL9kwPwcBwkRRHB_VIdJ-NszRY1eYJHf24/edit#gid=780153928

### Google Cloud Storage Bucket
Link: https://console.cloud.google.com/storage/browser/tobob_earth;tab=objects?project=cloud-storage-314216&prefix=&forceOnObjectsSortingFiltering=false
