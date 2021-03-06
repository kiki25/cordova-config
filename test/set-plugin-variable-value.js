import test from 'ava';
import Config from '../';

test('add plugin', t => {
	const config = new Config('fixtures/config.empty.xml');
	config.setPluginVariable('earth');

	t.is(config._root._children.length, 1);
	t.is(config._root._children[0].tag, 'plugin');
	t.is(config._root._children[0].attrib.name, 'earth');
});

test('add plugin with variable', t => {
	const config = new Config('fixtures/config.empty.xml');
	config.setPluginVariable('earth', 'id', '123');

	t.is(config._root._children.length, 1);
	t.is(config._root._children[0].tag, 'plugin');
	t.is(config._root._children[0].attrib.name, 'earth');
	t.is(config._root._children[0]._children.length, 1);
	t.is(config._root._children[0]._children[0].tag, 'variable');
	t.is(config._root._children[0]._children[0].attrib.name, 'id');
	t.is(config._root._children[0]._children[0].attrib.value, '123');
});
