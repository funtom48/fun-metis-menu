# fun-metis-menu

[metisMenu](https://github.com/onokumus/metisMenu) directive for AngularJS with config and events.

## Usage

### View
```html
<fun-metis-menu fun-metis-config="vars.metis.config" fun-metis-events="vars.metis.events" class="metismenu">
    <nav>
        <ul>
            <li>
                <a href="/test1"></a>
                <ul>
                    <li><a href="/subtest1"></a><li>
                    <li><a href="/subtest2"></a><li>
                    <li><a href="/subtest3"></a><li>
                </ul>
            </li>
            <li>
                <a href="/test2"></a>
                <ul>
                    <li><a href="/subtest1"></a><li>
                    <li><a href="/subtest2"></a><li>
                    <li><a href="/subtest3"></a><li>
                </ul>
            </li>
        </ul>
    </nav>
</fun-metis-menu>
```

### Controller
```js

//YOUR CONTROLER......
$scope.vars.metis = {
    config: {
        toggle: true,
    },
    events: [
        {
            type: 'hide.metisMenu',
            callback: ( event ) => console.log( "423523523", event )
        }
    ]
};
```
