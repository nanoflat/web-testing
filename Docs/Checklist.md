# Checklist for website

*Notes*: Checklist for not registered, not logged-in user, using Crome browser on desktop(Mac). Checking mostly functionality of Koop tab

## High level checks
Element is present
- Content is present
     - All elements are present:
        1. Tabs at top 
            - Koop Is selected by default
        2. Search block 
            1. Search field with placeholder 
            2. Range drop-done with default range
            3. Price dropdown
                - Min
                - Max
                - *Question*: what is that `<input id="SoortAanbod" name="SoortAanbod" type="hidden" value="koop”>` 
            4. Search button 
     - Localization (other languages, English)

## Elements: 
### Search button
1. Works without anything filled -> Search Results page opens for whole NL
2. *Suggestion*: if you can show fastly N of results (f.e. in Search button) that your search will return - you can help user to filter faster.

### Search field:
1. Default values
2. You can search for city (if you fill and click search - results are shown)
3. Autocomplete (search suggestions)
    - Intereresting API, not really protected http://zb.funda.info/frontend/geo/suggest/?query=%7Bamsterdam%7D&max=7&type=koop
    1. Content (if you search for Amsterdam - if will be first result)
        1. City
        2. Region (IJburg)
        3. PostCode
        4. Address: 
            - *suggestion*: now search result show 0 properties(houses), what can be done is to show auto extended list (+1km f.e)http://www.funda.nl/koop/amsterdam/straat-piet-heinkade/. This is really easy win for conversion
    2. N of properties in recommendations (dynamics content, need to read from DBs, complicates tests, unknown ROI)
    3. X button clears selection
    4. Placeholder is shown when empty
    - Negative tests:
        1. Leave empty and simulate pressing enter(whole country search *suggestion - use user location and show nearby*) 
        2. Misspelled (should suggest most similar location)
        3. Long value - *bug* http://www.funda.nl/koop/zoeksuggestie/laatste%20zoekopdracht%3alaatste%20zoekopdracht%3alaatste%20zoekopdracht%3alaatste%20zoekopdracht%3alaatste%20zoekopdracht%3alaatste%20zoekopdracht%3alaatste%20zoekopdracht%3alaatste%20zoekopdracht%3alaatste%20zoekopdracht%3alaatste%20zoekopdracht%3alaatste%20zoekopdracht%3alaatste%20zoekopdracht%3alaatste%20zoekopdracht%3alaatste%20zoekolaatste%20zoekopdracht%3apdracht%3a/
        4. Not latin values (super minor check)

### Distance drop-down
1. Default value (0)
2. Content on click(defined range)
          In this particular case, drop-down might be not needed or confusing: 
        - Last selection is saved and marked with tick on drop-down list
        - Search range is reflected on Search Results

### PriceRangeFrom:
1. Default value(0)
2. Content: predefined list
    - Anders:
        - Up/down element
        - You can enter only numerical values
        - *Bug: after value 99.999 it doesn’t look nice as it cuts numbers our of visible area. Suggestion: autosize price to match visible area*

        - *Another suggestion: auto format number( so show to user 100.000 when he types, not 100000, and that format when he finishes typing)*
        - *Bug: Anders instead of value is shown when user goes back from Search Results, if user click search again(same terms) - valid SearchResults will be shown*

1- 
2- 


### PriceRangeTill:
1. Default value(no max)
2. Content: predefined list
3. Low price - value in red

### Tabs:
1. Huur:
    - Same as Koop + fast links in bottom (search for big cities)
    - Different ranges of prices
    - SR have specific elements to Huur tab(label huurwiningen etc)
2. Niewbou: 
    - Prices are missing
    - SR have specific elements to Huur tab(label newbouw etc)

3. Recreatie and Europa:
    - Old Search results (old but working!)
    
### Recent search(Laatste zoekopdracht)
It shold always be updated with latest results 

### Misc. tests:
1. Responsive UI (small UI, simulate user agent of mobile browser)
2. Security checks:
    - Injections (sql, xss)
    - Proxing with unexpected post params/headers. Cookies 

## Test Scenarios

### UBER Smoke test:
1. Open page, check that element is present and all content is loaded.
2. Click Search button and check results are displayed
3. Go back and check that last search is shown (Laatste zoekopdracht: Land Nederland)
4. Search for Amsterdam +5km from 200,000 till 250,000 (to use all elements)

### Smoke test:
1. Testing all elements
2. Checking all tabs
3. Positive tests

### Regression test:
1. Checking all tabs and all elements together, 
2. More assertions
3. Negative tests

*NOTES*: can be bit more tricky with PageObjects and tabs, as some elements will be missing, might create BaseObject and Tabs object who inherits from it
