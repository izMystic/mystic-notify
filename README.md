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
![Info](https://cdn.izmystic.gay/images/u6fnpurq.png)
![Error](https://cdn.izmystic.gay/images/htsq1qad.png)
![Success](https://cdn.izmystic.gay/images/y785g5fj.png)
![Warn](https://cdn.izmystic.gay/images/cb2ymc5s.png)


## Notice
I did not create these notifications, all credit goes to [QBCore](https://github.com/qbcore-framework)
I simply made it a standalone resource