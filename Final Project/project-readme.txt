This project was designed to do two things:
    -Act as a tracking and counting tool for macro-nutrients and foods
    -Act as a searching tool to look up nutritional data on foods

The project utilizes the client-side persistent storage API IndexedDb
Two object-stores are currently used to track the daily foods and the daily totals

The project utilizes the nutritional data API by Edamam to search for nutritional
information by the food name

*********Issues********

This version of the app did not use modules in an attempt to fix the issues with the 
nutritional API request.

Originally, having all javascript portions used within a single module caused unfixable
MIME type errors when rendered on the browser. Separating the database.js file fixed that
error but presented a new error that I was never able to fix.

Regardless of my approach the error code "crbug/1173575, non-JS module files deprecated."
was presented with the app completely breaking whenever the browser attempted to execute
the "fetch" statement. No amount of attempts or solutions found from searching the internet
was able to solve the problem. If any other javascript code other than the request was presented to
the page, the error was encountered. The controller.js script would not operate separately
with the other scripts or within a module, nor would it operate with any other localhost
server or server extension.

I have tested all other features as well as I could, so it should operate on most other
browsers.