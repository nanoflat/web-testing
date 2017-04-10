module.exports = {
	url: 'http://www.funda.nl/',
	sections: {
		searchComponent: {
			selector: 'FIXME',
			elements: {
				searchButton: {
					selector: 'FIXME'
				},
				recentSearch: {
					selector: 'FIXME',
					//locateStrategy: 'xpath'
				}
			},
			sections: {
				tabs: {
					selector: 'FIXME',
					elements: {
						buy: {
							selector: 'FIXME'
						},
						rent: {
							selector: 'FIXME'
						}
						//...
					}
				},
				searchField: {
					selector: '.search-block__location-filters',
					elements: {
						search: {
							selector: '.autocomplete'
						},
						distance: {
							selector: 'FIXME'
						}

					}
				},
				priceRange: {
					selector: 'FIXME',
					elements: {
						min: {
							selector: 'FIXME'
						},
						max: {
							selector: 'FIXME'
						}
					}
				}

			}
		}
	}
};