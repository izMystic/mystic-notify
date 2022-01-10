# mystic-notify

##  How to use

### Client Side
```lua
exports['mystic-notify']:SendAlert('This is a test notification', 'info')
```
#### With Caption
```lua
exports['mystic-notify']:SendAlert({text = 'This is a test notification', caption = 'With a caption'}, 'info')
```

### Server Side
#### Send to everyone
```lua
TriggerClientEvent('mystic:notify', -1, 'This is a test notification', 'info')
```
With Caption
```lua
TriggerClientEvent('mystic:notify', -1, {text = 'This is a test notification', caption = 'With a caption'}, 'info')
```
#### Send to source
```lua
TriggerClientEvent('mystic:notify', source, 'This is a test notification', 'info')
```
With Caption
```lua
TriggerClientEvent('mystic:notify', source, {text = 'This is a test notification', caption = 'With a caption'}, 'info')
```

## Screenshots
Info \
![Info](https://cdn.izmystic.dev/images/3l40vd8h.png) \
With Caption \
![Info](https://cdn.izmystic.dev/images/ax0a80qd.png)


Error \
![Error](https://cdn.izmystic.dev/images/jam0brfu.png) \
With Caption \
![Error](https://cdn.izmystic.dev/images/qht0w9gl.png)

Success \
![Success](https://cdn.izmystic.dev/images/f93ge73y.png)  \
With Caption \
![Success](https://cdn.izmystic.dev/images/aq32i4i6.png)

Warn \
![Warn](https://cdn.izmystic.dev/images/ogufepam.png)  \
With Caption \
![Warn](https://cdn.izmystic.dev/images/oeceku2g.png)
