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
![Info](https://cdn.izmystic.dev/images/1ozxmar6.png) \
With Caption \
![Info](https://cdn.izmystic.dev/images/raz3vd9b.png)


Error \
![Error](https://cdn.izmystic.dev/images/oyqerktq.png) \
With Caption \
![Error](http://cdn.izmystic.dev/images/v8lwfxap.png)

Success \
![Success](https://cdn.izmystic.dev/images/rgf02mpo.png)  \
With Caption \
![Success](https://cdn.izmystic.dev/images/cfqdl8y9.png)

Warn \
![Warn](https://cdn.izmystic.dev/images/33o18dfw.png)  \
With Caption \
![Warn](https://cdn.izmystic.dev/images/jehk5ita.png)

## Credits
Original notifications are taken from [qb-core](https://github.com/qbcore-framework/qb-core), I simply made them a standalone resource.
