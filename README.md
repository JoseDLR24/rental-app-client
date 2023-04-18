# Getting Started with our Rental Data Scraper

This project was built to allow CCSI to collect data reliably and faster from their desired rental websites, to allow them to create an accurate report on the housing status of simcoe county. Currently, we extract the data from three sources: Shoreline Property Management, AG secure Property management and Listanza.

## How to use:

Go to https://rentalapp-6cca3.web.app/ and access the website.
Click on "Scraper"
On the bottom left part, click the button "Run App"
Wait until the data is fetched and displayed on the table.

## Using the filter

For advanced filters, just select one of the buttons on the top part of the table and choose a value to filter the data. 
The first button allows you to filter data by the month it was fetched using our solution. So for instance, if you clicked the "Run App" button in january, you can select the filter value "January" to display the data that was gathered that month, even if the app was run multiple times that month.
The second button filters the values by one of the pre-determined locations.
The third button filters the data by the number of bedrooms listed on the AD.
The fourth button filters the data by 
The fifth button filter the data by a pre-determined price range listed on the AD.

To apply multiple filters, just select a value for the multiple buttons listed above.
When you are done selecting, click on the "Search" button on the top right to filter the data.

## Download Data

To Download the data displayed on the table with the currently used filter, just click the second button on the bottom, called "Download .xls". This will download the table into a .XLS file spreadsheet.

## Upload custom Data

To Upload custom data from other sources, first it is important to save it into a spreadsheet in .XLS format. Second, all data must be organized into unique cells following the patern: 

The first row must be the header of the columns. They must be on the following order: address, dateCollecter, municipality, HousingTypo, unitSize, qtyBathrooms, secondarySuite, typeSecondarySuite, monthCollected, utilitiesIncluded, possibleDuplicate, totalCost, postCode, landlordType, stability.

Data type per cell:

address: any string or "unclear" for no data

dateCollected: date in the mm/dd/yyyy format or "unclear" for no data

Housing Type: any string or "unclear" for no data

unitSize: 0 or any natural number

qtyBathroom: 0 or any natural number

secondarySuite: any string or "unclear" for no data

typeSecondarySuite: any string or "unclear" for no data

monthCollected: date in the mm/dd/yyyy format or "unclear" for no data

utilitiesIncluded: "yes" or "no"

possibleDuplicate: "yes", "no", or "unclear" for no data

totalCost: 0 or any positive number, with cents separated with a "."

postCode: 6 characters string with number and characters

landlordType: any string or "unclear" for no data

stability:  any string or "unclear" for no data
