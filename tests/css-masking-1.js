export default {
	title: 'CSS Masking Module Level 1',
	links: {
		tr: 'css-masking-1',
		dev: 'css-masking-1',
		devtype: 'fxtf',
	},
	status: {
		stability: 'stable',
	},
	properties: {
		'clip-path': {
			links: {
				tr: '#the-clip-path',
				dev: '#the-clip-path',
			},
			tests: [
				"url('#clip')",
				'inset(50%)',
				'circle()',
				'ellipse()',
				'polygon(0 10px, 30px 0)',
				"path('M 20 20 H 80 V 30')",
				'circle() border-box',
				'border-box',
				'padding-box',
				'content-box',
				'margin-box',
				'fill-box',
				'stroke-box',
				'view-box',
				'none',
			],
		},
		'clip-rule': {
			links: {
				tr: '#the-clip-rule',
				dev: '#the-clip-rule',
			},
			tests: ['nonzero', 'evenodd'],
		},
		'mask-image': {
			links: {
				tr: '#the-mask-image',
				dev: '#the-mask-image',
			},
			tests: [
				'none',
				'linear-gradient(black 0%, transparent 100%)',
				'url(image.png)',
				'url(masks.svg#mask1)',
				'url(image.png), url(image2.png)',
			],
		},
		'mask-mode': {
			links: {
				tr: '#the-mask-mode',
				dev: '#the-mask-mode',
			},
			tests: ['alpha', 'luminance', 'match-source', 'alpha, match-source'],
		},
		'mask-repeat': {
			links: {
				tr: '#the-mask-repeat',
				dev: '#the-mask-repeat',
			},
			tests: [
				'repeat-x',
				'repeat-y',
				'repeat',
				'space',
				'round',
				'no-repeat',
				'repeat repeat',
				'space repeat',
				'round repeat',
				'no-repeat repeat',
				'repeat space',
				'space space',
				'round space',
				'no-repeat space',
				'repeat round',
				'space round',
				'round round',
				'no-repeat round',
				'repeat no-repeat',
				'space no-repeat',
				'round no-repeat',
				'no-repeat no-repeat',
				'repeat-x, repeat-y',
				'space no-repeat, no-repeat repeat, round',
			],
		},
		'mask-position': {
			links: {
				tr: '#the-mask-position',
				dev: '#the-mask-position',
			},
			tests: [
				'left',
				'center',
				'right',
				'top',
				'bottom',
				'left top',
				'left center',
				'center center',
				'right bottom',
				'left 50%',
				'bottom 10px right 20px',
				'left, top',
				'bottom 10px right 20px, left, center center',
			],
		},
		'mask-clip': {
			links: {
				tr: '#the-mask-clip',
				dev: '#the-mask-clip',
			},
			tests: [
				'border-box',
				'padding-box',
				'content-box',
				'fill-box',
				'stroke-box',
				'view-box',
				'no-clip',
				'padding-box, no-clip',
			],
		},
		'mask-origin': {
			links: {
				tr: '#the-mask-origin',
				dev: '#the-mask-origin',
			},
			tests: [
				'border-box',
				'padding-box',
				'content-box',
				'fill-box',
				'stroke-box',
				'view-box',
				'padding-box, content-box',
			],
		},
		'mask-size': {
			links: {
				tr: '#the-mask-size',
				dev: '#the-mask-size',
			},
			tests: [
				'auto',
				'10px',
				'cover',
				'contain',
				'10px',
				'50%',
				'10px auto',
				'auto 10%',
				'50em 50%',
				'6px, auto, contain',
				'10px auto, auto, contain, 50em 50%',
			],
		},
		'mask-composite': {
			links: {
				tr: '#the-mask-composite',
				dev: '#the-mask-composite',
			},
			tests: ['add', 'subtract', 'intersect', 'exclude'],
		},
		mask: {
			links: {
				tr: '#the-mask',
				dev: '#the-mask',
			},
			tests: [
				'top',
				'space',
				'url(image.png)',
				'url(image.png) luminance',
				'url(image.png) luminance top space',
				'url(masks.svg#star) left / 16px repeat-y, url(masks.svg#circle) right / 16px repeat-y',
			],
		},
		'mask-border-source': {
			links: {
				tr: '#the-mask-border-source',
				dev: '#the-mask-border-source',
			},
			tests: ['none', 'url(image.png)'],
		},
		'mask-border-slice': {
			links: {
				tr: '#the-mask-border-slice',
				dev: '#the-mask-border-slice',
			},
			tests: ['0 fill', '50% fill', '1.1 fill', '0 1 fill', '0 1 2 fill', '0 1 2 3 fill'],
		},
		'mask-border-width': {
			links: {
				tr: '#the-mask-border-width',
				dev: '#the-mask-border-width',
			},
			tests: ['auto', '10px', '50%', '1', '1.0', 'auto 1', 'auto 1 50%', 'auto 1 50% 1.1'],
		},
		'mask-border-outset': {
			links: {
				tr: '#the-mask-border-outset',
				dev: '#the-mask-border-outset',
			},
			tests: ['0', '1.1', '0 1', '0 1 2', '0 1 2 3'],
		},
		'mask-border-repeat': {
			links: {
				tr: '#the-mask-border-repeat',
				dev: '#the-mask-border-repeat',
			},
			tests: [
				'stretch',
				'repeat',
				'round',
				'space',
				'stretch stretch',
				'repeat stretch',
				'round stretch',
				'space stretch',
				'stretch repeat',
				'repeat repeat',
				'round repeat',
				'space repeat',
				'stretch round',
				'repeat round',
				'round round',
				'space round',
				'stretch space',
				'repeat space',
				'round space',
				'space space',
			],
		},
		'mask-border': {
			links: {
				tr: '#the-mask-border',
				dev: '#the-mask-border',
			},
			tests: [
				'url(image.png)',
				'url(image.png) 10px',
				'url(image.png) space',
				'url(image.png) 1 fill',
				'url(image.png) 1 fill 10px',
				'url(image.png) 1 fill 10px',
				'url(image.png) 1 fill 10px 2',
			],
		},
		'mask-type': {
			links: {
				tr: '#the-mask-type',
				dev: '#the-mask-type',
			},
			tests: ['luminance', 'alpha'],
		},
	},
};
