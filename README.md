# mystic-notify

# How to use
## Client Side
```lua
exports['mystic-notify']:SendAlert('This is a test notification', 'info')
```

## Server Side
Send to everyone
```lua
TriggerClientEvent('mystic:notify', -1, 'This is a test notification', 'info')
```
Send to source
```lua
TriggerClientEvent('mystic:notify', source, 'This is a test notification', 'info')
```

## Screenshots
Info \
![Info](https://cdn.izmystic.gay/images/3l40vd8h.png) \
With Caption \
![Info](https://cdn.izmystic.gay/images/ax0a80qd.png)


Error \
![Error](https://cdn.izmystic.gay/images/jam0brfu.png) \
With Caption \
![Error](https://cdn.izmystic.gay/images/qht0w9gl.png)

Success \
![Success](https://cdn.izmystic.gay/images/f93ge73y.png)  \
With Caption \
![Success](https://cdn.izmystic.gay/images/aq32i4i6.png)

Warn \
![Warn](https://cdn.izmystic.gay/images/ogufepam.png)  \
With Caption \
![Warn](https://cdn.izmystic.gay/images/oeceku2g.png)
