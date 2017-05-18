const Child = require('./Child.html')
const Parent = require('./Parent.html')
const StateRouter = require('abstract-state-router')
const makeSvelteStateRenderer = require('svelte-state-renderer')


const stateRouter = StateRouter(makeSvelteStateRenderer(), document.querySelector('#target'))

stateRouter.addState({
	name: 'parent',
	defaultChild: 'child',
	route: '/parent/:someId',
	template: Parent,
	resolve: (data, params) => Promise.resolve({ someId: parseInt(params.someId, 10) })
})

stateRouter.addState({
	name: 'parent.child',
	route: '/child',
	template: Child
})

stateRouter.evaluateCurrentRoute('parent.child', { someId: 13 })
