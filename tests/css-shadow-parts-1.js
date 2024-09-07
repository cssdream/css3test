export default {
	title: 'CSS Shadow Parts',
	links: {
		tr: 'css-shadow-parts-1',
		dev: 'css-shadow-parts-1',
	},
	status: {
		stability: 'experimental',
	},
	selectors: {
		'::part()': {
			links: {
				tr: '#part',
				dev: '#part',
			},
			tests: [
				'::part(label)',
				'::part(mypart):active',
				'::part(mypart):any-link',
				'::part(mypart):autofill',
				'::part(mypart):checked',
				'::part(mypart):closed',
				'::part(mypart):default',
				'::part(mypart):defined',
				'::part(mypart):dir(ltr)',
				'::part(mypart):disabled',
				'::part(mypart):enabled',
				'::part(mypart):focus',
				'::part(mypart):focus-visible',
				'::part(mypart):focus-within',
				'::part(mypart):fullscreen',
				'::part(mypart):future',
				'::part(mypart):hover',
				'::part(mypart):indeterminate',
				'::part(mypart):in-range',
				'::part(mypart):invalid',
				'::part(mypart):lang(en)',
				'::part(mypart):link',
				'::part(mypart):modal',
				'::part(mypart):open',
				'::part(mypart):optional',
				'::part(mypart):out-of-range',
				'::part(mypart):past',
				'::part(mypart):paused',
				'::part(mypart):picture-in-picture',
				'::part(mypart):placeholder-shown',
				'::part(mypart):playing',
				'::part(mypart):popover-open',
				'::part(mypart):read-only',
				'::part(mypart):read-write',
				'::part(mypart):required',
				'::part(mypart):state(mystate)',
				'::part(mypart):target',
				'::part(mypart):user-invalid',
				'::part(mypart):user-valid',
				'::part(mypart):valid',
				'::part(mypart):visited',
				'::part(mypart):xr-overlay',

				'::part(mypart):target-within',
				'::part(mypart):local-link',
				'::part(mypart):seeking',
				'::part(mypart):buffering',
				'::part(mypart):stalled',
				'::part(mypart):muted',
				'::part(mypart):volume-locked',

				// Spec: https://drafts.csswg.org/css-view-transitions-2/#pseudo-classes-for-selective-vt
				'::part(mypart):active-view-transition',
				'::part(mypart):active-view-transition-type(mytype)',

				// TODO: add pseudo-elements after ::part()
			],
		},
	},
	interfaces: {
		Element: {
			links: {
				tr: '#idl',
				dev: '#idl',
				mdnGroup: 'DOM',
			},
			tests: ['part'],
			interface: function() {
				return document.body;
			},
		},
	},
};
